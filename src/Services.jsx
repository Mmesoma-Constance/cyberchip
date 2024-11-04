import React from "react";
import logo from "./assets/logo (1).png";
import blog from "./assets/blog1.jpg";

const Services = () => {
  return (
    <>
      <section className="w-[80%]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold pt-5">Services</h1>
          <p className="pt-3  md:w-[55%] text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            pariatur deleniti officiis, voluptate placeat fugiat quam provident
          </p>

          {/* box-container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center mx-auto mt-10 md:my-20">
            <div
              className="bg-[#2fd6ff] bg-opacity-30  rounded-xl text-white p-8 shadow-xl flex flex-col gap-2"
              data-aos="zoom-in"
            >
              <i className="fa-solid fa-wifi text-[45px] text-[#2fd6ff] pb-3"></i>
              <h3 className="text-2xl font-bold">Office Network Security</h3>
              <p className="opacity-80 text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                dolore repudiandae doloribus voluptatem. Exercitationem quia ut
                quae reiciendis repellat. Ipsam quis doloremque ratione adipisci
              </p>
              <button className="text-[#2fd6ff] text-lg self-start font-bold bg-transparent hover:font-bold mt-5">
                Read more &#8594;
              </button>
            </div>
            <div
              className="bg-[#2fd6ff] bg-opacity-30  rounded-xl text-white p-8 shadow-xl flex flex-col gap-2"
              data-aos="zoom-in"
            >
              <i className="fa-solid fa-bug-slash text-[45px] text-[#2fd6ff] pb-3"></i>
              <h3 className="text-2xl font-bold">Anti-Malware</h3>
              <p className="opacity-80 text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                dolore repudiandae doloribus voluptatem. Exercitationem quia ut
                quae reiciendis repellat. Ipsam quis doloremque ratione adipisci
              </p>
              <button className="text-[#2fd6ff] text-lg self-start font-bold bg-transparent hover:font-bold mt-5">
                Read more &#8594;
              </button>
            </div>{" "}
            <div
              className="bg-[#2fd6ff] bg-opacity-30  rounded-xl text-white p-8 shadow-xl flex flex-col gap-2"
              data-aos="zoom-in"
            >
              <i className="fa-solid fa-file-shield text-[45px] text-[#2fd6ff] pb-3"></i>
              <h3 className="text-2xl font-bold">Data Protection</h3>
              <p className="opacity-80 text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                dolore repudiandae doloribus voluptatem. Exercitationem quia ut
                quae reiciendis repellat. Ipsam quis doloremque ratione adipisci
              </p>
              <button className="text-[#2fd6ff] text-lg self-start font-bold bg-transparent hover:font-bold mt-5">
                Read more &#8594;
              </button>
            </div>
            <div
              className="bg-[#2fd6ff] bg-opacity-30   rounded-xl text-white p-8 shadow-xl flex flex-col gap-2"
              data-aos="zoom-in"
            >
              <i className="fa-solid fa-key text-[45px] text-[#2fd6ff] pb-3"></i>
              <h3 className="text-2xl font-bold">Password Manager</h3>
              <p className="opacity-80 text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                dolore repudiandae doloribus voluptatem. Exercitationem quia ut
                quae reiciendis repellat. Ipsam quis doloremque ratione adipisci
              </p>
              <button className="text-[#2fd6ff] text-lg self-start font-bold bg-transparent hover:font-bold mt-5">
                Read more &#8594;
              </button>
            </div>
            <div
              className="bg-[#2fd6ff] bg-opacity-30   rounded-xl text-white p-8 shadow-xl flex flex-col gap-2"
              data-aos="zoom-in"
            >
              <i className="fa-solid fa-envelope text-[45px] text-[#2fd6ff] pb-3"></i>
              <h3 className="text-2xl font-bold">Email Encryption</h3>
              <p className="opacity-80 text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                dolore repudiandae doloribus voluptatem. Exercitationem quia ut
                quae reiciendis repellat. Ipsam quis doloremque ratione adipisci
              </p>
              <button className="text-[#2fd6ff] text-lg self-start font-bold bg-transparent hover:font-bold mt-5">
                Read more &#8594;
              </button>
            </div>
            <div
              className="bg-[#2fd6ff] bg-opacity-30   rounded-xl text-white p-8 shadow-xl flex flex-col gap-2"
              data-aos="zoom-in"
            >
              <i className="fa-solid fa-globe text-[45px] text-[#2fd6ff] pb-3"></i>
              <h3 className="text-2xl font-bold">Secure Browser </h3>
              <p className="opacity-80 text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                dolore repudiandae doloribus voluptatem. Exercitationem quia ut
                quae reiciendis repellat. Ipsam quis doloremque ratione adipisci
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
          <div
            className="flex flex-col lg:flex-row-reverse gap-6 md:gap-16 items-center "
            data-aos="fade-up"
          >
            <div className=" lg:w-[52%]">
              <img src={blog} alt="" className=" h-full" />
            </div>

            <div className="lg:w-[48%]">
              <h1 className="text-3xl font-bold pb-5">
                Benefits With Our Service
              </h1>
              <p className="opacity-80 text-[16px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
                odio tempora porro error non assumenda aliquam, velit
                reprehenderit veniam, itaque hic,
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                possimus, reprehenderit eveniet id accusamus minima saepe,
                Expedita dolore ipsum doloremque officiis perferendis!
              </p>
              <br />
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, voluptatem fugiat distinctio doloribus accusantium
                fugit aliquid numquam autem sequi. Est.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
