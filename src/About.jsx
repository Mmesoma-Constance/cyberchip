import React from "react";
import logo from "./assets/logo (1).png";

const About = () => {
  return (
    <>
      <section className="">
        <div className="w-[80%] mx-auto">
          <div className="flex flex-col justify-center items-center ">
            <h1 className="text-4xl font-bold pt-5">About Us</h1>
            <p className="pt-3 md:w-[55%] text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              pariatur deleniti officiis, voluptate placeat fugiat quam
              provident
            </p>

            {/* box-container */}
            <div className="flex flex-col md:flex-row  md:gap-16 items-center ">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-10 md:my-24 md:w-[52%]">
                <div className="bg-[#2fd6ff] bg-opacity-30  rounded-xl text-white p-6 shadow-xl flex flex-col gap-2">
                  <span className="flex flow-row gap-3">
                    <i className="fa-solid fa-camera text-4xl text-[#2fd6ff] pb-3"></i>
                    <h3 className="text-2xl font-bold">
                      Camera <br /> Survellience{" "}
                    </h3>
                  </span>

                  <p className="opacity-80 text-[15px] pt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt id eum provident.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt id eum provident.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt id eum provident.
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt id eum provident.
                  </p>
                </div>
              </div>

              <div className="md:w-[48%]">
                <span className="">WHO ARE WE</span>
                <h1 className="text-3xl font-bold pb-10">
                  Reduce Risk of Your <br /> Workflow Be Productive
                </h1>
                <p className="opacity-80 text-[16px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quasi odio tempora porro error non assumenda aliquam, velit
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
                <button className="bg-[#2fd6ff] p-2 px-10 text-lg my-10 md:mb-0 mt-8 rounded-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* numbers */}
        <div className="bg-[#009999] bg-opacity-30 w-full flex flex-col justify-center items-center mx-auto mb-20 pb-10">
          <div className="flex flex-wrap gap-6 justify-center items-center mx-auto mt-10">
            <div
              className="bg-[#00004d] bg-opacity-25 rounded-xl text-white p-4 px-6 lg:px-12 shadow-xl
            flex flex-col justify-center items-center text-center"
            >
              <i className="fa-solid fa-globe text-[45px] text-[#2fd6ff] pb-3"></i>
              <h2 className="text-center text-3xl font-bold">3,390</h2>
              <p className="text-sm opacity-75">Global Projects</p>
            </div>

            <div
              className="bg-[#00004d] bg-opacity-25 rounded-xl text-white p-4 px-6 lg:px-12 shadow-xl
            flex flex-col justify-center items-center text-center"
            >
              <i className="fa-solid fa-address-book text-[45px] text-[#2fd6ff] pb-3"></i>
              <h2 className="text-center text-3xl font-bold">4,785</h2>
              <p className="text-sm opacity-75">Clients Projects</p>
            </div>

            <div
              className="bg-[#00004d] bg-opacity-25 rounded-xl text-white p-4 px-6 lg:px-12 shadow-xl
            flex flex-col justify-center items-center text-center"
            >
              <i className="fa-solid fa-circle-dollar-to-slot text-[45px] text-[#2fd6ff] pb-3"></i>
              <h2 className="text-center text-3xl font-bold">100%</h2>
              <p className="text-sm opacity-75">Service Guarantee</p>
            </div>

            <div
              className="bg-[#00004d] bg-opacity-25 rounded-xl text-white p-4 px-6 lg:px-12 shadow-xl
            flex flex-col justify-center items-center text-center"
            >
              <i className="fa-solid fa-user-secret text-[45px] text-[#2fd6ff] pb-3"></i>
              <h2 className="text-center text-3xl font-bold">200+</h2>
              <p className="text-sm opacity-75">Experts Teams</p>
            </div>
          </div>
          <div className="w-[80%] flex justify-center items-center mt-4 md:mt-0">
            {" "}
            <button class="self-start md:self-auto mt-6 md:mt-14 bg-[#2fd6ff] text-white font-bold text-lg p-3 px-10 rounded-full">
              Get Started
            </button>
          </div>
        </div>

        <div className="w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 justify-center my-10 mb-16">
            <div className="flex gap-2 self-start ">
              <ul className="">
                <li className="font-bold text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing
                </li>
                <li className="">
                  <p className="opacity-75 pt-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta iure tempore esse. Temporibus ea nobis rerum dolor
                    cum numquam doloremque.
                  </p>
                </li>
              </ul>
            </div>{" "}
            <div className="flex gap-2 self-start ">
              <ul className="">
                <li className="font-bold text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing
                </li>
                <li className="">
                  <p className="opacity-75 pt-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta iure tempore esse. Temporibus ea nobis rerum dolor
                    cum numquam doloremque.
                  </p>
                </li>
              </ul>
            </div>{" "}
            <div className="flex gap-2 self-start ">
              <ul className="">
                <li className="font-bold text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing
                </li>
                <li className="">
                  <p className="opacity-75 pt-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta iure tempore esse. Temporibus ea nobis rerum dolor
                    cum numquam doloremque.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
