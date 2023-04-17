"use client";
import { useQuery, useMutation, gql } from "@apollo/client";
import "./login.css";
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
  mutation {
    login(loginUserRequest: { email: "hjy4649@naver.com", password: "1234" }) {
      userId
      jwtToken
    }
  }
`;

export default function Login() {
  const [mutateFunction, { data, loading, error }] = useMutation(login);
  console.log(data);
  if (loading)
    return (
      <>
        <p>Loading...</p>
      </>
    );
  if (error)
    return (
      <>
        <p>Error : {error.message}</p>
      </>
    );

  return (
    <div className="login">
      <div className="login-bg">
        <form className="login-form" action="/api/login/login" method="POST">
          <h2>로그인</h2>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />

          <label htmlFor="pw">패스워드</label>
          <input type="pw" id="pw" name="pw" />

          <button className="login-btn" type="submit">
            로그인
          </button>
        </form>
        <form className="register-form">
          <h2>회원가입</h2>

          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />

          <label htmlFor="pw">패스워드</label>
          <input type="pw" id="pw" name="pw" />

          <label htmlFor="pw">이름</label>
          <input type="text" id="name" name="name" />

          <button className="register-btn" type="submit">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}
