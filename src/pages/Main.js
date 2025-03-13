import React, { useState } from "react";
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

import { FadeUp, FadeDown, FadeRight } from "../component/Animation";

function Main() {
  AOS.init();

  const [activeSlide, setActiveSlide] = useState(0);

  const handleAfterChange = (current) => {
    setActiveSlide(current); // Set the current slide as active
  };

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
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: handleAfterChange,
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false, // Hide arrows
          dots: true, // Show dots
        },
      },
    ],
  };

  // Slider Next Btn
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} btn`}
        style={{
          ...style,
          right: "25px",
          top: "55%",
        }}
        onClick={onClick}
      />
    );
  }

  // Slider Previous Btn
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} btn`}
        style={{
          ...style,
          left: "25px",
          zIndex: "10",
          top: "55%",
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <div id="home">
      {/* Slider code starts here */}
      <Slider className="homepage-slides" {...settings}>
        {/* Slide 1 */}
        <div className="single-slide-item hero-area-bg-1">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="hero-area-content">
            <div className="container mx-auto px-4">
              <div
                className={`mx-4 ${
                  activeSlide === 0
                    ? "opacity-100 animate__animated animate__fadeInUp animate__delay-0s"
                    : "opacity-0"
                }`}
              >
                <div className="section-title">
                  <h2
                    className={`text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-5 ${
                      activeSlide === 0
                        ? "animate__animated animate__fadeInUp animate__delay-0s"
                        : ""
                    }`}
                  >
                    Leading in Agricultural Products and Spices
                  </h2>

                  <p
                    className={`text-sm md:text-base lg:text-lg text-white mb-5 md:w-2/3 ${
                      activeSlide === 0
                        ? "animate__animated animate__fadeInUp animate__delay-0s"
                        : ""
                    }`}
                  >
                    We are committed to providing you with the highest quality
                    products and exceptional service, no matter where you are in
                    the world.
                  </p>
                </div>

                <NavLink
                  to="/about"
                  className={`inline-flex items-center px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors ${
                    activeSlide === 0
                      ? "animate__animated animate__fadeInUp animate__delay-1s"
                      : ""
                  }`}
                >
                  Learn More
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="single-slide-item hero-area-bg-2">
          <div className=" absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="hero-area-content">
            <div className="container mx-auto px-4">
              <div
                className={`mx-4 ${
                  activeSlide === 1
                    ? "opacity-100 animate__animated animate__fadeInUp animate__delay-0s"
                    : "opacity-0"
                }`}
              >
                <div className="section-title">
                  <h2
                    className={`text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-5 ${
                      activeSlide === 1
                        ? "animate__animated animate__fadeInUp animate__delay-0s"
                        : ""
                    }`}
                  >
                    A comprehensive range of Seed Products
                  </h2>

                  <p
                    className={`text-sm md:text-base lg:text-lg text-white mb-5 md:w-2/3 ${
                      activeSlide === 1
                        ? "animate__animated animate__fadeInUp animate__delay-0s"
                        : ""
                    }`}
                  >
                    We maintain high standards for product flawlessness at all
                    phases, starting with collect gathering and ending with
                    packaging. We also ensure that products are handled with
                    care and supplied in accordance with international quality
                    standards.
                  </p>
                </div>

                <NavLink
                  to="/about"
                  className={`inline-flex items-center px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors ${
                    activeSlide === 1
                      ? "animate__animated animate__fadeInUp animate__delay-1s"
                      : ""
                  }`}
                >
                  Learn More
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="single-slide-item hero-area-bg-3">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="hero-area-content">
            <div className="container mx-auto px-4">
              <div
                className={`mx-4 ${
                  activeSlide === 2
                    ? "opacity-100 animate__animated animate__fadeInUp animate__delay-0s"
                    : "opacity-0"
                }`}
              >
                <div className="section-title">
                  <h2
                    className={`text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-5 ${
                      activeSlide === 2
                        ? "animate__animated animate__fadeInUp animate__delay-0s"
                        : ""
                    }`}
                  >
                    Robust infrastructure facilities
                  </h2>

                  <p
                    className={`text-sm md:text-base lg:text-lg text-white mb-5 md:w-2/3 ${
                      activeSlide === 2
                        ? "animate__animated animate__fadeInUp animate__delay-0s"
                        : ""
                    }`}
                  >
                    The best of infrastructure, processes, planning and people
                    bringing you the best and the most premium products in the
                    business.
                  </p>
                </div>

                <NavLink
                  to="/about"
                  className={`inline-flex items-center px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors ${
                    activeSlide === 2
                      ? "animate__animated animate__fadeInUp animate__delay-1s"
                      : ""
                  }`}
                >
                  Learn More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      {/* Slider code ends here */}

      {/* Info area starts here */}
      <div className="info-area relative mt-[-100px] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="info-inner md:col-span-2 rounded-lg  bg-white shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="info-bg h-[230px] md:h-[300px] bg-center bg-cover relative w-full rounded-lg md:rounded-r-none"></div>

                <div className=" col-span-2">
                  <div className="info-content border-l-[10px] border-[#fcb65a] h-full p-7 lg:p-8">
                    <h5 className=" text-xl md:text-2xl lg:text-3xl md:mb-5 text-gray-800 font-medium">
                      Leading Exporter of Agricultural Products like Red
                      Chillies and Groundnuts in india
                    </h5>

                    <FadeUp>
                      <NavLink
                        to="/products"
                        className=" text-[#b88124] text-lg md:text-xl font-medium tracking-[1px] mt-3 md:my-4"
                      >
                        View all products
                      </NavLink>
                    </FadeUp>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-founder bg-[#fcb65a] rounded-md h-full text-center py-8 px-12">
              <div className="info-img">
                <img src={agricultural} alt="" className=" w-16 h-16" />
              </div>
              <p className=" text-[#333e38] font-semibold text-5xl md:text-6xl my-4 md:my-7">
                30+
              </p>
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
      <div className="about-area max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12">
        <FadeDown>
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 text-[20px] md:text-2xl lg:text-[30px] font-semibold pb-5">
            Sidhhartha Corporation Pvt. Ltd - Taking India to The World!
          </h2>
        </FadeDown>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="main-img">
            <img
              src={aboutImg3}
              alt=""
              className=" w-full h-[350px] rounded-lg"
            />
          </div>

          <FadeRight>
            <p className="text-[15px] leading-[1.4rem] lg:text-base text-gray-600 font-medium mb-3 md:mb-5">
              With over 3 decades of relentless commitment to excellence,
              <b> Sidhhartha Corporation Pvt. Ltd.</b> where we pride ourselves
              on delivering an exceptional array of premium quality agricultural
              products like Spices and Seeds. At <b>SCPL</b>, we're dedicated to
              providing our customers with nothing less than the finest
              ingredients, handpicked and curated for their unadulterated
              purity. Our commitment to excellence is evident in every product
              we offer.
            </p>

            <p className="text-[15px] leading-[1.4rem] lg:text-base text-gray-600 font-medium">
              Our endeavor is to establish ourselves as one of the key players
              in this Agro Industry Domain, leveraging our own resources as well
              as the strength of India as a sourcing destination for the world
              for various agriculture-based items like Red Chillies, Groundnuts,
              Sesame Seeds, Basil Seeds, Rice, etc.
            </p>
          </FadeRight>
        </div>

        <FadeUp className="text mt-3 md:mt-5">
          <p className="text-[15px] leading-[1.4rem] lg:text-base text-gray-600 font-medium">
            By harnessing the latest technology and employing an experienced
            team of professionals, we ensure the purity, safety, and efficacy of
            every product. Our dedicated and experienced team is committed to
            satisfying the needs of clients worldwide, whether it’s by sourcing
            the highest quality ingredients, ensuring timely delivery, or
            offering unparalleled customer service.
          </p>
        </FadeUp>
      </div>
      {/* About us ends here */}
    </div>
  );
}

export default Main;
