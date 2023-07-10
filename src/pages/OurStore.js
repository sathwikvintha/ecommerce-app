import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard1 from "../components/ProductCard1";
import gr from "../images/gr.svg";
import gr2 from "../images/gr2.svg";
import gr3 from "../images/gr3.svg";
import gr4 from "../images/gr4.svg";
import Container from "../components/Container";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  //   const gridSetter = (i) => {
  //     setGrid(i);
  //   };
  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store" />

      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Anime</li>
                  <li>Oversized Shirt</li>
                  <li>Oversized T-shirt</li>
                  <li>Basic</li>
                  <li>Polo</li>
                  <li>Sweatshirts & Hoodies</li>
                  <li>Jackets</li>
                  <li>Shorts</li>
                  <li>Bottoms</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Availability</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      In Stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Out Of Stock (0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-15">
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control py-1"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control py-1"
                      id="floatingInput1"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>
                <h5 className="sub-title">Colors</h5>
                <div className="d-flex flex-wrap">
                  <ul className="colors ps-0">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <h5 className="sub-title">Size</h5>
                <div>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        S (2)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label className="form-check-label" htmlFor="color-2">
                        M (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-3"
                      />
                      <label className="form-check-label" htmlFor="color-3">
                        L (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-4"
                      />
                      <label className="form-check-label" htmlFor="color-4">
                        XL (0)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-5"
                      />
                      <label className="form-check-label" htmlFor="color-5">
                        XXL (1)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    T-shirt
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Shirt
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Trousers
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Sweatshirts & Hoodies
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Bottoms
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Discount Range</h3>
              <div>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      10% & above
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-2"
                    />
                    <label className="form-check-label" htmlFor="color-2">
                      20% & above
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-3"
                    />
                    <label className="form-check-label" htmlFor="color-3">
                      30% & above
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-4"
                    />
                    <label className="form-check-label" htmlFor="color-4">
                      40% & above
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-5"
                    />
                    <label className="form-check-label" htmlFor="color-5">
                      50% & above
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-5"
                    />
                    <label className="form-check-label" htmlFor="color-5">
                      60% & above
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block " style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select name="" className="form-control form-select" id="">
                    <option value="manual">Featured</option>
                    <option value="recommended" selected="selected">
                      Recommended
                    </option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price: Low to High</option>
                    <option value="price-descending">Price: High to Low</option>
                    <option value="created-ascending">Date: Old to New</option>
                    <option value="created-descending">Date: New to Old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">25 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src={gr4}
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src={gr3}
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src={gr2}
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src={gr}
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard1 grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
