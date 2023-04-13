import { useNavigate } from "react-router-dom";
import "./login.css";
import { useEffect, useState } from "react";

function Login() {
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    const data = { email, password };
    localStorage.setItem("uaser-info", data);
    console.log(data);
    navigate("/");
  }
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/ ");
    }
  }, []);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form
        className="loginForm"
        onSubmit={() => {
          handleLogin();
        }}>
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password..."
        />
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>

      <button className="loginRegisterButton">Register</button>
    </div>
  );
}
export default Login;
