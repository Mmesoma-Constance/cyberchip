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
              Learn more about CyberPro's mission, values, and the passion
              driving our team to deliver top-notch cybersecurity and technology
              solutions
            </p>

            {/* box-container */}
            <div
              className="flex flex-col lgSm:flex-row  lgSm:gap-16 items-center "
              data-aos="fade-up"
            >
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-10 lgSm:my-24 lgSm:w-[52%]"
                data-aos="zoom-in"
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
                  risks for businesses. Our proactive approach and advanced
                  tools ensure you can focus on productivity without worrying
                  about cyber threats."
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
        </div>
        {/* numbers */}
        <div className="bg-[#009999] bg-opacity-30 w-full flex flex-col justify-center items-center mx-auto mt-10 lgSm:mt-0 mb-20 pb-10 ">
          <div className="flex flex-wrap gap-6 justify-center items-center mx-auto mt-10 w-[80%]">
            <div
              className="bg-[#00004d] bg-opacity-25 rounded-xl text-white p-4 px-6 lg:px-12 shadow-xl
            flex flex-col justify-center items-center text-center"
              data-aos="zoom-in"
            >
              <i className="fa-solid fa-globe text-[45px] text-[#2fd6ff] pb-3"></i>
              <h2 className="text-center text-3xl font-bold">3,390</h2>
              <p className="text-sm opacity-75">Global Projects</p>
            </div>

            <div
              className="bg-[#00004d] bg-opacity-25 rounded-xl text-white p-4 px-6 lg:px-12 shadow-xl
            flex flex-col justify-center items-center text-center"
              data-aos="zoom-in"
            >
              <i className="fa-solid fa-address-book text-[45px] text-[#2fd6ff] pb-3"></i>
              <h2 className="text-center text-3xl font-bold">4,785</h2>
              <p className="text-sm opacity-75">Clients Projects</p>
            </div>

            <div
              className="bg-[#00004d] bg-opacity-25 rounded-xl text-white p-4 px-6 lg:px-12 shadow-xl
            flex flex-col justify-center items-center text-center"
              data-aos="zoom-in"
            >
              <i className="fa-solid fa-circle-dollar-to-slot text-[45px] text-[#2fd6ff] pb-3"></i>
              <h2 className="text-center text-3xl font-bold">100%</h2>
              <p className="text-sm opacity-75">Service Guarantee</p>
            </div>

            <div
              className="bg-[#00004d] bg-opacity-25 rounded-xl text-white p-4 px-6 lg:px-12 shadow-xl
            flex flex-col justify-center items-center text-center"
              data-aos="zoom-in"
            >
              <i className="fa-solid fa-user-secret text-[45px] text-[#2fd6ff] pb-3"></i>
              <h2 className="text-center text-3xl font-bold">200+</h2>
              <p className="text-sm opacity-75">Experts Teams</p>
            </div>
          </div>
          <div className="w-[80%] flex justify-center items-center mt-4 md:mt-0">
            {" "}
            <button class="opacity-95 hover:opacity-100 self-start md:self-auto mt-6 md:mt-14 bg-[#2fd6ff] text-white font-bold text-lg p-3 px-10 rounded-full">
              Get Started
            </button>
          </div>
        </div>

        <div className="w-[80%] mx-auto" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 justify-center my-10 mb-16">
            <div className="flex gap-2 self-start ">
              <ul className="">
                <li className="font-bold text-lg">
                  Our Mission : Securing Your Digital Future with CyberPro
                </li>
                <li className="">
                  <p className="opacity-75 pt-3">
                    Our mission is to empower businesses to operate securely in
                    an increasingly digital world. We believe that every
                    organization, no matter the size, deserves the peace of mind
                    that comes with robust cybersecurity defenses. At CyberPro,
                    we work tirelessly to safeguard your assets, data, and
                    reputation by staying ahead of cyber threats.
                  </p>
                </li>
              </ul>
            </div>{" "}
            <div className="flex gap-2 self-start ">
              <ul className="">
                <li className="font-bold text-lg">
                  Our Values : Driven by Integrity, Innovation, and Excellence
                </li>
                <li className="">
                  <p className="opacity-75 pt-3">
                    At CyberPro, our core values define everything we do. We are
                    committed to upholding the highest standards of integrity,
                    constantly innovating to stay ahead of cyber threats, and
                    delivering excellence in every project. Our clients trust us
                    to protect what matters most, and we honor that trust with
                    dedication and transparency in all our services.
                  </p>
                </li>
              </ul>
            </div>{" "}
            <div className="flex gap-2 self-start ">
              <ul className="">
                <li className="font-bold text-lg">
                  Our Impact : Securing Businesses, Empowering Growth
                </li>
                <li className="">
                  <p className="opacity-75 pt-3">
                    CyberPro has helped countless businesses secure their
                    operations, allowing them to focus on what they do best. By
                    safeguarding our clients’ data and digital infrastructure,
                    we enable them to grow and thrive in today’s competitive
                    market. Our impact goes beyond security – we empower
                    organizations to innovate without fear.
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
