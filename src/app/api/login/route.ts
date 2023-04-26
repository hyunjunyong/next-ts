import { getClient } from "@/app/util/apollo";
import { gql, ApolloError } from "@apollo/client";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  interface login {
    userId: string;
    jwtToken: string;
  }
  const client = getClient();
  const loginMutation = gql`
    mutation Login($email: String!, $password: String!) {
      login(loginUserRequest: { email: $email, password: $password }) {
        userId
        jwtToken
      }
    }
  `;
  const { email, pw } = await request.json();
  try {
    const { data } = await client.mutate<login>({
      mutation: loginMutation,
      variables: { email, password: pw },
    });

    const res = JSON.stringify(data);
    // const hash = await bcrypt.hash(res.)
    console.log(res);

    return await NextResponse.json(`로그인에 성공하였습니다.`);
  } catch (error: unknown) {
    console.log(error);
    if (error instanceof ApolloError) {
      const { message } = error;
      // console.log(message);
      return await NextResponse.json(message);
    }
  }
}
