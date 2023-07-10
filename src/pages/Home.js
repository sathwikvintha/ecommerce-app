import React from "react";
import { Link } from "react-router-dom";
import { Flickity } from "flickity";
import Marquee from "react-fast-marquee";
import ProductCard1 from "../components/ProductCard1";
import sweatshirt from "../images/sweatshirt.png";
import sweatshirtback from "../images/sweatshirt-back.png";
import oversizedtshirt from "../images/oversizedtshirt.png";
import oversizedtshirtback from "../images/oversizedtshirt-back.png";
import polotshirt from "../images/polotshirt.png";
import polotshirback from "../images/polotshirt-back.png";
import pants from "../images/pants.png";
import pantsback from "../images/pants-back.png";
import truck from "../images/truck.png";
import gift from "../images/gift.png";
import headset from "../images/headset.png";
import discount from "../images/discount.png";
import card from "../images/card.png";
import womentop from "../images/womentop.png";
import womentopback from "../images/womentop-back.png";
import womensweatshirt from "../images/womensweatshirt.png";
import womensweatshirtback from "../images/womensweatshirt-back.png";
import womenbottom from "../images/womenbottom.png";
import womenbottomback from "../images/womenbottom-back.png";
import womenset from "../images/womenset.png";
import womensetback from "../images/womenset-back.png";
import roller1 from "../images/roller-1.png";
import roller2 from "../images/roller-2.png";
import roller3 from "../images/roller-3.png";
import roller4 from "../images/roller-4.png";
import roller5 from "../images/roller-5.png";
import roller6 from "../images/roller-6.png";
import roller7 from "../images/roller-7.png";
import roller8 from "../images/roller-8.png";
import roller9 from "../images/roller-9.png";
import animeoversized from "../images/animeoversized.png";
import animeoversizedback from "../images/animeoversized-back.png";
import animehoodie from "../images/animehoodie.png";
import animehoodieback from "../images/animehoodie-back.png";
import animetshirt from "../images/animetshirt.png";
import animetshirtback from "../images/animetshirt-back.png";
import womenanime from "../images/womenanime.png";
import womenanimeback from "../images/womenanime-back.png";
import Container from "../components/Container";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <h1>MEN</h1>
          <div className="col-3">
            <div className="main-banner position-relative p-3">
              <img
                src={sweatshirt}
                className="img-top img-fluid rounded-3"
                alt="main banner front"
              />
              <img
                src={sweatshirtback}
                className="img-fluid rounded-3"
                alt="main banner back"
              />
              {/* <div className="main-banner-content position-absolute">
                  <h4>Sweatshirt</h4>
                  <Link>Buy Now</Link>
                </div> */}
            </div>
          </div>
          <div className="col-3">
            <div className="main-banner position-relative p-3">
              <img
                src={oversizedtshirt}
                className="img-top img-fluid rounded-3"
                alt="main banner front"
              />
              <img
                src={oversizedtshirtback}
                className="img-fluid rounded-3"
                alt="main banner back"
              />
            </div>
          </div>
          <div className="col-3">
            <div className="main-banner position-relative p-3">
              <img
                src={polotshirt}
                className="img-top img-fluid rounded-3"
                alt="main banner front"
              />
              <img
                src={polotshirback}
                className="img-fluid rounded-3"
                alt="main banner back"
              />
            </div>
          </div>
          <div className="col-3">
            <div className="main-banner position-relative p-3">
              <img
                src={pants}
                className="img-top img-fluid rounded-3"
                alt="main banner front"
              />
              <img
                src={pantsback}
                className="img-fluid rounded-3"
                alt="main banner back"
              />
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-15">
                <img src={truck} alt="services"></img>
                <div>
                  <h6>Free Shipping</h6>
                  <p className="mb-0">From all orders over ₹2500</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src={gift} alt="services"></img>
                <div>
                  <h6>Daily Exclusive Offers</h6>
                  <p className="mb-0">Save upto 40%</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src={headset} alt="services"></img>
                <div>
                  <h6>Support 24/7</h6>
                  <p className="mb-0">Shop with an Expert</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src={discount} alt="services"></img>
                <div>
                  <h6>Affordable Prices</h6>
                  <p className="mb-0">Lowered Prices</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-15">
                <img src={card} alt="services"></img>
                <div>
                  <h6>Secure Payments</h6>
                  <p className="mb-0">100% Protected Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-3 py-5">
        <div className="row">
          <h1>WOMEN</h1>
          <div className="col-3">
            <div className="main-banner position-relative p-3">
              <img
                src={womentop}
                className="img-top img-fluid rounded-3"
                alt="main banner front"
              />
              <img
                src={womentopback}
                className="img-fluid rounded-3"
                alt="main banner back"
              />
            </div>
          </div>
          <div className="col-3">
            <div className="main-banner position-relative p-3">
              <img
                src={womensweatshirt}
                className="img-top img-fluid rounded-3"
                alt="main banner front"
              />
              <img
                src={womensweatshirtback}
                className="img-fluid rounded-3"
                alt="main banner back"
              />
            </div>
          </div>
          <div className="col-3">
            <div className="main-banner position-relative p-3">
              <img
                src={womenbottom}
                className="img-top img-fluid rounded-3"
                alt="main banner front"
              />
              <img
                src={womenbottomback}
                className="img-fluid rounded-3"
                alt="main banner back"
              />
            </div>
          </div>
          <div className="col-3">
            <div className="main-banner position-relative p-3">
              <img
                src={womenset}
                className="img-top img-fluid rounded-3"
                alt="main banner front"
              />
              <img
                src={womensetback}
                className="img-fluid rounded-3"
                alt="main banner back"
              />
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

      <Container class1="featured-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src={roller1} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={roller2} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={roller3} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={roller4} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={roller5} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={roller6} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={roller7} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={roller8} alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={roller9} alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-4 py-5">
        <div className="row">
          <h1>ANIME TRENDING</h1>
          <div className="col-3">
            <div className="main-banner position-relative p-3">
              <img
                src={animeoversizedback}
                className="img-top img-fluid rounded-3"
                alt="main banner front"
              />
              <img
                src={animeoversized}
                className="img-fluid rounded-3"
                alt="main banner back"
              />
            </div>
          </div>
          <div className="col-3">
            <div className="main-banner position-relative p-3">
              <img
                src={animetshirtback}
                className="img-top img-fluid rounded-3"
                alt="main banner front"
              />
              <img
                src={animetshirt}
                className="img-fluid rounded-3"
                alt="main banner back"
              />
            </div>
          </div>
          <div className="col-3">
            <div className="main-banner position-relative p-3">
              <img
                src={womenanime}
                className="img-top img-fluid rounded-3"
                alt="main banner front"
              />
              <img
                src={womenanimeback}
                className="img-fluid rounded-3"
                alt="main banner back"
              />
            </div>
          </div>
          <div className="col-3">
            <div className="main-banner position-relative p-3">
              <img
                src={animehoodieback}
                className="img-top img-fluid rounded-3"
                alt="main banner front"
              />
              <img
                src={animehoodie}
                className="img-fluid rounded-3"
                alt="main banner back"
              />
            </div>
          </div>
        </div>
      </Container>

      <link
        rel="stylesheet"
        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
      ></link>
    </>
  );
};

export default Home;
