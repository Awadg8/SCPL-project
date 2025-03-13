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

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      // Close the Mobile menu if click is outside
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
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
        className={` bg-[#fffde5] md:bg-white/85 z-[60] top-0 w-full shadow-lg transition-transform duration-300 ${
          isSticky ? "fixed w-full top-0" : "relative"
        }`}
      >
        <nav className="relative flex items-center justify-between w-full px-6 md:px-12 lg:px-16">
          <div className="relative">
            <NavLink className="" to="/">
              <img
                src={Logo}
                alt="Logo-img"
                className={`p-2 transition-all duration-300 ${
                  isSticky ? "w-28 h-20 " : "w-32 h-24"
                }`}
              />
              {/* <img src={Logo} alt="Logo-img" className=" w-32 h-24 p-2" /> */}
            </NavLink>
          </div>

          <div className=" flex items-center flex-row lg:pr-20">
            {/* Desktop Menu */}
            <div className=" hidden md:block">
              <div className="inline-block align-top">
                <ul className="text-left flex text-yellow-600 text-base font-medium">
                  <li className="pr-4">
                    <NavLink
                      to="/"
                      className="border-b-2 border-transparent hover:border-yellow-600 transition-all duration-300"
                    >
                      Home
                    </NavLink>
                  </li>

                  <div className=" group">
                    <li className="pr-4 about-header">
                      <NavLink
                        to="#"
                        className="border-b-2 border-transparent group-hover:border-yellow-600 transition-all duration-300"
                      >
                        About
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="ml-1 group-hover:rotate-180 transition-all duration-500"
                        />
                      </NavLink>

                      <ul className="sub-menu about-header-menu shadow-2xl">
                        <li className="pl-3 pr-3 py-2 hover:bg-[#fffcd8] transition-colors duration-300 block">
                          <NavLink to="/about">About Us</NavLink>
                        </li>

                        <li className=" pl-3 pr-3 py-2 hover:bg-[#fffcd8] transition-colors duration-300 block">
                          <NavLink to="/about">Vision & Mission</NavLink>
                        </li>

                        <li className=" pl-3 pr-3 py-2 hover:bg-[#fffcd8] transition-colors duration-300 block">
                          <NavLink to="/about">Our Facilities</NavLink>
                        </li>

                        <li className="pl-3 pr-3 py-2 hover:bg-[#fffcd8] transition-colors duration-300 block">
                          <NavLink to="/about">Core Values</NavLink>
                        </li>

                        <li className="pl-3 pr-3 py-2 hover:bg-[#fffcd8] transition-colors duration-300 block">
                          <NavLink to="/about">Our Awards</NavLink>
                        </li>

                        <li className="pl-3 pr-3 py-2 hover:bg-[#fffcd8] transition-colors duration-300 block">
                          <NavLink to="/about">Our Certificates</NavLink>
                        </li>
                      </ul>
                    </li>
                  </div>

                  <div className=" group">
                    <li className="pr-4 product-header">
                      <NavLink
                        to="#"
                        className="border-b-2 border-transparent group-hover:border-yellow-600 transition-all duration-300"
                      >
                        Products
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="ml-1 group-hover:rotate-180 transition-all duration-500"
                        />
                      </NavLink>

                      <ul className="sub-menu product-header-menu shadow-2xl">
                        <li className=" pl-3 pr-3 py-2 hover:bg-[#fffcd8] transition-colors duration-300 block">
                          <NavLink to="/products">Red Chillies</NavLink>
                        </li>

                        <li className="pl-3 pr-3 py-2 hover:bg-[#fffcd8] transition-colors duration-300 block">
                          <NavLink to="/products">Groundnuts</NavLink>
                        </li>

                        <li className="pl-3 pr-3 py-2 hover:bg-[#fffcd8] transition-colors duration-300 block">
                          <NavLink to="/products">Sesame seeds</NavLink>
                        </li>

                        <li className="pl-3 pr-3 py-2 hover:bg-[#fffcd8] transition-colors duration-300 block">
                          <NavLink to="/products">Cumin seeds</NavLink>
                        </li>

                        <li className="pl-3 pr-3 py-2 hover:bg-[#fffcd8] transition-colors duration-300 block">
                          <NavLink to="/products">Coriander seeds</NavLink>
                        </li>

                        <li className="pl-3 pr-3 py-2 hover:bg-[#fffcd8] transition-colors duration-300 block">
                          <NavLink to="/products">Chickpeas</NavLink>
                        </li>

                        <li className="pl-3 pr-3 py-2 hover:bg-[#fffcd8] transition-colors duration-300 block">
                          <NavLink to="/products">Fennel seeds</NavLink>
                        </li>

                        <li className="pl-3 pr-3 py-2 hover:bg-[#fffcd8] transition-colors duration-300 block">
                          <NavLink to="/products">Fenugreek seeds</NavLink>
                        </li>

                        <li className="pl-3 pr-3 py-2 hover:bg-[#fffcd8] transition-colors duration-300 block">
                          <NavLink to="/products">Basil seeds</NavLink>
                        </li>

                        <li className="pl-3 pr-3 py-2 hover:bg-[#fffcd8] transition-colors duration-300 block">
                          <NavLink to="/products">Raisin</NavLink>
                        </li>

                        <li className="pl-3 pr-3 py-2 hover:bg-[#fffcd8] transition-colors duration-300 block">
                          <NavLink to="/products">Turmeric</NavLink>
                        </li>
                      </ul>
                    </li>
                  </div>

                  <li className="pr-4">
                    <NavLink
                      to="/career"
                      className="border-b-2 border-transparent hover:border-yellow-600 transition-all duration-300"
                    >
                      Career
                    </NavLink>
                  </li>

                  <li className="">
                    <NavLink
                      to="/contact"
                      className="border-b-2 border-transparent hover:border-yellow-600 transition-all duration-300"
                    >
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="navbar-header ml-2 md:ml-6 md:hidden">
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
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu here*/}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-[330px] bg-white shadow-lg z-[70] transform transition-transform duration-300 ease-in-out ${
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
          <li className="py-4 px-6 block">
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>

          <li className="py-4 px-6 block">
            <button
              className="flex items-center justify-between w-full"
              onClick={toggleAboutSubmenu}
            >
              <span>About</span>

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
                  ? "max-h-[300px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <li className="py-3 block">
                <NavLink to="/about" onClick={toggleMenu}>
                  About Us
                </NavLink>
              </li>

              <li className="py-3 block">
                <NavLink to="/about" onClick={toggleMenu}>
                  Vision & Mission
                </NavLink>
              </li>

              <li className="py-3 block">
                <NavLink to="/about" onClick={toggleMenu}>
                  Our Facilities
                </NavLink>
              </li>

              <li className="py-3 block">
                <NavLink to="/about" onClick={toggleMenu}>
                  Core Values
                </NavLink>
              </li>

              <li className="py-3 block">
                <NavLink to="/about" onClick={toggleMenu}>
                  Our Awards
                </NavLink>
              </li>

              <li className="py-3 block">
                <NavLink to="/about" onClick={toggleMenu}>
                  Our Certificates
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="py-4 px-6 block">
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
              className={`ml-4 text-sm grid grid-cols-2 overflow-hidden transition-all duration-500 ${
                productSubmenuOpen
                  ? "max-h-[260px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div>
                <li className="py-3 block">
                  <NavLink to="/products" onClick={toggleMenu}>
                    Red Chillies
                  </NavLink>
                </li>

                <li className="py-3  block">
                  <NavLink to="/products" onClick={toggleMenu}>
                    Groundnuts
                  </NavLink>
                </li>

                <li className="py-3 block">
                  <NavLink to="/products" onClick={toggleMenu}>
                    Sesame seeds
                  </NavLink>
                </li>

                <li className="py-3 block">
                  <NavLink to="/products" onClick={toggleMenu}>
                    Cumin seeds
                  </NavLink>
                </li>

                <li className="py-3 block">
                  <NavLink to="/products" onClick={toggleMenu}>
                    Coriander seeds
                  </NavLink>
                </li>

                <li className="py-3 block">
                  <NavLink to="/products" onClick={toggleMenu}>
                    Chickpeas
                  </NavLink>
                </li>
              </div>

              <div>
                <li className="py-3 block">
                  <NavLink to="/products" onClick={toggleMenu}>
                    Fennel seeds
                  </NavLink>
                </li>

                <li className="py-3 block">
                  <NavLink to="/products" onClick={toggleMenu}>
                    Fenugreek seeds
                  </NavLink>
                </li>

                <li className="py-3 block">
                  <NavLink to="/products" onClick={toggleMenu}>
                    Basil seeds
                  </NavLink>
                </li>

                <li className="py-3 block">
                  <NavLink to="/products" onClick={toggleMenu}>
                    Raisin
                  </NavLink>
                </li>

                <li className="py-3 block">
                  <NavLink to="/products" onClick={toggleMenu}>
                    Turmeric
                  </NavLink>
                </li>
              </div>
            </ul>
          </li>

          <li className="py-4 px-6 block">
            <NavLink to="/career" onClick={toggleMenu}>
              Career
            </NavLink>
          </li>

          <li className="py-4 px-6 block">
            <NavLink to="/contact" onClick={toggleMenu}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
