import React, { useState } from "react";
import Product from "./Product";
import data from "../database/data";
import Footer from "../layout/Footer";
import { NavLink } from "react-router-dom";
import brand1 from "../assets/img/brand/1.png";
import brand2 from "../assets/img/brand/2.png";
import brand3 from "../assets/img/brand/3.png";
import brand4 from "../assets/img/brand/4.png";
import brand5 from "../assets/img/brand/5.png";
import brand6 from "../assets/img/brand/6.png";
import new1 from "../assets/img/new/1.jpg";
import new2 from "../assets/img/new/5.jpg";
import new3 from "../assets/img/new/3.jpg";
// import featured1 from "../assets/img/featured/1.jpg";
// import featured2 from "../assets/img/featured/2.jpg";

const Home = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6];
  const [productList, setProductList] = useState(data.filter((product) => product.category === "featured"));

  return (
    <>
      <section id="home">
        <div className="container">
          <h5>NEW ARRIVALS</h5>
          <h1>
            <span>Best Price</span>This Year
          </h1>
          <p className="pb-sm-3 pb-md-5">
            Lorem ipsum dolor sit amet consectetur adipisicing
            <br /> elit. Magnam minus totam
          </p>
          <NavLink to="/shop" className="btn-1 text-decoration-none">
            Shop Now
          </NavLink>
        </div>
      </section>

      <section id="brand" className="container">
        <div className="row m-0 py-5">
          {brands.map((brand, index) => (
            <img
              className="img-fluid col-6 col-md-4 col-lg-2"
              src={brand}
              alt={`brand.${index}`}
            />
          ))}
        </div>
      </section>

      <section id="new" className="container">
        <div className="row">
          <div className="one col-lg-4 p-0">
            <img className="img-fluid" src={new1} alt="new1" />
            <div className="details">
              <h2>Product Name Title</h2>
              <button className="btn-2">shop now</button>
            </div>
          </div>
          <div className="one col-lg-4 p-0">
            <img className="img-fluid" src={new2} alt="new2" />
            <div className="details">
              <h2>Product Name Title</h2>
              <button className="btn-2">shop now</button>
            </div>
          </div>
          <div className="one col-lg-4 p-0">
            <img className="img-fluid" src={new3} alt="new3" />
            <div className="details">
              <h2>Product Name Title</h2>
              <button className="btn-2">shop now</button>
            </div>
          </div>
        </div>
      </section>

      <section id="featured">
        <div className="container text-center mt-5 pt-5">
          <h3>Our Featured</h3>
          <hr />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="row mx-auto content-fluid">
            {
              <Product
                cardClass="col-lg-3 col-md-6"
                productList={productList}
              />
            }
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
