import React from "react";
import { NavLink } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import productChilli from "../assets/img/product/IMG_6850.JPG";
import productGroundnut from "../assets/img/product/IMG_7675.JPG";
import productSesame from "../assets/img/product/sesame.jpg";
import productCumin from "../assets/img/product/Cumin-Spice.webp";
import productCoriander from "../assets/img/product/coriander-seed.webp";
import productChickpea from "../assets/img/product/chickpeas.jpg";
import productFennel from "../assets/img/product/fennel-seeds.jpg";
import productFenugreek from "../assets/img/product/fenugreek.webp";
import productBasil from "../assets/img/product/BasilSeeds.webp";
import productRaisin from "../assets/img/product/raisin.webp";
import productTurmeric from "../assets/img/product/Turmeric.jpg";

function Products() {
  AOS.init();

  interface ProductData {
    icon: JSX.Element;
    text: string;
  }

  const productData: ProductData[] = [
    {
      img: productChilli,
      heading: "Red Chillies",
      para1:
        "Indian Red Chilli or Dry Red Chilli is a popular spice used in many cuisines around the world. It is known for its pungent flavor and bright red color, which comes from the compound capsaicin. Sidhhartha Corporation Pvt. Ltd is one of the leading Dry Red Chilli suppliers and exporters from India. We offer the highest quality Red Chilli sourced from different parts of India.",
      para2:
        "We Source different types of Chillies like : S17 Teja, S18 Armour, S4 Sannam, Wonder hot, Super-hot, Byadagi, S15 Mahi, Mundu from Andhra Pradesh, Telangana, MP and Karnataka.",
    },
    {
      img: productGroundnut,
      heading: "Groundnuts",
      para1:
        "Ground peanuts are finely processed peanuts with a rich, nutty flavor and smooth texture. They are a versatile ingredient used in various dishes and snacks, including sauces, spreads, and baked goods.",
      para2:
        "Being the Industry leader for more than 3 decades, SCPL has become synonymous with Quality in the seed industry. Our market is growing not only in India but also globally. As trusted exporters of Groundnuts, we make sure to provide only top-quality products.",
      para3:
        "We procure a variety of grounds such as : Karnataka Java, AP JL, TN JL, Gujrat Java, Gujrat TJ, Gujrat BOLD from Gujarat, Tamil Nadu, Andhra Pradesh and Karnataka.",
    },
    {
      img: productSesame,
      heading: "Sesame seeds",
      para1:
        "Sesame seeds are tiny, nutrient-rich seeds known for their nutty flavor and crunchy texture. As prominent exporters of sesame seeds in India, SCPL is committed to offering natural sesame seed products of the highest quality at competitive prices. We offer different qualities of Sesame seeds like black sesame seeds, hulled sesame seeds, natural sesame seeds, etc.",
    },
    {
      img: productCumin,
      heading: "Cumin seeds",
      para1:
        "We are dedicated to our objective of delivering high-quality cumin seeds to our clients at the most competitive prices. Our commitment to maintaining stringent quality standards has positioned us as the leading exporters, manufacturers, and suppliers of cumin seeds in India.",
    },
    {
      img: productCoriander,
      heading: "Coriander seeds",
      para1:
        "Coriander seeds are one of the oldest and common spices used in various cuisines worldwide. These seeds have a sweet, citrusy flavor and are used in many dishes, from curries to pickles.",
    },
    {
      img: productChickpea,
      heading: "Chickpeas",
      para1:
        "Chickpeas are available in two main varieties: Desi and Kabuli. They can be classified based on factors such as shape, thickness, size and its color ranging from light tan to dark black. Kabuli Chickpeas, on the other hand, are lighter in color than the ‘Desi’ chickpeas.",
    },
    {
      img: productFennel,
      heading: "Fennel seeds",
      para1:
        "Fennel seeds are the small, oval-shaped seeds of the fennel plant. They are a common ingredient in many cuisines and are often used as a flavoring agent in dishes such as soups, stews, curries, and baked goods. These seeds have a distinct, sweet licorice flavor and a strong aroma, which makes them a popular addition to many foods and beverages.",
    },
    {
      img: productFenugreek,
      heading: "Fenugreek seeds",
      para1:
        "Fenugreek seeds are a popular spice commonly used in Indian, Middle Eastern, and North African cuisines. It is used as an herb (dried or fresh leaves), spice (seeds), and vegetable (fresh leaves, sprouts , and micro greens ).",
    },
    {
      img: productBasil,
      heading: "Basil seeds",
      para1:
        "Basil seeds are a popular ingredient in many Indian drinks and desserts. These tiny black seeds are derived from the basil plant and have a unique texture that makes them a favorite among foodies.",
    },
    {
      img: productRaisin,
      heading: "Raisin",
      para1:
        "A raisin is a dried grape, known for its sweet flavor and chewy texture. Raisins are commonly used as a snack or ingredient in various recipes. Raisins can range in color from light golden to dark brown or black, depending on the type of grape used and the drying process.",
    },
    {
      img: productTurmeric,
      heading: "Turmeric",
      para1:
        "Indian Turmeric is one of the most well known, widely researched Ayurvedic Spice which is used across the Globe.Turmeric has a warm, bitter taste and is frequently used to flavor or color curry powders, mustards, butters, and cheeses.",
    },
  ];

  return (
    <div id="product" className="product">
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
      <div
        id="products"
        className="product-area max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 lg:py-14"
      >
        <h6 className=" text-3xl font-bold mb-5 text-gray-800 text-center ">
          Our Products
        </h6>

        {productData.map((point, index) => (
          <div
            key={index}
            className={`grid grid-cols-2 gap-6 py-4 items-center`}
          >
            <div className={`${index % 2 !== 0 ? "order-last" : ""}`}>
              <img
                src={point.img}
                alt={point.heading}
                className=" w-full h-[350px] rounded-lg"
              />
            </div>

            <div>
              <h1 className=" text-[#b88124] text-5xl mb-5">{point.heading}</h1>
              <p>{point.para1}</p>
              {point.para2 && <p>{point.para2}</p>}
              {point.para3 && <p>{point.para3}</p>}
            </div>
          </div>
        ))}
      </div>
      {/* Product area ends here */}
    </div>
  );
}

export default Products;
