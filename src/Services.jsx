import React from "react";
import logo from "./assets/logo (1).png";
import blog from "./assets/blog1.jpg";

const Services = () => {
  return (
    <>
      <section className="w-[80%]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold pt-5">Services</h1>
          <p className="pt-3 md:w-[80%] lgSm:w-[55%] text-center">
            Explore our wide range of services, from cybersecurity consulting to
            ethical hacking, designed to protect your business from evolving
            threats
          </p>

          {/* box-container */}
          <div className="grid grid-cols-1 mdMd:grid-cols-2 lgSm:grid-cols-3 gap-6 justify-center items-center mx-auto mt-10 md:my-20">
            <div
              className="bg-[#2fd6ff] bg-opacity-30 h-fit lg:h-[330px] rounded-xl text-white p-8 shadow-xl flex flex-col gap-2"
              data-aos="zoom-in"
            >
              <i className="fa-solid fa-wifi text-[45px] text-[#2fd6ff] pb-3"></i>
              <h3 className="text-2xl font-bold">Office Security</h3>
              <p className="opacity-80 text-[15px]">
                Safeguard your office network with comprehensive security
                measures to protect against intrusions and unauthorized access,
                ensuring your organization's data remains secure.
              </p>
              <button className="text-[#2fd6ff] text-lg self-start font-bold bg-transparent hover:font-bold mt-5">
                Read more &#8594;
              </button>
            </div>
            <div
              className="bg-[#2fd6ff] bg-opacity-30 h-fit lg:h-[330px] rounded-xl text-white p-8 shadow-xl flex flex-col gap-2"
              data-aos="zoom-in"
            >
              <i className="fa-solid fa-bug-slash text-[45px] text-[#2fd6ff] pb-3"></i>
              <h3 className="text-2xl font-bold">Anti-Malware</h3>
              <p className="opacity-80 text-[15px]">
                Stay protected from malicious software with advanced
                anti-malware solutions that detect, prevent, and remove threats
                before they can cause harm.
              </p>
              <button className="text-[#2fd6ff] text-lg self-start font-bold bg-transparent hover:font-bold mt-5">
                Read more &#8594;
              </button>
            </div>{" "}
            <div
              className="bg-[#2fd6ff] bg-opacity-30 h-fit lg:h-[330px] rounded-xl text-white p-8 shadow-xl flex flex-col gap-2"
              data-aos="zoom-in"
            >
              <i className="fa-solid fa-file-shield text-[45px] text-[#2fd6ff] pb-3"></i>
              <h3 className="text-2xl font-bold">Data Protection</h3>
              <p className="opacity-80 text-[15px]">
                Our data protection services ensure that your critical
                information is always secure, with backup, encryption, and
                recovery strategies that prevent data loss and unauthorized
                access.
              </p>
              <button className="text-[#2fd6ff] text-lg self-start font-bold bg-transparent hover:font-bold mt-5">
                Read more &#8594;
              </button>
            </div>
            <div
              className="bg-[#2fd6ff] bg-opacity-30 h-fit lg:h-[330px]  rounded-xl text-white p-8 shadow-xl flex flex-col gap-2"
              data-aos="zoom-in"
            >
              <i className="fa-solid fa-key text-[45px] text-[#2fd6ff] pb-3"></i>
              <h3 className="text-2xl font-bold">Password Manager</h3>
              <p className="opacity-80 text-[15px]">
                Simplify and secure your passwords with our password management
                tools, which help you create, store, and organize complex
                passwords securely.
              </p>
              <button className="text-[#2fd6ff] text-lg self-start font-bold bg-transparent hover:font-bold mt-5">
                Read more &#8594;
              </button>
            </div>
            <div
              className="bg-[#2fd6ff] bg-opacity-30 h-fit lg:h-[330px]  rounded-xl text-white p-8 shadow-xl flex flex-col gap-2"
              data-aos="zoom-in"
            >
              <i className="fa-solid fa-envelope text-[45px] text-[#2fd6ff] pb-3"></i>
              <h3 className="text-2xl font-bold">Email Encryption</h3>
              <p className="opacity-80 text-[15px]">
                Protect your email communications with robust encryption
                solutions, keeping sensitive information secure from
                unauthorized access during transmission.
              </p>
              <button className="text-[#2fd6ff] text-lg self-start font-bold bg-transparent hover:font-bold mt-5">
                Read more &#8594;
              </button>
            </div>
            <div
              className="bg-[#2fd6ff] bg-opacity-30 h-fit lg:h-[330px]  rounded-xl text-white p-8 shadow-xl flex flex-col gap-2"
              data-aos="zoom-in"
            >
              <i className="fa-solid fa-globe text-[45px] text-[#2fd6ff] pb-3"></i>
              <h3 className="text-2xl font-bold">Secure Browser </h3>
              <p className="opacity-80 text-[15px]">
                Browse the internet safely with our secure browser solution,
                designed to protect you from phishing, malware, and other
                web-based threats.
              </p>
              <button className="text-[#2fd6ff] text-lg self-start font-bold bg-transparent hover:font-bold mt-5">
                Read more &#8594;
              </button>
            </div>
          </div>
        </div>

        {/* benefits */}

        <div className="flex flex-col justify-center items-center mt-28 md:mt-10 my-10 mb-20">
          {/* box-container */}
          <div className="flex flex-col lg:flex-row-reverse gap-6 md:gap-16 items-center ">
            <div className=" lg:w-[52%]">
              <img src={blog} alt="" className=" h-full" />
            </div>

            <div className="lg:w-[48%]">
              <h1 className="text-3xl font-bold pb-5">
                Benefit With Our Services
              </h1>
              <p className="opacity-90 text-[16px]">
                Our solutions guard against cyber threats like malware and
                phishing, keeping your data secure so you can focus on your
                business with peace of mind.
                <br />
                <br />
                We use advanced encryption to protect your sensitive
                information, ensuring that client and business data remain
                confidential and secure.
              </p>
              <br />
              <p className="opacity-90">
                Automated security monitoring keeps your operations running
                smoothly while ensuring compliance with industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
