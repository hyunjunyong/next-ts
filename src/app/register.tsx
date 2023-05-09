"use client";

import { useState } from "react";
import { getClient } from "@/app/util/apollo";
import { useMutation, ApolloError } from "@apollo/client";
import { signUpMutation } from "@/app/util/query";

export default function Login() {
  const client = getClient();
  const [newEmail, setNewEmail] = useState<string>("");
  const [newPw, setNewPw] = useState<string>("");
  const [newName, setNewName] = useState<string>("");

  const [register, { data, error }] = useMutation(signUpMutation, { client });

  const registerForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const { data } = await register({
        variables: {
          email: newEmail,
          password: newPw,
          name: newName,
        },
      });
      console.log(data);
      alert("회원가입이 완료되었습니다. 로그인을 해주세요");
    } catch (error) {
      if (error instanceof ApolloError) {
        const { message } = error;
        alert(message);
      }
    }
  };

  return (
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
  );
}
