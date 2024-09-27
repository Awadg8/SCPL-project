import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { GoRocket } from "react-icons/go";
import { GoGoal } from "react-icons/go";

// import Card from "./Card";

import AOS from "aos";
import "aos/dist/aos.css";

import "animate.css"; // For animations
import Slider from "react-slick"; //For slider

// import aboutImg from "../assets/img/about/about.png";
import aboutImg3 from "../assets/img/IMG_7219.jpg";
import facilityImg from "../assets/img/facility.jpg";

function About() {
  AOS.init();
  const navigate = useNavigate();

  const scrollToAnchor = (path, anchorId, navigateTo) => {
    navigateTo(`${path}#${anchorId}`);
    setTimeout(() => {
      const anchor = document.getElementById(anchorId);
      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div id="about" className="">
      {/* Breadcrumb area start here */}
      <div className="breadcroumb-area breadcroumb-area-about bread-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcroumb-title text-center">
                <h1>About Us</h1>
                <h5>
                  <NavLink to="/" className="">
                    Home
                  </NavLink>{" "}
                  / About Us
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb area ends here */}

      {/* Company profile starts here */}
      {/* <div id="company-profile" className="about-area section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 animate__animated animate__fadeInLeft">
              <div className="about-img-wrap">
                <img src={aboutImg} alt="" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 animate__animated animate__fadeInUp">
              <div className="info-content-area">
                <div className="section-title">
                  <h6 style={{fontSize:"22px"}}>About Us</h6>

                  <h2>
                    We're leading
                    <b> Agriculture Farm</b> in Downtown
                  </h2>
                </div>

                <p>
                  We are planty grow agriculture products Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Ea enim et, similique,
                  minus soluta ducimus.
                </p>

                <div className="about-feature-list">
                  <ul>
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{
                          width: "18px",
                          height: "18px",
                          fill: "#017D3F",
                        }}
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                      </svg>
                      Since our launch in 2007, to deliver high value project.
                    </li>

                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{
                          width: "18px",
                          height: "18px",
                          fill: "#017D3F",
                        }}
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                      </svg>
                      We always growth fresh &amp; quality vegetables.
                    </li>

                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style={{
                          width: "18px",
                          height: "18px",
                          fill: "#017D3F",
                        }}
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                      </svg>
                      Uninque latest machinary used the product cultivate.
                    </li>
                  </ul>
                </div>

                <br />

                <a
                  aria-current="page"
                  href="/about"
                  className="router-link-active router-link-exact-active main-btn"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Company profile ends here */}

      {/* About us starts here */}
      <div id="about-us" className="about-area section-padding theme-2">
        <div className="container">
          <div
            className="section-title"
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            <h6 style={{ fontSize: "22px", marginLeft: "0px" }}>About Us</h6>

            <h2>
              Leading Exporter of<b> Agricultural Products</b> like Red Chillies
              and Groundnuts in <b> India</b>
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
              <div className="tab-content-inner mt-30">
                <div className="text mb-30">
                  <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                    Established in 1990,{" "}
                    <b>Sidhhartha Corporation Pvt. Ltd. </b>
                    is a pioneering Indian exporter of premium-quality spices,
                    groundnuts and other agricultural products.
                  </p>

                  <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                    Our commitment to quality has enabled it to become a
                    recognized name in the industry. With a strong focus on
                    delivering products that meet global standards, <b>SCPL </b>
                    has emerged as a trusted partner for clients around the
                    world. Our expertise lies in the process of delivering
                    premium quality from the source to the end customer that we
                    have meticulously built and streamlined year after year.
                  </p>

                  <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                    With over 3 decades of experience and with our robust supply
                    chain management system these products are shipped to
                    several South Asian countries after meeting the highest
                    standards of sourcing, quality control, packaging and
                    transportation.
                  </p>

                  <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                    <b>
                      Sidhhartha Corporation Pvt. Ltd - Taking India to The
                      World!
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About us ends here */}

      {/* Vision area starts here */}
      {/* <div
        id="vision"
        className="vision-area section-padding pad-bot-50 theme-2"
      >
        <div className="container">
          <div
            className="section-title"
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            <h6
              style={{
                fontSize: "22px",
                marginBottom: "25px",
                marginLeft: "0px",
              }}
            >
              Vision and Mission
            </h6>
          </div>

          <div className="row align-items-center mb-30">
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
              <div className="tab-content-inner">
                <div className="text mb-30">
                  <h1
                    style={{
                      color: "#b88124",
                      fontSize: "50px",
                      marginBottom: "25px",
                    }}
                  >
                    Vision -
                  </h1>

                  <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                    Our vision is to be a pioneering force in the global
                    agricultural export industry, delivering exceptionally
                    produced agro-products. By harnessing cutting-edge
                    technology and fostering collaborative partnerships, we aim
                    to set new standards in quality and responsibility.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12"
              data-aos="zoom-in-right"
              data-aos-duration="2000"
            >
              <div className="tab-content-inner">
                <div className="text mb-30">
                  <h1
                    style={{
                      color: "#b88124",
                      fontSize: "50px",
                      marginBottom: "25px",
                    }}
                  >
                    Mission -
                  </h1>

                  <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                    Our mission is to bridge global trade by delivering
                    high-quality products and services with integrity and
                    efficiency. We are committed to fostering international
                    trade relationships through innovative solutions, by
                    leveraging our expertise and strategic partnerships, we
                    strive to create value for our clients and contribute to
                    their success on a global scale.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6"
              data-aos="zoom-in-left"
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
          </div>
        </div>
      </div> */}

      <div id="vision" className="vision-area section-padding theme-2 parallax">
        <div className="container">
          <div className="row parallax-content">
            <div
              className="col-sm-6 col-lg-6"
              data-aos="flip-left"
              data-aos-duration="3000"
            >
              <div className="icon-item">
                <div className="icon-item__img">
                  <GoGoal
                    style={{
                      width: "100px",
                      height: "100px",
                      fill: "#b88124",
                    }}
                  />
                </div>

                <h5 className="icon-item__title" style={{ color: "white" }}>
                  Our Vision
                </h5>

                <p
                  className="icon-item__text"
                  style={{
                    color: "white",
                    fontSize: "15px",
                    lineHeight: "1.6",
                  }}
                >
                  Our vision is to be a pioneering force in the global
                  agricultural export industry, delivering exceptionally
                  produced agro-products. By harnessing cutting-edge technology
                  and fostering collaborative partnerships, we aim to set new
                  standards in quality and responsibility.
                </p>
              </div>
            </div>

            <div
              className="col-sm-6 col-lg-6"
              data-aos="flip-right"
              data-aos-duration="3000"
            >
              <div className="icon-item">
                <div className="icon-item__img">
                  <GoRocket
                    style={{
                      width: "100px",
                      height: "100px",
                      fill: "#b88124",
                    }}
                  />
                </div>

                <h5 className="icon-item__title" style={{ color: "white" }}>
                  Our Mission
                </h5>

                <p
                  className="icon-item__text"
                  style={{
                    color: "white",
                    fontSize: "15px",
                    lineHeight: "1.6",
                  }}
                >
                  Our mission is to bridge global trade by delivering
                  high-quality products and services with integrity and
                  efficiency. We are committed to fostering international trade
                  relationships through innovative solutions, by leveraging our
                  expertise and strategic partnerships, we strive to create
                  value for our clients and contribute to their success on a
                  global scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Vision area ends here */}

      {/* Facility area starts here */}
      <div id="facilities" className="vision-area section-padding theme-2">
        <div className="container">
          <div
            className="section-title"
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            <h6
              style={{
                fontSize: "22px",
                marginBottom: "25px",
                marginLeft: "0px",
              }}
            >
              Our Facilities
            </h6>

            <h2>
              All these <b>processes</b> take place at our facilities in
              <b> Guntur </b>,<b> Khammam </b>,<b> Chennai </b> and
              <b> Pipavav</b>.
            </h2>
          </div>

          <div className="row align-items-center mb-30">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <article className="card">
                <div className="temporary_text">
                  <img
                    className="img-fluid"
                    src={facilityImg}
                    alt=""
                    style={{
                      width: "100%",
                      height: "350px",
                    }}
                  />
                </div>

                <div className="card_content card1">
                  <h2 className="card_title" style={{ fontSize: "27px" }}>
                    Guntur
                  </h2>

                  <p className="card_description">
                    Our facility at <b>Guntur (Andhra Pradesh)</b> is developed
                    on 3.85 acres of land, with 56,000 sq. ft. warehouse
                    facility and 88,000 sq.ft open facility- where we carry out
                    all the end-to-end execution of all our operations like
                    processing, drying, quality control, packing, storage, and
                    stuffing for all of our products.
                  </p>
                </div>
              </article>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <article className="card">
                <div className="temporary_text">
                  <img
                    className="img-fluid"
                    src={facilityImg}
                    alt=""
                    style={{
                      width: "100%",
                      height: "350px",
                    }}
                  />
                </div>

                <div className="card_content card2">
                  <h2 className="card_title" style={{ fontSize: "27px" }}>
                    Khammam
                  </h2>

                  <p className="card_description">
                    Similarly we have another facility at
                    <b> Khammam (Telangana) </b>
                    where we have developed 4 acres of land into a modern
                    warehouse of 31,000 sq.ft. and an open facility of 95,000
                    sq.ft to carry out all the processes.
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div className="row align-items-center mb-30">
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <article className="card">
                <div className="temporary_text">
                  <img
                    className="img-fluid"
                    src={facilityImg}
                    alt=""
                    style={{
                      width: "100%",
                      height: "350px",
                    }}
                  />
                </div>

                <div className="card_content card3">
                  <span className="card_title" style={{ fontSize: "27px" }}>
                    Chennai
                  </span>

                  <p className="card_description">
                    Our facility at <b>Chennai (Tamil Nadu)</b> Godown premises
                    consists of 22,500 sq ft. Our open facility- where we carry
                    out all the end-to-end execution of all our operations like
                    processing, quality control, packing, storage, and stuffing
                    for all of our products.
                  </p>
                </div>
              </article>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <article className="card">
                <div className="temporary_text">
                  <img
                    className="img-fluid"
                    src={facilityImg}
                    alt=""
                    style={{
                      width: "100%",
                      height: "350px",
                    }}
                  />
                </div>

                <div className="card_content card4">
                  <span className="card_title" style={{ fontSize: "27px" }}>
                    Pipavav
                  </span>

                  <p className="card_description">
                    Our facility at
                    <b> Pipavav (Gujarat) </b>
                    where we have a modern warehouse of 2500 sq mtr. area and an
                    open facility to carry out all the processes like drying,
                    Bagging, Loading, etc.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      {/* <Card /> */}

      {/* Facility area ends here */}

      {/* Corevalues starts here */}
      <div id="coreValues" className="section-padding theme-2">
        <div className="container">
          <div
            className="section-title"
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            <h6
              style={{
                fontSize: "22px",
                marginBottom: "60px",
                marginLeft: "0px",
              }}
            >
              Core Values
            </h6>

            {/* <h2>
              All these <b>processes</b> take place at our facilities in{" "}
              <b>Guntur</b> and <b>Khammam </b>.
            </h2> */}
          </div>

          <div className="row">
            <div
              className="col-sm-6 col-lg-4"
              data-aos="zoom-in-right"
              data-aos-duration="2000"
            >
              <div className="icon-item ">
                <div className="icon-item__img">
                  <img
                    src="https://navkarcorp.com/assets/ui/img/integrity.png"
                    alt=""
                    width="70px"
                    height="70px"
                  />
                </div>

                <h5 className="icon-item__title">Quality and Purity</h5>

                <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  We are committed to delivering the highest quality spices and
                  seeds, ensuring that they are pure, fresh, and free from
                  contaminants. Our rigorous quality control processes guarantee
                  that every product meets or exceeds industry standards.
                </p>
              </div>
            </div>

            <div
              className="col-sm-6 col-lg-4"
              data-aos="zoom-in-down"
              data-aos-duration="2000"
            >
              <div className="icon-item ">
                <div className="icon-item__img">
                  <img
                    src="https://navkarcorp.com/assets/ui/img/customer_focus.png"
                    alt=""
                    width="70px"
                    height="70px"
                  />
                </div>

                <h5 className="icon-item__title">Innovation</h5>

                <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  We embrace innovation in agriculture to improve product
                  quality, enhance farming practices, and meet the evolving
                  needs of our customers. Our investment in research and
                  technology drives continuous improvement.
                </p>
              </div>
            </div>

            <div
              className="col-sm-6 col-lg-4"
              data-aos="zoom-in-left"
              data-aos-duration="2000"
            >
              <div className="icon-item">
                <div className="icon-item__img">
                  <img
                    src="https://navkarcorp.com/assets/ui/img/hard_work.png"
                    alt=""
                    width="70px"
                    height="70px"
                  />
                </div>

                <h5 className="icon-item__title">Ethical Sourcing</h5>

                <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  We ensure fair trade practices and ethical sourcing,
                  supporting local farmers and communities. By fostering
                  transparent and respectful relationships, we contribute to the
                  well-being of all stakeholders in our supply chain.
                </p>
              </div>
            </div>

            <div
              className="col-sm-6 col-lg-4"
              data-aos="zoom-in-right"
              data-aos-duration="2000"
            >
              <div className="icon-item">
                <div className="icon-item__img">
                  <img
                    src="https://navkarcorp.com/assets/ui/img/excellence.png"
                    alt=""
                    width="70px"
                    height="70px"
                  />
                </div>

                <h5 className="icon-item__title">Customer Focus</h5>

                <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  Our customers are at the heart of everything we do. We are
                  dedicated to understanding their needs and providing
                  exceptional products and services that exceed their
                  expectations.
                </p>
              </div>
            </div>

            <div
              className="col-sm-6 col-lg-4"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              <div className="icon-item">
                <div className="icon-item__img">
                  <img
                    src="https://navkarcorp.com/assets/ui/img/bias_for_action.png"
                    alt=""
                    width="70px"
                    height="70px"
                  />
                </div>

                <h5 className="icon-item__title">Integrity and Transparency</h5>

                <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  We operate with honesty and transparency in all aspects of our
                  business. From sourcing to delivery, we provide clear
                  information and maintain open communication with our
                  customers.
                </p>
              </div>
            </div>

            <div
              className="col-sm-6 col-lg-4"
              data-aos="zoom-in-left"
              data-aos-duration="2000"
            >
              <div className="icon-item ">
                <div className="icon-item__img">
                  <img
                    src="https://navkarcorp.com/assets/ui/img/commit_to_deliver.png"
                    alt=""
                    width="70px"
                    height="70px"
                  />
                </div>

                <h5 className="icon-item__title">Reliability</h5>

                <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  SCPL always makes sure to complete orders once committed
                  irrespective of market situations. We always support and
                  cooperate with our customers and suppliers to create a
                  win-for-all situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Corevalues ends here */}

      {/* Team area starts here */}
      <div id="team" className="team-area gray-bg section-padding">
        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="zoom-out-down"
            data-aos-duration="2000"
          >
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h6 style={{ fontSize: "22px", marginLeft: "0px" }}>
                  Our Team
                </h6>

                <h2>
                  Dedicated <b>Team</b>
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-out-right"
              data-aos-duration="2000"
            >
              <div className="single-team-member">
                <div className="team-member-bg team-img-1">
                  <div className="team-content">
                    <div className="team-title">
                      <a href="/">James Cameron</a>
                    </div>

                    <div className="team-subtitle">
                      <p>Farmer</p>
                    </div>

                    <ul className="team-social">
                      <li>
                        <a href="/">
                          <i className="fa-brands fa-facebook"></i>
                        </a>
                      </li>

                      <li>
                        <a href="/">
                          <i className="fa-brands fa-youtube"></i>
                        </a>
                      </li>

                      <li>
                        <a href="/">
                          <i
                            className="fa-brands fa-instagram"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-out-up"
              data-aos-duration="2000"
            >
              <div className="single-team-member">
                <div className="team-member-bg team-img-2">
                  <div className="team-content">
                    <div className="team-title">
                      <a href="/">Mich Thomson</a>
                    </div>

                    <div className="team-subtitle">
                      <p>Farmer</p>
                    </div>

                    <ul className="team-social">
                      <li>
                        <a href="/">
                          <i className="fa-brands fa-facebook"></i>
                        </a>
                      </li>

                      <li>
                        <a href="/">
                          <i className="fa-brands fa-youtube"></i>
                        </a>
                      </li>

                      <li>
                        <a href="/">
                          <i
                            className="fa-brands fa-instagram"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-out-down"
              data-aos-duration="2000"
            >
              <div className="single-team-member">
                <div className="team-member-bg team-img-3">
                  <div className="team-content">
                    <div className="team-title">
                      <a href="/">Josh Batlar</a>
                    </div>

                    <div className="team-subtitle">
                      <p>Agriculture Officer</p>
                    </div>

                    <ul className="team-social">
                      <li>
                        <a href="/">
                          <i className="fa-brands fa-facebook"></i>
                        </a>
                      </li>

                      <li>
                        <a href="/">
                          <i className="fa-brands fa-youtube"></i>
                        </a>
                      </li>

                      <li>
                        <a href="/">
                          <i
                            className="fa-brands fa-instagram"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-out-left"
              data-aos-duration="2000"
            >
              <div className="single-team-member">
                <div className="team-member-bg team-img-4">
                  <div className="team-content">
                    <div className="team-title">
                      <a href="/">Albert Gill</a>
                    </div>

                    <div className="team-subtitle">
                      <p>Field Manager</p>
                    </div>

                    <ul className="team-social">
                      <li>
                        <a href="/">
                          <i className="fa-brands fa-facebook"></i>
                        </a>
                      </li>

                      <li>
                        <a href="/">
                          <i className="fa-brands fa-youtube"></i>
                        </a>
                      </li>

                      <li>
                        <a href="/">
                          <i
                            className="fa-brands fa-instagram"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team area ends here */}

      {/* Awards area starts here */}
      <div id="awards" className="awards-area gray-bg section-padding">
        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h6 style={{ fontSize: "22px", marginLeft: "0px" }}>
                  Our Awards
                </h6>

                <h2>
                  Recognition<b></b>
                </h2>
              </div>
            </div>
          </div>

          <Slider {...settings}>
            <div className="elements">
              <h3>2006-07</h3>

              <div className="heading mt-10">
                {/* <svg
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
                </svg> */}

                <p className="mb-10">
                  Highest Chilies Exporter -<b>Spices Board</b>.
                </p>
              </div>

              <div className="heading">
                <p className="mb-10">
                  Certificate of Commendation -<b>AMC Guntur</b>.
                </p>
              </div>
            </div>

            <div className="elements">
              <h3>2009-10</h3>

              <div className="heading mt-10">
                <p className="mb-10">
                  1st Place in Excellence in Export of Groundnuts -{" "}
                  <b>IOPEPC</b>.
                </p>
              </div>
            </div>

            <div className="elements">
              <h3>2010-11 </h3>
              <div className="heading mt-10">
                <p className="mb-10">
                  Silver Trophy Outstanding Performance in Export of Groundnuts
                  -<b>APEDA</b>
                </p>
              </div>

              <div className="heading">
                <p className="mb-10">
                  2nd Place in Excellence in Export of Groundnuts -{" "}
                  <b>IOPEPC</b>
                </p>
              </div>

              <div className="heading">
                <p className="mb-0">
                  Certificate of Merit - <b>Spices Board</b>
                </p>
              </div>
            </div>

            <div className="elements">
              <h3>2011-12 </h3>

              <div className="heading mt-10">
                <p className="mb-10">
                  Golden Trophy Outstanding Performance in Export of Groundnuts
                  - <b>APEDA</b>
                </p>
              </div>

              <div className="heading">
                <p className="mb-10">
                  2nd Place in Excellence in Export of Groundnuts -<b>IOPEPC</b>
                </p>
              </div>

              <div className="heading">
                <p className="mb-0">
                  Certificate of Merit - <b>Spices Board</b>
                </p>
              </div>
            </div>

            <div className="elements">
              <h3>2012-13</h3>

              <div className="heading mt-10">
                <p className="mb-10">
                  1st Place in Excellence in Export of Groundnuts -<b>IOPEPC</b>
                </p>
              </div>

              <div className="heading">
                <p className="mb-10">
                  Silver Trophy Outstanding Performance in Export of Groundnuts
                  - <b>APEDA</b>
                </p>
              </div>
            </div>

            <div className="elements">
              <h3>2013-14 </h3>

              <div className="heading mt-10">
                <p className="mb-10">
                  Silver Trophy Outstanding Performance in Export of Groundnuts
                  - <b>APEDA</b>
                </p>
              </div>

              <div className="heading">
                <p className="mb-10">
                  2nd Place in Excellence in Export of Groundnuts -<b>IOPEPC</b>
                </p>
              </div>

              <div className="heading">
                <p className="mb-0">
                  Certificate of Merit - <b>Spices Board</b>
                </p>
              </div>
            </div>

            <div className="elements">
              <h3>2014-15</h3>

              <div className="heading mt-10">
                <p className="mb-10">
                  Golden Trophy Top Most Exporter of Spices-<b>Spices Board</b>
                </p>
              </div>

              <div className="heading">
                <p className="mb-0">
                  Silver Trophy Outstanding Performance in Export of Groundnuts
                  - <b>APEDA</b>
                </p>
              </div>
            </div>

            <div className="elements">
              <h3>2015-16</h3>

              <div className="heading mt-10">
                <p className="mb-10">
                  Silver Trophy Top Most Exporter of Spices-<b>Spices Board</b>
                </p>
              </div>

              <div className="heading">
                <p className="mb-0">
                  Silver Trophy Outstanding Performance in Export of Groundnuts
                  - <b>APEDA</b>
                </p>
              </div>
            </div>

            <div className="elements">
              <h3>2016-17</h3>

              <div className="heading mt-10">
                <p className="mb-10">
                  Western Region Export Excellence (Three Star Export House)-
                  <b>FIEO</b>
                </p>
              </div>

              <div className="heading">
                <p className="mb-0">
                  Silver Trophy Top Most Exporter of spices- <b>Spices Board</b>
                </p>
              </div>
            </div>

            <div className="elements">
              <h3>2018-19</h3>

              <div className="heading mt-10">
                <p className="mb-10">
                  2nd Top most exporter of spices and Spice Products during year
                  <b> 2018-19</b>
                </p>
              </div>

              <div className="heading">
                <p className="mb-0">
                  Top Most Exporter of chilles during <b>2018-19</b>
                </p>
              </div>
            </div>

            <div className="elements">
              <h3>2019-20</h3>

              <div className="heading mt-10">
                <p className="mb-0">
                  3rd Top most exporter of spices and Spice Products during
                  <b> 2019-20</b>
                </p>
              </div>
            </div>
          </Slider>

          <div className="full-form mt-40">
            <p>
              * 1. IOPEPC - Indian Oilseeds and Produce Export Promotion
              Council.
            </p>

            <p>
              &nbsp;&nbsp; 2. APEDA - Agricultural and Processed Food Products
              Export Development Authority.
            </p>

            <p>
              &nbsp;&nbsp; 3. FIEO Federation of Indian Export Organizations.
            </p>
          </div>
          {/* 
          <div>
            <p>
              The Company is consistently leading the industry in Red Chilles
              and Groundnuts in the last two decades. We bagged lots of awards
              for top positions by APEDA, Spices Board, FIEO, and IOPEPC.
              Further, the Company has filed nominations: -
            </p>
            <p>
              FIEO Awards for Year 2020-21 & 2021-22 For mentioned below
              Category -
            </p>{" "}
            <p>
              1) Highest Foreign Exchange Earner-Western Region from Non MSME
            </p>{" "}
            <p>2) Three Star Export House Category from Non MSME</p> 3){" "}
            <p>
              Highest Foreign Exchange Earner- Maharashtra State from Non MSME.
            </p>
            <p>
              {" "}
              "Spice Board has been Short listed us for following of Export
              Trophy/Award categories for the year 2020-21
            </p>{" "}
            <p>
              "Outstanding Performance in Export of Groundnuts" for the year
              2019-20 & 2020-21 with the APEDA.
            </p>
            <p> 1) Trophy for TOP MOST EXPORTER of Spices & Spice Products.</p>
            <p> 2) Award for TOP MOST EXPORTER of chilies.</p>
          </div> */}
        </div>
      </div>
      {/* Awards areas ends here */}

      {/* Certificates area starts here */}
      <div
        id="certificates"
        className="certificates-area gray-bg section-padding"
      >
        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="zoom-in-down"
            data-aos-duration="2000"
          >
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h6 style={{ fontSize: "22px", marginLeft: "0px" }}>
                  Our Certificates
                </h6>

                <h2>Certificates</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in-right"
              data-aos-duration="2000"
            >
              <div className="single-team-member">
                <div className="team-member-bg certificate-img-1"></div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              <div className="single-team-member">
                <div className="team-member-bg certificate-img-2"></div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in-down"
              data-aos-duration="2000"
            >
              <div className="single-team-member">
                <div className="team-member-bg certificate-img-3"></div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="zoom-in-left"
              data-aos-duration="2000"
            >
              <div className="single-team-member">
                <div className="team-member-bg certificate-img-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Certificates area ends here */}

      {/* Progress wrap start here  */}
      <div
        id="progress-wrap"
        className="progress-wrap"
        onClick={(e) => {
          e.preventDefault();
          scrollToAnchor("/about", "about", navigate);
        }}
      >
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

export default About;
