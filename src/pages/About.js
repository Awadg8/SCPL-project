import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { GoRocket } from "react-icons/go";
import { GoGoal } from "react-icons/go";

import AOS from "aos";
import "aos/dist/aos.css";

import "animate.css"; // For animations
import Slider from "react-slick"; //For slider

// slider animation
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FadeUp, FadeDown, FadeRight } from "../component/Animation";

import aboutImg3 from "../assets/img/IMG_7219.jpg";
import facilityImg from "../assets/img/slider/slider-1.jpg";
import facilityImg2 from "../assets/img/facility/facility2.jpg";
import facilityImg3 from "../assets/img/facility/IMG_7772.JPG";
import facilityImg4 from "../assets/img/slider/slider-2.jpg";
import CertificateImg from "../assets/img/certificates/certificate.png";

import qualityImg from "../assets/img/quality.png";
import innovationImg from "../assets/img/innovation.png";
import ethicalImg from "../assets/img/ethical.png";
import customerImg from "../assets/img/customer-focus.png";
import integrityImg from "../assets/img/integrity.png";
import reliabilityImg from "../assets/img/reliability.png";

import BreadCrumb from "../component/BreadCrumb";
import BreadCrumbImg from "../assets/img/slider/slide-1.jpg";

function About() {
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

  // Slider animation here
  const settings = {
    // dots: true,
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
        },
      },
    ],
  };

  interface CoreValues {
    icon: JSX.Element;
    text: string;
  }

  const coreValues: CoreValues[] = [
    {
      img: qualityImg,
      heading: "Quality and Purity",
      text: "We are committed to delivering the highest quality spices and seeds, ensuring that they are pure, fresh, and free from contaminants. Our rigorous quality control processes guarantee that every product meets or exceeds industry standards.",
    },
    {
      img: innovationImg,
      heading: "Innovation",
      text: "We embrace innovation in agriculture to improve product quality, enhance farming practices, and meet the evolving needs of our customers. Our investment in research and technology drives continuous improvement.",
    },
    {
      img: ethicalImg,
      heading: "Ethical Sourcing",
      text: "We ensure fair trade practices and ethical sourcing, supporting local farmers and communities. By fostering transparent and respectful relationships, we contribute to the well-being of all stakeholders in our supply chain.",
    },
    {
      img: customerImg,
      heading: "Customer Focus",
      text: "Our customers are at the heart of everything we do. We are dedicated to understanding their needs and providing exceptional products and services that exceed their expectations.",
    },
    {
      img: integrityImg,
      heading: "Integrity and Transparency",
      text: "We operate with honesty and transparency in all aspects of our business. From sourcing to delivery, we provide clear information and maintain open communication with our customers.",
    },
    {
      img: reliabilityImg,
      heading: "Reliability",
      text: "SCPL always makes sure to complete orders once committed irrespective of market situations. We always support and cooperate with our customers and suppliers to create a win-for-all situation.",
    },
  ];

  return (
    <>
      <BreadCrumb
        title="About Us"
        currentPage="About Us"
        backgroundImage={BreadCrumbImg}
      />

      <div id="about" className=" overflow-hidden">
        {/* About Us Section*/}
        <div
          id="AboutUs"
          className="about-area max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12"
        >
          <div>
            <div className="section-title">
              <h6 className=" text-[#ff6700] mb-5 font-medium text-2xl">
                About Us
              </h6>

              <FadeDown>
                <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 text-[20px] md:text-2xl lg:text-[30px] font-semibold mb-5">
                  Leading Exporter of Agricultural Products like Red Chillies
                  and Groundnuts in India
                </h2>
              </FadeDown>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img
                  src={aboutImg3}
                  alt="aboutUs-img"
                  className="w-full h-[270px] sm:h-[350px] rounded-lg"
                />
              </div>

              <FadeRight className="mb-30">
                <p className="text-[15px] leading-[1.4rem] lg:text-base text-gray-600 font-medium mb-3">
                  Established in 1990, <b>Sidhhartha Corporation Pvt. Ltd. </b>
                  is a pioneering Indian exporter of premium-quality spices,
                  groundnuts and other agricultural products.
                </p>

                <p className="text-[15px] leading-[1.4rem] lg:text-base text-gray-600 font-medium mb-3">
                  Our commitment to quality has enabled it to become a
                  recognized name in the industry. With a strong focus on
                  delivering products that meet global standards, <b>SCPL </b>
                  has emerged as a trusted partner for clients around the world.
                  Our expertise lies in the process of delivering premium
                  quality from the source to the end customer that we have
                  meticulously built and streamlined year after year.
                </p>

                <p className="text-[15px] leading-[1.4rem] lg:text-base text-gray-600 font-medium mb-3">
                  With over 3 decades of experience and with our robust supply
                  chain management system these products are shipped to several
                  South Asian countries after meeting the highest standards of
                  sourcing, quality control, packaging and transportation.
                </p>

                <p className="text-[15px] leading-[1.4rem] lg:text-base text-gray-600 font-bold">
                  Sidhhartha Corporation Pvt. Ltd - Taking India to The World!
                </p>
              </FadeRight>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div id="Vision" className="vision-area parallax text-white">
          <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12 relative grid grid-cols-1 md:grid-cols-2 gap-6">
            <div data-aos="flip-left" data-aos-duration="3000">
              <div className="icon-item__img">
                <GoGoal className=" w-[100px] h-[100px] fill-[#b88124]" />
              </div>

              <h5 className=" text-xl pb-4 pt-6 font-bold">Our Vision</h5>

              <p className="text-base">
                Our vision is to be a pioneering force in the global
                agricultural export industry, delivering exceptionally produced
                agro-products. By harnessing cutting-edge technology and
                fostering collaborative partnerships, we aim to set new
                standards in quality and responsibility.
              </p>
            </div>

            <div data-aos="flip-right" data-aos-duration="3000">
              <div className="icon-item__img">
                <GoRocket className=" w-[100px] h-[100px] fill-[#b88124]" />
              </div>

              <h5 className="text-xl pb-4 pt-6 font-bold">Our Mission</h5>

              <p className="text-base">
                Our mission is to bridge global trade by delivering high-quality
                products and services with integrity and efficiency. We are
                committed to fostering international trade relationships through
                innovative solutions, by leveraging our expertise and strategic
                partnerships, we strive to create value for our clients and
                contribute to their success on a global scale.
              </p>
            </div>
          </div>
        </div>

        {/* Facility Section */}
        <div
          id="Facilities"
          className="facility-area max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12"
        >
          <div className="section-title">
            <h6 className="text-[#ff6700] mb-5 font-medium text-2xl">
              Our Facilities
            </h6>
            <FadeDown>
              <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 text-[20px] md:text-2xl lg:text-[30px] font-semibold mb-5">
                All these processes take place at our facilities in Guntur,
                Khammam, Chennai, and Pipavav.
              </h2>
            </FadeDown>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Guntur",
                description:
                  "Our facility at Guntur (Andhra Pradesh) is developed on 3.85 acres of land, with a 56,000 sq. ft. warehouse and an 88,000 sq. ft. open facility for processing, drying, quality control, packing, storage, and stuffing.",
                img: facilityImg,
              },
              {
                title: "Khammam",
                description:
                  "Our facility at Khammam (Telangana) spans 4 acres, including a modern warehouse of 31,000 sq. ft. and a 95,000 sq. ft. open facility for operations.",
                img: facilityImg2,
              },
              {
                title: "Chennai",
                description:
                  "Our facility at Chennai (Tamil Nadu) consists of a 22,500 sq. ft. godown, where all our operations like processing, quality control, packing, storage, and stuffing take place.",
                img: facilityImg3,
              },
              {
                title: "Pipavav",
                description:
                  "Our facility at Pipavav (Gujarat) features a 2500 sq. meter modern warehouse and an open facility for drying, bagging, and loading.",
                img: facilityImg4,
              },
            ].map((facility, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-2xl group"
              >
                {/* Image */}
                <img
                  className="w-full h-[270px] sm:h-[350px] bg-cover transition-transform duration-300 group-hover:scale-110"
                  src={facility.img}
                  alt={facility.title}
                />

                {/* Overlay with animation */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-6">
                  <h2 className="text-2xl font-semibold mb-3 text-yellow-600">
                    {facility.title}
                  </h2>
                  <p className="text-sm">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corevalues Section */}
        <div
          id="CoreValues"
          className="coreValues-area max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12"
        >
          <div className="section-title">
            <h6 className="text-[#ff6700] mb-5 font-medium text-2xl">
              Core Values
            </h6>
          </div>

          <div className="grid gap-3 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((point, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 py-3 md:p-6 h-full border">
                  <div className="flex items-start flex-col">
                    <div className=" flex bg-orange-100 p-4 rounded-full">
                      <img
                        src={point.img}
                        className="w-16 h-16"
                        alt={point.name}
                      />
                    </div>

                    <h5 className=" text-xl font-bold text-gray-700 my-3 md:my-5">
                      {point.heading}
                    </h5>

                    <p className="text-[15px] leading-[1.4rem] lg:text-base text-gray-600 font-medium">
                      {point.text}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div
          id="Awards"
          className="awards-area max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12"
        >
          <div>
            <h2 className=" bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 text-[26px] md:text-3xl lg:text-[32px] font-semibold pb-5 text-center">
              Recognition
            </h2>

            <Slider {...settings}>
              <div className="elements">
                <h3 className="mb-3 font-medium text-2xl text-gray-600">
                  APEDA Awards
                </h3>

                <p className="mb-3 font-bold text-gray-800 text-sm">
                  Awards for “Outstanding Export Performance and Contribution in
                  the Groundnut Sector”
                </p>

                <p className="text-gray-800 text-sm">
                  For the year 2011-12 – Golden Trophy
                </p>
              </div>

              <div className="elements">
                <h3 className=" mb-3 font-medium text-2xl text-gray-600">
                  SPICES BOARD Awards
                </h3>

                <p className="mb-3 font-bold text-gray-800 text-sm">
                  Award for “outstanding Performance in Export of Chillies.”
                </p>

                <p className="mb-3 text-gray-800 text-sm">
                  For the year 2006-07- Highest Chilies Exporter
                </p>

                <p className="mb-3 text-gray-800 text-sm">
                  For the year 2014-15- 1st Top most exporter of spices & spice
                  product.
                </p>

                <p className="text-gray-800 text-sm">
                  For the year 2018-19 – TOP Most exporter of Chillies.
                </p>
              </div>

              <div className="elements">
                <h3 className="mb-3 font-medium text-2xl text-gray-600">
                  IOPEPC Awards
                </h3>

                <p className="mb-3 font-bold text-gray-800 text-sm">
                  Award for “Excellence in Export of Groundnuts.”
                </p>

                <p className="mb-3 text-gray-800 text-sm">
                  For the year 2009-10 -1st Place
                </p>

                <p className="text-gray-800 text-sm">
                  For the year 2012-13 -1st place
                </p>
              </div>

              <div className="elements">
                <h3 className="mb-3 font-medium text-2xl text-gray-600">
                  FIEO Awards
                </h3>

                <p className="mb-3 font-bold text-gray-800 text-sm">
                  Award for Excellence in Export
                </p>

                <p className="text-gray-800 text-sm">
                  For the year 2016-17 - Western Region Export Excellence (Three
                  Star Export House)
                </p>
              </div>
            </Slider>

            <div className="full-form mt-10 text-[15px] leading-[1.4rem] lg:text-base text-gray-600 font-medium">
              <p>
                *&nbsp; 1. <b>IOPEPC</b> - Indian Oilseeds and Produce Export
                Promotion Council.
              </p>

              <p>
                &nbsp;&nbsp; 2. <b>APEDA</b> - Agricultural and Processed Food
                Products Export Development Authority.
              </p>

              <p>
                &nbsp;&nbsp; 3. <b>FIEO</b> - Federation of Indian Export
                Organizations.
              </p>

              <p>&nbsp;&nbsp; 4. Spices Board Of India.</p>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div
          id="Certificates"
          className="certificates-area max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12"
        >
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 text-[26px] md:text-3xl lg:text-[32px] font-semibold pb-5 text-center">
            Certificates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className=" flex justify-center">
                <img src={CertificateImg} alt="" className=" w-28 h-28" />
              </div>

              <FadeUp>
                <div className="heading text-center text-base text-gray-800 font-medium">
                  <h3 className="text-base">
                    State Export Excellence Award <br /> <b>2006-07</b>
                  </h3>

                  <p className="text-gray-600 text-sm">Govt. Of Karnataka</p>
                </div>
              </FadeUp>
            </div>

            <div>
              <div className="flex justify-center ">
                <img src={CertificateImg} alt="" className=" w-28 h-28" />
              </div>

              <FadeUp>
                <div className="heading text-center text-base text-gray-800 font-medium">
                  <h3 className=" text-base">
                    Topmost Exporter Of Chillies <br /> <b>2018-19</b>
                  </h3>

                  <p className="text-sm text-gray-600">Spices Board India</p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

// 1119
