import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard1 from "../components/ProductCard1";
// import ProductCard3 from "../components/ProductCard3";
// import ProductCard4 from "../components/ProductCard4";
import ReactStars from "react-stars";
import ReactImageZoom from "react-image-zoom";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";

const SingleProduct = () => {
  const props = {
    width: 500,
    height: 1000,
    zoomWidth: 500,
    img: "https://assets.bonkerscorner.com/uploads/2021/06/26101711/Bonkerscorner-Black-Tie-Me-Up-Pants-6694.jpeg",
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

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="https://assets.bonkerscorner.com/uploads/2021/06/26101711/Bonkerscorner-Black-Tie-Me-Up-Pants-6694.jpeg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://assets.bonkerscorner.com/uploads/2021/06/26101711/Bonkerscorner-Black-Tie-Me-Up-Pants-6694.jpeg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://assets.bonkerscorner.com/uploads/2021/06/26101711/Bonkerscorner-Black-Tie-Me-Up-Pants-6694.jpeg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://assets.bonkerscorner.com/uploads/2021/06/26101711/Bonkerscorner-Black-Tie-Me-Up-Pants-6694.jpeg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h2 className="title">Black Tie Me Up Pants</h2>
              </div>
              <div className="border-bottom py-3">
                <p className="priceshow">
                  <div>
                    <span class="woocommerce-Price-amount1 amount">
                      <span class="woocommerce-Price-currencySymbol">₹</span>
                      1199.00
                    </span>
                    <span class="woocommerce-Price-amount amount">
                      <span class="woocommerce-Price-currencySymbol">₹</span>
                      899.00
                    </span>
                    <span className="discount mb-0">-25% OFF</span>
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
                    />
                  </div>
                  <div className="product-heading-button d-flex align-items-center gap-30">
                    <button className="button border-0" type="submit">
                      Add To Cart
                    </button>
                    <button className="signup">Buy it Now</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="">
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
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Product Link : </h3>
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(
                        "https://www.bonkerscorner.com/product/black-tie-me-up-pants/#"
                      );
                    }}
                  >
                    Copy Product Link
                  </a>
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
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3>Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                      Add on a Review
                    </a>
                  </div>
                )}
              </div>
              <div id="review" className="review-form py-4">
                <h4>Write a Review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="5"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Sathwik</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                    also reproduced in their exact original form, accompanied by
                    English versions from the 1914 translation by H. Rackham
                  </p>
                </div>
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
