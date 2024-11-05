import React from "react";
import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";
import blog4 from "./assets/blog4.jpeg";
import blog5 from "./assets/blog5.jpeg";
import blog6 from "./assets/blog6.png";

const Blog = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <section className="w-[80%] flex flex-col justify-center items-center mx-auto">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-4xl font-bold pt-5 text-center">
            Latest Blog & Articles
          </h1>
          <p className="pt-3 md:w-[80%] lgSm:w-[55%] text-center">
            Stay updated with the latest cybersecurity trends, tips, and
            insights from our experts in the CyberPro blog
          </p>

          {/* box-container */}
          <div className="flex flex-wrap md:grid md:grid-cols-2 lgSm:grid-cols-3  gap-8 justify-center items-center mx-auto mt-10 md:mt-20 my-20 w-[100%] ">
            <div className="" data-aos="zoom-in">
              <figure className="  w-auto">
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
                    today’s digital era. Learn how a strong defense protects
                    your company.
                  </p>
                </figcaption>
                <button className="text-[#2fd6ff] text-lg self-start font-semibold bg-transparent hover:font-bold mt-5">
                  Read more &#8594;
                </button>
              </figure>
            </div>
            <div className="" data-aos="zoom-in">
              <figure className=" md:w-auto">
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
                    From phishing to ransomware, cyber threats are more
                    dangerous than ever. Discover the top risks and how your
                    business can stay protected.
                  </p>
                </figcaption>
                <button className="text-[#2fd6ff] text-lg self-start font-semibold bg-transparent hover:font-bold mt-5">
                  Read more &#8594;
                </button>
              </figure>
            </div>
            <div className="" data-aos="zoom-in">
              <figure className=" md:w-auto">
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
                    protects sensitive information and helps you maintain
                    customer trust.
                  </p>
                </figcaption>
                <button className="text-[#2fd6ff] text-lg self-start font-semibold bg-transparent hover:font-bold mt-5">
                  Read more &#8594;
                </button>
              </figure>
            </div>
            <div className="" data-aos="zoom-in">
              <figure className=" md:w-auto">
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
                    Effective cybersecurity doesn’t have to be expensive. Here
                    are simple, budget-friendly ways for small businesses to
                    stay secure.
                  </p>
                </figcaption>
                <button className="text-[#2fd6ff] text-lg self-start font-semibold bg-transparent hover:font-bold mt-5">
                  Read more &#8594;
                </button>
              </figure>
            </div>
            <div className="" data-aos="zoom-in">
              <figure className=" md:w-auto">
                <img
                  src={blog2}
                  alt=""
                  className="w-full h-[250px] object-cover"
                />
                <figcaption className="pt-3">
                  <h3 className="font-bold text-xl">
                    What to Do If Your Business Experiences a Data Breach
                  </h3>

                  <p className="opacity-70 pt-3 text-[15px]">
                    Quick action is essential after a data breach. Learn the
                    steps you should take to reduce impact and protect your
                    business.
                  </p>
                </figcaption>
                <button className="text-[#2fd6ff] text-lg self-start font-semibold bg-transparent hover:font-bold mt-5">
                  Read more &#8594;
                </button>
              </figure>
            </div>
            <div className="" data-aos="zoom-in">
              <figure className=" md:w-auto">
                <img
                  src={blog6}
                  alt=""
                  className="w-full h-[250px] object-cover"
                />
                <figcaption className="pt-3">
                  <h3 className="font-bold text-xl">
                    The Future of Cybersecurity: Trends to Watch
                  </h3>

                  <p className="opacity-70 pt-3 text-[15px]">
                    Cybersecurity is evolving rapidly. Explore emerging trends
                    that are shaping the future of digital protection.
                  </p>
                </figcaption>
                <button className="text-[#2fd6ff] text-lg self-start font-semibold bg-transparent hover:font-bold mt-5">
                  Read more &#8594;
                </button>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
