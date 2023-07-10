import React from "react";
import { Link } from "react-router-dom";
import newsletter from "../images/newsletter.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter"></img>
                <h2 className="mb-0 text-white">Sign Up for Latest News</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Enter your Email Address"
                  aria-label="Enter your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hno : xxx Near Metro Stop, T.Nagar, Chennai
                  <br />
                  PinCode : 600017
                </address>
                <a
                  href="tel:+91 9342566756"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +91 9342566756
                </a>
                <a
                  href="Soln to Problem: sathwikvintha2004@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  sathwikvintha2004@gmail.com
                </a>
                <div className="social_icons footer-mid-data d-flex align-items-center gap-15 mt-4">
                  <a href="https://www.facebook.com/">
                    <img src={facebook} alt="social icons" className="fs-4" />
                  </a>
                  <a href="https://twitter.com/home">
                    <img src={twitter} alt="social icons" className="fs-4" />
                  </a>
                  <a href="https://www.instagram.com/">
                    <img src={instagram} alt="social icons" className="fs-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/sathwik-vintha/">
                    <img src={linkedin} alt="social icons" className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="term-conditions" className="text-white py-2 mb-1">
                  Terms of Services
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
                <Link className="text-white py-2 mb-1">Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">T-Shirts</Link>
                <Link className="text-white py-2 mb-1">Shirts</Link>
                <Link className="text-white py-2 mb-1">Sweatshirts</Link>
                <Link className="text-white py-2 mb-1">Shorts</Link>
                <Link className="text-white py-2 mb-1">
                  Track Pants & Joggers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy;{new Date().getFullYear()}; Powered by Sathwik Vintha
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
