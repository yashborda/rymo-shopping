import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="container error-box">
      <NavLink to="/" className="nav-link " aria-current="page">
        Shoping - Cart
      </NavLink>
      <br />
      <h1>404 Error 😔</h1>
    </div>
  );
};

export default Error;