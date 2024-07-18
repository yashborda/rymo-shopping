import React from "react";
import { NavLink } from "react-router-dom";
import ProductSection from "./ProductSection";
import brand1 from "../assets/img/brand/1.png";
import brand2 from "../assets/img/brand/2.png";
import brand3 from "../assets/img/brand/3.png";
import brand4 from "../assets/img/brand/4.png";
import brand5 from "../assets/img/brand/5.png";
import brand6 from "../assets/img/brand/6.png";

const cardData = [
  {
    title: "Extreme Rare Sneakers",
    button: "Shop Now",
    image: 1,
  },
  {
    title: "Awesome Blank Outfit",
    button: "Shop Now",
    image: 5,
  },
  {
    title: "Wristwatches Up To 50% Off",
    button: "Shop Now",
    image: 3,
  },
];

const OneCard = ({ cardData }) => {
  return (
    <>
      {cardData.map((data) => (
        <div className="one col-lg-4 p-0" key={data.title}>
          <img
            className="img-fluid"
            src={require(`../assets/img/new/${data.image}.jpg`)}
            alt={data.image}
          />
          <div className="details">
            <h2>{data.title}</h2>
            <NavLink className="btn-2" to="/shop">
              {data.button}
            </NavLink>
          </div>
        </div>
      ))}
    </>
  );
};

const Home = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

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
              key={index}
              className="img-fluid col-6 col-md-4 col-lg-2"
              src={brand}
              alt={`brand.${index}`}
            />
          ))}
        </div>
      </section>

      <section id="new" className="container">
        <div className="row">{<OneCard cardData={cardData} />}</div>
      </section>

      <ProductSection
        category="featured"
        sectionId="featured"
        title="Our Featured"
        description="Here you can check out our new products with fair price on rymo."
      />

      <section id="banner" className="my-5 py-5">
        <div className="container">
          <h4>MID SEASON'S SALE</h4>
          <h1 className="pb-sm-3 pb-md-5">
            Autumn collection <br /> UP TO 20% OFF
          </h1>
          <NavLink
            to="/shop"
            className="btn-4 text-decoration-none"
            aria-current="page"
          >
            Shop Now
          </NavLink>
        </div>
      </section>

      <ProductSection
        category="watch"
        sectionId="clothes"
        title="Best Men's Watches"
        description="Here you will find the best men's watches at a fair price."
      />

      <ProductSection
        category="shoes"
        sectionId="clothes"
        title="Men's Shoes"
        description="Here at Rymo you will find men's shoes of various types at a fair price."
      />
    </>
  );
};

export default Home;
