import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Logo from "../assets/img/logo.png";

function Footer() {
  const navigate = useNavigate();

  // For handeling the nav click to content section
  const scrollToAnchor = (path, anchorId, navigateTo) => {
    navigateTo(`${path}#${anchorId}`);
    setTimeout(() => {
      const anchor = document.getElementById(anchorId);
      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <div>
      <footer className="footer-area">
        <div className="container">
          <div className="footer-up">
            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6 col-sm-12"
                style={{
                  textAlign: window.innerWidth < 768 ? "center" : "left",
                }}
              >
                <a href="/" className="logo">
                  <img
                    src={Logo}
                    alt="logo"
                    style={{ width: "191px", height: "131px" }}
                  />
                </a>

                <p>
                  More over 30 years of experience in agriculture, we cultivate
                  professionals farmer to firm high quality products.
                </p>

                <div
                  className="social-area"
                  style={{
                    justifyContent: window.innerWidth < 768 ? "center" : "left",
                  }}
                >
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      style={{
                        width: "21px",
                        height: "21px",
                        fill: "white",
                      }}
                    >
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </a>

                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      style={{
                        width: "21px",
                        height: "21px",
                        fill: "white",
                      }}
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </a>

                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{
                        width: "21px",
                        height: "21px",
                        fill: "white",
                      }}
                    >
                      <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                    </svg>
                  </a>

                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      style={{
                        width: "21px",
                        height: "21px",
                        fill: "white",
                      }}
                    >
                      <path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 com-sm-12"
                style={{
                  textAlign: window.innerWidth < 768 ? "center" : "left",
                }}
              >
                <h6>Useful Links</h6>

                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <ul>
                      <li>
                        <NavLink
                          to="/about/company-profile"
                          className=""
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToAnchor("/about", "about-us", navigate);
                          }}
                        >
                          About Us
                        </NavLink>

                        <NavLink
                          to="/about/vision&mission"
                          className=""
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToAnchor("/about", "vision", navigate);
                          }}
                        >
                          Vision & Mission
                        </NavLink>

                        <NavLink
                          to="/about/facilities"
                          className=""
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToAnchor("/about", "facilities", navigate);
                          }}
                        >
                          Our Facilities
                        </NavLink>

                        <NavLink
                          to="/about/team"
                          className=""
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToAnchor("/about", "team", navigate);
                          }}
                        >
                          Our Team
                        </NavLink>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <ul>
                      <li>
                        <NavLink
                          to="/about/certificates"
                          className=""
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToAnchor("/about", "certificates", navigate);
                          }}
                        >
                          Certificates
                        </NavLink>

                        <NavLink
                          href="/products/product"
                          className=""
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToAnchor("/products", "product", navigate);
                          }}
                        >
                          Products
                        </NavLink>

                        <NavLink
                          to="/career/career"
                          className=""
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToAnchor("/career", "career", navigate);
                          }}
                        >
                          Careers
                        </NavLink>

                        <NavLink
                          to="/contact"
                          className=""
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToAnchor("/contact", "contact", navigate);
                          }}
                        >
                          Contact
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-12"
                style={{
                  textAlign: window.innerWidth < 768 ? "center" : "left",
                }}
              >
                <h6>Contacts</h6>

                <div className="contact-info">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                    </svg>
                    Mon-Fri 08.00 a.m - 06.00 p.m
                  </p>

                  <p style={{ display: "flex" }}>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                      </svg>
                    </span>

                    <span>
                      2ND FLOOR, 205-206, J.K. CHAMBER, SECTOR-17, VASHI, NAVI
                      MUMBAI, THANE, MAHARASHTRA, 400703
                    </span>
                  </p>

                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                    </svg>
                    (+1) 212-946-2064
                  </p>

                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
                    </svg>
                    info@agoora.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p className="copyright-line text-left">
                © 2024 Agoora. All rights reserved.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <p className="privacy">Privacy Policy | Terms &amp; Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
