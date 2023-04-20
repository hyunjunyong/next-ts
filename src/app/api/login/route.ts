import { getClient } from "@/app/util/apollo";
import { gql, ApolloError } from "@apollo/client";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
type UserType = "ADMIN" | "GUEST";
interface login {
  userId: string;
  jwtToken: string;
}
interface mutateError extends Error {
  message: string;
}
const client = getClient();
const login = gql`
  mutation Login($email: String!, $password: String!) {
    login(loginUserRequest: { email: $email, password: $password }) {
      userId
      jwtToken
    }
  }
`;

function getUser() {}
export async function POST(request: NextRequest) {
  const req = await request.formData();
  const email = req.get("email");
  const pw = req.get("pw");
  const requestUrl = request.nextUrl.clone().origin;

  let response = NextResponse.next();
  try {
    const { data } = await client.mutate<login>({
      mutation: login,
      variables: { email: `${email}`, password: `${pw}` },
    });
    const res = JSON.stringify(data);
    console.log(res);

    return await NextResponse.redirect(`${requestUrl}/main`);
  } catch (error: unknown) {
    if (error instanceof ApolloError) {
      const { message } = error;
      // cookie.set("error", message);
      console.log(response);
      response.cookies.set("error", message);
      console.log(response.cookies.get("error"));
      return await NextResponse.redirect(`${requestUrl}`);
      // return await NextResponse.redirect(`${errorAfterUrl}`);
    } else {
      return await NextResponse.redirect(`${requestUrl}`);
    }
  }
}
