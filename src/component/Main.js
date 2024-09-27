import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Slider from "react-slick"; //For slider

import "animate.css"; // For animations

// slider animation
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import aboutImg3 from "../assets/img/IMG_7043.JPG";
// import chooseImg from "../assets/img/IMG_7046.jpg";
// import productImg from "../assets/img/portfolio/port-bg-1.jpg";
import agricultural from "../assets/img/agriculture.png";

function Main() {
  AOS.init();

  const navigate = useNavigate();

  // Slider next btn
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} btn`}
        style={{
          ...style,
          display: window.innerWidth > 1100 ? "block" : "none",
          right: "50px",
          top: "55%",
        }}
        onClick={onClick}
      />
    );
  }

  // Slider previous btn
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} btn`}
        style={{
          ...style,
          display: window.innerWidth > 1100 ? "block" : "none",
          left: "30px",
          zIndex: "10",
          top: "55%",
        }}
        onClick={onClick}
      />
    );
  }

  // Slider animation here
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3500,
    fade: true,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

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
    <div id="home" className="">
      {/* Slider code starts here */}
      <Slider className="homepage-slides" {...settings}>
        {/* Slide 1 */}
        <div className="single-slide-item hero-area-bg-1">
          <div className="overlay"></div>
          <div className="hero-area-content">
            <div className="container">
              <div className="row justify-content-center">
                <div
                  className="col-lg-12"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  // data-wow-delay=".2s"
                >
                  <div className="section-title">
                    <h6
                      className=""
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      style={{ color: "#fcdb5a", marginLeft: "0px" }}
                    >
                      Leading in Agricultural Products and Spices
                    </h6>

                    <h1
                      className=""
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      style={{ maxWidth: window.innerWidth > 991 ? "75%" : "" }}
                    >
                      We are committed to providing you with the highest quality
                      products and exceptional service, no matter where you are
                      in the world.
                    </h1>
                  </div>

                  <NavLink
                    to="/about"
                    className="main-btn"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    Learn More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="single-slide-item hero-area-bg-2">
          <div className="overlay"></div>
          <div className="hero-area-content">
            <div className="container">
              <div className="row justify-content-center">
                <div
                  className="col-lg-12 animate__animated animate__fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="section-title">
                    <h6
                      className="animate__animated animate__fadeInDown"
                      style={{ color: "#fcdb5a", marginLeft: "0px" }}
                    >
                      A comprehensive range of Seed Products
                    </h6>

                    <h1
                      className="animate__animated animate__fadeInUp"
                      style={{ maxWidth: window.innerWidth > 991 ? "75%" : "" }}
                    >
                      We maintain high standards for product flawlessness at all
                      phases, starting with collect gathering and ending with
                      packaging. We also ensure that products are handled with
                      care and supplied in accordance with international quality
                      standards.
                    </h1>
                  </div>

                  <NavLink
                    to="/about"
                    className="main-btn animate__animated animate__fadeInDown"
                  >
                    Learn More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="single-slide-item hero-area-bg-3">
          <div className="overlay"></div>
          <div className="hero-area-content">
            <div className="container">
              <div className="row justify-content-center">
                <div
                  className="col-lg-12 animate__animated animate__fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="section-title">
                    <h6
                      className="animate__animated animate__fadeInDown"
                      style={{ color: "#fcdb5a", marginLeft: "0px" }}
                    >
                      Robust infrastructure facilities
                    </h6>

                    <h1
                      className="animate__animated animate__fadeInUp"
                      style={{ maxWidth: window.innerWidth > 991 ? "75%" : "" }}
                    >
                      The best of infrastructure, processes, planning and people
                      bringing you the best and the most premium products in the
                      business.
                    </h1>
                  </div>
                  <NavLink
                    to="/about"
                    className="main-btn animate__animated animate__fadeInDown"
                  >
                    Learn More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      {/* Slidere code ends here */}

      {/* Info area starts here */}
      <div className="info-area">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-9 col-12"
              data-aos="zoom-in-right"
              data-aos-duration="2000"
            >
              <div className="info-inner">
                <div className="row gx-0">
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="info-bg bg-cover"></div>
                  </div>

                  <div className="col-lg-8 col-md-8 col-12">
                    <div className="info-content">
                      <h5 style={{ fontSize: "30px" }}>
                        Leading Exporter of Agricultural Products like Red
                        Chillies and Groundnuts in india
                      </h5>

                      <NavLink to="/products" className="">
                        View all services
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-4 col-12"
              data-aos="zoom-in-left"
              data-aos-duration="2000"
            >
              <div className="info-founder">
                <div className="info-img">
                  <img
                    src={agricultural}
                    alt=""
                    style={{ width: "64px", height: "64px" }}
                  />
                </div>
                <p className="highlight">30+</p>
                <p>
                  Years <br />
                  Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Info area ends here */}

      {/* About us starts here */}
      <div className="about-area section-padding theme-2">
        <div className="container">
          <div
            className="section-title"
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            <h6 style={{ fontSize: "22px", marginLeft: "0px" }}>
              A little Bit More
            </h6>

            <h2>
              <b> Sidhhartha Corporation Pvt. Ltd</b> - Taking <b>India</b> to
              The World!
            </h2>
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="zoom-in-right"
              data-aos-duration="2000"
            >
              <div className="about-content-area">
                <div className="single-popup-wrap">
                  <img
                    className="img-fluid"
                    src={aboutImg3}
                    alt=""
                    style={{
                      width: "100%",
                      height: "350px",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="zoom-in-left"
              data-aos-duration="2000"
            >
              <div className="tab-content-inner mt-20">
                <div className="text">
                  <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                    With over 3 decades of relentless commitment to excellence,
                    <b> Sidhhartha Corporation Pvt. Ltd.</b> where we pride
                    ourselves on delivering an exceptional array of premium
                    quality agricultural products like Spices and Seeds. At{" "}
                    <b>SCPL</b>, we're dedicated to providing our customers with
                    nothing less than the finest ingredients, handpicked and
                    curated for their unadulterated purity. Our commitment to
                    excellence is evident in every product we offer.
                  </p>

                  <p
                    className="mb-0"
                    style={{ fontSize: "15px", lineHeight: "1.6" }}
                  >
                    Our endeavor is to establish ourselves as one of the key
                    players in this Agro Industry Domain, leveraging our own
                    resources as well as the strength of India as a sourcing
                    destination for the world for various agriculture-based
                    items like Red Chillies, Groundnuts, Sesame Seeds, Basil
                    Seeds, Rice, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-12"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              <div className="tab-content-inner">
                <div className="text mt-20">
                  <p
                    className="mb-0"
                    style={{ fontSize: "15px", lineHeight: "1.6" }}
                  >
                    By harnessing the latest technology and employing an
                    experienced team of professionals, we ensure the purity,
                    safety, and efficacy of every product. Our dedicated and
                    experienced team is committed to satisfying the needs of
                    clients worldwide, whether it’s by sourcing the highest
                    quality ingredients, ensuring timely delivery, or offering
                    unparalleled customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About us ends here */}

      {/* Portfolio area starts here  */}
      {/* <div className="portfolio-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h6>Our Great Work</h6>

                <h2>
                  We do <b>best</b> work <br />
                  for our customers
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-list">
                <div
                  className="single-portfolio-item large agriculture"
                  to="[object Object]"
                >
                  <img src={productImg} alt="" />

                  <div className="details">
                    <div className="info">
                      <h5>
                        <a href="/project-details" className="">
                          Fresh Vegetables
                        </a>
                      </h5>

                      <a href={productImg} data-fancybox="gallery">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="product-img"
                          style={{
                            width: "35px",
                            height: "35px",
                            fill: "white",
                          }}
                        >
                          <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="single-portfolio-item large agriculture"
                  to="[object Object]"
                >
                  <img src={productImg} alt="" />

                  <div className="details">
                    <div className="info">
                      <h5>
                        <a href="/project-details" className="">
                          Fresh Vegetables
                        </a>
                      </h5>

                      <a href={productImg} data-fancybox="gallery">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="product-img"
                          style={{
                            width: "35px",
                            height: "35px",
                            fill: "white",
                          }}
                        >
                          <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className="single-portfolio-item large agriculture"
                  to="[object Object]"
                >
                  <img src={productImg} alt="" />

                  <div className="details">
                    <div className="info">
                      <h5>
                        <a href="/project-details" className="">
                          Fresh Vegetables
                        </a>
                      </h5>

                      <a href={productImg} data-fancybox="gallery">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="product-img"
                          style={{
                            width: "35px",
                            height: "35px",
                            fill: "white",
                          }}
                        >
                          <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Portfolio area ends here */}

      {/* Why choose us starts here */}
      {/* <div className="feature-area section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-5 col-md-12 col-sm-12"
              data-aos-duration="2000"
              data-aos="zoom-in-right"
            >
              <div className="feature-image">
                <img
                  src={chooseImg}
                  alt=""
                  style={{
                    width: "85%",
                    height: "100%",
                    borderRadius: "8px",
                  }}
                />
              </div>
            </div>

            <div
              className="offset-xl-1 col-xl-7 col-lg-7 col-md-12 col-sm-12 mt-40"
              data-aos="zoom-in-left"
              data-aos-duration="2000"
            >
              <div className="section-title">
                <h6 style={{ fontSize: "22px" }}>Why Choose Us</h6>
                <h2>
                  We manage &amp; organized <br />
                  Fresh<b> Products</b>
                </h2>
              </div>

              <div
                className="single-feature-item wow fadeInUp"
                data-wow-delay=".3s"
                // style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
              >
                <div className="feature-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="25px"
                    height="25px"
                    style={{ marginRight: "15px" }}
                  >
                    <path
                      fill="#017d3f"
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>

                  <p>Wide network of organic farmers and direct sourcing</p>
                </div>
              </div>

              <div
                className="single-feature-item wow fadeInUp"
                data-wow-delay=".3s"
                // style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
              >
                <div className="feature-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="25px"
                    height="25px"
                    style={{ marginRight: "15px" }}
                  >
                    <path
                      fill="#017d3f"
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>

                  <p>
                    We provide the best quality products without any chemicals.
                  </p>
                </div>
              </div>

              <div
                className="single-feature-item wow fadeInUp"
                data-wow-delay=".3s"
                // style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
              >
                <div className="feature-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="25px"
                    height="25px"
                    style={{ marginRight: "15px" }}
                  >
                    <path
                      fill="#017d3f"
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>

                  <p>Robust Supply Chain Management</p>
                </div>
              </div>

              <div
                className="single-feature-item wow fadeInUp"
                data-wow-delay=".3s"
                // style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
              >
                <div className="feature-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="25px"
                    height="25px"
                    style={{ marginRight: "15px" }}
                  >
                    <path
                      fill="#017d3f"
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>

                  <p>Collaboration with Trusted Farmers and Suppliers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Why choose us ends here */}

      {/* Home video starts here */}
      <div className="service-area gray-bg theme-2 section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="">
              <div
                className="section-title"
                data-aos="zoom-in-down"
                data-aos-duration="2000"
              >
                <h6 style={{ fontSize: "22px", marginLeft: "0px" }}>
                  What we do
                </h6>
                <h2>
                  We are Providing <b>Quality Products</b> for our customers
                </h2>
              </div>

              <div
                className="service-bg"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <div className="overlay"></div>

                <div className="pop-up-video">
                  <a
                    href="https://www.youtube.com/watch?v=Qfozqrom7Bk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-play-btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      style={{
                        fill: "white",
                        width: "25px",
                        height: "25px",
                        marginBottom: "7px",
                        marginLeft: "5px",
                      }}
                    >
                      <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Home video ends here */}

      {/* Progress wrap starts here */}
      <div
        id="progress-wrap"
        className="progress-wrap"
        onClick={(e) => {
          e.preventDefault();
          scrollToAnchor("/", "home", navigate);
        }}
      >
        {/* <svg
          className="progress-circle svg-content"
          
          style={{ width:"46px", height:"46px" }}
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            // style={{
            //   transition: "stroke-dashoffset 10ms linear",
            //   strokeDasharray: "307.919, 307.919",
            //   strokeDashoffset: "307.919",
            // }}
          ></path>
        </svg> */}

        <svg
          className="progress-circle svg-content"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM385 215c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-71-71L280 392c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-214.1-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 103c9.4-9.4 24.6-9.4 33.9 0L385 215z" />
        </svg>
      </div>
      {/* Progress wrap ends here */}
    </div>
  );
}

export default Main;
