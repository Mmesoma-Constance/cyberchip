import React from "react";
import logo from "./assets/logo (1).png";
import logo2 from "./assets/logo.png";

const Pricing = () => {
  return (
    <>
      <section className="w-[80%]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold pt-5">Pricing Plans</h1>
          <p className="pt-2 md:w-[50%] text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            pariatur deleniti officiis, voluptate placeat fugiat quam provident
          </p>

          {/* box-container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full justify-center gap-10 md:gap-0 items-center mx-auto mt-10 md:mt-20 my-20">
            <div className="bg-[#2fd6ff] bg-opacity-30  rounded-xl text-white p-10 shadow-xl flex flex-col gap-2 opacity-90 justify-center text-center items-center mx-auto">
              {/* <img src={logo} alt="" className="w-28" /> */}
              <h3 className="font-semibold text-lg">Beginner</h3>
              <div className="leading-tight">
                <h2 className="font-bold text-[45px] text-center">$120</h2>
                <span>/ Per Month</span>
              </div>
              <ul className="flex flex-col gap-2 pt-3">
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Lorem ipsum dolor sit amet</span>
                </li>
              </ul>
              <button className="bg-[#2fd6ff] p-2 px-6 rounded-full mt-4">
                Get Started
              </button>
            </div>
            <div className="bg-[#2fd6ff] bg-opacity-40  h-[460px] rounded-xl text-white p-10 shadow-xl flex flex-col gap-2 justify-center text-center items-center mx-auto">
              {/* <img src={logo} alt="" className="w-28" /> */}
              <h3 className="font-semibold text-lg">Business</h3>
              <div className="leading-tight">
                <h2 className="font-bold text-[45px] text-center">$180</h2>
                <span>/ Per Month</span>
              </div>
              <ul className="flex flex-col gap-2 pt-3">
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Lorem ipsum dolor sit amet</span>
                </li>
              </ul>
              <button className="bg-[#2fd6ff] p-2 px-6 rounded-full mt-4">
                Get Started
              </button>
            </div>
            <div className="bg-[#2fd6ff] bg-opacity-30  rounded-xl text-white p-10 shadow-xl flex flex-col gap-2 justify-center text-center items-center mx-auto opacity-90 ">
              {/* <img src={logo} alt="" className="w-28" /> */}
              <h3 className="font-semibold text-lg">Professional</h3>
              <div className="leading-tight">
                <h2 className="font-bold text-[45px] text-center">$200</h2>
                <span>/ Per Month</span>
              </div>
              <ul className="flex flex-col gap-2 pt-3">
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex gap-1.5 items-center">
                  <i className="fa-solid fa-circle-check text-[#2fd6ff]"></i>
                  <span className="opacity-80">Lorem ipsum dolor sit amet</span>
                </li>
              </ul>
              <button className="bg-[#2fd6ff] p-2 px-6 rounded-full mt-4">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* FAQ */}

        <div className="flex flex-col justify-center items-center mt-10 mb-20">
          {/* box-container */}
          <div className="flex flex-col-reverse md:flex-row-reverse gap-12 md:gap-20 ">
            <div className=" md:w-[52%]">
              <div className="flex flex-wrap gap-8">
                <div className="flex self-start">
                  <h1 className="w-16 font-bold text-5xl text-[#2fd6ff] opacity-70">
                    1
                  </h1>
                  <ul className="">
                    <li className="font-semibold bg-[#00b3b3] bg-opacity-35 p-5 cursor-pointer">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="">
                      <p className="opacity-75 "></p>
                    </li>
                  </ul>
                </div>
                <div className="flex self-start">
                  <h1 className="w-16 font-bold text-5xl text-[#2fd6ff] opacity-70">
                    2
                  </h1>
                  <ul className="">
                    <li className="font-semibold bg-[#00b3b3] bg-opacity-35 p-5 cursor-pointer">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="">
                      <p className="opacity-75 "></p>
                    </li>
                  </ul>
                </div>
                <div className="flex self-start">
                  <h1 className="w-16 font-bold text-5xl text-[#2fd6ff] opacity-70">
                    3
                  </h1>
                  <ul className="">
                    <li className="font-semibold bg-[#00b3b3] bg-opacity-35 p-5 cursor-pointer">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </li>
                    <li className="">
                      <p className="opacity-75 "></p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:w-[48%]">
              <h1 className="text-3xl font-bold pb-5">
                Frequently Asked Questions
              </h1>
              <p className="opacity-80 text-[16px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
                odio tempora porro error non assumenda aliquam, velit
                reprehenderit veniam, itaque hic,
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
