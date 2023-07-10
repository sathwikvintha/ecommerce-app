import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import cross from "../images/cross.svg";
import featured1 from "../images/featured1.png";
import featured1back from "../images/featured1-back.png";
import Container from "../components/Container";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src={featured1}
                    className="img-fluid w-100 "
                    alt="oversiezedtshirt"
                  />
                  <img
                    src={featured1back}
                    className="img-fluid w-100 "
                    alt="oversiezedtshirt"
                  />
                </div>
                <div className="bg-white px-2 py-3 product-details">
                  <h5 className="title">Moon Chill Oversized T-shirt</h5>
                  <p className="price ">
                    <span className="overline">₹799</span>{" "}
                    <span className="realprice">₹599</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src={featured1}
                    className="img-fluid w-100 "
                    alt="oversiezedtshirt"
                  />
                  <img
                    src={featured1back}
                    className="img-fluid w-100 "
                    alt="oversiezedtshirt"
                  />
                </div>
                <div className="bg-white px-2 py-3 product-details">
                  <h5 className="title">Moon Chill Oversized T-shirt</h5>
                  <p className="price ">
                    <span className="overline">₹799</span>{" "}
                    <span className="realprice">₹599</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src={cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src={featured1}
                    className="img-fluid w-100 "
                    alt="oversiezedtshirt"
                  />
                  <img
                    src={featured1back}
                    className="img-fluid w-100 "
                    alt="oversiezedtshirt"
                  />
                </div>
                <div className="bg-white px-2 py-3 product-details">
                  <h5 className="title">Moon Chill Oversized T-shirt</h5>
                  <p className="price ">
                    <span className="overline">₹799</span>{" "}
                    <span className="realprice">₹599</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
