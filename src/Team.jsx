import React from "react";
import people1 from "./assets/people (1).jpg";
import people2 from "./assets/people (1).png";
import people3 from "./assets/people (9).jpg";
import people4 from "./assets/people (4).jpg";
import people5 from "./assets/people (5).jpg";
import people6 from "./assets/people (6).jpg";

const Team = () => {
  return (
    <>
      <section className=" w-[80%]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold pt-5">Our Team</h1>
          <p className="pt-3 md:w-[55%] text-center">
            Get to know our team of experienced cybersecurity experts,
            developers, and consultants committed to keeping you safe online
          </p>

          {/* box-container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 lg:gap-12 justify-center items-center mx-auto mt-10 md:mt-20 my-20">
            <div
              className=" flex flex-col gap-2 justify-center items-center text-center"
              data-aos="zoom-in"
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
                Alexandra is a seasoned programmer skilled in multiple
                languages, driving impactful software projects for over seven
                years
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
              data-aos="zoom-in"
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
              data-aos="zoom-in"
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
              className=" flex flex-col gap-2 justify-center items-center text-center"
              data-aos="zoom-in"
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
            <div
              className=" flex flex-col gap-2 justify-center items-center text-center"
              data-aos="zoom-in"
            >
              <img
                src={people5}
                className="w-40 h-40 rounded-full object-cover"
                alt=""
              />
              <h2 className="font-bold text-[22px]">Andrew Park</h2>
              <span className="text-sm font-semibold">
                Programmer, 9+ years experience
              </span>
              <p className="opacity-70">
                With nearly a decade in development, Andrew builds innovative
                web and mobile applications
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
              data-aos="zoom-in"
            >
              <img
                src={people6}
                className="w-40 h-40 rounded-full object-cover"
                alt=""
              />
              <h2 className="font-bold text-[22px]">Sam Monic</h2>
              <span className="text-sm font-semibold">
                Hacker, 7+ years experience
              </span>
              <p className="opacity-70">
                Sam is an ethical hacker with a focus on discovering and
                resolving security vulnerabilities
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
        </div>

        {/* testimonial */}
        <div className="mt-6 mb-20 flex flex-col justify-center items-center">
          <h3 className="text-[#2fd6ff] font-bold pb-4">HAPPY CUSTOMERS</h3>
          <h1 className="text-3xl font-bold text-center">
            Our Clients Testimonials
          </h1>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8"
            data-aos="fade-up"
          >
            <div className="bg-[#2fd6ff] bg-opacity-30 flex-col-reverse   rounded-xl text-white p-10 shadow-xl flex gap-2">
              <div className="flex gap-2 self-start  pt-4">
                <img
                  src={people1}
                  alt=""
                  className="w-10 h-10 object-cover rounded-full"
                />
                <ul className="">
                  <li className="font-bold">CJ Martins</li>
                  <li className="text-[14px]">CEO of SecureWare Solutions</li>
                </ul>
              </div>

              <p className="opacity-80 text-[16px] italic">
                "Working with CyberPro has been one of the best decisions for
                our company. Their tailored cybersecurity solutions and
                round-the-clock support have not only protected us but have also
                allowed us to focus on growth without fear of data breaches.
                Highly recommend their services!"
              </p>
              <i className="fa-solid fa-quote-left text-4xl text-[#2fd6ff]"></i>
            </div>{" "}
            <div className="bg-[#2fd6ff] bg-opacity-30 flex-col-reverse   rounded-xl text-white p-10 shadow-xl flex gap-2">
              <div className="flex gap-2 self-start  pt-4">
                <img
                  src={people2}
                  alt=""
                  className="w-10 h-10 object-cover rounded-full"
                />
                <ul className="">
                  <li className="font-bold">Linda Shalom</li>
                  <li className="text-[14px]">CTO of Tech Innovators Inc.</li>
                </ul>
              </div>

              <p className="opacity-80 text-[16px] italic">
                "CyberPro has been an invaluable partner in our digital security
                journey. Their team’s proactive approach and expertise have
                given us peace of mind, knowing that our data is safe from
                emerging threats. We've seen a significant reduction in security
                incidents since partnering with CyberPro."
              </p>
              <i className="fa-solid fa-quote-left text-4xl text-[#2fd6ff]"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
