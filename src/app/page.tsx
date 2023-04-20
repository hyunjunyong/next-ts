import "./login.css";
import LoginError from "./loginError";
import { NextResponse } from "next/server";
export default function Login() {
  let response = NextResponse.next();
  if (response.cookies.get("error")) {
    <LoginError message={response.cookies.get("error")} />;
  }

  return (
    <div className="login">
      <div className="login-bg">
        <form className="login-form" action="/api/login" method="POST">
          <h2>로그인</h2>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="이메일을 입력해주세요" />

          <label htmlFor="pw">패스워드</label>
          <input
            type="password"
            name="pw"
            placeholder="비밀번호를 입력해주세요"
          />

          <button className="login-btn" type="submit">
            로그인
          </button>
        </form>
        <form className="register-form" action="/api/register" method="POST">
          <h2>회원가입</h2>

          <label htmlFor="email">Email</label>
          <input type="text" name="email" />

          <label htmlFor="pw">패스워드</label>
          <input type="password" name="pw" />

          <label htmlFor="name">이름</label>
          <input type="text" name="name" />

          <button className="register-btn" type="submit">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}
