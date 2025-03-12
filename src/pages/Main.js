import React from "react";
import { NavLink } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Slider from "react-slick"; // For Awards slider
import "animate.css"; // For animation

// slider animation
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import aboutImg3 from "../assets/img/IMG_6762.JPG";
import agricultural from "../assets/img/agriculture.png";

function Main() {
  AOS.init();

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
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
                >
                  <div className="section-title">
                    <h6
                      className=""
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      style={{ color: "#fff", marginLeft: "0px" }}
                    >
                      Leading in Agricultural Products and Spices
                    </h6>

                    <h1
                      className="text-left"
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
                      style={{ color: "#fff", marginLeft: "0px" }}
                    >
                      A comprehensive range of Seed Products
                    </h6>

                    <h1
                      className="text-left"
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
                      style={{ color: "#fff", marginLeft: "0px" }}
                    >
                      Robust infrastructure facilities
                    </h6>

                    <h1
                      className="text-left"
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
      <div className="info-area relative mt-[-100px] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="info-inner md:col-span-2 border rounded-lg  bg-white shadow-md">
              <div className="grid md:grid-cols-3">
                <div className="info-bg bg-cover"></div>

                <div className=" col-span-2">
                  <div className="info-content border-l-[10px] border-[#fcb65a] h-full p-9">
                    <h5 className=" text-3xl mb-5">
                      Leading Exporter of Agricultural Products like Red
                      Chillies and Groundnuts in india
                    </h5>

                    <NavLink
                      to="/products"
                      className=" text-[#b88124] text-xl font-medium tracking-[1px] my-4"
                    >
                      View all products
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-founder bg-[#fcb65a] rounded-md h-full text-center py-8 px-12">
              <div className="info-img">
                <img src={agricultural} alt="" className=" w-16 h-16" />
              </div>
              <p className=" text-[#333e38] font-semibold text-6xl my-7">30+</p>
              <p className=" text-[#333e38] text-base font-semibold tracking-[4px] text-center uppercase">
                Years <br />
                Experience
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Info area ends here */}

      {/* About us starts here */}
      <div className="about-area max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 lg:py-14">
        <div className="section-title">
          <h2 className=" text-3xl font-bold mb-5">
            Sidhhartha Corporation Pvt. Ltd - Taking India to The World!
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="main-img">
            <img
              src={aboutImg3}
              alt=""
              className=" w-full h-[350px] rounded-lg"
            />
          </div>

          <div className="">
            <p className="text-base mb-5">
              With over 3 decades of relentless commitment to excellence,
              <b> Sidhhartha Corporation Pvt. Ltd.</b> where we pride ourselves
              on delivering an exceptional array of premium quality agricultural
              products like Spices and Seeds. At <b>SCPL</b>, we're dedicated to
              providing our customers with nothing less than the finest
              ingredients, handpicked and curated for their unadulterated
              purity. Our commitment to excellence is evident in every product
              we offer.
            </p>

            <p className="mb-0 text-base">
              Our endeavor is to establish ourselves as one of the key players
              in this Agro Industry Domain, leveraging our own resources as well
              as the strength of India as a sourcing destination for the world
              for various agriculture-based items like Red Chillies, Groundnuts,
              Sesame Seeds, Basil Seeds, Rice, etc.
            </p>
          </div>
        </div>

        <div className="text mt-5">
          <p className="text-base">
            By harnessing the latest technology and employing an experienced
            team of professionals, we ensure the purity, safety, and efficacy of
            every product. Our dedicated and experienced team is committed to
            satisfying the needs of clients worldwide, whether it’s by sourcing
            the highest quality ingredients, ensuring timely delivery, or
            offering unparalleled customer service.
          </p>
        </div>
      </div>
      {/* About us ends here */}
    </div>
  );
}

export default Main;
