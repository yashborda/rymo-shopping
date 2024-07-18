import React, { useState } from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = () => {
  const [cartProductList, setCartProductList] = useState([]);

  const removeCartProduct = (index) => {
    const newList = cartProductList.filter((_, i) => i !== index);
    setCartProductList(newList);
  };

  const updateQuantity = (id, index, event) => {
    const newList = [...cartProductList];
    newList[index].quantity = event.target.value;
    newList[index].total =
      newList[index].Product_price * newList[index].quantity;
    setCartProductList(newList);
  };

  const getImg = (imageName) => {
    try {
      return require(`../assets/img/${imageName}.jpg`);
    } catch (err) {
      console.error("Image not found:", imageName);
      return "";
    }
  };

  const subtotal = cartProductList.reduce(
    (sum, product) => sum + product.Product_price * product.quantity,
    0
  );
  const shipping = 10; // Example shipping cost

  return (
    <section id="cart" className="pt-5">
      <div className="container pt-5 mt-5">
        <h3>Shopping Cart</h3>
        <hr className="hr" />
      </div>
      <div id="cart-container" className="container pb-3 my-5">
        <table>
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            {cartProductList.map((product, index) => (
              <tr key={product.Product_name}>
                <td>
                  <FontAwesomeIcon
                    onClick={() => removeCartProduct(index)}
                    icon="fa fa-trash"
                  ></FontAwesomeIcon>
                </td>
                <td>
                  <img
                    src={getImg(product.Product_main_image)}
                    alt={product.Product_main_image}
                  />
                </td>
                <td>
                  <h5>{product.Product_name}</h5>
                </td>
                <td>
                  <h5>${product.Product_price}</h5>
                </td>
                <td>
                  <select
                    onChange={(event) =>
                      updateQuantity(product.id, index, event)
                    }
                    defaultValue={product.quantity}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </td>
                <td>
                  <h5>${product.total}</h5>
                </td>
              </tr>
            ))}
            {cartProductList.length === 0 && (
              <tr>
                <td colSpan="6">
                  Please purchase a product <br />
                  <NavLink to="/shop">Shop</NavLink>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div id="card-bottom" className="container">
        <div className="row">
          <div className="coupon col-md-6 col-12 mb-4">
            <div>
              <h5>COUPON</h5>
              <label className="d-block" htmlFor="coupon_code">
                <p>Enter your coupon code if you have one. (#CODE30)</p>
              </label>
              <div className="d-flex flex-column flex-lg-row justify-content-between">
                <input type="text" placeholder="Coupon Code" id="coupon_code" />
                <Button buttonClass="me-3" buttonText="Apply Coupon" />
              </div>
            </div>
          </div>
          <div className="total col-md-6 col-12 mb-4">
            <div>
              <h5>CART TOTAL</h5>
              <div className="d-flex justify-content-between">
                <h6>Subtotal</h6>
                <p>${subtotal}</p>
              </div>
              <div className="d-flex justify-content-between">
                <h6>Shipping</h6>
                <p>${shipping}</p>
              </div>
              <hr className="second-hr" />
              <div className="d-flex justify-content-between">
                <h6>Total</h6>
                <p>${subtotal + shipping}</p>
              </div>
              <div className="d-flex justify-content-end">
                <Button buttonClass="me-3" buttonText="Proceed to Checkout" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
