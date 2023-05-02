"use client";

import Login from "./login";
import Register from "./register";
import "./login.css";
export default function main() {
  return (
    <div className="login">
      <div className="login-bg">
        <Login></Login>
        <Register></Register>
      </div>
    </div>
  );
}
