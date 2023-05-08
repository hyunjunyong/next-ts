"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const loginData = {
    email: email,
    pw: pw,
  };

  const LoginForm = (e: { preventDefault: () => void }) => {
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

  return (
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
  );
}
