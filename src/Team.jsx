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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            pariatur deleniti officiis, voluptate placeat fugiat quam provident
          </p>

          {/* box-container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 lg:gap-12 justify-center items-center mx-auto mt-10 md:mt-20 my-20">
            <div className=" flex flex-col gap-2 justify-center items-center text-center">
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus, eveniet?
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
            <div className=" flex flex-col gap-2 justify-center items-center text-center">
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus, eveniet?
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
            <div className=" flex flex-col gap-2 justify-center items-center text-center">
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus, eveniet?
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
            <div className=" flex flex-col gap-2 justify-center items-center text-center">
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus, eveniet?
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
            <div className=" flex flex-col gap-2 justify-center items-center text-center">
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus, eveniet?
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
            <div className=" flex flex-col gap-2 justify-center items-center text-center">
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus, eveniet?
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-8">
            <div className="bg-[#2fd6ff] bg-opacity-30 flex-col-reverse   rounded-xl text-white p-10 shadow-xl flex gap-2">
              <div className="flex gap-2 self-start  pt-4">
                <img
                  src={people2}
                  alt=""
                  className="w-10 h-10 object-cover rounded-full"
                />
                <ul className="">
                  <li className="font-bold">CJ Martins</li>
                  <li className="text-[12px]">CEO Jeruslem</li>
                </ul>
              </div>

              <p className="opacity-80 text-[16px] italic">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                dolore repudiandae doloribus voluptatem. Exercitationem quia ut
                quae reiciendis repellat. Ipsam quis doloremque ratione
                adipisci"
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
                  <li className="font-bold">CJ Martins</li>
                  <li className="text-[12px]">CEO Jeruslem</li>
                </ul>
              </div>

              <p className="opacity-80 text-[16px] italic">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                dolore repudiandae doloribus voluptatem. Exercitationem quia ut
                quae reiciendis repellat. Ipsam quis doloremque ratione
                adipisci"
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
