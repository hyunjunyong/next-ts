import Login from "./login";
import { getClient } from "@/app/util/apollo";

import { gql } from "@apollo/client";
type UserType = "ADMIN" | "GUEST";

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
  mutation Login {
    login(loginUserRequest: { email: "hjy4649@naver.com", password: "1234" }) {
      userId
      jwtToken
    }
  }
`;

export default async function Home() {
  const client = getClient();
  const { data } = await client.mutate<login>({ mutation: login });

  console.log(JSON.stringify(data));
  return <div>{JSON.stringify(data)}</div>;
  // return <Login />;
}
