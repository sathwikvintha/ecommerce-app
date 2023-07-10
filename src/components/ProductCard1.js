import React from "react";
import { Link, useLocation } from "react-router-dom";
import wish from "../images/wish.svg";
import view from "../images/view.svg";
import addcart from "../images/add-cart.svg";
import featured1 from "../images/featured1.png";
import featured1back from "../images/featured1-back.png";
import featured2 from "../images/featured2.png";
import featured2back from "../images/featured2-back.png";
import featured3 from "../images/featured3.png";
import featured3back from "../images/featured3-back.png";
import featured4 from "../images/featured4.png";
import featured4back from "../images/featured4-back.png";

const ProductCard1 = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${location.pathname == "/" ? "product/:id" : ":id"}`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={featured1} className="img-fluid" alt="productimage" />
            <img src={featured1back} className="img-fluid" alt="productimage" />
          </div>

          <div className="product-details align-items-center">
            <h6 className="brand">Oversized T-shirt</h6>
            {/* <h5 className="product-title align-items-center d-flex"> */}

            <h5 className="product-title align-items-center">
              Moon Chill Oversized T-shirt
            </h5>
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              The oversize t-shirt is therefore a loose t-shirt that gives the
              impression of wearing a t-shirt that is one or two sizes larger
              than the one you are wearing. The garment floats and can be very
              long in addition to wide, even covering the buttocks.
            </p>
            <p className="price ">
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
      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${location.pathname == "/" ? "product/:id" : ":id"}`}
          className="product-card position-relative"
        >
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={featured2} className="img-fluid" alt="productimage" />
            <img src={featured2back} className="img-fluid" alt="productimage" />
          </div>

          <div className="product-details align-items-center">
            <h6 className="brand">Bottoms, Luna Collection</h6>
            {/* <h5 className="product-title align-items-center d-flex"></h5> */}
            <h5 className="product-title align-items-center">
              Black Tie Me Up Pants
            </h5>
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Composition: 97% Polyester 3% spandex GSM: 240 Country of
              production: India Wash care: Machine wash cold with similar
              colours. Only non-chlorine. Tumble dry low. Warm Iron if needed.
              Sizing: Body measurement in inches. Estimated order processing
              time: 48hours.
            </p>
            <p className="price d-flex">
              <span className="overline">₹119</span>{" "}
              <span className="realprice">₹899</span>
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
      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${location.pathname == "/" ? "product/:id" : ":id"}`}
          className="product-card position-relative"
        >
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
            <h6 className="brand">Oversized T-shirt</h6>
            {/* <h5 className="product-title align-items-center d-flex"> */}

            <h5 className="product-title align-items-center">
              Moon Chill Oversized T-shirt
            </h5>
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              The oversize t-shirt is therefore a loose t-shirt that gives the
              impression of wearing a t-shirt that is one or two sizes larger
              than the one you are wearing. The garment floats and can be very
              long in addition to wide, even covering the buttocks.
            </p>
            <p className="price ">
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
      <div
        className={` ${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        }`}
      >
        <Link
          to={`${location.pathname == "/" ? "product/:id" : ":id"}`}
          className="product-card position-relative"
        >
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
            <h6 className="brand">Oversized T-shirt</h6>
            {/* <h5 className="product-title align-items-center d-flex"> */}

            <h5 className="product-title align-items-center">
              Moon Chill Oversized T-shirt
            </h5>
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              The oversize t-shirt is therefore a loose t-shirt that gives the
              impression of wearing a t-shirt that is one or two sizes larger
              than the one you are wearing. The garment floats and can be very
              long in addition to wide, even covering the buttocks.
            </p>
            <p className="price ">
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
    </>
  );
};

export default ProductCard1;
