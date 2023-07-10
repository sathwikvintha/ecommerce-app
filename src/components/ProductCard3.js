import React from "react";
import { Link } from "react-router-dom";
import wish from "../images/wish.svg";
import featured3 from "../images/featured3.png";
import featured3back from "../images/featured3-back.png";
import view from "../images/view.svg";
import addcart from "../images/add-cart.svg";

const ProductCard3 = () => {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src={wish} alt="wishlist" />
          </button>
        </div>
        <div className="product-image">
          <img src={featured3} className="img-fluid" alt="productimage" />
          <img src={featured3back} className="img-fluid" alt="productimage" />
        </div>

        <div className="product-details align-items-center">
          <h6 className="brand">Jacket </h6>
          <h5 className="product-title align-items-center d-flex">
            Smokey Grey Melange Zipper
          </h5>
          <p className="price d-flex">
            <span className="overline">₹799</span>{" "}
            <span className="realprice">₹599</span>
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

export default ProductCard3;
