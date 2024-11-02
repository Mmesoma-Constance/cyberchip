import React from "react";
import logo from "./assets/logo (1).png";

const Contact = () => {
  return (
    <>
      <section className="w-[80%]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold pt-5">Contact Us</h1>
          <p className="pt-3 md:w-[55%] text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            pariatur deleniti officiis, voluptate placeat fugiat quam provident
          </p>

          {/* box-container */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 justify-between items-center  mt-10 md:mt-20 my-20 w-full">
            <div className="">
              <h1 className="font-bold text-xl">GET IN TOUCH</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore?
              </p>
              <form action="" className="mt-10 flex flex-col gap-4">
                <input
                  type="text"
                  className="w-full p-2.5 bg-[#00004d] bg-opacity-30 pl-6 rounded-full border-none outline-none"
                  placeholder="Name*"
                />{" "}
                <input
                  type="text"
                  className="w-full p-2.5 bg-[#00004d] bg-opacity-30 pl-6 rounded-full border-none outline-none"
                  placeholder="Email*"
                />{" "}
                <input
                  type="text"
                  className="w-full p-2.5 bg-[#00004d] bg-opacity-30 pl-6 rounded-full border-none outline-none"
                  placeholder="Phone*"
                />
                <textarea
                  name=""
                  className="w-full p-2.5 bg-[#00004d] bg-opacity-30 pl-6 rounded-2xl border-none outline-none"
                  id=""
                  cols="20"
                  rows="5"
                  placeholder="Your message*"
                ></textarea>
              </form>
              <button className="bg-[#2fd6ff] p-2 px-8  rounded-full mt-6 self-start">
                SEND MESSAGE
              </button>
            </div>

            <div className="bg-[#00b3b3] bg-opacity-40 rounded-xl  h-[450px] justify-center items-center p-10 md:px-12 flex flex-col gap-12">
              <div className="flex gap-6 self-start">
                <i className="fa-solid fa-location-dot text-4xl text-[#2fd6ff]"></i>
                <ul className="">
                  <li className="font-bold text-lg">OUR ADDRESS</li>
                  <li className="">
                    2720 Quatra Street Victoria Road, <br /> New York, USA
                  </li>
                </ul>
              </div>

              <div className="flex gap-6 self-start">
                <i className="fa-solid fa-phone text-4xl text-[#2fd6ff]"></i>
                <ul className="">
                  <li className="font-bold text-lg">CONTACT</li>
                  <li className="">Mobile: (+44)-45700-5700</li>
                  <li className="">Mail: cyberchip@company.com</li>
                </ul>
              </div>

              <div className="flex gap-6 self-start">
                <i className="fa-solid fa-paper-plane text-4xl text-[#2fd6ff]"></i>
                <ul className="">
                  <li className="font-bold text-lg">SOCIAL MEDIA</li>
                  <ul className="flex gap-4 pt-1">
                    <li className="text-white hover:opacity-80 text-lg cursor-pointer">
                      <i className="fa-brands fa-facebook-f"></i>
                    </li>
                    <li className="text-white hover:opacity-80 text-lg cursor-pointer">
                      <i className="fa-brands fa-instagram"></i>
                    </li>
                    <li className="text-white hover:opacity-80 text-lg cursor-pointer">
                      <i className="fa-brands fa-twitter"></i>
                    </li>
                    <li className="text-white hover:opacity-80 text-lg cursor-pointer">
                      <i className="fa-brands fa-linkedin"></i>
                    </li>
                    <li className="text-white hover:opacity-80 text-lg cursor-pointer">
                      <i className="fa-brands fa-github"></i>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
