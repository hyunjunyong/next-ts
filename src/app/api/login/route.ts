import { getClient } from "@/app/util/apollo";
import { gql, ApolloError } from "@apollo/client";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

type UserType = "ADMIN" | "GUEST";
interface login {
  userId: string;
  jwtToken: string;
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

export async function POST(request: NextRequest) {
  const req = await request.formData();
  const email = req.get("email");
  const pw = req.get("pw");
  const requestUrl = request.nextUrl.clone().origin;

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
      alert(`message`);
      return await NextResponse.redirect(`${requestUrl}`);
    }
  }
}
