import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/img/logo.png";
import ProactiiLogo from "../assets/img/proactii-logo.png";

import { Heart } from "lucide-react";

function Footer() {
  return (
    <div>
      {/* Footer Section Here*/}
      <footer className="footer-area  bg-gradient-to-br from-[#1A1F2B] via-[#232B2B] to-[#2A2B1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 lg:py-14">
          <div className=" grid grid-cols-1 md:grid-cols-3">
            <div className=" text-center md:text-left">
              <a href="/" className="logo">
                <img src={Logo} alt="logo" className=" w-[191px] h-[131px]" />
              </a>

              <p className=" text-white mt-4 font-normal">
                More than over 30 years of experience in agriculture.
              </p>
            </div>

            <div className=" text-center md:text-left">
              <h6 className="text-[#d35b29] my-5 text-2xl font-medium tracking-[1px]">
                Useful Links
              </h6>

              <div className=" grid grid-cols-2 text-white">
                <div>
                  {/* <ul className="links">
                    <li className=" block">
                      <NavLink
                        to="/about/company-profile"
                        className=""
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToAnchor("/about", "about-us", navigate);
                        }}
                      >
                        About Us
                      </NavLink>

                      <NavLink
                        to="/about/vision&mission"
                        className=""
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToAnchor("/about", "vision", navigate);
                        }}
                      >
                        Vision & Mission
                      </NavLink>

                      <NavLink
                        to="/about/facilities"
                        className=""
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToAnchor("/about", "facilities", navigate);
                        }}
                      >
                        Our Facilities
                      </NavLink>

                      <NavLink
                        to="/about/team"
                        className=""
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToAnchor("/about", "team", navigate);
                        }}
                      >
                        Our Team
                      </NavLink>
                    </li>
                  </ul> */}

                  <ul className="links space-y-3">
                    {[
                      { to: "/about", label: "About Us" },
                      { to: "/about", label: "Vision & Mission" },
                      { to: "/about", label: "Our Facilities" },
                      { to: "/about", label: "Our Team" },
                    ].map((link) => (
                      <li key={link.label} className="block">
                        <NavLink
                          to={link.to}
                          className=" border-b-2 border-transparent hover:border-[#fcb65a] transition-all duration-300"
                        >
                          {link.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* <ul className="links">
                    <li>
                      <NavLink
                        to="/about/certificates"
                        className=""
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToAnchor("/about", "certificates", navigate);
                        }}
                      >
                        Certificates
                      </NavLink>

                      <NavLink
                        href="/products/product"
                        className=""
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToAnchor("/products", "product", navigate);
                        }}
                      >
                        Products
                      </NavLink>

                      <NavLink
                        to="/career/career"
                        className=""
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToAnchor("/career", "career", navigate);
                        }}
                      >
                        Careers
                      </NavLink>

                      <NavLink
                        to="/contact"
                        className=""
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToAnchor("/contact", "contact", navigate);
                        }}
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul> */}

                  <ul className="links space-y-3">
                    {[
                      { to: "/about", label: "Certificates" },
                      { to: "/products", label: "Products" },
                      { to: "/career", label: "Careers" },
                      { to: "/contact", label: "Contact" },
                    ].map((link) => (
                      <li key={link.label} className="block">
                        <NavLink
                          to={link.to}
                          className=" border-b-2 border-transparent hover:border-[#fcb65a] transition-all duration-300"
                        >
                          {link.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h6 className=" text-[#d35b29] my-5 text-2xl font-medium tracking-[1px] text-center md:text-left">
                Contacts
              </h6>

              <div className="contact-info text-white">
                <p className="flex items-start mb-2">
                  <svg
                    className=" fill-[#b88124] h-5 w-5 mr-2 mt-[2px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                  </svg>
                  Mon-Fri 08.00 a.m - 06.00 p.m
                </p>

                <p className="flex items-start mb-2">
                  <span>
                    <svg
                      className=" fill-[#b88124] h-5 w-5 mr-2 mt-[2px]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                    </svg>
                  </span>

                  <span>
                    2nd Floor, 205-206, J.K. Chamber, Sector-17, Vashi, Navi
                    Mumbai, Thane, Maharashtra, 400703
                  </span>
                </p>

                <p className="flex items-start mb-2 ">
                  <svg
                    className=" fill-[#b88124] h-5 w-5 mr-2 mt-[2px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                  (+91) 9944620471
                </p>

                <p className="flex items-start">
                  <svg
                    className=" fill-[#b88124] h-5 w-5 mr-2 mt-[2px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
                  </svg>

                  <a
                    href="mailto:info@gyangroup.in"
                    class="text-white hover:text-yellow-600 transition-colors duration-200"
                  >
                    marketing@sidhhartha.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section Here*/}
      <div className="footer-bottom bg-gradient-to-br from-[#1A1F2B] via-[#232B2B] to-[#2A2B1F] py-4 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-center">
            Sidhhartha Corporation Pvt. Ltd. © Copyright All Right Reserved 2025
          </p>

          <div className="flex items-center text-sm text-white">
            <span>Developed with</span>
            <Heart size={16} className="mx-2 text-red-500 fill-current" />
            <span>by</span>
            <a
              href="https://proactii.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center ml-2 hover:text-blue-400 transition-colors duration-200"
            >
              <img
                src={ProactiiLogo}
                alt="website-designer-logo"
                className=" w-5 h-5 mr-2"
              />
              <span className="hover:underline underline-offset-4">
                Proactii
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
