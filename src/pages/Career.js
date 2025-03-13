import React, { useState, useRef } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import BreadCrumb from "../component/BreadCrumb";
import BreadCrumbImg from "../assets/img/career.jpg";

function Career() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);

  const fileInputRef = useRef(null);

  const handleResumeSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("message", message);
    formData.append("resumeFile", resumeFile);

    axios
      .post("https://scpl-project.vercel.app/api/send-resume", formData, {
        header: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // console.log(response.data);

        // Clear the form fields after successful submission
        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
        setResumeFile(null);
        fileInputRef.current.value = "";
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
        title="Career"
        currentPage="Career"
        backgroundImage={BreadCrumbImg}
      />

      <div id="career" className="">
        {/* Career Section*/}
        <div className="career-area max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12">
          <div className=" pb-10">
            <h6 className="text-[#ff6700] mb-5 font-medium text-2xl">
              Careers
            </h6>

            <h3 className="heading__title mb-3">
              Looking for tomorrow’s AGRO leaders, Today.
            </h3>

            <p className=" text-base mb-2">
              At Sidhhartha Corporation Pvt. Ltd. , challenging situations are
              the norm and not the exception. Our people rise to the occasion to
              deliver innovative, relevant, and sustainable solutions for our
              customers everytime. We hire ambitious and passionate
              professionals carry the capability to make it happen for our
              customers. Our leadership position in the industry makes it the
              obvious place to put knowledge and energy in action. Our employees
              are encouraged to think about innovation, develop new skills and
              expand their horizons.
            </p>

            <p className=" text-base mb-2">
              We believe that employees are our most asset. We give utmost
              importance to their training, development. Emphasis is laid on
              creating a learning environment and a performance oriented working
              culture.
            </p>

            <p className=" text-base font-bold">COME JOIN US!</p>
          </div>

          <div className="form p-2">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h6 className="text-[#ff6700] mb-5 font-medium text-2xl">
                  Current Openings
                </h6>

                <p className=" text-base mb-2">
                  Thanks for checking for opportunities with Sidhhartha
                  Corporation Pvt. Ltd. If you could not find a relevant
                  position please upload your Resume, we will include it in our
                  talented database.
                </p>

                <p className=" text-base">
                  We will consider your candidature for suitable positions as
                  and when they come up. In the meantime, please check back for
                  positions that might be available in the near future.
                </p>
              </div>

              <div>
                <form className="career-form" onSubmit={handleResumeSubmit}>
                  <div>
                    <h5>
                      Fields for resume uploading to be below the text Come Join
                      Us!
                    </h5>

                    <div>
                      <input
                        className="w-full px-4 py-2 my-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors focus:outline-none"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Your Full Name"
                        required
                      />
                    </div>

                    <div className=" grid grid-cols-2 gap-3">
                      <div>
                        <input
                          className=" w-full px-4 py-2 my-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors focus:outline-none"
                          type="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          placeholder="Your Email"
                          required
                        />
                      </div>

                      <div>
                        <input
                          className="w-full px-4 py-2 my-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors focus:outline-none"
                          type="tel"
                          value={phoneNumber}
                          onChange={(event) =>
                            setPhoneNumber(event.target.value)
                          }
                          placeholder="Your Phone"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        className="w-full px-4 py-2 my-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors focus:outline-none resize-none"
                        placeholder="Message"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        rows="4"
                        required
                      ></textarea>
                    </div>

                    <div>
                      <input
                        type="file"
                        name="resume_file"
                        id="resume_file"
                        ref={fileInputRef}
                        accept=".doc, .docx, .pdf"
                        onChange={(event) => {
                          const file = event.target.files[0];
                          if (
                            file.type !== "application/msword" &&
                            file.type !== "application/pdf" &&
                            file.type !==
                              "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          ) {
                            alert("Please select a .doc or .pdf file");
                            fileInputRef.current.value = "";
                          } else {
                            setResumeFile(file);
                          }
                        }}
                        required
                      />
                    </div>

                    <div>
                      <button
                        className="flex justify-center bg-gray-500 mt-5 p-3 rounded-md text-white"
                        type="submit"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span style={{ marginRight: "8px" }}>
                              Sending...
                            </span>

                            <span className="loader"></span>
                          </>
                        ) : (
                          <>
                            <span>Send message</span>
                            <svg
                              className="send-btn w-6 h-6 fill-white ml-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                            </svg>
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
      </div>
    </>
  );
}

export default Career;
