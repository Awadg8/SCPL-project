import React, { useState } from "react";
import axios from "axios";

import BreadCrumb from "../component/BreadCrumb";
import BreadCrumbImg from "../assets/img/contact.jpg";

import { Send, Phone, MapPin, Mail } from "lucide-react";

import { FadeDown, FadeLeft } from "../component/Animation";

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

      {/* Contact Us Section */}
      <div id="contact-us">
        <div
          id="contact"
          className="contact-area max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12"
        >
          <FadeDown>
            <h6 className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 text-[26px] md:text-3xl lg:text-[32px] font-semibold mb-5 text-center">
              Contact Us
            </h6>
          </FadeDown>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="contact-info order-2 md:order-1">
              <FadeLeft>
                <h2 className="text-[26px] md:text-3xl lg:text-[32px] font-semibold text-gray-700 mb-3">
                  Get in Touch
                </h2>

                <p className="text-[15px] leading-[1.4rem] lg:text-base text-gray-600 font-medium mb-3">
                  Contact Us for premium-quality spices, groundnuts and other
                  agricultural products.
                </p>
              </FadeLeft>

              <div className="contact-content">
                <h3 className="text-[#ff6700] mb-5 font-medium text-2xl">
                  Visit Us
                </h3>

                <FadeLeft>
                  <div className="contacts-inner flex items-center mb-2">
                    <div>
                      <MapPin className="w-12 h-12 fill-yellow-600 stroke-white bg-[#b88124] p-3 rounded-full" />
                    </div>

                    <div className="pl-4">
                      <h6 className="text-lg text-gray-700 font-semibold">
                        Address
                      </h6>
                      <p className=" text-base text-gray-600">
                        2nd Floor, 205-206, J.K. Chamber, Sector-17, Vashi, Navi
                        Mumbai, Thane, Maharashtra, 400703
                      </p>
                    </div>
                  </div>
                </FadeLeft>

                <FadeLeft delay={0.1}>
                  <div className="contact-inner  flex items-center mb-2">
                    <div>
                      <Mail className="w-12 h-12 fill-yellow-600 stroke-white bg-[#b88124] p-3 rounded-full" />
                    </div>

                    <div className="pl-4">
                      <h6 className="text-lg text-gray-700 font-semibold">
                        Email Address
                      </h6>
                      <p className=" text-base text-gray-600">
                        marketing@sidhhartha.com
                      </p>
                    </div>
                  </div>
                </FadeLeft>

                <FadeLeft delay={0.2}>
                  <div className="contact-inner  flex items-center">
                    <div>
                      <Phone className="w-12 h-12 fill-yellow-600 stroke-white bg-[#b88124] p-3 rounded-full" />
                    </div>

                    <div className="pl-4">
                      <h6 className="text-lg text-gray-700 font-semibold">
                        Call Now
                      </h6>
                      <p className=" text-base text-gray-600">+91 9944620471</p>
                    </div>
                  </div>
                </FadeLeft>
              </div>
            </div>

            <div className="contact-form order-1">
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
                    <div className="my-3">
                      <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors focus:outline-none"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors focus:outline-none"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="E-mail"
                        required
                      />
                    </div>
                  </div>

                  <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-3">
                    <div className="my-3">
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors focus:outline-none"
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                        placeholder="Phone Number"
                        required
                      />
                    </div>

                    <div className="my-3">
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors focus:outline-none"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors focus:outline-none"
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
                      className="flex justify-center text-base bg-gray-500 hover:bg-yellow-600 transition-colors duration-300 mt-5 p-3 rounded-md text-white"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <span style={{ marginRight: "8px" }}>Sending...</span>

                          <span className="loader"></span>
                        </>
                      ) : (
                        <>
                          <span>Send message</span>
                          <Send className="w-5 h-5 ml-2" />
                        </>
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
