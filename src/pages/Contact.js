import React, { useState } from "react";
import axios from "axios";

import BreadCrumb from "../component/BreadCrumb";
import BreadCrumbImg from "../assets/img/contact.jpg";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);

    axios
      .post("https://scpl-project.vercel.app/api/send-email", {
        name,
        email,
        phoneNumber,
        subject,
        message,
      })
      .then((response) => {
        // Clear the form fields after successful submission
        setName("");
        setEmail("");
        setPhoneNumber("");
        setSubject("");
        setMessage("");
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  return (
    <>
      <BreadCrumb
        title="Contact"
        currentPage="Contact"
        backgroundImage={BreadCrumbImg}
      />

      <div id="contact-us" className="">
        {/* Contact Us Section */}
        <div
          id="contact"
          className="contact-area max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12"
        >
          <h6 className="text-3xl font-bold mb-5 text-gray-800 text-center">
            Contact Us
          </h6>

          <div className=" grid grid-cols-2 gap-6 text-black">
            <div className="contact-info">
              <div className="section-title">
                <h2>Get in Touch</h2>
              </div>

              <p className="text-base">
                Contact us for premium-quality spices, groundnuts and other
                agricultural products.
              </p>

              <div className="contact-content">
                <h3 className="mb-30">Visit Us</h3>

                <div className="contacts-inner flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="w-12 h-12 fill-white p-3 rounded-3xl bg-[#b88124]"
                  >
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>

                  <div className=" pl-5">
                    <h6>Address</h6>
                    <p>
                      2nd Floor, 205-206, J.K. Chamber, Sector-17, Vashi, Navi
                      Mumbai, Thane, Maharashtra, 400703
                    </p>
                  </div>
                </div>

                <div className="contact-inner flex">
                  <svg
                    className="w-12 h-12 fill-white p-3 rounded-3xl bg-[#b88124]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
                  </svg>

                  <div>
                    <h6>Email Address</h6>
                    <p>marketing@sidhhartha.com</p>
                  </div>
                </div>

                <div className="contact-inner flex">
                  <svg
                    className="w-12 h-12 fill-white p-3 rounded-3xl bg-[#b88124]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>

                  <div>
                    <h6>Call Now</h6>
                    <p>+91 9944620471</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="my-3">
                      <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors focus:outline-none"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="my-3">
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors focus:outline-none"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="E-mail"
                        required
                      />
                    </div>
                  </div>

                  <div className=" grid grid-cols-2 gap-3">
                    <div className="my-3">
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors focus:outline-none"
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        placeholder="Phone Number"
                        required
                      />
                    </div>

                    <div className="my-3">
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors focus:outline-none"
                        value={subject}
                        onChange={(event) => setSubject(event.target.value)}
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </div>

                  <div className="my-3">
                    <textarea
                      name="message"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors focus:outline-none"
                      id="message"
                      rows="4"
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="Write Message"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <button
                      className=" mt-2 bg-yellow-700 p-3 rounded-md text-white"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <span style={{ marginRight: "8px" }}>Sending...</span>

                          <span className="loader"></span>
                        </>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

// 512
