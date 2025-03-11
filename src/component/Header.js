import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";

// Images Import Here
import Logo from "../assets/img/logo.png";

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutSubmenuOpen, setAboutSubmenuOpen] = useState(false);
  const [productSubmenuOpen, setProductSubmenuOpen] = useState(false);
  const menuRef = useRef(null);

  // const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      // Close the Mobile menu if click is outside
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }

      // Close the popup if clicked outside in Search Btn
      // if (
      //   searchPopupRef.current &&
      //   !searchPopupRef.current.contains(event.target)
      // ) {
      //   setIsSearchOpen(false);
      // }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Function for toggling Menu, AboutMenu, ProductMenu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleAboutSubmenu = () => {
    setAboutSubmenuOpen(!aboutSubmenuOpen);
    setProductSubmenuOpen(false);
  };

  const toggleProductSubmenu = () => {
    setProductSubmenuOpen(!productSubmenuOpen);
    setAboutSubmenuOpen(false);
  };

  return (
    <div>
      {/* Header Section Here */}
      <header
        className={` bg-[#d5e4f1] lg:bg-white/85 z-[60] top-0 w-full shadow-lg transition-transform duration-300 ${
          isSticky ? "fixed w-full top-0" : "relative"
        }`}
      >
        <nav className=" px-3 md:px-8 py-3 lg:pt-2 lg:pb-0 relative flex items-center justify-between w-full">
          <div className="relative">
            <div className="">
              <NavLink className="" to="/">
                <img src={Logo} alt="Logo-img" className=" w-32 h-24 p-2" />
              </NavLink>
            </div>
          </div>

          <div className=" flex items-center flex-row">
            {/* Desktop Menu */}
            <div className="pr-5 pl-[105px] hidden lg:block">
              <div className="inline-block align-top">
                <ul className="text-left flex text-[#1e7dd8] text-base font-medium">
                  <li className="pr-4 pt-5 pb-7">
                    <NavLink
                      to="/"
                      className="sf-with-ul-pre sf-with-ul border-b-2 border-transparent hover:border-[#1e7dd8] transition-all duration-300 pb-1"
                    >
                      Home
                    </NavLink>
                  </li>

                  <div className=" group">
                    <li className="pr-4 pt-5 pb-7 about-header">
                      <NavLink
                        to="#"
                        className="sf-with-ul-pre sf-with-ul border-b-2 border-transparent group-hover:border-[#1e7dd8] transition-all duration-300 pb-1"
                      >
                        About Us
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="ml-1 group-hover:rotate-180 transition-all duration-500"
                        />
                      </NavLink>

                      <ul className="sub-menu about-header-menu">
                        <li className="pl-3 pr-3 py-2 hover:bg-blue-200 transition-colors duration-300">
                          <NavLink to="/about">Company Profile</NavLink>
                        </li>

                        <li className=" pl-3 pr-3 py-2 hover:bg-blue-200 transition-colors duration-300">
                          <NavLink to="/groupOfCompany">
                            Group Of Company
                          </NavLink>
                        </li>

                        <li className=" pl-3 pr-3 py-2 hover:bg-blue-200 transition-colors duration-300">
                          <NavLink to="/achievements">
                            Achievements / Milestones
                          </NavLink>
                        </li>

                        <li className="pl-3 pr-3 py-2 hover:bg-blue-200 transition-colors duration-300">
                          <NavLink to="/qualityPolicy">Quality Policy</NavLink>
                        </li>
                      </ul>
                    </li>
                  </div>

                  <div className=" group">
                    <li className="pr-4 pt-5 pb-7 product-header">
                      <NavLink
                        to="#"
                        className="sf-with-ul-pre sf-with-ul border-b-2 border-transparent group-hover:border-[#1e7dd8] transition-all duration-300 pb-1"
                      >
                        Products
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="ml-1 group-hover:rotate-180 transition-all duration-500"
                        />
                      </NavLink>

                      <ul className="sub-menu product-header-menu">
                        <li className=" pl-3 pr-3 py-2 hover:bg-blue-200 transition-colors duration-300">
                          <NavLink to="/products/pharma">
                            Pharma & Api Intermediate
                          </NavLink>
                        </li>

                        <li className="pl-3 pr-3 py-2 hover:bg-blue-200 transition-colors duration-300">
                          <NavLink to="/products/pigment">
                            Pigment Intermediate
                          </NavLink>
                        </li>

                        <li className="pl-3 pr-3 py-2 hover:bg-blue-200 transition-colors duration-300">
                          <NavLink to="/products/dye">Dye Intermediate</NavLink>
                        </li>
                      </ul>
                    </li>
                  </div>

                  <li className=" pr-4 pt-5 pb-7">
                    <NavLink
                      to="/weExport"
                      className="sf-with-ul-pre sf-with-ul border-b-2 border-transparent hover:border-[#1e7dd8] transition-all duration-300 pb-1"
                    >
                      We Export
                    </NavLink>
                  </li>

                  <li className="pr-4 pt-5 pb-7">
                    <NavLink
                      to="/blog"
                      className="sf-with-ul-pre sf-with-ul border-b-2 border-transparent hover:border-[#1e7dd8] transition-all duration-300 pb-1"
                    >
                      Blog
                    </NavLink>
                  </li>

                  <li className=" pt-5 pb-7">
                    <NavLink
                      to="/contactUs"
                      className="sf-with-ul-pre sf-with-ul border-b-2 border-transparent hover:border-[#1e7dd8] transition-all duration-300 pb-1"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="navbar-header ml-2 md:ml-6 lg:hidden">
              <button
                type="button"
                className="navbar-toggle p-3 relative"
                onClick={toggleMenu}
              >
                <FontAwesomeIcon
                  icon={faBars}
                  className="w-6 h-6 align-middle"
                />
              </button>

              {/* <div className="quote-btn">
                <a className="btn" href="https://www.gyangroup.in/enquiry">
                  Enquiry
                </a>
              </div> */}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu here*/}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-lg z-[70] transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-5 right-5 p-3 text-3xl"
          onClick={toggleMenu}
        >
          ✕
        </button>

        <ul className="mt-16 text-[#1e7dd8] text-base font-medium">
          <li className="py-4 px-6 ">
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>

          <li className="py-4 px-6">
            <button
              className="flex items-center justify-between w-full"
              onClick={toggleAboutSubmenu}
            >
              <span>About Us</span>

              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-2 transform transition-transform duration-300 ${
                  aboutSubmenuOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Submenu */}
            <ul
              className={`ml-4 text-sm overflow-hidden transition-all duration-500 ${
                aboutSubmenuOpen
                  ? "max-h-[180px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <li className="py-3">
                <NavLink to="/about" onClick={toggleMenu}>
                  Company Profile
                </NavLink>
              </li>

              <li className="py-3">
                <NavLink to="/groupOfCompany" onClick={toggleMenu}>
                  Group Of Company
                </NavLink>
              </li>

              <li className="py-3">
                <NavLink to="/achievements" onClick={toggleMenu}>
                  Achievements / Milestones
                </NavLink>
              </li>

              <li className="py-3 ">
                <NavLink to="/qualityPolicy" onClick={toggleMenu}>
                  Quality Policy
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="py-4 px-6">
            <button
              className="flex items-center justify-between w-full"
              onClick={toggleProductSubmenu}
            >
              <span>Products</span>

              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-2 transform transition-transform duration-300 ${
                  productSubmenuOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Submenu */}
            <ul
              className={`ml-4 text-sm overflow-hidden transition-all duration-500 ${
                productSubmenuOpen
                  ? "max-h-[135px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <li className="py-3">
                <NavLink to="/products/pharma" onClick={toggleMenu}>
                  Pharma & Api Intermediate
                </NavLink>
              </li>

              <li className="py-3 ">
                <NavLink to="/products/pigment" onClick={toggleMenu}>
                  Pigment Intermediate
                </NavLink>
              </li>

              <li className="py-3">
                <NavLink to="/products/dye" onClick={toggleMenu}>
                  Dye Intermediate
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="py-4 px-6 ">
            <NavLink to="/weExport" onClick={toggleMenu}>
              We Export
            </NavLink>
          </li>

          <li className="py-4 px-6">
            <NavLink to="/blog" onClick={toggleMenu}>
              Blog
            </NavLink>
          </li>

          <li className="py-4 px-6">
            <NavLink to="/contactUs" onClick={toggleMenu}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
