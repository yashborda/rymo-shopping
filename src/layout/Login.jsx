import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginForm = (data) => {
    console.log(data);
    // handle login logic here
  };

  const forgotPassword = () => {
    // handle forgot password logic here
  };

  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <section id="login">
      <div className="container">
        <NavLink to="/">
          <img src={require("../assets/img/logo3.png")} alt="logo" />
        </NavLink>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(loginForm)}>
          <label htmlFor="email">
            E-Mail <span className="input-errors d-inline">*</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
            placeholder="Email Address"
          />
          {errors.email && (
            <div className="input-errors">
              <div className="error-msg">{errors.email.message}</div>
            </div>
          )}

          <label htmlFor="password">
            Password <span className="input-errors d-inline">*</span>
          </label>
          <div className="input-password">
            <input
              type={passwordShown ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
              })}
              placeholder="Password"
            />
            {passwordShown ? (
              <FontAwesomeIcon
                onClick={() => setPasswordShown(false)}
                icon="fa fa-eye"
              />
            ) : (
              <FontAwesomeIcon
                onClick={() => setPasswordShown(true)}
                icon="fa fa-eye-slash"
              />
            )}
          </div>
          {errors.password && (
            <div className="input-errors">
              <div className="error-msg">{errors.password.message}</div>
            </div>
          )}

          <NavLink
            onClick={forgotPassword}
            className={"input-errors text-end"}
            style={{ cursor: "pointer" }}
          >
            Forgot password
          </NavLink>
          <button type="submit">Login</button>
        </form>

        <button className="button_1">Login With Phone Number</button>

        <NavLink to="/signup" className="link">
          <h4>Sign Up</h4>
        </NavLink>
      </div>
    </section>
  );
}

export default Login;
