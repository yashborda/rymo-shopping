import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = ({ cardClass, productList }) => {
  return (
    <>
      {productList.map((data) => (
          <div key={data.id} className={`product text-center ${cardClass}`}>
            <img
              className="img-fluid mb-md-3"
              src={data.Product_main_image}
              alt={data.Product_main_image}
            />
            <div className="star py-3">
              <FontAwesomeIcon icon="fa fa-star" />
              <FontAwesomeIcon icon="fa fa-star" />
              <FontAwesomeIcon icon="fa fa-star" />
              <FontAwesomeIcon icon="fa fa-star" />
              <FontAwesomeIcon icon="fa-solid fa-star-half-stroke" />
            </div>
            <h5 className="p-name">{data.Product_name}</h5>
            <h4 className="p-price">${data.Product_price}.00</h4>
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
