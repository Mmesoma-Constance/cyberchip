import React from "react";
import logo from "./assets/logo (3).png";
const Footer = () => {
  return (
    <>
      <section class="bg-[rgb(0,153,153)] bg-opacity-30 mt-6 overflow-hidden ">
        <div class="p-6 pt-10 sm:px-24 px-10 lgXl:px-32 flex flex-col lgXl:flex-row  gap-10 lgXl:gap-0 lgXl:justify-between items-center">
          <div className="flex gap-1 items-center self-start">
            <img src={logo} alt="" className="w-12" />
            <h1 className="text-[22px] font-bold audiowide-regular">
              CYBERPRO
            </h1>
          </div>
          <div className="flex flex-col md:flex-row md:gap-3 items-center self-start w-full md:justify-end">
            <h2 className="text-xl lg:text-2xl font-bold pr-4 self-start">
              Subcribe now
            </h2>
            <input
              type="email"
              class="w-full md:w-80 p-2 px-6 bg-transparent border rounded-full text-white outline-none mt-3 md:mt-0"
              placeholder="Your email"
            />
            <button class="opacity-95 hover:opacity-100 self-start md:self-auto mt-6 md:mt-0 bg-[#2fd6ff] text-white font-bold text-[15px] p-3 px-8 rounded-full">
              Subcribe
            </button>
          </div>
        </div>
      </section>

      <footer class="bg-[#009999] bg-opacity-30">
        <div class="pt-10 pb-3 mx-auto w-[80%] justify-center items-center">
          <div class="mb-6 flex flex-wrap lg:flex-row justify-between mx-auto gap-4">
            <span class="w-72">
              <h1 class="uppercase text-sm font-bold tracking-wide py-1 md:py-2 mb-3 text-[#2fd6ff]">
                About
              </h1>

              <p class="text-[15px] text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                adipisc deserunt fugiat impedit!
                <br /> <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </span>

            <span class="">
              <h1 class="uppercase text-sm font-bold tracking-wide py-1 md:py-2 mb-3 text-[#2fd6ff]">
                Services
              </h1>
              <ul class="flex flex-col gap-2">
                <li class="hover:underline cursor-pointer text-white opacity-75 text-[15px] hover:text-white">
                  Network Security
                </li>
                <li class="hover:underline cursor-pointer text-white opacity-75 text-[15px] hover:text-white">
                  Data Protection
                </li>
                <li class="hover:underline cursor-pointer text-white opacity-75 text-[15px] hover:text-white">
                  Anti-Malware Solutions
                </li>
                {/* <li class="hover:underline cursor-pointer text-white opacity-75 text-[15px] hover:text-white">
                  Email Encryption
                </li> */}
                <li class="hover:underline cursor-pointer text-white opacity-75 text-[15px] hover:text-white">
                  Password Management
                </li>
                <li class="hover:underline cursor-pointer text-white opacity-75 text-[15px] hover:text-white">
                  Secure Browsing
                </li>
              </ul>
            </span>

            <span class="">
              <h1 class="uppercase text-sm font-bold tracking-wide py-1 md:py-2 mb-3 text-[#2fd6ff]">
                Support
              </h1>
              <ul class="flex flex-col gap-2">
                <li class="hover:underline cursor-pointer text-white opacity-75 text-[15px] hover:text-white">
                  Contact Us
                </li>
                {/* <li class="hover:underline cursor-pointer text-white opacity-75 text-[15px] hover:text-white">
                  Customer Support
                </li> */}
                <li class="hover:underline cursor-pointer text-white opacity-75 text-[15px] hover:text-white">
                  Help Center
                </li>
                <li class="hover:underline cursor-pointer text-white opacity-75 text-[15px] hover:text-white">
                  Report an Issue
                </li>
                <li class="hover:underline cursor-pointer text-white opacity-75 text-[15px] hover:text-white">
                  Privacy Policy
                </li>
                <li class="hover:underline cursor-pointer text-white opacity-75 text-[15px] hover:text-white">
                  Terms of Service
                </li>
              </ul>
            </span>

            <span class="">
              <h1 class="uppercase text-sm font-bold tracking-wide py-1 md:py-2 mb-3 text-[#2fd6ff]">
                Social Media
              </h1>
              <ul class="flex flex-row gap-3">
                <li class="px-4 py-3.5 text-lg bg-[#2fd6ff] bg-opacity-15 flex justify-center items-center text-[#2fd6ff] hover:text-white cursor-pointer hover:shadow-xl rounded-full">
                  <i class="fa-brands fa-facebook-f"></i>
                </li>
                <li class="px-3.5 py-3.5 text-lg bg-[#2fd6ff] bg-opacity-15 flex justify-center items-center text-[#2fd6ff] hover:text-white cursor-pointer hover:shadow-xl rounded-full">
                  <i class="fa-brands fa-whatsapp"></i>
                </li>
                <li class="px-3.5 py-3.5 text-lg bg-[#2fd6ff] bg-opacity-15 flex justify-center items-center text-[#2fd6ff] hover:text-white cursor-pointer hover:shadow-xl rounded-full">
                  <i class="fa-brands fa-twitter"></i>
                </li>
                <li class="px-3.5 py-3.5 text-lg bg-[#2fd6ff] bg-opacity-15 flex justify-center items-center text-[#2fd6ff] hover:text-white cursor-pointer hover:shadow-xl rounded-full">
                  <i class="fa-brands fa-instagram"></i>
                </li>
              </ul>
            </span>
          </div>

          <div class="text-sm pt-12 text-gray-200 text-center ">
            &#169; Copywright. All rights reserved
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
