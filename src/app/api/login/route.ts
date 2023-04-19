import { getClient } from "@/app/util/apollo";
import { gql, ApolloError } from "@apollo/client";
import { NextResponse, NextRequest } from "next/server";
import { redirect } from "next/navigation";

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
interface mutateError extends Error {
  message: string;
}
const login = gql`
  mutation Login($email: String!, $password: String!) {
    login(loginUserRequest: { email: $email, password: $password }) {
      userId
      jwtToken
    }
  }
`;
export async function POST(request: Request) {
  const req = await request.formData();
  const email = req.get("email");
  const pw = req.get("pw");

  const client = getClient();
  try {
    const { data } = await client.mutate<login>({
      mutation: login,
      variables: { email: `${email}`, password: `${pw}` },
    });

    const res = JSON.stringify(data);
    console.log(res);
    return redirect("/main");
    // return NextResponse.json(res);
  } catch (error: unknown) {
    if (error instanceof ApolloError) {
      const { message } = error;
      // const { graphQLErrors } = error;
      // const { message } = graphQLErrors[0].extensions;
      return NextResponse.json(message);
    } else return redirect("/");
  }
}
