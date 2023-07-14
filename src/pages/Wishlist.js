import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import cross from "../images/cross.svg";
import featured1 from "../images/featured1.png";
import featured1back from "../images/featured1-back.png";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  getAllProducts,
} from "../features/products/productSlice";
import { getUserProductWishlist } from "../features/user/userSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getWishlistFromDb();
  }, []);
  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  };
  const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist);
  console.log(wishlistState);

  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 300);
  };

  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="wishlist-wrapper home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            {wishlistState?.length === 0 && (
              <div className="text-center fs-3">No Data</div>
            )}
            {wishlistState &&
              wishlistState?.map((item, index) => {
                return (
                  <div className="col-3" key={index}>
                    <div className="wishlist-card position-relative">
                      <img
                        onClick={() => {
                          removeFromWishlist(item?._id);
                        }}
                        src={cross}
                        alt="cross"
                        className="position-absolute cross img-fluid"
                      />
                      <div className="wishlist-card-image">
                        <img
                          src={
                            item?.images[0].url
                              ? item?.images[0].url
                              : { featured1 }
                          }
                          className="img-fluid w-100 "
                          alt="oversiezedtshirt"
                        />
                        <img
                          src={
                            item?.images[1].url
                              ? item?.images[1].url
                              : { featured1 }
                          }
                          cl
                          className="img-fluid w-100 "
                          alt="oversiezedtshirt"
                        />
                      </div>
                      <div className="bg-white px-2 py-3 product-details">
                        <h5 className="title">{item?.title}</h5>
                        <p className="price ">
                          <span className="overline">₹{item?.price * 2}</span>{" "}
                          <span className="realprice">₹{item?.price}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
