import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard1 from "../components/ProductCard1";
// import ProductCard3 from "../components/ProductCard3";
// import ProductCard4 from "../components/ProductCard4";
import ReactStars from "react-stars";
import ReactImageZoom from "react-image-zoom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import Color from "./../components/Color";
import {
  addRating,
  getAProduct,
  getAllProducts,
} from "../features/products/productSlice";
import { toast } from "react-toastify";
import { addProdToCart, getUserCart } from "../features/user/userSlice";

const SingleProduct = () => {
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [alreadyAdded, setAlreadyAdded] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const getProductId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const productState = useSelector((state) => state?.product?.singleproduct);
  const productsState = useSelector((state) => state?.product?.product);
  console.log(productState);

  const cartState = useSelector((state) => state?.auth?.cartProducts);

  const getTokenFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;

  const config2 = {
    headers: {
      Authorization: `Bearer ${
        getTokenFromLocalStorage !== null ? getTokenFromLocalStorage?.token : ""
      }`,
      Accept: "application/json",
    },
  };

  useEffect(() => {
    dispatch(getAProduct(getProductId));
    //dispatch(getUserCart());
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
      if (getProductId === cartState[index]?.productId?._id) {
        setAlreadyAdded(true);
      }
    }
  });

  const uploadCart = () => {
    if (color === null) {
      toast.error("Please Choose the Color");
      return false;
    } else {
      dispatch(
        addProdToCart({
          productId: productState?._id,
          quantity,
          color,
          price: productState?.price,
        })
      );
      navigate("/cart");
    }
  };

  const props = {
    width: 500,
    height: 1000,
    zoomWidth: 500,
    img: productState?.images[0]?.url
      ? productState?.images[0]?.url
      : "https://assets.bonkerscorner.com/uploads/2021/06/26101711/Bonkerscorner-Black-Tie-Me-Up-Pants-6694.jpeg",
  };
  const [orderedProduct, setorderedproduct] = useState(true);

  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const closeModel = () => {};

  const [popularProduct, setProductProduct] = useState([]);
  useEffect(() => {
    let data = [];
    for (let index = 0; index < productsState.length; index++) {
      const element = productsState[index];
      if (element.tags === "featured") {
        data.push(element);
      }
      setProductProduct(data);
    }
  }, [productState]);
  console.log(popularProduct);

  const [star, setStar] = useState(null);
  const [starNum, setStarNum] = useState(null);
  const [comment, setComment] = useState(0);

  console.log(star);
  const addRatingToProduct = () => {
    if (star === null) {
      toast.error("Please add star rating");
      return false;
    } else if (comment === null) {
      toast.error("Please Write Review About the Product.");
      return false;
    } else {
      dispatch(
        addRating({
          data: { star: star, comment: comment, prodId: getProductId },
          config2,
        })
      );
      setTimeout(() => {
        dispatch(getAProduct(getProductId));
      }, 500);
    }
    return false;
  };

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title={productState?.title} />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              {productState?.images.map((item, index) => {
                return (
                  <div>
                    <img src={item?.url} className="img-fluid" alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h2 className="title">{productState?.title}</h2>
              </div>
              <div className="border-bottom py-3">
                <p className="priceshow">
                  <div>
                    <span class="woocommerce-Price-amount1 amount">
                      <span class="woocommerce-Price-currencySymbol">₹</span>
                      {productState?.price * 2}
                    </span>
                    <span class="woocommerce-Price-amount amount">
                      <span class="woocommerce-Price-currencySymbol">₹</span>
                      {productState?.price}
                    </span>
                    <span className="discount mb-0">-50% OFF</span>
                  </div>
                </p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0">( 2 Reviews )</p>
                </div>
                <a href="#review">Add on a Review</a>
              </div>
              <div className="py-3 proddetails border-bottom">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data mt-3">{productState?.brand}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data mt-3">{productState?.category}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data mt-3">{productState?.tags}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability :</h3>
                  <p className="product-data mt-3">In Stock</p>
                </div>
                {alreadyAdded === false && (
                  <>
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Color :</h3>
                      <Color
                        setColor={setColor}
                        colorData={productState?.color}
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="border-bottom py-3">
                <div className="d-flex gap-10 felx-column mt-2 mb-3">
                  <h3 className="product-heading">Size : </h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondory">
                      XS
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondory">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondory">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondory">
                      L
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondory">
                      XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondory">
                      XXL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 felx-row mt-2 mb-3">
                  {alreadyAdded === false && (
                    <>
                      <h3 className="product-heading">Quantity : </h3>
                      <div className="quantity">
                        <input
                          type="number"
                          name=""
                          min={1}
                          max={10}
                          className="form-control"
                          style={{ width: "100px" }}
                          id=""
                          onChange={(e) => setQuantity(e.target.value)}
                          value={quantity}
                        />
                      </div>
                    </>
                  )}
                  <div
                    className={
                      alreadyAdded
                        ? "ms-0"
                        : "ms-5" +
                          "product-heading-button d-flex align-items-center gap-30"
                    }
                  >
                    <button
                      className="buttonforwish border-0"
                      // data-bs-toggle="modal"
                      // data-bs-target="#staticBackdrop"
                      onClick={() => {
                        alreadyAdded ? navigate("/cart") : uploadCart();
                      }}
                      type="button"
                    >
                      {alreadyAdded ? "Go To Cart" : "Add To Cart"}
                    </button>
                    {/* <button className="signup">Buy it Now</button> */}
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="#gg">
                      <AiOutlineHeart className="fs-5 me-2 heart" />
                      Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-row my-3">
                  <h3 className="product-heading">Shipping & Returns : </h3>
                  <p className="product-data">
                    Free Shipping and returns available on all orders! <br /> We
                    ship all US Domestic orders within{" "}
                    <b>5-10 business days!</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3 prodlink">
                  <h3 className="product-heading">Product Link : </h3>
                  {/* <a
                    href="javascript:void(0)"
                    onClick={() => {
                      copyToClipboard(
                        "https://www.bonkerscorner.com/product/black-tie-me-up-pants/#"
                      );
                    }}
                  > */}
                  <button
                    onClick={() => {
                      copyToClipboard(window.location.href);
                    }}
                  >
                    Copy Product Link
                  </button>
                  {/* Copy Product Link */}
                  {/* </a> */}
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Sizing : </h3>
                  <p className="product-data">
                    Fits true to size. Do you need size advice?
                    <br /> <b>Please refer to our size chart.</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>

            <div className="bg-white p-3">
              <p
                dangerouslySetInnerHTML={{
                  __html: productState?.description,
                }}
              ></p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={productState?.totalrating}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">
                      Based on {productState?.ratings?.length} Reviews
                    </p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write a Review</h4>
                <div>
                  <ReactStars
                    count={5}
                    size={24}
                    value={0}
                    edit={true}
                    activeColor="#ffd700"
                    onChange={(e) => {
                      //console.log(e);
                      setStar(e);
                    }}
                  />
                </div>
                <div>
                  <textarea
                    name=""
                    className="w-100 form-control"
                    id=""
                    cols="30"
                    rows="4"
                    placeholder="Comments"
                    onChange={(e) => {
                      //console.log(e);
                      setComment(e.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="d-flex justify-content-end mt-3">
                  <button
                    onClick={addRatingToProduct}
                    className="button border-0"
                    type="submit"
                  >
                    Submit Review
                  </button>
                </div>
              </div>
              <div className="reviews mt-4">
                {productState?.ratings ? (
                  productState?.ratings?.map((item, index) => {
                    return (
                      <div key={index} className="review">
                        <div className="d-flex gap-10 align-items-center">
                          {/**<h6 className="mb-0">mydev847</h6>*/}
                          <ReactStars
                            count={5}
                            size={24}
                            value={item?.star}
                            edit={false}
                            activeColor="#ffd700"
                          />
                        </div>
                        <p className="mt-3">{item?.comment}</p>
                      </div>
                    );
                  })
                ) : (
                  <p className="fs-3 text-center text-secondary">No Comment</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="product wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard1 />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
