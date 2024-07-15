import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container">
      <Link to="/" className="nav-link " aria-current="page">
        Shoping - Cart
      </Link>
      <br />
      <h1>404 Error 😔</h1>
    </div>
  );
};

export default Error;