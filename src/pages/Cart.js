import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import featured1 from "../images/featured1.png";
import featured2 from "../images/featured2.png";
import { AiFillDelete } from "react-icons/ai";
import Container from "../components/Container";
const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />

      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-30">
                  <img
                    src={featured1}
                    className="img-fluid"
                    alt="product image"
                  />
                </div>
                <div className="w-75">
                  <p>knglfng</p>
                  <p>Size: ff</p>
                  <p>Color: </p>
                </div>
              </div>
              <div className="cart-col-2">
                <div className="product-price">
                  <div className="beforeprice mb-2">
                    <span className="price">₹ 999.00</span>
                  </div>
                  <div className="realprice ">
                    <span className="price">₹ 599.00</span>
                  </div>
                </div>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    id=""
                    min={1}
                    max={10}
                  />
                </div>
                <div>
                  <AiFillDelete className="text-danger" />
                </div>
              </div>
              <div className="cart-col-4">
                <div className="totalprice ">
                  <span className="price">₹ 599.00</span>
                </div>
              </div>
            </div>

            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-30">
                  <img
                    src={featured2}
                    className="img-fluid"
                    alt="product image"
                  />
                </div>
                <div className="w-75">
                  <p>knglfng</p>
                  <p>Size: ff</p>
                  <p>Color: </p>
                </div>
              </div>
              <div className="cart-col-2">
                <div className="product-price">
                  <div className="beforeprice mb-2">
                    <span className="price">₹ 1,119.00</span>
                  </div>
                  <div className="realprice ">
                    <span className="price">₹ 899.00</span>
                  </div>
                </div>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    id=""
                    min={1}
                    max={10}
                  />
                </div>
                <div>
                  <AiFillDelete className="text-danger" />
                </div>
              </div>
              <div className="cart-col-4">
                <div className="totalprice ">
                  <span className="price">₹ 899.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/store" className="button mt-4">
                Continue Shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>SubTotal : ₹ 1,498</h4>
                <p>Taxes and Shipping Calculated at Checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
