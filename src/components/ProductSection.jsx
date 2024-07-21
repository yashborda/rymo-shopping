import React, { useState, useEffect } from "react";
import Product from "./Product";
import data from "../database/data";
import { fetchData } from "../firebase";

const ProductSection = ({ category, title, sectionId, description }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchData((fdata) => {
      if (fdata && category === "shop") {
        setProductList(
          fdata.filter((product) => product.category === category)
        );
      } else {
        setProductList(data.filter((product) => product.category === category));
      }
    });
  }, [category]);

  return (
    <section id={sectionId} className={category !== "shop" ? "" : "pt-5"}>
      <div
        className={`container ${
          category !== "shop" ? "text-center" : ""
        } mt-5 pt-5`}
      >
        <h3>{title}</h3>
        <hr className={`${category === "shop" ? "ms-0" : ""}`} />
        <p className="mb-5">{description}</p>
        <div className="row mx-auto content-fluid">
          <Product cardClass="col-lg-3 col-md-6" productList={productList} />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
