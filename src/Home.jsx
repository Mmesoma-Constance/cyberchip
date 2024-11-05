import React from "react";
import cyber1 from "./assets/cyber1.png";
import logo from "./assets/logo (1).png";

import logo2 from "./assets/logo.png";
import Pricing from "./Pricing";
import About from "./About";
import people1 from "./assets/people (1).jpg";
import people2 from "./assets/people (1).png";
import people3 from "./assets/people (9).jpg";
import people4 from "./assets/people (4).jpg";

import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";
import blog4 from "./assets/blog4.jpeg";
import blog5 from "./assets/blog5.jpeg";
import blog6 from "./assets/blog6.png";

import partners1 from "./assets/partners (7).png";
import partners2 from "./assets/partners (1).png";
import partners3 from "./assets/partners (3).png";
import partners4 from "./assets/partners (4).png";
import partners5 from "./assets/partners (10).png";
import partners6 from "./assets/partners (6).png";
import partners7 from "./assets/partners (8).png";
import partners8 from "./assets/partners (5).png";
import { Link } from "react-router-dom";

const Home = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/* hero section */}
      <section className="w-[80%] mt-10 mdXl:mt-0">
        <div className="flex flex-col mdXl:flex-row justify-between items-center w-full">
          <div className="flex flex-col gap-4 mdXl:w-[60%]" data-aos="zoom-in">
            <h1 className="text-[48px] sm:text-[50px] lg:text-[56px] lgSm:text-[65px] font-bold leading-[50px] sm:leading-[54px] lg:leading-[57px] lgSm:leading-[75px]">
              <span className="rye-regular lgSm:text-[58px]">24/7</span>
              <span className="judson-bold">
                {" "}
                Cybersecurity <br />
                Operation Center
              </span>
            </h1>

            <p className="sm:text-lg md:text-base ubuntu-regular">
              Providing around-the-clock monitoring and protection to keep your
              systems secure from cyber threats. Our team of experts ensures
              your data and workflows remain safe and uninterrupted.
            </p>
            <div className="md:hidden mt-4">
              {" "}
              <img
                src={cyber1}
                alt=""
                className="w-[450px] h-full object-cover"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5 mt-4 ubuntu-bold">
              <button className="opacity-95 hover:opacity-100 bg-[#2fd6ff]  p-3  px-8 rounded-full text-lg">
                Get Started
              </button>
              <button className="opacity-95 hover:opacity-100 bg-[#00004d] bg-opacity-40 p-3  px-8 rounded-full text-lg">
                Contact Us
              </button>
            </div>
          </div>
          <div className="hidden md:flex mt-4">
            <img
              src={cyber1}
              alt=""
              className="w-[450px] h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* partners section */}
      <section className="bg-[#00004d]  bg-opacity-15 w-full my-20 md:mb-14 p-6 py-8">
        <div
          className="flex flex-col justify-center items-center mx-auto"
          data-aos="zoom-in"
        >
          <h3 className="text-[#2fd6ff] font-bold">PARTNERS</h3>
          <h1 className="text-3xl font-bold">We're Working With</h1>
          <div className="flex flex-wrap gap-6 justify-center items-center mx-auto mt-10">
            <div
              className="bg-[#00004d] bg-opacity-25 rounded-xl text-white p-2.5 shadow-xl w-16 h-[68px]
            "
              data-aos="zoom-in"
            >
              <img src={partners1} alt="" className="w-[42px]" />
            </div>
            <div
              className="bg-[#00004d] bg-opacity-25 rounded-xl text-white p-2.5 shadow-xl w-16 h-[68px]
            "
              data-aos="zoom-in"
            >
              <img src={partners2} alt="" className="w-[50px]" />
            </div>
            <div
              className="flex items-center bg-[#00004d] bg-opacity-25 rounded-xl text-white p-2.5 shadow-xl w-16 h-[68px]
            "
            >
              <img src={partners3} alt="" className="w-[52px]" />
            </div>
            <div
              className="bg-[#00004d] bg-opacity-25 rounded-xl text-white p-2.5 shadow-xl w-16 h-[68px]
            "
              data-aos="zoom-in"
            >
              <img src={partners4} alt="" className="w-[42px]" />
            </div>
            <div
              className="bg-[#00004d] bg-opacity-25 rounded-xl text-white p-2.5 shadow-xl w-16 h-[68px]
            "
              data-aos="zoom-in"
            >
              <img src={partners5} alt="" className="w-[42px]" />
            </div>
            <div
              className="bg-[#00004d] bg-opacity-25 rounded-xl text-white p-2.5 shadow-xl w-16 h-[68px]
            "
              data-aos="zoom-in"
            >
              <img src={partners6} alt="" className="w-[42px]" />
            </div>
            <div
              className="bg-[#00004d] bg-opacity-25 rounded-xl text-white p-2.5 shadow-xl w-16 h-[68px]
            "
              data-aos="zoom-in"
            >
              <img src={partners7} alt="" className="w-[42px]" />
            </div>
            <div
              className="bg-[#00004d] bg-opacity-25 flex items-center rounded-xl text-white p-2.5 shadow-xl w-16 h-[68px]
            "
            >
              <img src={partners8} alt="" className="w-[52px]" />
            </div>
          </div>
        </div>
      </section>

      {/* about section */}
      <section className="w-[80%] mx-auto mb-20 md:mb-10" data-aos="fade-up">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-4xl font-bold pt-5">About Us</h1>
          <p className="pt-3 md:w-[55%] text-center">
            Learn more about CyberPro's mission, values, and the passion driving
            our team to deliver top-notch cybersecurity and technology solutions
          </p>

          {/* box-container */}
          <div
            className="flex flex-col lgSm:flex-row  lgSm:gap-16 items-center "
            data-aos="fade-up"
          >
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-10 lgSm:my-24 lgSm:w-[52%]"
              data-aos="fade-up"
            >
              <div className="bg-[#2fd6ff] bg-opacity-30  rounded-xl text-white p-6 shadow-xl flex flex-col gap-2">
                <span className="flex flow-row gap-3">
                  <i className="fa-solid fa-camera text-4xl text-[#2fd6ff] pb-3"></i>
                  <h3 className="text-2xl font-bold">
                    Camera <br /> Survellience{" "}
                  </h3>
                </span>

                <p className="opacity-80 text-[15px] pt-3">
                  Real-time monitoring solutions to keep your premises secure
                  and detect unauthorized activities
                </p>
              </div>

              <div className="bg-[#2fd6ff] bg-opacity-30  rounded-xl text-white p-6 shadow-xl flex flex-col gap-2">
                <span className="flex flow-row gap-3">
                  <i className="fa-solid fa-folder text-4xl text-[#2fd6ff] pb-3"></i>
                  <h3 className="text-2xl font-bold">
                    Folder <br /> Security{" "}
                  </h3>
                </span>

                <p className="opacity-80 text-[15px] pt-3">
                  Protect sensitive folders from unauthorized access with our
                  reliable security solutions
                </p>
              </div>

              <div className="bg-[#2fd6ff] bg-opacity-30  rounded-xl text-white p-6 shadow-xl flex flex-col gap-2">
                <span className="flex flow-row gap-3">
                  <i className="fa-solid fa-lock text-4xl text-[#2fd6ff] pb-3"></i>
                  <h3 className="text-2xl font-bold">
                    End to End <br /> Encryption{" "}
                  </h3>
                </span>

                <p className="opacity-80 text-[15px] pt-3">
                  Complete encryption solutions that ensure data privacy from
                  sender to recipient
                </p>
              </div>

              <div className="bg-[#2fd6ff] bg-opacity-30  rounded-xl text-white p-6 shadow-xl flex flex-col gap-2">
                <span className="flex flow-row gap-3">
                  <i className="fa-solid fa-fingerprint text-4xl text-[#2fd6ff] pb-3"></i>
                  <h3 className="text-2xl font-bold">
                    Finger Print <br /> Security
                  </h3>
                </span>

                <p className="opacity-80 text-[15px] pt-3">
                  Biometric security options that provide an extra layer of
                  protection, accessible only to authorized users
                </p>
              </div>
            </div>
            <div className="lgSm:w-[48%]">
              <span className="text-[#2fd6ff] font-semibold">WHO ARE WE</span>
              <h1 className="text-3xl font-bold pb-10">
                Empowering Businesses <br /> Through Cyber Protection
              </h1>
              <p className="opacity-90 text-[16px]">
                We are a dedicated team focused on minimizing cybersecurity
                risks for businesses. Our proactive approach and advanced tools
                ensure you can focus on productivity without worrying about
                cyber threats."
                <br />
                <br />
                At CyberPro, we are dedicated to providing cutting-edge
                cybersecurity solutions tailored to protect your business from
                evolving threats. Our team of seasoned experts uses the latest
                technology and best practices to ensure your data and systems
                remain secure. We are committed to helping organizations
                navigate the complex world of cybersecurity with ease and
                confidence.
              </p>
              <br />
              {/* <p className="opacity-90">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias, voluptatem fugiat distinctio doloribus accusantium
                  fugit aliquid numquam autem sequi. Est.
                </p> */}
              <button className="opacity-95 hover:opacity-100 bg-[#2fd6ff] p-2.5 px-10 text-lg mt-10 lg:mt-0 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* services section */}

      <section className="bg-[#009999] bg-opacity-30 w-full pt-5">
        <div
          className="flex flex-col justify-center items-center "
          data-aos="fade-up"
        >
          <h1 className="text-4xl font-bold pt-5">Services</h1>
          <p className="pt-3 w-[80%] md:w-[50%] text-center">
            Explore our wide range of services, from cybersecurity consulting to
            ethical hacking, designed to protect your business from evolving
            threats
          </p>

          {/* box-container */}
          <div
            className="flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3  gap-6 justify-center w-[80%] items-center mx-auto my-14"
            data-aos="fade-up"
          >
            <div
              className="bg-[#2fd6ff] bg-opacity-30 h-[330px] rounded-xl text-white p-8 shadow-xl flex flex-col gap-2"
              data-aos="fade-up"
            >
              <i className="fa-solid fa-wifi text-[45px] text-[#2fd6ff] pb-3"></i>
              <h3 className="text-2xl font-bold">Office Network Security</h3>
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
              className="bg-[#2fd6ff] bg-opacity-30 h-[330px] rounded-xl text-white p-8 shadow-xl flex flex-col gap-2"
              data-aos="fade-up"
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
              className="bg-[#2fd6ff] bg-opacity-30 h-[330px] rounded-xl text-white p-8 shadow-xl flex flex-col gap-2"
              data-aos="fade-up"
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
              className="bg-[#2fd6ff] bg-opacity-30 h-[330px]  rounded-xl text-white p-8 shadow-xl  gap-2 hidden md:flex md:flex-col lg:hidden"
              data-aos="fade-up"
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
          </div>

          <Link to="/services">
            <button className="opacity-95 hover:opacity-100 bg-[#2fd6ff] p-2 px-10 text-lg mb-10 rounded-full">
              See All
            </button>
          </Link>
        </div>
      </section>

      {/* pricing section */}
      <section
        className="flex flex-col justify-center items-center pt-12 w-[80%]"
        data-aos="fade-up"
      >
        <h1 className="text-4xl font-bold pt-5">Pricing Plans</h1>
        <p className="pt-2  md:w-[65%] text-center">
          Discover flexible pricing plans tailored to meet your needs, whether
          you’re a startup or an enterprise
        </p>

        {/* box-container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full justify-center gap-10 md:gap-0 items-center mx-auto mt-10 md:mt-20 my-20">
          <div
            className="bg-[#2fd6ff] bg-opacity-30 w-[320px]  rounded-xl text-white p-10 shadow-xl flex flex-col gap-2 opacity-90 justify-center text-center items-center mx-auto"
            data-aos="fade-up"
          >
            {/* <img src={logo} alt="" className="w-28" /> */}
            <h3 className="font-semibold text-lg">Beginner</h3>
            <div className="leading-tight">
              <h2 className="font-bold text-[45px] text-center">$120</h2>
              <span>/ Per Month</span>
            </div>
            <ul className="flex flex-col gap-2 pt-3">
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
                <span className="opacity-80">Basic Vulnerability Scanning</span>
              </li>
            </ul>
            <button className="opacity-95 hover:opacity-100 bg-[#2fd6ff] p-2 px-6 rounded-full mt-4">
              Get Started
            </button>
          </div>
          <div
            className="bg-[#2fd6ff] bg-opacity-40 w-[320px] h-[460px] rounded-xl text-white p-10 shadow-xl flex flex-col gap-2 justify-center text-center items-center mx-auto"
            data-aos="fade-up"
          >
            {/* <img src={logo} alt="" className="w-28" /> */}
            <h3 className="font-semibold text-lg">Business</h3>
            <div className="leading-tight">
              <h2 className="font-bold text-[45px] text-center">$180</h2>
              <span>/ Per Month</span>
            </div>
            <ul className="flex flex-col gap-2 pt-3">
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
                <span className="opacity-80">Basic Vulnerability Scanning</span>
              </li>
            </ul>
            <button className="opacity-95 hover:opacity-100 bg-[#2fd6ff] p-2 px-6 rounded-full mt-4">
              Get Started
            </button>
          </div>
          <div
            className="bg-[#2fd6ff] bg-opacity-30 w-[320px] rounded-xl text-white p-10 shadow-xl flex flex-col gap-2 justify-center text-center items-center mx-auto opacity-90 "
            data-aos="fade-up"
          >
            {/* <img src={logo} alt="" className="w-28" /> */}
            <h3 className="font-semibold text-lg">Professional</h3>
            <div className="leading-tight">
              <h2 className="font-bold text-[45px] text-center">$200</h2>
              <span>/ Per Month</span>
            </div>
            <ul className="flex flex-col gap-2 pt-3">
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
      </section>

      {/* team section */}
      <section className="flex flex-col justify-center items-center bg-[#009999] bg-opacity-30  w-full pt-7">
        <div
          className="w-full flex flex-col justify-center items-center mx-auto"
          data-aos="fade-up"
        >
          <h1 className="text-4xl font-bold pt-5">Our Team</h1>
          <p className="pt-3 w-[80%] md:w-[50%] text-center">
            Get to know our team of experienced cybersecurity experts,
            developers, and consultants committed to keeping you safe online
          </p>
        </div>

        <div
          className="flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3  gap-10 lg:gap-12 justify-center items-center mx-auto w-[80%] mt-16 mb-10"
          data-aos="fade-up"
        >
          <div
            className=" flex flex-col gap-2 justify-center items-center text-center"
            data-aos="fade-up"
          >
            <img
              src={people1}
              className="w-40 h-40 rounded-full object-cover"
              alt=""
            />
            <h2 className="font-bold text-[22px]">Alexandra Pedro</h2>
            <span className="text-sm font-semibold">
              Programmer, 7+ years experience
            </span>
            <p className="opacity-70">
              Alexandra is a seasoned programmer skilled in multiple languages,
              driving impactful software projects for over seven years
            </p>
            <ul className="flex gap-4 pt-1">
              <li className="text-[#2fd6ff] text-lg hover:text-white cursor-pointer">
                <i className="fa-brands fa-facebook-f"></i>
              </li>
              <li className="text-[#2fd6ff] text-lg hover:text-white cursor-pointer">
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li className="text-[#2fd6ff] text-lg hover:text-white cursor-pointer">
                <i className="fa-brands fa-twitter"></i>
              </li>
              <li className="text-[#2fd6ff] text-lg hover:text-white cursor-pointer">
                <i className="fa-brands fa-linkedin"></i>
              </li>
              <li className="text-[#2fd6ff] text-lg hover:text-white cursor-pointer">
                <i className="fa-brands fa-github"></i>
              </li>
            </ul>
          </div>
          <div
            className=" flex flex-col gap-2 justify-center items-center text-center"
            data-aos="fade-up"
          >
            <img
              src={people2}
              className="w-40 h-40 rounded-full object-cover"
              alt=""
            />
            <h2 className="font-bold text-[22px]">Jane Doe</h2>
            <span className="text-sm font-semibold">
              Cyber Expertise, 12+ years experience
            </span>
            <p className="opacity-70">
              Jane brings over a decade of experience in cybersecurity,
              specializing in defending against digital threats
            </p>
            <ul className="flex gap-4 pt-1">
              <li className="text-[#2fd6ff] text-lg hover:text-white cursor-pointer">
                <i className="fa-brands fa-facebook-f"></i>
              </li>
              <li className="text-[#2fd6ff] text-lg hover:text-white cursor-pointer">
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li className="text-[#2fd6ff] text-lg hover:text-white cursor-pointer">
                <i className="fa-brands fa-twitter"></i>
              </li>
              <li className="text-[#2fd6ff] text-lg hover:text-white cursor-pointer">
                <i className="fa-brands fa-linkedin"></i>
              </li>
              <li className="text-[#2fd6ff] text-lg hover:text-white cursor-pointer">
                <i className="fa-brands fa-github"></i>
              </li>
            </ul>
          </div>
          <div
            className=" flex flex-col gap-2 justify-center items-center text-center"
            data-aos="fade-up"
          >
            <img
              src={people3}
              className="w-40 h-40 rounded-full object-cover"
              alt=""
            />
            <h2 className="font-bold text-[22px]">Lisa Kimberly</h2>
            <span className="text-sm font-semibold">
              Hacker, 8+ years experience
            </span>
            <p className="opacity-70">
              Lisa is an ethical hacker with over eight years of experience in
              penetration testing and security auditing
            </p>
            <ul className="flex gap-4 pt-1">
              <li className="text-[#2fd6ff] text-lg hover:text-white cursor-pointer">
                <i className="fa-brands fa-facebook-f"></i>
              </li>
              <li className="text-[#2fd6ff] text-lg hover:text-white cursor-pointer">
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li className="text-[#2fd6ff] text-lg hover:text-white cursor-pointer">
                <i className="fa-brands fa-twitter"></i>
              </li>
              <li className="text-[#2fd6ff] text-lg hover:text-white cursor-pointer">
                <i className="fa-brands fa-linkedin"></i>
              </li>
              <li className="text-[#2fd6ff] text-lg hover:text-white cursor-pointer">
                <i className="fa-brands fa-github"></i>
              </li>
            </ul>
          </div>

          <div
            className="hidden md:flex md:flex-col lg:hidden gap-2 justify-center items-center text-center"
            data-aos="fade-up"
          >
            <img
              src={people4}
              className="w-40 h-40 rounded-full object-cover"
              alt=""
            />
            <h2 className="font-bold text-[22px]">Jonathan C.</h2>
            <span className="text-sm font-semibold">
              Cyber Expertise, 10+ years experience
            </span>
            <p className="opacity-70">
              Jonathan is a cybersecurity consultant with expertise in risk
              assessment and digital protection strategies
            </p>
            <ul className="flex gap-4 pt-1">
              <li className="text-[#2fd6ff] text-lg hover:text-white cursor-pointer">
                <i className="fa-brands fa-facebook-f"></i>
              </li>
              <li className="text-[#2fd6ff] text-lg hover:text-white cursor-pointer">
                <i className="fa-brands fa-instagram"></i>
              </li>
              <li className="text-[#2fd6ff] text-lg hover:text-white cursor-pointer">
                <i className="fa-brands fa-twitter"></i>
              </li>
              <li className="text-[#2fd6ff] text-lg hover:text-white cursor-pointer">
                <i className="fa-brands fa-linkedin"></i>
              </li>
              <li className="text-[#2fd6ff] text-lg hover:text-white cursor-pointer">
                <i className="fa-brands fa-github"></i>
              </li>
            </ul>
          </div>
        </div>
        <Link to="/team">
          <button className="opacity-95 hover:opacity-100 bg-[#2fd6ff] p-2 px-10 text-lg mb-20 rounded-full">
            See All
          </button>
        </Link>
      </section>

      {/* blog section */}

      <section
        className="flex flex-col justify-center items-center mt-16"
        data-aos="fade-up"
      >
        <h1 className="text-4xl font-bold pt-5 w-[80%] text-center">
          Latest Blog & Articles
        </h1>
        <p className="pt-3 w-[80%] md:w-[55%] text-center">
          Stay updated with the latest cybersecurity trends, tips, and insights
          from our experts in the CyberPro blog
        </p>
        <div
          className="flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3  gap-8 justify-center items-center mx-auto mt-10 md:mt-20 mb-10 w-[80%]"
          data-aos="fade-up"
        >
          <div className="" data-aos="fade-up">
            <figure className="w-[330px] md:w-auto">
              <img
                src={blog1}
                alt=""
                className="w-full h-[250px] object-cover"
              />
              <figcaption className="pt-3">
                <h3 className="font-bold text-xl">
                  The Importance of Cybersecurity in a Digital World
                </h3>

                <p className="opacity-70 pt-3 text-[15px]">
                  Cybersecurity is crucial for safeguarding businesses in
                  today’s digital era. Learn how a strong defense protects your
                  company.
                </p>
              </figcaption>
              <button className="text-[#2fd6ff] text-lg self-start font-semibold bg-transparent hover:font-bold mt-5">
                Read more &#8594;
              </button>
            </figure>
          </div>
          <div className="" data-aos="fade-up">
            <figure className="w-[330px] md:w-auto">
              <img
                src={blog5}
                alt=""
                className="w-full h-[250px] object-cover"
              />
              <figcaption className="pt-3">
                <h3 className="font-bold text-xl">
                  Top 5 Cyber Threats Business Face in {currentYear}
                </h3>

                <p className="opacity-70 pt-3 text-[15px]">
                  From phishing to ransomware, cyber threats are more dangerous
                  than ever. Discover the top risks and how your business can
                  stay protected.
                </p>
              </figcaption>
              <button className="text-[#2fd6ff] text-lg self-start font-semibold bg-transparent hover:font-bold mt-5">
                Read more &#8594;
              </button>
            </figure>
          </div>
          <div className="" data-aos="fade-up">
            <figure className="w-[330px] md:w-auto">
              <img
                src={blog3}
                alt=""
                className="w-full h-[250px] object-cover"
              />
              <figcaption className="pt-3">
                <h3 className="font-bold text-xl">
                  How Data Encryption Protects Your Business and Builds Trust
                </h3>

                <p className="opacity-70 pt-3 text-[15px]">
                  Encryption is a powerful tool for data security. See how it
                  protects sensitive information and helps you maintain customer
                  trust.
                </p>
              </figcaption>
              <button className="text-[#2fd6ff] text-lg self-start font-semibold bg-transparent hover:font-bold mt-5">
                Read more &#8594;
              </button>
            </figure>
          </div>

          <div className="hidden md:flex lg:hidden" data-aos="fade-up">
            <figure className="w-[330px] md:w-auto">
              <img
                src={blog4}
                alt=""
                className="w-full h-[250px] object-cover"
              />
              <figcaption className="pt-3">
                <h3 className="font-bold text-xl">
                  Cybersecurity Best Practices for small Businesses
                </h3>

                <p className="opacity-70 pt-3 text-[15px]">
                  Effective cybersecurity doesn’t have to be expensive. Here are
                  simple, budget-friendly ways for small businesses to stay
                  secure.
                </p>
              </figcaption>
              <button className="text-[#2fd6ff] text-lg self-start font-semibold bg-transparent hover:font-bold mt-5">
                Read more &#8594;
              </button>
            </figure>
          </div>
        </div>
        <Link to="/blog">
          {" "}
          <button className="opacity-95 hover:opacity-100 bg-[#2fd6ff] p-2 px-10 text-lg mb-20 rounded-full">
            See All
          </button>
        </Link>
      </section>
    </>
  );
};

export default Home;
