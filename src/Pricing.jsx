import React from "react";
import logo from "./assets/logo (1).png";
import logo2 from "./assets/logo.png";
import Accordion from "./Accordion";
import "./App.css";

const Pricing = () => {
  return (
    <>
      <section className="w-[80%]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold pt-5">Pricing Plans</h1>
          <p className="pt-2 md:w-[80%] lgSm:w-[55%] text-center">
            Discover flexible pricing plans tailored to meet your needs, whether
            you’re a startup or an enterprise
          </p>

          {/* box-container */}
          <div className="grid grid-cols-1 lgSm:grid-cols-3 w-full justify-center gap-10 lgSm:gap-0 items-center mx-auto mt-10 md:mt-20 my-20">
            <div
              className="bg-[#2fd6ff] bg-opacity-30 w-[300px] md:w-[320px]  rounded-xl text-white p-10 px-6 md:px-10 shadow-xl flex flex-col gap-2 opacity-90 justify-center text-center items-center mx-auto"
              data-aos="fade-up"
            >
              {/* <img src={logo} alt="" className="w-28" /> */}
              <h3 className="font-semibold text-lg">Beginner</h3>
              <div className="leading-tight">
                <h2 className="font-bold text-[45px] text-center">$120</h2>
                <span>/ Per Month</span>
              </div>
              <ul className="flex flex-col gap-2 pt-3 text-[15px] md:text-base">
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Basic Threat Monitoring</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">24/7 Support</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Secure Data Backup</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Firewall Protection</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">
                    Basic Vulnerability Scanning
                  </span>
                </li>
              </ul>
              <button className="opacity-95 hover:opacity-100 bg-[#2fd6ff] p-2 px-6 rounded-full mt-4">
                Get Started
              </button>
            </div>
            <div
              className="bg-[#2fd6ff] bg-opacity-40 w-[300px] md:w-[320px] h-[460px] rounded-xl text px-6 md:px-10-white p-10 shadow-xl flex flex-col gap-2 justify-center text-center items-center mx-auto"
              data-aos="fade-up"
            >
              {/* <img src={logo} alt="" className="w-28" /> */}
              <h3 className="font-semibold text-lg">Business</h3>
              <div className="leading-tight">
                <h2 className="font-bold text-[45px] text-center">$180</h2>
                <span>/ Per Month</span>
              </div>
              <ul className="flex flex-col gap-2 pt-3 text-[15px] md:text-base">
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Advanced Threat Detection</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">24/7 Support</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Data Encryption</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Intrution Prevention</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">
                    Basic Vulnerability Scanning
                  </span>
                </li>
              </ul>
              <button className="opacity-95 hover:opacity-100 bg-[#2fd6ff] p-2 px-6 rounded-full mt-4">
                Get Started
              </button>
            </div>
            <div
              className="bg-[#2fd6ff] bg-opacity-30 w-[300px] md:w-[320px] rounded-xl text-white p-10 px-6 md:px-10 shadow-xl flex flex-col gap-2 justify-center text-center items-center mx-auto opacity-90 "
              data-aos="fade-up"
            >
              {/* <img src={logo} alt="" className="w-28" /> */}
              <h3 className="font-semibold text-lg">Professional</h3>
              <div className="leading-tight">
                <h2 className="font-bold text-[45px] text-center">$200</h2>
                <span>/ Per Month</span>
              </div>
              <ul className="flex flex-col gap-2 pt-3 text-[15px] md:text-base">
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Full Threat Management</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Dedicated Security Expert</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Secure Data Backup</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Firewall Protection</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Firewall, IPS, and IDS</span>
                </li>
              </ul>
              <button className="opacity-95 hover:opacity-100 bg-[#2fd6ff] p-2 px-6 rounded-full mt-4">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* FAQ */}

        <div
          className="flex flex-col justify-center items-center mt-10 mb-20"
          data-aos="fade-up"
        >
          {/* box-container */}
          <div className="flex flex-col-reverse lg:flex-row-reverse gap-12 lg:gap-20 ">
            {/* <div className=" lg:w-[52%]">
              <div className="flex flex-wrap gap-8">
                <div className="flex self-start">
                  <h1 className="w-16 font-bold text-5xl text-[#2fd6ff] opacity-70 rye-regular">
                    1
                  </h1>
                  <ul className="">
                    <li className="font-semibold bg-[#00b3b3] bg-opacity-35 p-5 cursor-pointer  md:w-[450px] flex justify-between">
                      <span>
                        Why is cybersecurity important for my business
                      </span>
                      <span className="">
                        {" "}
                        <i className="fa-solid fa-chevron-down"></i>{" "}
                      </span>
                    </li>
                    <li className="">
                      <p className="opacity-75 "></p> 
                    </li>
                  </ul>
                </div>
                <div className="flex self-start">
                  <h1 className="w-16 font-bold text-5xl text-[#2fd6ff] opacity-70 rye-regular">
                    2
                  </h1>
                  <ul className="">
                    <li className="font-semibold bg-[#00b3b3] bg-opacity-35 p-5 cursor-pointer  md:w-[450px] flex justify-between">
                      <span className="">
                        How do you ensure my data stays secure?
                      </span>
                      <span className="">
                        {" "}
                        <i className="fa-solid fa-chevron-down"> </i>
                      </span>
                    </li>
                    <li className="">
                      <p className="opacity-75 "></p>
                    </li>
                  </ul>
                </div>
                <div className="flex self-start">
                  <h1 className="w-16 font-bold text-5xl text-[#2fd6ff] opacity-70 rye-regular">
                    3
                  </h1>
                  <ul className="">
                    <li className="font-semibold bg-[#00b3b3] bg-opacity-35 p-5 cursor-pointer  md:w-[450px] flex justify-between">
                      <span> Do you offer customized security solutions?</span>
                      <span className="">
                        {" "}
                        <i className="fa-solid fa-chevron-down"> </i>
                      </span>
                    </li>
                    <li className="">
                      <p className="opacity-75 "></p>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            <Accordion />
            <div className="lg:w-[48%]">
              <h1 className="text-3xl font-bold pb-5">
                Frequently Asked Questions
              </h1>
              <p className="opacity-80 text-[16px]">
                At CyberPro, we prioritize your understanding of cybersecurity
                issues. To assist you further, we've curated a list of
                frequently asked questions that cover a range of topics related
                to our services and cybersecurity best practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
