import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const login = async () => {};

  const forgotPassword = async () => {};

  return (
    <section id="login">
      <div className="container">
        <NavLink to="/">
          <img src={require("../assets/img/logo3.png")} alt="logo" />
        </NavLink>
        <h1>Login</h1>
        <label for="email">E-Mail</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
        />
        {errors.email && <div className="error-msg">{errors.email}</div>}

        <label for="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {errors.password && <div className="error-msg">{errors.password}</div>}

        <NavLink
          onClick={forgotPassword}
          className={"input-errors text-end"}
          style={{ cursor: "pointer" }}
        >
          Forgot password
        </NavLink>
        <button onClick={login} type="button">
          Login
        </button>

        <button className="button_1">Login With Phone Number</button>

        <NavLink href="/signup" className="link">
          <h4>Sign Up</h4>
        </NavLink>
      </div>
    </section>
  );
}

export default Login;
