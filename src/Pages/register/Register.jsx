import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useState } from "react";

function Register() {
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setuserName] = useState("");

  function handleRegister() {
    const data = { email, password, userName };

    localStorage.setItem("uaser-info", data);
    console.log(data);
    navigate("/");
  }
  return (
    <div className="register">
      <span className="registerTitle">Register</span>

      <form
        className="registerForm"
        onSubmit={() => {
          handleRegister();
        }}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton">Register</button>
      </form>
      <Link to="/login">
        <button className="registerLoginButton">Login</button>
      </Link>
    </div>
  );
}
export default Register;
