import React from "react";
import { Link } from "react-router-dom";
import wish from "../images/wish.svg";
import featured4 from "../images/featured4.png";
import featured4back from "../images/featured4-back.png";
import view from "../images/view.svg";
import addcart from "../images/add-cart.svg";

const ProductCard4 = () => {
  return (
    <div className="col-3">
      <Link to="product/:id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src={wish} alt="wishlist" />
          </button>
        </div>
        <div className="product-image">
          <img src={featured4} className="img-fluid" alt="productimage" />
          <img src={featured4back} className="img-fluid" alt="productimage" />
        </div>

        <div className="product-details align-items-center">
          <h6 className="brand">Bottoms, Latest Collection</h6>
          <h5 className="product-title align-items-center d-flex">
            White Parachute Pants
          </h5>
          <p className="price d-flex">
            <span className="overline">₹1499</span>{" "}
            <span className="realprice">₹999</span>
          </p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent">
              <img src={view} alt="addcart" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={addcart} alt="addcart" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard4;
