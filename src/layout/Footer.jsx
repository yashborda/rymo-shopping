import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo2 from "../assets/img/logo2.png";
import payment from "../assets/img/payment.png";
import insta1 from "../assets/img/insta/1.jpg";
import insta2 from "../assets/img/insta/2.jpg";
import insta3 from "../assets/img/insta/3.jpg";
import insta4 from "../assets/img/insta/4.jpg";
import insta5 from "../assets/img/insta/5.jpg";
import insta6 from "../assets/img/insta/6.jpg";
const Footer = () => {
  return (
    <>
      <footer className="mt-5 py-5 ">
        <div className="row container mx-auto pt-5 p-0">
          <div className="footer-col col-lg-3 col-md-6">
            <Link to="#">
              <img src={logo2} alt="logo2" />
            </Link>
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
                <Link to="#featured">man</Link>
              </li>
              <li>
                <Link to="#cloths">woman</Link>
              </li>
              <li>
                <Link to="#">boys</Link>
              </li>
              <li>
                <Link to="#">girls</Link>
              </li>
              <li>
                <Link to="#new">new arraivals</Link>
              </li>
              <li>
                <Link to="#featured">shoes</Link>
              </li>
              <li>
                <Link to="#">cloths</Link>
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
              <Link to="tel:+917048432374">+91 70484 32374</Link>
            </div>
            <div>
              <h6 className="text-uppercase mt-2">Email</h6>
              <Link to="mailto:yashborda123@gmail.com">
                yashborda123@gmail.com
              </Link>
            </div>
          </div>
          <div className="footer-col col-lg-3 col-md-6">
            <h5 className="pb-2">Instagram</h5>
            <div className="row insta-img">
              <Link to="#" className="w-25 h-100">
                <img className="img-fluid mb-3" src={insta1} alt="insta1" />
              </Link>
              <Link to="#" className="w-25 h-100">
                <img className="img-fluid mb-3" src={insta2} alt="insta2" />
              </Link>
              <Link to="#" className="w-25 h-100">
                <img className="img-fluid mb-3" src={insta3} alt="insta3" />
              </Link>
              <Link to="#" className="w-25 h-100">
                <img className="img-fluid mb-3" src={insta4} alt="insta4" />
              </Link>
              <Link to="#" className="w-25 h-100">
                <img className="img-fluid mb-3" src={insta5} alt="insta5" />
              </Link>
              <Link to="#" className="w-25 h-100">
                <img className="img-fluid mb-3" src={insta6} alt="insta6" />
              </Link>
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
                Copyright © 2022{" "}
                <Link
                  className="text-white"
                  target="_blank"
                  to="https://webdev531.000webhostapp.com/"
                >
                  YASH BORDA
                </Link>
                . Vue JS Developer.
              </p>
            </div>
            <div className="col-md-6 col-lg-4 text-lg-center copyright">
              <Link to="https://www.linkedin.com/in/yash-borda-8abb9124b/">
                <FontAwesomeIcon icon={["fab", "fa-linkedin"]} />
              </Link>
              <Link to="https://github.com/yashborda7048">
                <FontAwesomeIcon icon={["fab", "fa-github"]} />
              </Link>
              <Link to="mailto:yashborda123@gmail.com">
                <FontAwesomeIcon icon="fa fa-envelope" />
              </Link>
              <Link to="https://wa.me/7048432374">
                <FontAwesomeIcon icon={["fab", "fa-whatsapp"]} />
              </Link>
              <Link to="https://www.facebook.com/yash.borda/">
                <FontAwesomeIcon icon={["fab", "fa-facebook"]} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
