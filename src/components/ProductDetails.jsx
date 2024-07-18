import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../database/data";
import Button from "./Button";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [small_img, setSmall_img] = useState();

  useEffect(() => {
    const dataFilter = data.filter((product) => product.id === id)[0];
    setProduct(dataFilter);
  }, [id]);

  const getImagePath = (imageName) => {
    try {
      return require(`../assets/img/${imageName}.jpg`);
    } catch (err) {
      console.error("Image not found:", imageName);
      return "";
    }
  };

  return (
    <>
      <section id="ProductDetailsview" className="my-5 py-5">
        <div className="container">
          <div className="row mt-5 ProductDetails">
            <div className="col-lg-5 col-12">
              {small_img === 1 ? (
                <img
                  className="img-fluid w-100 mb-md-3"
                  id="main_img"
                  src={getImagePath(product.small_image_1)}
                  alt={product.small_image_1}
                />
              ) : small_img === 2 ? (
                <img
                  className="img-fluid w-100 mb-md-3"
                  id="main_img"
                  src={getImagePath(product.small_image_2)}
                  alt={product.small_image_2}
                />
              ) : small_img === 3 ? (
                <img
                  className="img-fluid w-100 mb-md-3"
                  id="main_img"
                  src={getImagePath(product.small_image_3)}
                  alt={product.small_image_3}
                />
              ) : small_img === 4 ? (
                <img
                  className="img-fluid w-100 mb-md-3"
                  id="main_img"
                  src={getImagePath(product.small_image_4)}
                  alt={product.small_image_4}
                />
              ) : (
                <img
                  className="img-fluid w-100 mb-md-3"
                  id="main_img"
                  src={getImagePath(product.Product_main_image)}
                  alt={product.Product_main_image}
                />
              )}

              <div className="small-img-group">
                <div className="small-img-col">
                  <img
                    onClick={() => setSmall_img(1)}
                    className="img-fluid w-100 mb-md-3"
                    src={getImagePath(product.small_image_1)}
                    alt={product.small_image_1}
                  />
                </div>
                <div className="small-img-col">
                  <img
                    onClick={() => setSmall_img(2)}
                    className="img-fluid w-100 mb-md-3"
                    src={getImagePath(product.small_image_2)}
                    alt={product.small_image_2}
                  />
                </div>
                <div className="small-img-col">
                  <img
                    onClick={() => setSmall_img(3)}
                    className="img-fluid w-100 mb-md-3"
                    src={getImagePath(product.small_image_3)}
                    alt={product.small_image_3}
                  />
                </div>
                <div className="small-img-col">
                  <img
                    onClick={() => setSmall_img(4)}
                    className="img-fluid w-100 mb-md-3"
                    src={getImagePath(product.small_image_4)}
                    alt={product.small_image_4}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-12 px-3">
              <h6 className="mb-4">Category / {product.category}</h6>
              <h3 className="mb-3">{product.Product_name}</h3>
              <h2 className="mb-3">${product.Product_price}</h2>
              <select className="my-3">
                <option value="">Select Size</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
              </select>
              <div className="d-flex align-items-baseline">
                <input type="number" max="5" min="1" value="1" />
                <Button buttonClass="mb-5 button_1" buttonText="Add to Cart" />
              </div>
              <h4>Product Details </h4>
              <div className="details ">
                <p>Care Instructions: Machine Wash</p>
                <p>Fit Type: Regular Fit</p>
                <p>Fabric Composition : 100% Cotton</p>
                <p>
                  Premium Super combed cotton jersey fabric is soft &
                  comfortable for all day wear due to its good absorbency &
                  breathability
                </p>
                <p>Crew neck with rib trim for neck finishing</p>
                <p>Authentic USPA Graphic print at the centre front</p>
                <p>
                  Tagless label at the inside back of the garment for all day
                  comfort
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;