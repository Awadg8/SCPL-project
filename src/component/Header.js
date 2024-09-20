import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Logo from "../assets/img/logo.png";

function Header() {
  const navigate = useNavigate();

  // const [isSticky, setIsSticky] = useState(false);
  const [showAccordion, setShowAccordion] = useState(false);
  const [showAccordion2, setShowAccordion2] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // check header nav to be scroll or sticky
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const header = document.querySelector(".header-area");
  //     const headerHeight = header.offsetHeight;
  //     const scrollPosition = window.scrollY;

  //     if (scrollPosition > headerHeight) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // For handeling the screen width based on screen size
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth - 17);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const handleAccordionClick = () => {
    setShowAccordion(!showAccordion);
  };

  const handleAccordionClick2 = () => {
    if (windowWidth < 992) {
      setShowAccordion2(!showAccordion2);
    }
  };

  return (
    <div>
      <div className="header-area absolute-header">
        <div
          id="sticky-wrapper"
          className="sticky-wrapper"
          style={{ height: "90px" }}
        >
          <div
            // className={`sticky-area ${isSticky ? "is-sticky" : ""}`}
            className="sticky-area"
            // style={{
            //   width: windowWidth,
            //   position: isSticky ? "fixed" : "",
            //   top: isSticky ? "0px" : "",
            //   backgroundColor: isSticky ? "#333e38" : "",
            // }}
          >
            <div className="navigation">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-3">
                    <div
                      className="logo"
                      style={{
                        textAlign: window.innerWidth < 992 ? "left" : "center",
                      }}
                    >
                      <a
                        aria-current="page"
                        href="/"
                        className="router-link-active router-link-exact-active navbar-brand"
                      >
                        <img
                          src={Logo}
                          style={{
                            width: "130px",
                            height: "90px",
                            backgroundColor: "white",
                            padding: "8px",
                            borderRadius: "6px",
                          }}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-9">
                    <div className="main-menu">
                      <nav className="navbar navbar-expand-lg">
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className="navbar-toggler-icon"></span>
                          <span className="navbar-toggler-icon"></span>
                          <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                          className="collapse navbar-collapse justify-content-center"
                          id="navbarSupportedContent"
                        >
                          <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                              <NavLink
                                to="/"
                                className={({ isActive }) =>
                                  isActive ? "nav-link active" : "nav-link"
                                }
                                // style={{
                                //   color:
                                //     window.innerWidth < 991
                                //       ? ""
                                //       : isSticky
                                //       ? ""
                                //       : "white",
                                // }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  scrollToAnchor("/", "home", navigate);
                                }}
                              >
                                Home
                              </NavLink>
                            </li>

                            <li
                              className="nav-item"
                              onClick={
                                windowWidth < 992 ? handleAccordionClick : null
                              }
                            >
                              <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                  isActive ? "nav-link active" : "nav-link"
                                }
                                // style={{
                                //   color:
                                //     window.innerWidth < 991
                                //       ? ""
                                //       : isSticky
                                //       ? ""
                                //       : "white",
                                // }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  scrollToAnchor("/about", "about", navigate);
                                }}
                              >
                                About<span className="sub-nav-toggler"></span>
                                <button className="sub-nav-toggler">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    style={{
                                      width: "16px",
                                      height: "16px",
                                      fill: "#094074",
                                    }}
                                  >
                                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                  </svg>
                                </button>
                              </NavLink>

                              {(window.innerWidth < 992
                                ? showAccordion
                                : "show") && (
                                <ul
                                  className="sub-menu"
                                  style={{ display: "block" }}
                                >
                                  <li>
                                    <a
                                      href="/about/company-profile"
                                      className=""
                                      onClick={(e) => {
                                        e.preventDefault();
                                        scrollToAnchor(
                                          "/about",
                                          "about-us",
                                          navigate
                                        );
                                      }}
                                    >
                                      Company Profile
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      href="/about/vision&mission"
                                      className=""
                                      onClick={(e) => {
                                        e.preventDefault();
                                        scrollToAnchor(
                                          "/about",
                                          "vision",
                                          navigate
                                        );
                                      }}
                                    >
                                      Vision & Mission
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      href="/about/ourfacilities"
                                      className=""
                                      onClick={(e) => {
                                        e.preventDefault();
                                        scrollToAnchor(
                                          "/about",
                                          "facilities",
                                          navigate
                                        );
                                      }}
                                    >
                                      Our Facilities
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      href="/about/corevalues"
                                      className=""
                                      onClick={(e) => {
                                        e.preventDefault();
                                        scrollToAnchor(
                                          "/about",
                                          "coreValues",
                                          navigate
                                        );
                                      }}
                                    >
                                      Core Values
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      href="/about/team"
                                      className=""
                                      onClick={(e) => {
                                        e.preventDefault();
                                        scrollToAnchor(
                                          "/about",
                                          "team",
                                          navigate
                                        );
                                      }}
                                    >
                                      Our Team
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      href="/about/certificates"
                                      className=""
                                      onClick={(e) => {
                                        e.preventDefault();
                                        scrollToAnchor(
                                          "/about",
                                          "team",
                                          navigate
                                        );
                                      }}
                                    >
                                      Certificates
                                    </a>
                                  </li>
                                </ul>
                              )}
                            </li>

                            <li
                              className="nav-item"
                              onClick={
                                windowWidth < 992 ? handleAccordionClick2 : null
                              }
                            >
                              <NavLink
                                to="/products"
                                className={({ isActive }) =>
                                  isActive ? "nav-link active" : "nav-link"
                                }
                                // style={{
                                //   color:
                                //     window.innerWidth < 991
                                //       ? ""
                                //       : isSticky
                                //       ? ""
                                //       : "white",
                                // }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  scrollToAnchor(
                                    "/products",
                                    "product",
                                    navigate
                                  );
                                }}
                              >
                                Products
                                <span className="sub-nav-toggler"></span>
                                <button className="sub-nav-toggler">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    style={{
                                      width: "16px",
                                      height: "16px",
                                      fill: "#094074",
                                    }}
                                  >
                                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                  </svg>
                                </button>
                              </NavLink>

                              {(window.innerWidth < 992
                                ? showAccordion2
                                : "show") && (
                                <ul
                                  className="sub-menu"
                                  style={{
                                    display: "block",
                                    maxHeight:
                                      window.innerWidth < 992 ? "280px" : "",
                                    overflowY:
                                      window.innerWidth < 992 ? "auto" : "",
                                  }}
                                >
                                  <li>
                                    <a
                                      href="/products/red-chillies"
                                      className=""
                                      onClick={(e) => {
                                        e.preventDefault();
                                        scrollToAnchor(
                                          "/products",
                                          "red-chillies",
                                          navigate
                                        );
                                      }}
                                    >
                                      Red Chillies
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      href="/products/groundnuts"
                                      className=""
                                      onClick={(e) => {
                                        e.preventDefault();
                                        scrollToAnchor(
                                          "/products",
                                          "groundnuts",
                                          navigate
                                        );
                                      }}
                                    >
                                      Groundnuts
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      href="/products/sesame-seeds"
                                      className=""
                                      onClick={(e) => {
                                        e.preventDefault();
                                        scrollToAnchor(
                                          "/products",
                                          "sesame-seeds",
                                          navigate
                                        );
                                      }}
                                    >
                                      Sesame Seeds
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      href="/products/cumin-seeds"
                                      className=""
                                      onClick={(e) => {
                                        e.preventDefault();
                                        scrollToAnchor(
                                          "/products",
                                          "cumin-seeds",
                                          navigate
                                        );
                                      }}
                                    >
                                      Cumin Seeds
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      href="/products/coriander-seeds"
                                      className=""
                                      onClick={(e) => {
                                        e.preventDefault();
                                        scrollToAnchor(
                                          "/products",
                                          "coriander-seeds",
                                          navigate
                                        );
                                      }}
                                    >
                                      Coriander Seeds
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      href="/products/chickpeas"
                                      className=""
                                      onClick={(e) => {
                                        e.preventDefault();
                                        scrollToAnchor(
                                          "/products",
                                          "chickpeas",
                                          navigate
                                        );
                                      }}
                                    >
                                      Chickpeas
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      href="/products/fennel-seeds"
                                      className=""
                                      onClick={(e) => {
                                        e.preventDefault();
                                        scrollToAnchor(
                                          "/products",
                                          "fennel-seeds",
                                          navigate
                                        );
                                      }}
                                    >
                                      Fennel Seeds
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      href="/products/fenugreek-seeds"
                                      className=""
                                      onClick={(e) => {
                                        e.preventDefault();
                                        scrollToAnchor(
                                          "/products",
                                          "fenugreek-seeds",
                                          navigate
                                        );
                                      }}
                                    >
                                      Fenugreek Seeds
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      href="/products/basil-seeds"
                                      className=""
                                      onClick={(e) => {
                                        e.preventDefault();
                                        scrollToAnchor(
                                          "/products",
                                          "basil-seeds",
                                          navigate
                                        );
                                      }}
                                    >
                                      Basil Seeds
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      href="/products/raisin"
                                      className=""
                                      onClick={(e) => {
                                        e.preventDefault();
                                        scrollToAnchor(
                                          "/products",
                                          "raisin",
                                          navigate
                                        );
                                      }}
                                    >
                                      Raisin
                                    </a>
                                  </li>

                                  <li>
                                    <a
                                      href="/products/turmeric"
                                      className=""
                                      onClick={(e) => {
                                        e.preventDefault();
                                        scrollToAnchor(
                                          "/products",
                                          "turmeric",
                                          navigate
                                        );
                                      }}
                                    >
                                      Turmeric
                                    </a>
                                  </li>
                                </ul>
                              )}
                            </li>

                            <li className="nav-item">
                              <NavLink
                                to="/career"
                                className={({ isActive }) =>
                                  isActive ? "nav-link active" : "nav-link"
                                }
                                // style={{
                                //   color:
                                //     window.innerWidth < 991
                                //       ? ""
                                //       : isSticky
                                //       ? ""
                                //       : "white",
                                // }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  scrollToAnchor("/career", "career", navigate);
                                }}
                              >
                                Career
                              </NavLink>
                            </li>

                            {/* <li className="nav-item">
                              <NavLink
                                to="/presence"
                                className={({ isActive }) =>
                                  isActive ? "nav-link active" : "nav-link"
                                }
                                style={{
                                  color:
                                    window.innerWidth < 991
                                      ? ""
                                      : isSticky
                                      ? ""
                                      : "white",
                                }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  scrollToAnchor(
                                    "/presence",
                                    "our-presence",
                                    navigate
                                  );
                                }}
                              >
                                Our Presence
                              </NavLink>
                            </li> */}

                            <li className="nav-item">
                              <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                  isActive ? "nav-link active" : "nav-link"
                                }
                                // style={{
                                //   color:
                                //     window.innerWidth < 991
                                //       ? ""
                                //       : isSticky
                                //       ? ""
                                //       : "white",
                                // }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  scrollToAnchor(
                                    "/contact",
                                    "contact-us",
                                    navigate
                                  );
                                }}
                              >
                                Contact Us
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    </div>
                  </div>

                  {/* <div className="col-lg-1 text-end">
                    <div className="header-right-content">
                      <div
                        className="search-trigger"
                        onClick={handleSearchIcon}
                      >
                        <svg
                          className="search-icon"
                          style={{
                            width: "20px",
                            height: "20px",
                            fill: "black",
                            marginRight: "40px",
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                        </svg>
                      </div>

                      <a href="/contact" className="header-btn main-btn">
                        Get a Quote
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
