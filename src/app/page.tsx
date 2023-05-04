import Login from "./login";
import Register from "./register";
import Link from "next/link";
import "./login.css";
export default function main() {
  return (
    <div className="login">
      <div className="login-bg">
        <Login></Login>
        <Register></Register>
      </div>
      <Link href="/main">일단 메인</Link>
    </div>
  );
}
