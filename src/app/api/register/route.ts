import { getClient } from "@/app/util/apollo";
import { gql, ApolloError } from "@apollo/client";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
type UserType = "ADMIN" | "GUEST";
// 사용해야할 쿼리
interface signUp {
  id: Number;
  email: string;
  name: string;
  userType: UserType;
}
const signUpQuery = gql`
  mutation signUp($email: String!, $password: String!, $name: String!) {
    signup(
      createUserRequest: {
        email: $email
        password: $password
        name: $name
        userType: "GUEST"
      }
    ) {
      id
      email
      name
      userType
    }
  }
`;
interface mutateError extends Error {
  message: string;
}
const client = getClient();

export async function POST(request: NextRequest) {
  const req = await request.formData();
  const email = req.get("email");
  const pw = req.get("pw");
  const name = req.get("name");
  const requestUrl = request.nextUrl.clone().origin;

  let response = NextResponse.next();
  try {
    const { data } = await client.mutate<signUp>({
      mutation: signUpQuery,
      variables: { email: `${email}`, password: `${pw}`, name: `${name}` },
    });
    const res = JSON.stringify(data);
    console.log(res);

    return await NextResponse.redirect(`${requestUrl}`);
  } catch (error: unknown) {
    if (error instanceof ApolloError) {
      const { message } = error;

      console.log(message);
      return await NextResponse.redirect(`${requestUrl}`);
      // return await NextResponse.redirect(`${errorAfterUrl}`);
    } else {
      return await NextResponse.redirect(`${requestUrl}`);
    }
  }
}
