import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SignUp() {
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
    <section id="signup">
      <div className="container">
        <NavLink to="/">
          <img src={require("../assets/img/logo3.png")} alt="logo" />
        </NavLink>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(loginForm)}>
          <label htmlFor="userName">
            User Name <span className="input-errors d-inline">*</span>
          </label>
          <input
            type="text"
            {...register("userName", { required: "User Name is required" })}
            placeholder="User Name"
          />
          {errors.userName && (
            <div className="input-errors">
              <div className="error-msg">{errors.userName.message}</div>
            </div>
          )}

          <label htmlFor="email">
            E-Mail <span className="input-errors d-inline">*</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
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
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters.",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
                },
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
          <button type="submit">Sign Up</button>
        </form>


        <NavLink to="/login" className="link">
          <h4>Login</h4>
        </NavLink>
      </div>
    </section>
  );
}

export default SignUp;
