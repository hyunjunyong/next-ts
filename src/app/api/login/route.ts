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
  // console.log(request);
  const req = await request.json();
  console.log(req);
  // const email = req.get("email");
  // const pw = req.get("pw");
  const email = req.email;
  const pw = req.pw;

  try {
    const { data } = await client.mutate<login>({
      mutation: login,
      variables: { email: `${email}`, password: `${pw}` },
    });
    const res = JSON.stringify(data);
    console.log(res);
    return await NextResponse.json(`로그인에 성공하였습니다.`);
  } catch (error: unknown) {
    if (error instanceof ApolloError) {
      const { message } = error;
      return await NextResponse.json(message);
    }
  }
}
