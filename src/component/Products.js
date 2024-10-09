import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import productChilli from "../assets/img/product/red-chillies.jpg";
import productGroundnut from "../assets/img/product/Groundnut.webp";
import productSesame from "../assets/img/product/sesame.jpg";
import productCumin from "../assets/img/product/Cumin-Spice.webp";
import productCoriander from "../assets/img/product/coriander.jpg";
import productChickpea from "../assets/img/product/chickpea.jpg";
import productFennel from "../assets/img/product/fennel-seeds.jpg";
import productFenugreek from "../assets/img/product/fenugreek.webp";
import productBasil from "../assets/img/product/BasilSeeds.webp";
import productRaisin from "../assets/img/product/raisin.webp";
import productTurmeric from "../assets/img/product/Turmeric.jpg";

function Products() {
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

  return (
    <div id="product" className="">
      {/* Breadcrumb starts here */}
      <div className="breadcroumb-area breadcroumb-area-product bread-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcroumb-title text-center">
                <h1>Products</h1>
                <h5>
                  <NavLink to="/" className="">
                    Home
                  </NavLink>{" "}
                  / Products
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb ends here */}

      {/* Product area starts here */}
      <div id="products" className="product-area section-padding theme-2">
        <div className="container">
          <div className="section-title">
            <h6 style={{ fontSize: "22px", marginLeft: "10px" }}>
              Our Products
            </h6>
          </div>

          {/* Product 1 start here */}
          <div id="red-chillies" className="section-padding">
            <div className="row align-items-center">
              <p style={{ fontSize: "15px", marginBottom: "25px" }}>
                <b>SCPL</b> , an export-oriented organization mainly focusing on
                quality supply of various food items like seeds, spices, herbs,
                etc.
              </p>

              <div
                className="col-lg-6"
                data-aos="zoom-in-right"
                data-aos-duration="2000"
              >
                <div className="about-content-area">
                  <div className="single-popup-wrap">
                    <img
                      className="img-fluid"
                      src={productChilli}
                      alt=""
                      style={{
                        width: "100%",
                        height: window.innerWidth < 576 ? "270px" : "350px",
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
                  <div className="text">
                    <h1
                      style={{
                        color: "#b88124",
                        fontSize: "50px",
                        marginBottom: "25px",
                      }}
                    >
                      Red Chillies
                    </h1>

                    <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      Indian Red Chilli or Dry Red Chilli is a popular spice
                      used in many cuisines around the world. It is known for
                      its pungent flavor and bright red color, which comes from
                      the compound capsaicin.
                      <b> Sidhhartha Corporation Pvt. Ltd</b> is one of the
                      leading Dry Red Chilli suppliers and exporters from India.
                      We offer the highest quality Red Chilli sourced from
                      different parts of India.
                    </p>

                    <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      We Source different types of Chillies like : S17 Teja, S18
                      Armour, S4 Sannam, Wonder hot, Super-hot, Byadagi, S15
                      Mahi, Mundu from Andhra Pradesh, Telangana, MP and
                      Karnataka.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product 1 ends here */}

          {/* Product 2 starts here */}
          <div id="groundnuts" className="section-padding">
            <div className="row align-items-center">
              <div
                className="col-lg-6 col-md-12"
                data-aos="zoom-in-right"
                data-aos-duration="2000"
              >
                <div className="tab-content-inner">
                  <div className="text">
                    <h1
                      style={{
                        color: "#b88124",
                        fontSize: "50px",
                        marginBottom: "25px",
                      }}
                    >
                      Groundnuts
                    </h1>

                    <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      Ground peanuts are finely processed peanuts with a rich,
                      nutty flavor and smooth texture. They are a versatile
                      ingredient used in various dishes and snacks, including
                      sauces, spreads, and baked goods.
                    </p>

                    <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      Being the Industry leader for more than 3 decades,{" "}
                      <b>SCPL </b>
                      has become synonymous with Quality in the seed industry.
                      Our market is growing not only in India but also globally.
                      As trusted exporters of Groundnuts, we make sure to
                      provide only top-quality products.
                    </p>

                    <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      We procure a variety of grounds such as : Karnataka Java,
                      AP JL, TN JL, Gujrat Java, Gujrat TJ, Gujrat BOLD from
                      Gujarat, Tamil Nadu, Andhra Pradesh and Karnataka.
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
                      src={productGroundnut}
                      alt=""
                      style={{
                        width: "100%",
                        height: window.innerWidth < 576 ? "270px" : "350px",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product 2 ends here */}

          {/* Product 3 start here */}
          <div id="sesame-seeds" className="section-padding">
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
                      src={productSesame}
                      alt=""
                      style={{
                        width: "100%",
                        height: window.innerWidth < 576 ? "270px" : "350px",
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
                      Sesame seeds
                    </h1>

                    <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      Sesame seeds are tiny, nutrient-rich seeds known for their
                      nutty flavor and crunchy texture. As prominent exporters
                      of sesame seeds in India, SCPL is committed to offering
                      natural sesame seed products of the highest quality at
                      competitive prices. We offer different qualities of Sesame
                      seeds like black sesame seeds, hulled sesame seeds,
                      natural sesame seeds, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product 3 ends here */}

          {/* Product 4 starts here */}
          <div id="cumin-seeds" className="section-padding">
            <div className="row align-items-center">
              <div
                className="col-lg-6 col-md-12"
                data-aos="zoom-in-right"
                data-aos-duration="2000"
              >
                <div className="tab-content-inner">
                  <div className="text">
                    <h1
                      style={{
                        color: "#b88124",
                        fontSize: "50px",
                        marginBottom: "25px",
                      }}
                    >
                      Cumin seeds
                    </h1>

                    <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      We are dedicated to our objective of delivering
                      high-quality cumin seeds to our clients at the most
                      competitive prices. Our commitment to maintaining
                      stringent quality standards has positioned us as the
                      leading exporters, manufacturers, and suppliers of cumin
                      seeds in India.
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
                      src={productCumin}
                      alt=""
                      style={{
                        width: "100%",
                        height: window.innerWidth < 576 ? "270px" : "350px",

                        borderRadius: "8px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product 4 ends here */}

          {/* Product 5 start here */}
          <div id="coriander-seeds" className="section-padding">
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
                      src={productCoriander}
                      alt=""
                      style={{
                        width: "100%",
                        height: window.innerWidth < 576 ? "270px" : "350px",

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
                      Coriander seeds
                    </h1>

                    <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      Coriander seeds are one of the oldest and common spices
                      used in various cuisines worldwide. These seeds have a
                      sweet, citrusy flavor and are used in many dishes, from
                      curries to pickles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product 5 ends here */}

          {/* Product 6 starts here */}
          <div id="chickpeas" className="section-padding">
            <div className="row align-items-center">
              <div
                className="col-lg-6 col-md-12"
                data-aos="zoom-in-right"
                data-aos-duration="2000"
              >
                <div className="tab-content-inner">
                  <div className="text">
                    <h1
                      style={{
                        color: "#b88124",
                        fontSize: "50px",
                        marginBottom: "25px",
                      }}
                    >
                      Chickpeas
                    </h1>

                    <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      Chickpeas are available in two main varieties: Desi and
                      Kabuli. They can be classified based on factors such as
                      shape, thickness, size and its color ranging from light
                      tan to dark black. Kabuli Chickpeas, on the other hand,
                      are lighter in color than the ‘Desi’ chickpeas.
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
                      src={productChickpea}
                      alt=""
                      style={{
                        width: "100%",
                        height: window.innerWidth < 576 ? "270px" : "350px",

                        borderRadius: "8px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product 6 ends here */}

          {/* Product 7 start here */}
          <div id="fennel-seeds" className="section-padding">
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
                      src={productFennel}
                      alt=""
                      style={{
                        width: "100%",
                        height: window.innerWidth < 576 ? "270px" : "350px",

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
                      Fennel seeds
                    </h1>

                    <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      Fennel seeds are the small, oval-shaped seeds of the
                      fennel plant. They are a common ingredient in many
                      cuisines and are often used as a flavoring agent in dishes
                      such as soups, stews, curries, and baked goods. These
                      seeds have a distinct, sweet licorice flavor and a strong
                      aroma, which makes them a popular addition to many foods
                      and beverages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product 7 ends here */}

          {/* Product 8 starts here */}
          <div id="fenugreek-seeds" className="section-padding">
            <div className="row align-items-center">
              <div
                className="col-lg-6 col-md-12"
                data-aos="zoom-in-right"
                data-aos-duration="2000"
              >
                <div className="tab-content-inner">
                  <div className="text">
                    <h1
                      style={{
                        color: "#b88124",
                        fontSize: "50px",
                        marginBottom: "25px",
                      }}
                    >
                      Fenugreek seeds
                    </h1>

                    <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      Fenugreek seeds are a popular spice commonly used in
                      Indian, Middle Eastern, and North African cuisines. It is
                      used as an herb (dried or fresh leaves), spice (seeds),
                      and vegetable (fresh leaves, sprouts , and micro greens ).
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
                      src={productFenugreek}
                      alt=""
                      style={{
                        width: "100%",
                        height: window.innerWidth < 576 ? "270px" : "350px",

                        borderRadius: "8px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product 8 ends here */}

          {/* Product 9 start here */}
          <div id="basil-seeds" className="section-padding">
            <div className="row align-items-center ">
              <div
                className="col-lg-6"
                data-aos="zoom-in-right"
                data-aos-duration="2000"
              >
                <div className="about-content-area">
                  <div className="single-popup-wrap">
                    <img
                      className="img-fluid"
                      src={productBasil}
                      alt=""
                      style={{
                        width: "100%",
                        height: window.innerWidth < 576 ? "270px" : "350px",

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
                      Basil seeds
                    </h1>

                    <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      Basil seeds are a popular ingredient in many Indian drinks
                      and desserts. These tiny black seeds are derived from the
                      basil plant and have a unique texture that makes them a
                      favorite among foodies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product 9 ends here */}

          {/* Product 10 start here */}
          <div id="raisin" className="section-padding">
            <div className="row align-items-center">
              <div
                className="col-lg-6 col-md-12"
                data-aos="zoom-in-right"
                data-aos-duration="2000"
              >
                <div className="tab-content-inner">
                  <div className="text">
                    <h1
                      style={{
                        color: "#b88124",
                        fontSize: "50px",
                        marginBottom: "25px",
                      }}
                    >
                      Raisin
                    </h1>

                    <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      A raisin is a dried grape, known for its sweet flavor and
                      chewy texture. Raisins are commonly used as a snack or
                      ingredient in various recipes. Raisins can range in color
                      from light golden to dark brown or black, depending on the
                      type of grape used and the drying process.
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
                      src={productRaisin}
                      alt=""
                      style={{
                        width: "100%",
                        height: window.innerWidth < 576 ? "270px" : "350px",

                        borderRadius: "8px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product 10 ends here */}

          {/* Product 11 start here */}
          <div id="turmeric" className="section-padding">
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
                      src={productTurmeric}
                      alt=""
                      style={{
                        width: "100%",
                        height: window.innerWidth < 576 ? "270px" : "350px",

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
                      Turmeric
                    </h1>

                    <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      Indian Turmeric is one of the most well known, widely
                      researched Ayurvedic Spice which is used across the
                      Globe.Turmeric has a warm, bitter taste and is frequently
                      used to flavor or color curry powders, mustards, butters,
                      and cheeses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product 11 ends here */}
        </div>
      </div>

      {/* Product area ends here */}

      {/* Progress wrap starts here */}
      <div
        id="progress-wrap"
        className="progress-wrap"
        onClick={(e) => {
          e.preventDefault();
          scrollToAnchor("/products", "product", navigate);
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

export default Products;
