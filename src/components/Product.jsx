import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Product = ({ cardClass, productList }) => {
  return (
    <>
      {productList.map((data) => (
        <div key={data.id} className={`product text-center ${cardClass}`}>
          <img
            className="img-fluid mb-md-3"
            src={require(`../assets/img/${data.Product_main_image}.jpg`)}
            alt={data.Product_main_image}
          />
          <div className="star py-3">
            <FontAwesomeIcon icon="fa fa-star" />
            <FontAwesomeIcon icon="fa fa-star" />
            <FontAwesomeIcon icon="fa fa-star" />
            <FontAwesomeIcon icon="fa fa-star" />
            <FontAwesomeIcon icon="fa-solid fa-star-half-stroke" />
          </div>
          <h4 className="p-name">{data.Product_name}</h4>
          <h4 className="p-price fw-normal">${data.Product_price}</h4>
          <div className="d-flex justify-content-center gap-2 btn-group">
            <NavLink to={`/productDetails/${data.id}`}>
              <Button buttonClass="button_1" buttonText="Details" />
            </NavLink>
            <Button buttonText="Buy Now" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
