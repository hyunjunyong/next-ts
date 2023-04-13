import "./login.css";

export default function Login() {
  return (
    <div className="login-form">
      <div className="login-bg">
        <form>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />

          <label htmlFor="pw">패스워드</label>
          <input type="pw" id="pw" name="pw" />

          <button className="login-btn">로그인</button>
        </form>
      </div>
    </div>
  );
}
