import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  AOS.init();

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("yard-1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
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
    <div id="contact-us" className="">
      {/* Breadcrumb starts here */}
      <div className="breadcroumb-area bread-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcroumb-title text-center">
                <h1>Contact Us</h1>
                <h5>
                  <NavLink to="/" className="">
                    Home
                  </NavLink>{" "}
                  / Contact Us
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb ends here */}

      {/* Contact us starts here */}
      <div id="contact" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12" data-aos="zoom-in-right">
              <div className="contact-info">
                <div className="section-title">
                  <h6 style={{ fontSize: "22px", marginLeft:"0px" }}>Contact Us</h6>

                  <h2>
                    Get in <b>Touch</b>
                  </h2>
                </div>

                <p>
                  If you have a contact Lorem ipsum dolor sit amet cum maiores,
                  excepturi fuga, est doloremque praesentium!
                </p>

                <div className="contact-content">
                  <div className="contact-inner">
                    <div>
                      <h3 className="mb-30">
                        Visit <b style={{ color: "#b88124" }}>Us</b>
                      </h3>
                    </div>

                    <div>
                      <div className="tabs horizontal-tabs r-tabs">
                        <ul className="horizontal-tabs__header r-tabs-nav mb-30">
                          <li
                            className={`r-tabs-tab ${
                              activeTab === "yard-1"
                                ? "r-tabs-state-active"
                                : "r-tabs-state-default"
                            }`}
                            onClick={() => handleTabClick("yard-1")}
                          >
                            <a href="#yard-1v" className="r-tabs-anchor">
                              <span>MUMBAI</span>
                            </a>
                          </li>

                          <li
                            className={`r-tabs-tab ${
                              activeTab === "yard-2"
                                ? "r-tabs-state-active"
                                : "r-tabs-state-default"
                            }`}
                            onClick={() => handleTabClick("yard-2")}
                          >
                            <a href="#yard-2v" className="r-tabs-anchor">
                              <span>ANDHRA PRADESH</span>
                            </a>
                          </li>

                          <li
                            className={`r-tabs-tab ${
                              activeTab === "yard-3"
                                ? "r-tabs-state-active"
                                : "r-tabs-state-default"
                            }`}
                            onClick={() => handleTabClick("yard-3")}
                          >
                            <a href="#yard-3v" className="r-tabs-anchor">
                              <span>TELANGANA</span>
                            </a>
                          </li>

                          <li
                            className={`r-tabs-tab ${
                              activeTab === "yard-4"
                                ? "r-tabs-state-active"
                                : "r-tabs-state-default"
                            }`}
                            onClick={() => handleTabClick("yard-4")}
                          >
                            <a href="#yard-4v" className="r-tabs-anchor">
                              <span>GUJARAT</span>
                            </a>
                          </li>

                          <li
                            className={`r-tabs-tab ${
                              activeTab === "yard-5"
                                ? "r-tabs-state-active"
                                : "r-tabs-state-default"
                            }`}
                            onClick={() => handleTabClick("yard-5")}
                          >
                            <a href="#yard-5v" className="r-tabs-anchor">
                              <span>CHENNAI</span>
                            </a>
                          </li>
                        </ul>

                        <div className="horizontal-tabs__content">
                          <div
                            className={`horizontal-tabs__item r-tabs-panel ${
                              activeTab === "yard-1"
                                ? "r-tabs-state-active"
                                : "r-tabs-state-default"
                            }`}
                            id="yard-1"
                            style={{
                              display:
                                activeTab === "yard-1" ? "block" : "none",
                            }}
                          >
                            <div className="contacts-item">
                              <div className="contacts-item__img">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 384 512"
                                  style={{
                                    width: "60px",
                                    heigth: "60px",
                                  }}
                                >
                                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                </svg>
                              </div>

                              <div className="contacts-item__details">
                                <h6>Address</h6>

                                <p>
                                  2ND FLOOR, 205-206, J.K. CHAMBER, SECTOR-17,
                                  VASHI, NAVI MUMBAI, THANE, MAHARASHTRA, 400703
                                </p>
                              </div>
                            </div>
                            {/* </div> */}
                          </div>

                          <div
                            className={`horizontal-tabs__item r-tabs-panel ${
                              activeTab === "yard-2"
                                ? "r-tabs-state-active"
                                : "r-tabs-state-default"
                            }`}
                            id="yard-2"
                            style={{
                              display:
                                activeTab === "yard-2" ? "block" : "none",
                            }}
                          >
                            <div className="col-md-12 top-50 top-md-0">
                              <div className="contacts-item">
                                <div className="contacts-item__img">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                  >
                                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                  </svg>
                                </div>

                                <div className="contacts-item__details">
                                  <h6>Address</h6>

                                  <p>
                                    D.NO.113-131, NEAR SAKSHI NEWS PAPER OFFICE,
                                    NH.16, ANKIREDDIPALEM VILLAGE, GUNTUR,
                                    GUNTUR, ANDHRA PRADESH - 522005
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className={`horizontal-tabs__item r-tabs-panel ${
                              activeTab === "yard-3"
                                ? "r-tabs-state-active"
                                : "r-tabs-state-default"
                            }`}
                            id="yard-3"
                            style={{
                              display:
                                activeTab === "yard-3" ? "block" : "none",
                            }}
                          >
                            <div className="col-md-12">
                              <div className="contacts-item">
                                <div className="contacts-item__img">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                  >
                                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                  </svg>
                                </div>

                                <div className="contacts-item__details">
                                  <h6>Address</h6>

                                  <p>
                                    DOOR NO 4-5-104, MIRCHI MARKET
                                    ROAD,BIJJALAVARI STREET, KHAMMAM, KHAMMAM,
                                    TELANGANA
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className={`horizontal-tabs__item r-tabs-panel ${
                              activeTab === "yard-4"
                                ? "r-tabs-state-active"
                                : "r-tabs-state-default"
                            }`}
                            id="icd-morbi"
                            style={{
                              display:
                                activeTab === "yard-4" ? "block" : "none",
                            }}
                          >
                            <div className="col-md-12 top-50 top-md-0">
                              <div className="contacts-item">
                                <div className="contacts-item__img">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                  >
                                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                  </svg>
                                </div>

                                <div className="contacts-item__details">
                                  <h6>Address</h6>

                                  <p>
                                    SURVEY NO 216, RAMPARA -2, PIPAVAV PORT
                                    ROAD, TAL. -RAJULA, DIST. AMRELI , 365560,
                                    GUJARAT
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className={`horizontal-tabs__item r-tabs-panel ${
                              activeTab === "yard-5"
                                ? "r-tabs-state-active"
                                : "r-tabs-state-default"
                            }`}
                            id="icd-morbi"
                            style={{
                              display:
                                activeTab === "yard-5" ? "block" : "none",
                            }}
                          >
                            <div className="col-md-12 top-50 top-md-0">
                              <div className="contacts-item">
                                <div className="contacts-item__img">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                  >
                                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                  </svg>
                                </div>

                                <div className="contacts-item__details">
                                  <h6>Address</h6>

                                  <p>
                                    SURVEY NO 85/1 SOTHUPAKKAM
                                    ROAD,THEERTHAKRIAMPET, REDHILLS, CHENNAI,
                                    600052
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="contact-inner">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
                    </svg>

                    <h6>Email Address</h6>

                    <p>info@agoora.com</p>
                  </div>

                  <div className="contact-inner">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                    </svg>

                    <h6>Call Now</h6>

                    <p>+88 120 2468</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12" data-aos="zoom-in-left">
              <div className="contact-form">
                <form action="index.html">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <input type="text" placeholder="Your Name" />
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                      <input type="email" placeholder="E-mail" />
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                      <input type="tel" placeholder="Phone Number" />
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                      <input type="text" placeholder="Subject" />
                    </div>

                    <div className="col-lg-12">
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        placeholder="Write Message"
                      ></textarea>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                      <button className="main-btn" type="button">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h3 className="bottom-0">Address</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12 ">
              <div className="tabs horizontal-tabs r-tabs">
                <ul className="horizontal-tabs__header r-tabs-nav">
                  <li
                    className={`r-tabs-tab ${
                      activeTab === "yard-1"
                        ? "r-tabs-state-active"
                        : "r-tabs-state-default"
                    }`}
                    onClick={() => handleTabClick("yard-1")}
                  >
                    <a href="#yard-1v" className="r-tabs-anchor">
                      <span>1</span>
                    </a>
                  </li>

                  <li
                    className={`r-tabs-tab ${
                      activeTab === "yard-2"
                        ? "r-tabs-state-active"
                        : "r-tabs-state-default"
                    }`}
                    onClick={() => handleTabClick("yard-2")}
                  >
                    <a href="#yard-2v" className="r-tabs-anchor">
                      <span>2</span>
                    </a>
                  </li>

                  <li
                    className={`r-tabs-tab ${
                      activeTab === "yard-3"
                        ? "r-tabs-state-active"
                        : "r-tabs-state-default"
                    }`}
                    onClick={() => handleTabClick("yard-3")}
                  >
                    <a href="#yard-3v" className="r-tabs-anchor">
                      <span>3</span>
                    </a>
                  </li>

                  <li
                    className={`r-tabs-tab ${
                      activeTab === "yard-4"
                        ? "r-tabs-state-active"
                        : "r-tabs-state-default"
                    }`}
                    onClick={() => handleTabClick("yard-4")}
                  >
                    <a href="#icd-morbiv" className="r-tabs-anchor">
                      <span>4</span>
                    </a>
                  </li>

                  <li
                    className={`r-tabs-tab ${
                      activeTab === "yard-5"
                        ? "r-tabs-state-active"
                        : "r-tabs-state-default"
                    }`}
                    onClick={() => handleTabClick("yard-5")}
                  >
                    <a href="#yard-5" className="r-tabs-anchor">
                      <span>5</span>
                    </a>
                  </li>
                </ul>

                <div className="horizontal-tabs__content">
                  <div
                    className={`horizontal-tabs__item r-tabs-panel ${
                      activeTab === "yard-1"
                        ? "r-tabs-state-active"
                        : "r-tabs-state-default"
                    }`}
                    id="yard-1"
                    style={{
                      display: activeTab === "yard-1" ? "block" : "none",
                    }}
                  >
                    <div className="col-md-12">
                      <h5 className="contacts__title">NAVKAR CFS 1</h5>

                      <div className="contacts-item">
                        <div className="contacts-item__img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            style={{ width: "60px", heigth: "60px" }}
                          >
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                          </svg>
                        </div>

                        <div className="contacts-item__details">
                          <span>
                            2ND FLOOR, 205-206, J.K. CHAMBER, SECTOR-17, VASHI,
                            NAVI MUMBAI, THANE, MAHARASHTRA, 400703
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`horizontal-tabs__item r-tabs-panel ${
                      activeTab === "yard-2"
                        ? "r-tabs-state-active"
                        : "r-tabs-state-default"
                    }`}
                    id="yard-2"
                    style={{
                      display: activeTab === "yard-2" ? "block" : "none",
                    }}
                  >
                    <div className="col-md-12 top-50 top-md-0">
                      <h5 className="contacts__title">NAVKAR CFS 2</h5>

                      <div className="contacts-item">
                        <div className="contacts-item__img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                          >
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                          </svg>
                        </div>

                        <div className="contacts-item__details">
                          <span>
                            D.NO.113-131, NEAR SAKSHI NEWS PAPER OFFICE, NH.16,
                            ANKIREDDIPALEM VILLAGE, GUNTUR, GUNTUR, ANDHRA
                            PRADESH - 522005
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`horizontal-tabs__item r-tabs-panel ${
                      activeTab === "yard-3"
                        ? "r-tabs-state-active"
                        : "r-tabs-state-default"
                    }`}
                    id="yard-3"
                    style={{
                      display: activeTab === "yard-3" ? "block" : "none",
                    }}
                  >
                    <div className="col-md-12">
                      <h5 className="contacts__title">NAVKAR CFS 3</h5>

                      <div className="contacts-item">
                        <div className="contacts-item__img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                          >
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                          </svg>
                        </div>

                        <div className="contacts-item__details">
                          <span>
                            DOOR NO 4-5-104, MIRCHI MARKET ROAD,BIJJALAVARI
                            STREET, KHAMMAM, KHAMMAM, TELANGANA
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`horizontal-tabs__item r-tabs-panel ${
                      activeTab === "yard-4"
                        ? "r-tabs-state-active"
                        : "r-tabs-state-default"
                    }`}
                    id="icd-morbi"
                    style={{
                      display: activeTab === "yard-4" ? "block" : "none",
                    }}
                  >
                    <div className="col-md-12 top-50 top-md-0">
                      <h5 className="contacts__title">ICD Morbi</h5>

                      <div className="contacts-item">
                        <div className="contacts-item__img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                          >
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                          </svg>
                        </div>

                        <div className="contacts-item__details">
                          <span>
                            SURVEY NO 216, RAMPARA -2, PIPAVAV PORT ROAD, TAL.
                            -RAJULA, DIST. AMRELI , 365560, GUJARAT
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`horizontal-tabs__item r-tabs-panel ${
                      activeTab === "yard-5"
                        ? "r-tabs-state-active"
                        : "r-tabs-state-default"
                    }`}
                    id="icd-morbi"
                    style={{
                      display: activeTab === "yard-5" ? "block" : "none",
                    }}
                  >
                    <div className="col-md-12 top-50 top-md-0">
                      <h5 className="contacts__title">ICD Morbi</h5>

                      <div className="contacts-item">
                        <div className="contacts-item__img">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                          >
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                          </svg>
                        </div>

                        <div className="contacts-item__details">
                          <span>
                            SURVEY NO 85/1 SOTHUPAKKAM ROAD,THEERTHAKRIAMPET,
                            REDHILLS, CHENNAI, 600052
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Contact us ends here */}

      {/* Progress wrap starts here */}
      <div
        id="progress-wrap"
        className="progress-wrap"
        onClick={(e) => {
          e.preventDefault();
          scrollToAnchor("/contact", "contact-us", navigate);
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
      {/* Progress ends here */}
    </div>
  );
}

export default Contact;
