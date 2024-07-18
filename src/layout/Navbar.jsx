import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/img/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const user = "";
  const photo = "";
  const count_length = 2;
  const location = useLocation();
  return (
    <>
      {!["/login", "/register"].includes(location.pathname) && (
        <nav className="navbar navbar-expand-lg fixed-top bg-light py-3">
          <div className="container">
            <NavLink to="/" className="navbar-brand" aria-current="page">
              <img src={logo} alt="logo1" />
            </NavLink>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon top-bar"></span>
              <span className="navbar-toggler-icon bottom-bar"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-3 ms-sm-auto mt-3 align-items-start align-items-sm-center">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" aria-current="page">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/shop" className="nav-link" aria-current="page">
                    Shop
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/blog" className="nav-link" aria-current="page">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link" aria-current="page">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact-us"
                    className="nav-link"
                    aria-current="page"
                  >
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/cart"
                    className="nav-link p-0 position-relative"
                    aria-current="page"
                  >
                    <FontAwesomeIcon className="" icon="fa fa-shopping-cart" />
                    <span
                      className={
                        count_length === 0 ? "d-none" : "d-inline-block"
                      }
                    >
                      {count_length}
                    </span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  {user === "" ? (
                    <NavLink
                      to="/login"
                      className="nav-link"
                      aria-current="page"
                    >
                      <button className="button_1 px-3" type="button">
                        <FontAwesomeIcon className="me-2" icon="fa fa-user" />
                        Login
                      </button>
                    </NavLink>
                  ) : (
                    <div className="dropdown">
                      <button
                        className="btn button_1 dropdown-toggle d-flex justify-content-between align-items-center"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <div className="d-inline">
                          {!photo ? (
                            <FontAwesomeIcon
                              className="me-2"
                              icon="fa fa-user"
                            />
                          ) : (
                            <img
                              className="userPhoto me-2"
                              src={photo}
                              alt="userPhoto"
                            />
                          )}
                        </div>
                        <p className="d-inline mb-0">{user}</p>
                      </button>
                      <ul
                        className="dropdown-menu p-0"
                        style={{ cursor: "pointer" }}
                      >
                        <li>
                          <NavLink className="dropdown-item" to="#">
                            Log Out
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
