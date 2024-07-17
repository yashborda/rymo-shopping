import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import logo2 from "../assets/img/logo2.png";
import payment from "../assets/img/payment.png";
const Footer = () => {
  return (
    <>
      <footer className="mt-5 py-5 ">
        <div className="row container mx-auto pt-5 p-0">
          <div className="footer-col col-lg-3 col-md-6">
            <NavLink to="#">
              <img src={logo2} alt="logo2" />
            </NavLink>
            <p className="pt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              quas eum laborum sequi, facilis ullam consequuntur iusto dicta
              culpa nobis
            </p>
          </div>
          <div className="footer-col col-lg-3 col-md-6">
            <h5 className="pb-2">Featured</h5>
            <ul className="text-uppercase ">
              <li>
                <NavLink to="#featured">man</NavLink>
              </li>
              <li>
                <NavLink to="#cloths">woman</NavLink>
              </li>
              <li>
                <NavLink to="#">boys</NavLink>
              </li>
              <li>
                <NavLink to="#">girls</NavLink>
              </li>
              <li>
                <NavLink to="#new">new arrivals</NavLink>
              </li>
              <li>
                <NavLink to="#featured">shoes</NavLink>
              </li>
              <li>
                <NavLink to="#">cloths</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-col col-lg-3 col-md-6">
            <h5 className="pb-2">Contact Us</h5>
            <div>
              <h6 className="text-uppercase mt-2">Address</h6>
              <p>Suart, Gujarat, India</p>
            </div>
            <div>
              <h6 className="text-uppercase mt-2">Phone</h6>
              <NavLink to="tel:+917048432374">+91 70484 32374</NavLink>
            </div>
            <div>
              <h6 className="text-uppercase mt-2">Email</h6>
              <NavLink to="mailto:yashborda123@gmail.com">
                yashborda123@gmail.com
              </NavLink>
            </div>
          </div>
          <div className="footer-col col-lg-3 col-md-6">
            <h5 className="pb-2">Instagram</h5>
            <div className="row insta-img">
              <NavLink to="#" className="w-25 h-100">
                <img className="img-fluid mb-3" src={require(`../assets/img/insta/1.jpg`)} alt="insta1" />
              </NavLink>
              <NavLink to="#" className="w-25 h-100">
                <img className="img-fluid mb-3" src={require(`../assets/img/insta/2.jpg`)} alt="insta2" />
              </NavLink>
              <NavLink to="#" className="w-25 h-100">
                <img className="img-fluid mb-3" src={require(`../assets/img/insta/3.jpg`)} alt="insta3" />
              </NavLink>
              <NavLink to="#" className="w-25 h-100">
                <img className="img-fluid mb-3" src={require(`../assets/img/insta/4.jpg`)} alt="insta4" />
              </NavLink>
              <NavLink to="#" className="w-25 h-100">
                <img className="img-fluid mb-3" src={require(`../assets/img/insta/5.jpg`)} alt="insta5" />
              </NavLink>
              <NavLink to="#" className="w-25 h-100">
                <img className="img-fluid mb-3" src={require(`../assets/img/insta/6.jpg`)} alt="insta6" />
              </NavLink>
            </div>
          </div>
        </div>

        <div className=" mt-5">
          <div className="row container g-3 mx-auto">
            <div className="col-md-6 col-lg-4">
              <img src={payment} alt="payment" />
            </div>
            <div className="col-md-6 col-lg-4 ">
              <p>
                Copyright © 2024{" "}
                <NavLink
                  className="text-white"
                  target="_blank"
                  to="https://webdev531.000webhostapp.com/"
                >
                  YASH BORDA
                </NavLink>
                . React Developer.
              </p>
            </div>
            <div className="col-md-6 col-lg-4 text-lg-center copyright">
              <NavLink to="https://www.linkedin.com/in/yash-borda/">
                <FontAwesomeIcon icon={["fab", "fa-linkedin"]} />
              </NavLink>
              <NavLink to="https://github.com/yashborda7048">
                <FontAwesomeIcon icon={["fab", "fa-github"]} />
              </NavLink>
              <NavLink to="mailto:yashborda123@gmail.com">
                <FontAwesomeIcon icon="fa fa-envelope" />
              </NavLink>
              <NavLink to="https://wa.me/7048432374">
                <FontAwesomeIcon icon={["fab", "fa-whatsapp"]} />
              </NavLink>
              <NavLink to="https://www.facebook.com/yash.borda/">
                <FontAwesomeIcon icon={["fab", "fa-facebook"]} />
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
