import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Career() {
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
    <div id="career" className="">
      {/* Breadcrumb starts here */}
      <div className="breadcroumb-area breadcroumb-area-career bread-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcroumb-title text-center">
                <h1>Career</h1>
                <h5>
                  <NavLink to="/" className="">
                    Home
                  </NavLink>{" "}
                  / Career
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb ends here */}

      <div className="career-area section-padding">
        <div className="container">
          <div className="row flex-column-reverse flex-xl-row">
            <div className="col-xl-12">
              <div className="mb-20">
                <span className="heading__pre-title">CAREERS</span>

                <h3 className="heading__title">
                  Looking for tomorrow’s AGRO leaders,
                  <span style={{ color: "#b88124" }}>Today.</span>
                </h3>
              </div>

              <p>
                At Navkar Corporation LImited, challenging situations are the
                norm and not the exception. Our people rise to the occasion to
                deliver innovative, relevant, and sustainable solutions for our
                customers everytime. We hire ambitious and passionate
                professionals carry the capability to make it happen for our
                customers. Our leadership position in the industry makes it the
                obvious place to put knowledge and energy in action. Our
                employees are encouraged to think about innovation, develop new
                skills and expand their horizons.
              </p>

              <p>
                We believe that employees are our most asset. We give utmost
                importance to their training, development. Emphasis is laid on
                creating a learning environment and a performance oriented
                working culture.
              </p>

              <p>
                <strong>COME JOIN US!</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-padding">
        <div className="container">
          <div className="row flex-column-reverse flex-xl-row">
            <div className="col-xl-6 mt-30">
              <div className="heading mb-20">
                <span className="heading__pre-title">CURRENT OPENINGS</span>
              </div>

              <p>
                Thanks for checking for opportunities with Sidhhartha
                Corporation Pvt. Ltd. If you could not find a relevant position
                please upload your Resume, we will include it in our talented
                database.
              </p>

              <p>
                We will consider your candidature for suitable positions as and
                when they come up. I the meantime, please check back for
                positions that might be available in the near future.
              </p>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <form className="form career-form">
                <div className="row">
                  <div className="col-12">
                    <h5 className="contact-form__subtitle">
                      Fields for resume uploading to be below the text Come Join
                      Us!
                    </h5>
                  </div>

                  <div className="col-md-12">
                    <input
                      className="form__field"
                      type="text"
                      placeholder="Your Full Name"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      className="form__field"
                      type="email"
                      placeholder="Your Email"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      className="form__field"
                      type="tel"
                      placeholder="Your Phone"
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      className="form__field form__message message--large"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <input type="file" name="resume_file" id="resume_file" />
                  </div>

                  <div className="col-12">
                    <button className="button button--green">
                      <span>Send message</span>
                      {/* <svg className="icon">
									<use xlink:href="#arrow">
									</use>
								</svg> */}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Progress wrap ends here */}
      <div
        id="progress-wrap"
        className="progress-wrap"
        onClick={(e) => {
          e.preventDefault();
          scrollToAnchor("/career", "career", navigate);
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

export default Career;
