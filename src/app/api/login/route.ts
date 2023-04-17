import { getClient } from "@/app/util/apollo";
import { gql } from "@apollo/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
type UserType = "ADMIN" | "GUEST";
// 사용해야할 쿼리
// mutation{
//   signup(createUserRequest: {email: "hjy4649@naver.com"
//     password: "1234"
//     name: "test"
//     userType: "ADMIN"}){
//     id
//     email
//     name
//     userType
//   }
// }

interface signUp {
  id: Number;
  email: string;
  name: string;
  userType: UserType;
}
interface login {
  userId: string;
  jwtToken: string;
}

const login = gql`
  mutation Login($email: String!, $password: String!) {
    login(loginUserRequest: { email: $email, password: $password }) {
      userId
      jwtToken
    }
  }
`;

export async function GET(request: Request) {
  const client = getClient();
  const { data } = await client.mutate<login>({
    mutation: login,
    variables: { email: "hjy4649@naver.com", password: "1234" },
  });

  const res = JSON.stringify(data);
  console.log(res);
  // console.log(request);
  return NextResponse.redirect(new URL("/main", request.url));
}
