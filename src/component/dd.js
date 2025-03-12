<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vallabh Ashram</title>

    <!-- Include jQuery Links -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <script>
      function addActiveClass(pageName) {
        $(".kingster-navigation .menu-item a").each(function () {
          var href = $(this).attr("href").split("/").pop(); // Get the last part of the href
          if (href === pageName) {
            // Compare only the page name
            $(this).parent().addClass("current-menu-ancestor");
          }
        });

        // Additional logic for the "About Us" tab
        if (pageName === "About.html") {
          $(".kingster-navigation .menu-item-5227").addClass(
            "current-menu-ancestor"
          );

          $(".kingster-mm-menu-wrap .menu-item-5227").addClass(
            "current-menu-ancestor"
          );

          $(".sub-menus .menu-item-5314").addClass("current-menu-ancestor");
        }

        // Additional logic for the "history Us" tab
        if (pageName === "History.html") {
          $(".kingster-navigation .menu-item-5227").addClass(
            "current-menu-ancestor"
          );

          $(".kingster-mm-menu-wrap .menu-item-5227").addClass(
            "current-menu-ancestor"
          );

          $(".sub-menus .menu-item-5311").addClass("current-menu-ancestor");
        }

        // Additional logic for the "Vision-Mission" tab
        if (pageName === "Vision-Mission.html") {
          $(".kingster-navigation .menu-item-5227").addClass(
            "current-menu-ancestor"
          );

          $(".kingster-mm-menu-wrap .menu-item-5227").addClass(
            "current-menu-ancestor"
          );

          $(".sub-menus .menu-item-5218").addClass("current-menu-ancestor");
        }

        // Additional logic for the "Management" tab
        if (pageName === "Management.html") {
          $(".kingster-navigation .menu-item-5227").addClass(
            "current-menu-ancestor"
          );

          $(".kingster-mm-menu-wrap .menu-item-5227").addClass(
            "current-menu-ancestor"
          );

          $(".sub-menus .menu-item-5225").addClass("current-menu-ancestor");
        }

        // Additional logic for the "Principle-Message" tab
        if (pageName === "Principle-Message.html") {
          $(".kingster-navigation .menu-item-5227").addClass(
            "current-menu-ancestor"
          );

          $(".kingster-mm-menu-wrap .menu-item-5227").addClass(
            "current-menu-ancestor"
          );

          $(".sub-menus .menu-item-5276").addClass("current-menu-ancestor");
        }

        // Additional logic for the "Team" tab
        if (pageName === "Team.html") {
          $(".kingster-navigation .menu-item-5227").addClass(
            "current-menu-ancestor"
          );

          $(".kingster-mm-menu-wrap .menu-item-5227").addClass(
            "current-menu-ancestor"
          );

          $(".sub-menus .menu-item-5320").addClass("current-menu-ancestor");
        }

        // Additional logic for the "Team" tab
        if (pageName === "MandatoryPublicDisclosure.html") {
          $(".kingster-navigation .menu-item-5227").addClass(
            "current-menu-ancestor"
          );

          $(".kingster-mm-menu-wrap .menu-item-5227").addClass(
            "current-menu-ancestor"
          );

          $(".sub-menus .menu-item-5321").addClass("current-menu-ancestor");
        }

        // Additional logic for the "Admission" tab
        if (pageName === "Admission.html") {
          $(".kingster-navigation .menu-item-5728").addClass(
            "current-menu-ancestor"
          );

          $(".kingster-mm-menu-wrap .menu-item-5735").addClass(
            "current-menu-ancestor"
          );

          $(".sub-menus .menu-item-5315").addClass("current-menu-ancestor");
        }

        // Additional logic for the "TC-Verification" tab
        if (pageName === "tc-verification.html") {
          $(".kingster-mm-menu-wrap .menu-item-5733").addClass(
            "current-menu-ancestor"
          );
        }

        // Additional logic for the "CBSE" tab
        if (pageName === "cbse.html") {
          $(".kingster-mm-menu-wrap .menu-item-5734").addClass(
            "current-menu-ancestor"
          );
        }

        // Additional logic for the "Facilities" tab
        if (pageName === "Facilities.html") {
          $(".kingster-mm-menu-wrap .menu-item-5736").addClass(
            "current-menu-ancestor"
          );
        }

        // Additional logic for the "Guidelines For Students" tab
        if (pageName === "guidelines-for-students.html") {
          $(".kingster-navigation .menu-item-5732").addClass(
            "current-menu-ancestor"
          );

          $(".kingster-mm-menu-wrap .menu-item-5732").addClass(
            "current-menu-ancestor"
          );

          $(".sub-menus .menu-item-5316").addClass("current-menu-ancestor");
        }

        // Additional logic for the "Note To Parents" tab
        if (pageName === "note-to-parents.html") {
          $(".kingster-navigation .menu-item-5732").addClass(
            "current-menu-ancestor"
          );

          $(".kingster-mm-menu-wrap .menu-item-5732").addClass(
            "current-menu-ancestor"
          );

          $(".sub-menus .menu-item-5317").addClass("current-menu-ancestor");
        }

        // Additional logic for the "Rules Of School" tab
        if (pageName === "rules-of-school.html") {
          $(".kingster-navigation .menu-item-5732").addClass(
            "current-menu-ancestor"
          );

          $(".kingster-mm-menu-wrap .menu-item-5732").addClass(
            "current-menu-ancestor"
          );

          $(".sub-menus .menu-item-5318").addClass("current-menu-ancestor");
        }

        // Additional logic for the "Gallery" tab
        if (pageName === "Gallery.html") {
          $(".kingster-mm-menu-wrap .menu-item-6035").addClass(
            "current-menu-ancestor"
          );
        }

        // Additional logic for the "Contact Us" tab
        if (pageName === "contact-us.html") {
          $(".kingster-mm-menu-wrap .menu-item-6036").addClass(
            "current-menu-ancestor"
          );
        }
      }
    </script>
  </head>

  <body>
    <!-- Top Bar Starts Here-->
    <div class="kingster-top-bar">
      <div class="kingster-top-bar-background"></div>

      <div class="kingster-top-bar-container kingster-container">
        <div class="kingster-top-bar-container-inner clearfix">
          <div
            class="kingster-top-bar-left kingster-item-pdlr"
            style="padding-top: 8px"
          >
            <svg
              class="email-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M255.4 48.2c.2-.1 .4-.2 .6-.2s.4 .1 .6 .2L460.6 194c2.1 1.5 3.4 3.9 3.4 6.5l0 13.6L291.5 355.7c-20.7 17-50.4 17-71.1 0L48 214.1l0-13.6c0-2.6 1.2-5 3.4-6.5L255.4 48.2zM48 276.2L190 392.8c38.4 31.5 93.7 31.5 132 0L464 276.2 464 456c0 4.4-3.6 8-8 8L56 464c-4.4 0-8-3.6-8-8l0-179.8zM256 0c-10.2 0-20.2 3.2-28.5 9.1L23.5 154.9C8.7 165.4 0 182.4 0 200.5L0 456c0 30.9 25.1 56 56 56l400 0c30.9 0 56-25.1 56-56l0-255.5c0-18.1-8.7-35.1-23.4-45.6L284.5 9.1C276.2 3.2 266.2 0 256 0z"
              />
            </svg>

            school.db@vallabhashram.in

            <svg
              class="contact-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
              />
            </svg>
            +91 260 240 4300
          </div>

          <div class="kingster-top-bar-right kingster-item-pdlr">
            <span
              class="gdlr-core-social-network-item gdlr-core-item-pdb gdlr-core-none-align gdlr-direction-horizontal"
              style="padding-bottom: 0px; display: block"
            >
              <ul class="header_footer-social-wrap" style="margin: 0">
                <li class="icon-content">
                  <a
                    data-social="facebook"
                    aria-label="facebook"
                    href="https://www.facebook.com/shreevallabhashramofficial/?ref=hl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div class="filled"></div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      fill="currentColor"
                      width="19px"
                      height="19px"
                    >
                      <path
                        fill="currentColor"
                        d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                      />
                    </svg>
                  </a>
                </li>

                <li class="icon-content">
                  <a
                    data-social="twitter"
                    aria-label="twitter"
                    href="https://x.com/vallabh_ashram"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div class="filled"></div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      width="19px"
                      height="19px"
                    >
                      <path
                        fill="currentColor"
                        d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                      />
                    </svg>
                  </a>
                </li>

                <li class="icon-content">
                  <a
                    data-social="youtube"
                    aria-label="Youtube"
                    href="https://www.youtube.com/channel/UCUhadVLGTDREGTNv8i6w5Pw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div class="filled"></div>

                    <svg
                      xml:space="preserve"
                      viewBox="0 0 16 16"
                      class="bi bi-youtube"
                      fill="currentColor"
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- Top Bar Ends Here -->

    <!-- Header Starts Here -->
    <header
      class="kingster-header-wrap kingster-header-style-plain kingster-style-menu-right kingster-style-fixed clearfix"
      data-navigation-offset="75px"
    >
      <div class="kingster-header-background"></div>

      <div class="kingster-header-container kingster-container">
        <div class="kingster-header-container-inner clearfix">
          <div
            class="kingster-logo kingster-item-pdlr"
            style="padding-right: 0"
          >
            <div class="kingster-logo-inner">
              <a class="" href="/index.html">
                <img
                  class="kingster-logo-img"
                  src="../Assets/logo.png"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div class="kingster-navigation kingster-item-pdlr clearfix">
            <div
              class="kingster-main-menu sf-js-enabled sf-arrows"
              id="kingster-main-menu"
            >
              <ul id="menu-main-navigation-1" class="sf-menu menu">
                <li
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5227 kingster-normal-menu"
                >
                  <a href="#" class="sf-with-ul-pre sf-with-ul">
                    About Us
                    <svg
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                      />
                    </svg>
                  </a>

                  <ul class="sub-menu">
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5314"
                      data-size="60"
                    >
                      <a href="/Pages/About.html"> About VA </a>
                    </li>

                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5311"
                      data-size="60"
                    >
                      <a
                        href="./History.html"
                        class="sf-with-ul-pre sf-with-ul"
                      >
                        History
                      </a>
                    </li>

                    <li
                      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5218"
                      data-size="60"
                    >
                      <a
                        href="./Vision-Mission.html"
                        class="sf-with-ul-pre sf-with-ul"
                      >
                        Vision & Mission
                      </a>
                    </li>

                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5320"
                      data-size="60"
                    >
                      <a
                        href="./Management.html"
                        class="sf-with-ul-pre sf-with-ul"
                      >
                        Management
                      </a>
                    </li>

                    <li
                      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5225"
                      data-size="60"
                    >
                      <a
                        href="./Principle-Message.html"
                        class="sf-with-ul-pre sf-with-ul"
                      >
                        Principal's Message
                      </a>
                    </li>

                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5342"
                      data-size="60"
                    >
                      <a href="./Team.html">Team</a>
                    </li>

                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5342"
                      data-size="60"
                    >
                      <a href="./MandatoryPublicDisclosure.html"
                        >Mandatory Public Disclosure</a
                      >
                    </li>
                  </ul>
                </li>

                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5728 kingster-normal-menu"
                >
                  <a href="#" class="sf-with-ul-pre sf-with-ul">
                    Admissions
                    <svg
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                      />
                    </svg>
                  </a>

                  <ul class="sub-menu">
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5729"
                      data-size="60"
                    >
                      <a href="/Pages/Admission.html"
                        >Information for Admission</a
                      >
                    </li>

                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5918"
                      data-size="60"
                    >
                      <a href="#">Admission Form</a>
                    </li>
                  </ul>
                </li>

                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-5271 kingster-normal-menu"
                >
                  <a
                    href="/Pages/tc-verification.html"
                    class="sf-with-ul-pre sf-with-ul"
                  >
                    TC Verification
                  </a>
                </li>

                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5731 kingster-normal-menu"
                >
                  <a href="/Pages/cbse.html" class="sf-with-ul-pre sf-with-ul">
                    CBSE
                  </a>
                </li>

                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5731 kingster-normal-menu"
                >
                  <a
                    href="/Pages/Facilities.html"
                    class="sf-with-ul-pre sf-with-ul"
                  >
                    Facilities
                  </a>
                </li>

                <li
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5732 kingster-normal-menu"
                >
                  <a href="#" class="sf-with-ul-pre sf-with-ul">
                    Almanac
                    <svg
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                      />
                    </svg>
                  </a>

                  <ul class="sub-menu">
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5729"
                      data-size="60"
                    >
                      <a href="/Pages/guidelines-for-students.html">
                        Guidelines for Students</a
                      >
                    </li>

                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5918"
                      data-size="60"
                    >
                      <a href="/Pages/note-to-parents.html"
                        >A Note To Parents</a
                      >
                    </li>
                    <li
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5918"
                      data-size="60"
                    >
                      <a href="/Pages/rules-of-school.html"
                        >Rules of the School</a
                      >
                    </li>
                  </ul>
                </li>

                <li
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6035 kingster-normal-menu"
                >
                  <a
                    href="/Pages/Gallery.html"
                    class="sf-with-ul-pre sf-with-ul"
                  >
                    Gallery
                  </a>
                </li>

                <li
                  class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-6036 kingster-normal-menu"
                >
                  <a
                    href="/Pages/contact-us.html"
                    class="sf-with-ul-pre sf-with-ul"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Header Ends Here -->

    <!-- Header Mobile Starts Here -->
    <div class="kingster-mobile-header-wrap">
      <div
        class="kingster-mobile-header kingster-header-background kingster-style-slide kingster-sticky-mobile-navigation"
        id="kingster-mobile-header"
      >
        <div
          class="kingster-mobile-header-container kingster-container clearfix"
        >
          <div class="kingster-logo kingster-item-pdlr">
            <div class="kingster-logo-inner">
              <a class="" href="/Pages/Main.html">
                <img src="../Assets/logo.png" alt="" />
              </a>
            </div>
          </div>

          <div class="kingster-mobile-menu-right">
            <div class="kingster-mobile-menu">
              <a
                class="kingster-mm-menu-button kingster-mobile-menu-button kingster-mobile-button-hamburger"
                href="#kingster-mobile-menu"
                onclick="toggleMenu()"
              >
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Header Mobile Ends Here -->

    <!-- Header Mobile Menu Starts Here -->
    <div
      class="kingster-mm-menu-wrap kingster-navigation-font mm-menu mm-pagedim-black mm-offcanvas mm-right"
      id="kingster-mobile-menu"
      data-slide="right"
    >
      <div class="mm-panels">
        <div
          class="mm-panel mm-hasnavbar mm-opened mm-current"
          id="menu-main-navigation"
        >
          <div class="mm-navbar">
            <a class="mm-title" onclick="handleMenuClose()">
              <span class="mmenu-custom-close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  width="25px"
                  height="25px"
                >
                  <path
                    d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                  />
                </svg>
              </span>
            </a>
          </div>

          <ul class="m-menu mm-listview">
            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5227 mm-link-hover"
            >
              <a
                class="mm-next mm-fullsubopen"
                href="#mm-1"
                data-target="#mm-1"
              ></a>
              <span class="kingster-mm-menu-blank">About Us</span>
            </li>

            <li
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5735 mm-link-hover"
            >
              <a
                class="mm-next mm-fullsubopen"
                href="#mm-2"
                data-target="#mm-2"
              ></a>
              <span class="kingster-mm-menu-blank">Admissions</span>
            </li>

            <li
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5733"
            >
              <a href="/Pages/tc-verification.html"> TC Verification </a>
            </li>

            <li
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5734"
            >
              <a href="/Pages/cbse.html"> CBSE </a>
            </li>

            <li
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5736"
            >
              <a href="/Pages/Facilities.html"> Facilities </a>
            </li>

            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5732 mm-link-hover"
            >
              <a
                class="mm-next mm-fullsubopen"
                href="#mm-3"
                data-target="#mm-3"
              ></a>

              <span class="kingster-mm-menu-blank">Almanac</span>
            </li>

            <li
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6035"
            >
              <a href="/Pages/Gallery.html"> Gallery </a>
            </li>

            <li
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6036"
            >
              <a href="/Pages/contact-us.html"> Contact Us </a>
            </li>
          </ul>
        </div>

        <div class="mm-panel mm-hasnavbar mm-hiddend" id="mm-1">
          <div class="mm-navbar">
            <a
              class="mm-btn mm-prev"
              href="#menu-main-navigation"
              data-target="#menu-main-navigation"
            >
              <svg
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                />
              </svg>
            </a>

            <!-- <a class="mm-title" href="#menu-main-navigation"> About Us </a> -->
          </div>

          <ul class="sub-menus mm-listview">
            <li
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5314"
            >
              <a href="/Pages/About.html"> About VA </a>
            </li>

            <li
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5311"
            >
              <a href="/Pages/History.html"> History </a>
            </li>

            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5218"
            >
              <a href="/Pages/Vision-Mission.html"> Vision & Mission </a>
            </li>

            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5225"
            >
              <a href="/Pages/Management.html"> Management </a>
            </li>

            <li
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5276"
            >
              <a href="/Pages/Principle-Message.html"> Principal's Message </a>
            </li>

            <li
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5320"
            >
              <a href="/Pages/Team.html"> Team </a>
            </li>

            <li
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5321"
            >
              <a href="/Pages/MandatoryPublicDisclosure.html">
                Mandatory Public Disclosure
              </a>
            </li>
          </ul>
        </div>

        <div class="mm-panel mm-hasnavbar mm-hiddend" id="mm-2">
          <div class="mm-navbar">
            <a
              class="mm-btn mm-prev"
              href="#menu-main-navigation"
              data-target="#menu-main-navigation"
            >
              <svg
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                />
              </svg>
            </a>

            <!-- <a class="mm-title" href="#menu-main-navigation"> About Us </a> -->
          </div>

          <ul class="sub-menus mm-listview">
            <li
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5315"
            >
              <a href="/Pages/Admission.html"> Information for Admission </a>
            </li>

            <li
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5312"
            >
              <a href="#"> Admission Form </a>
            </li>
          </ul>
        </div>

        <div class="mm-panel mm-hasnavbar mm-hiddend" id="mm-3">
          <div class="mm-navbar">
            <a
              class="mm-btn mm-prev"
              href="#menu-main-navigation"
              data-target="#menu-main-navigation"
            >
              <svg
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                />
              </svg>
            </a>

            <!-- <a class="mm-title" href="#menu-main-navigation"> Almanac </a> -->
          </div>

          <ul class="sub-menus mm-listview">
            <li
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5316"
            >
              <a href="/Pages/guidelines-for-students.html">
                Guidelines for Student
              </a>
            </li>

            <li
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5317"
            >
              <a href="/Pages/note-to-parents.html"> A Note To Parents </a>
            </li>

            <li
              class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5318"
            >
              <a href="/Pages/rules-of-school.html"> Rules of the School </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Header Mobile Menu Ends Here -->
  </body>
</html>