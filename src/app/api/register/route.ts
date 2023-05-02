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
  const { email, pw, name } = await request.json();

  try {
    const { data } = await client.mutate<signUp>({
      mutation: signUpQuery,
      variables: { email: `${email}`, password: `${pw}`, name: `${name}` },
    });
    const res = JSON.stringify(data);
    // const hash = await bcrypt.hash(res.)
    console.log(res);

    return await NextResponse.json(`회원가입에 성공하였습니다.`);
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof ApolloError) {
      const { message } = error;
      // console.log(message);
      return await NextResponse.json(message);
    }
  }
}
