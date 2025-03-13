import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

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

import BreadCrumb from "../component/BreadCrumb";
import BreadCrumbImg from "../assets/img/product.jpg";

import { FadeRight, FadeLeft } from "../component/Animation";

function Products() {
  AOS.init();

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const productName = location.hash.replace("#", "");
      const targetElement = document.getElementById(productName);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [location]);

  interface ProductData {
    icon: JSX.Element;
    text: string;
  }

  const productData: ProductData[] = [
    {
      id: "RedChillies",
      img: productChilli,
      heading: "Red Chillies",
      para1:
        "Indian Red Chilli or Dry Red Chilli is a popular spice used in many cuisines around the world. It is known for its pungent flavor and bright red color, which comes from the compound capsaicin. Sidhhartha Corporation Pvt. Ltd is one of the leading Dry Red Chilli suppliers and exporters from India. We offer the highest quality Red Chilli sourced from different parts of India.",
      para2:
        "We Source different types of Chillies like : S17 Teja, S18 Armour, S4 Sannam, Wonder hot, Super-hot, Byadagi, S15 Mahi, Mundu from Andhra Pradesh, Telangana, MP and Karnataka.",
    },
    {
      id: "Groundnut",
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
      id: "SesameSeeds",
      img: productSesame,
      heading: "Sesame Seeds",
      para1:
        "Sesame seeds are tiny, nutrient-rich seeds known for their nutty flavor and crunchy texture. As prominent exporters of sesame seeds in India, SCPL is committed to offering natural sesame seed products of the highest quality at competitive prices. We offer different qualities of Sesame seeds like black sesame seeds, hulled sesame seeds, natural sesame seeds, etc.",
    },
    {
      id: "CuminSeeds",
      img: productCumin,
      heading: "Cumin Seeds",
      para1:
        "We are dedicated to our objective of delivering high-quality cumin seeds to our clients at the most competitive prices. Our commitment to maintaining stringent quality standards has positioned us as the leading exporters, manufacturers, and suppliers of cumin seeds in India.",
    },
    {
      id: "CorianderSeeds",
      img: productCoriander,
      heading: "Coriander Seeds",
      para1:
        "Coriander seeds are one of the oldest and common spices used in various cuisines worldwide. These seeds have a sweet, citrusy flavor and are used in many dishes, from curries to pickles.",
    },
    {
      id: "Chickpeas",
      img: productChickpea,
      heading: "Chickpeas",
      para1:
        "Chickpeas are available in two main varieties: Desi and Kabuli. They can be classified based on factors such as shape, thickness, size and its color ranging from light tan to dark black. Kabuli Chickpeas, on the other hand, are lighter in color than the ‘Desi’ chickpeas.",
    },
    {
      id: "FennelSeeds",
      img: productFennel,
      heading: "Fennel Seeds",
      para1:
        "Fennel seeds are the small, oval-shaped seeds of the fennel plant. They are a common ingredient in many cuisines and are often used as a flavoring agent in dishes such as soups, stews, curries, and baked goods. These seeds have a distinct, sweet licorice flavor and a strong aroma, which makes them a popular addition to many foods and beverages.",
    },
    {
      id: "FenugreekSeeds",
      img: productFenugreek,
      heading: "Fenugreek Seeds",
      para1:
        "Fenugreek seeds are a popular spice commonly used in Indian, Middle Eastern, and North African cuisines. It is used as an herb (dried or fresh leaves), spice (seeds), and vegetable (fresh leaves, sprouts , and micro greens ).",
    },
    {
      id: "BasilSeeds",
      img: productBasil,
      heading: "Basil Seeds",
      para1:
        "Basil seeds are a popular ingredient in many Indian drinks and desserts. These tiny black seeds are derived from the basil plant and have a unique texture that makes them a favorite among foodies.",
    },
    {
      id: "Raisin",
      img: productRaisin,
      heading: "Raisin",
      para1:
        "A raisin is a dried grape, known for its sweet flavor and chewy texture. Raisins are commonly used as a snack or ingredient in various recipes. Raisins can range in color from light golden to dark brown or black, depending on the type of grape used and the drying process.",
    },
    {
      id: "Turmeric",
      img: productTurmeric,
      heading: "Turmeric",
      para1:
        "Indian Turmeric is one of the most well known, widely researched Ayurvedic Spice which is used across the Globe.Turmeric has a warm, bitter taste and is frequently used to flavor or color curry powders, mustards, butters, and cheeses.",
    },
  ];

  return (
    <>
      <BreadCrumb
        title="Products"
        currentPage="Products"
        backgroundImage={BreadCrumbImg}
      />

      <div id="product" className="product">
        {/* Product Section */}
        <div
          id="products"
          className="product-area max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12"
        >
          <h6 className=" bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 text-[26px] md:text-3xl lg:text-[32px] font-semibold pb-5 text-center ">
            Our Products
          </h6>

          {productData.map((point, index) => (
            <div
              key={index}
              id={point.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-6 py-3 md:py-4 items-center`}
            >
              <div className={`${index % 2 !== 0 ? "order-last" : ""}`}>
                <img
                  src={point.img}
                  alt={point.heading}
                  className=" w-full  h-[270px] sm:h-[350px] rounded-lg"
                />
              </div>

              {/* Text Section with Animations */}
              {index % 2 === 0 ? (
                <FadeRight>
                  <div>
                    <h1 className="text-[#b88124] text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-5">
                      {point.heading}
                    </h1>
                    <p className="text-[15px] leading-[1.4rem] lg:text-base text-gray-600 font-medium mb-2">
                      {point.para1}
                    </p>
                    {point.para2 && (
                      <p className="text-[15px] leading-[1.4rem] lg:text-base text-gray-600 font-medium mb-2">
                        {point.para2}
                      </p>
                    )}
                    {point.para3 && (
                      <p className="text-[15px] leading-[1.4rem] lg:text-base text-gray-600 font-medium">
                        {point.para3}
                      </p>
                    )}
                  </div>
                </FadeRight>
              ) : (
                <FadeLeft>
                  <div>
                    <h1 className="text-[#b88124] text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-5">
                      {point.heading}
                    </h1>
                    <p className="text-[15px] leading-[1.4rem] lg:text-base text-gray-600 font-medium mb-2">
                      {point.para1}
                    </p>
                    {point.para2 && (
                      <p className="text-[15px] leading-[1.4rem] lg:text-base text-gray-600 font-medium mb-2">
                        {point.para2}
                      </p>
                    )}
                    {point.para3 && (
                      <p className="text-[15px] leading-[1.4rem] lg:text-base text-gray-600 font-medium">
                        {point.para3}
                      </p>
                    )}
                  </div>
                </FadeLeft>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
