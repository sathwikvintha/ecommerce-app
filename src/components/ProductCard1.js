import React from "react";
import { Link, useLocation } from "react-router-dom";
import wish from "../images/wish.svg";
import view from "../images/view.svg";
import addcart from "../images/add-cart.svg";
import featured1 from "../images/featured1.png";
import featured1back from "../images/featured1-back.png";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/products/productSlice";
import { useEffect } from "react";
// import featured2 from "../images/featured2.png";
// import featured2back from "../images/featured2-back.png";
// import featured3 from "../images/featured3.png";
// import featured3back from "../images/featured3-back.png";
// import featured4 from "../images/featured4.png";
// import featured4back from "../images/featured4-back.png";
import getUserProductWishlist from "../features/user/userSlice";

const ProductCard1 = (props) => {
  const getTokenFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;

  const config2 = {
    headers: {
      Authorization: `Bearer ${
        getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
      }`,
      Accept: "application/json",
    },
  };

  const { grid, data } = props;
  const dispatch = useDispatch();

  // console.log(data);
  let location = useLocation();

  const addToWish = (id) => {
    //alert(id);
    dispatch(addToWishlist(id));
    // setTimeout(() => {
    //   dispatch(getUserProductWishlist());
    // }, 100);
  };

  // useEffect(() => {
  //   dispatch(getUserProductWishlist());
  // }, []);

  return (
    <>
      {data &&
        data?.map((item, index) => {
          return (
            <div
              key={index}
              className={` ${
                location.pathname === "/product" ? `gr-${grid}` : "col-3"
              }`}
            >
              <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                  <button
                    className="border-0 bg-transparent"
                    onClick={() => addToWish(item?._id)}
                  >
                    <img src={wish} alt="wishlist" />
                  </button>
                </div>
                <div className="product-image">
                  <img
                    src={item?.images[0].url}
                    className="img-fluid"
                    alt="productimage"
                  />
                  <img
                    src={item?.images[1].url}
                    className="img-fluid"
                    alt="productimage"
                  />
                </div>

                <div className="product-details align-items-center">
                  <h6 className="brand">{item?.brand}</h6>
                  {/* <h5 className="product-title align-items-center d-flex"> */}

                  <h5 className="product-title align-items-center">
                    {item?.title}
                  </h5>
                  <p
                    className={`description ${
                      grid === 12 ? "d-block" : "d-none"
                    }`}
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  ></p>

                  <p className="price ">
                    <span className="overline">₹ `{item?.price * 2}`</span>{" "}
                    <span className="realprice">₹ {item?.price}</span>
                  </p>
                </div>
                <div className="action-bar position-absolute">
                  <div className="d-flex flex-column gap-15">
                    <Link
                      to={"/product/" + item?._id}
                      className="border-0 bg-transparent"
                    >
                      <img src={view} alt="view" />
                    </Link>
                    <button className="border-0 bg-transparent">
                      <img src={addcart} alt="addcart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default ProductCard1;
