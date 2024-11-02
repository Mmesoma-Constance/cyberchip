import React from "react";
import logo from "./assets/logo (3).png";
const Footer = () => {
  return (
    <>
      <section class="bg-[#009999] bg-opacity-30 mt-6 overflow-hidden ">
        <div class="p-6 pt-10 sm:px-24 px-10 lg:px-32 flex flex-col md:flex-row  gap-10 md:gap-0 md:justify-between items-center">
          <div className="flex gap-1 items-center self-start">
            <img src={logo} alt="" className="w-12" />
            <h1 className="text-2xl font-bold">CYBERCHIP</h1>
          </div>
          <div className="flex flex-col md:flex-row md:gap-3 items-center self-start">
            <h2 className="text-2xl font-bold pr-4 self-start">Subcribe now</h2>
            <input
              type="email"
              class="w-80 p-2 px-6 bg-transparent border rounded-full text-white outline-none mt-3 md:mt-0"
              placeholder="Your email"
            />
            <button class="self-start md:self-auto mt-6 md:mt-0 bg-[#2fd6ff] text-white font-bold text-[15px] p-3 px-8 rounded-full">
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
              {/* <p class="text-gray-300 flex items-center gap-3">
                <i class="fa-solid fa-envelope text-[#2fd6ff]"></i>
                <span class=""> fundar@company.com</span>
              </p>
              <p class="text-gray-300 flex items-center gap-3">
                <i class="fa-solid fa-phone-volume text-[#2fd6ff]"></i>
                <span class=""> + 99 (007) 867 473</span>
              </p> */}
            </span>

            <span class="">
              <h1 class="uppercase text-sm font-bold tracking-wide py-1 md:py-2 mb-3 text-[#2fd6ff]">
                Navigation
              </h1>
              <ul class="flex flex-col gap-2">
                <li class="hover:underline cursor-pointer text-white opacity-75 text-[15px] hover:text-white">
                  Recent causes
                </li>
                <li class="hover:underline cursor-pointer text-white opacity-75 text-[15px] hover:text-white">
                  About us
                </li>
                <li class="hover:underline cursor-pointer text-white opacity-75 text-[15px] hover:text-white">
                  Donation
                </li>
                <li class="hover:underline cursor-pointer text-white opacity-75 text-[15px] hover:text-white">
                  Latest news
                </li>
                <li class="hover:underline cursor-pointer text-white opacity-75 text-[15px] hover:text-white">
                  Contact us
                </li>
              </ul>
            </span>

            <span class="">
              <h1 class="uppercase text-sm font-bold tracking-wide py-1 md:py-2 mb-3 text-[#2fd6ff]">
                Campaigns
              </h1>
              <ul class="flex flex-col gap-2">
                <li class="hover:underline cursor-pointer text-white opacity-75 text-[15px] hover:text-white">
                  Child Cancer
                </li>
                <li class="hover:underline cursor-pointer text-white opacity-75 text-[15px] hover:text-white">
                  Differently disabled
                </li>
                <li class="hover:underline cursor-pointer text-white opacity-75 text-[15px] hover:text-white">
                  Clean water
                </li>
                <li class="hover:underline cursor-pointer text-white opacity-75 text-[15px] hover:text-white">
                  Start fundraising
                </li>
                <li class="hover:underline cursor-pointer text-white opacity-75 text-[15px] hover:text-white">
                  Give education
                </li>
              </ul>
            </span>

            <span class="">
              <h1 class="uppercase text-sm font-bold tracking-wide py-1 md:py-2 mb-3 text-[#2fd6ff]">
                Our Newsletter
              </h1>
              <ul class="flex flex-row gap-3">
                <li class="px-3.5 py-3.5 text-lg bg-[#2fd6ff] bg-opacity-15 flex justify-center items-center text-[#2fd6ff] hover:text-white cursor-pointer hover:shadow-xl rounded-full">
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
