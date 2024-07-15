import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = ({ cardClass, productList }) => {
  return (
    <>
      {productList.map(
        ({ Product_main_image, Product_name, Product_price, id }) => (
          <div key={id} className={`product text-center ${cardClass}`}>
            <img
              className="img-fluid mb-md-3"
              src={Product_main_image}
              alt={Product_main_image}
            />
            <div className="star py-3">
              <FontAwesomeIcon icon="fa fa-star" />
              <FontAwesomeIcon icon="fa fa-star" />
              <FontAwesomeIcon icon="fa fa-star" />
              <FontAwesomeIcon icon="fa fa-star" />
              <FontAwesomeIcon icon="fa fa-star-half-full" />
            </div>
            <h5 className="p-name">{Product_name}</h5>
            <h4 className="p-price">${Product_price}.00</h4>
            <div className="d-flex justify-content-center gap-2">
              <Button
                className="me-2"
                buttonClass="button_1"
                buttonText="Details"
              />
              <Button buttonText="Buy Now" />
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Product;
