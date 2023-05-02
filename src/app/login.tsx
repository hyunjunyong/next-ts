"use client";

import { useRouter } from "next/navigation";
import "./login.css";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");
  const [newPw, setNewPw] = useState<string>("");
  const [newName, setNewName] = useState<string>("");
  const loginData = {
    email: email,
    pw: pw,
  };
  const registerData = {
    email: newEmail,
    pw: newPw,
    name: newName,
  };
  const LoginForm = (e) => {
    e.preventDefault();
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(loginData),
    })
      .then((res) => {
        console.log(res);
        router.push("/main");
      })
      .catch((err) => alert(err));
  };

  const registerForm = (e) => {
    e.preventDefault();
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(registerData),
    })
      .then((res) => {
        console.log(res);
        alert("회원가입이 완료되었습니다. 로그인을 해주세요");
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="login">
      <div className="login-bg">
        <form className="login-form" onSubmit={LoginForm}>
          <h2>로그인</h2>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="pw">패스워드</label>
          <input
            type="password"
            name="pw"
            placeholder="비밀번호를 입력해주세요"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />

          <button className="login-btn" type="submit">
            로그인
          </button>
        </form>
        <form className="register-form" onSubmit={registerForm}>
          <h2>회원가입</h2>

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="이메일을 입력해주세요"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />

          <label htmlFor="pw">패스워드</label>
          <input
            type="password"
            name="pw"
            placeholder="비밀번호를 입력해주세요"
            value={newPw}
            onChange={(e) => setNewPw(e.target.value)}
          />

          <label htmlFor="name">이름</label>
          <input
            type="text"
            name="name"
            placeholder="비밀번호를 입력해주세요"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />

          <button className="register-btn" type="submit">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}
