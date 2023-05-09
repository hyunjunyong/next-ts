"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { getClient } from "@/app/util/apollo";
import { useMutation, ApolloError } from "@apollo/client";
import { loginMutation } from "@/app/util/query";

export default function Login() {
  const client = getClient();
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [login, { data, error }] = useMutation(loginMutation, { client });
  const LoginForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const { data } = await login({
        variables: {
          email,
          password: pw,
        },
      });

      console.log("login success!", data);
      router.push('/main')
    } catch (error) {
      if (error instanceof ApolloError) {
        const { message } = error;
        alert(message);
      }
    }
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
