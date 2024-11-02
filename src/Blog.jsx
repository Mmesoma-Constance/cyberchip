import React from "react";
import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";
import blog4 from "./assets/blog4.jpeg";
import blog5 from "./assets/blog5.jpeg";
import blog6 from "./assets/blog6.png";

const Blog = () => {
  return (
    <>
      <section className="w-[80%] flex flex-col justify-center items-center mx-auto">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-4xl font-bold pt-5 text-center">
            Latest Blog & Articles
          </h1>
          <p className="pt-3 md:w-[55%] text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            pariatur deleniti officiis, voluptate placeat fugiat quam provident
          </p>

          {/* box-container */}
          <div className="flex flex-wrap gap-8 justify-center items-center mx-auto mt-10 md:mt-20 my-20">
            <div className="">
              <figure className="w-[330px]">
                <img
                  src={blog1}
                  alt=""
                  className="w-full h-[250px] object-cover"
                />
                <figcaption className="pt-3">
                  <h3 className="font-bold text-xl">
                    How to manage your work against fruad hackers{" "}
                  </h3>

                  <p className="opacity-70 pt-3 text-[15px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima est, libero cum similique corporis quidem nisi odit
                    earum eius ipsam?
                  </p>
                </figcaption>
                <button className="self-start font-semibold bg-transparent hover:font-bold mt-5">
                  Read more &#8594;
                </button>
              </figure>
            </div>
            <div className="">
              <figure className="w-[330px]">
                <img
                  src={blog5}
                  alt=""
                  className="w-full h-[250px] object-cover"
                />
                <figcaption className="pt-3">
                  <h3 className="font-bold text-xl">
                    How to manage your work against fruad hackers{" "}
                  </h3>

                  <p className="opacity-70 pt-3 text-[15px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima est, libero cum similique corporis quidem nisi odit
                    earum eius ipsam?
                  </p>
                </figcaption>
                <button className="self-start font-semibold bg-transparent hover:font-bold mt-5">
                  Read more &#8594;
                </button>
              </figure>
            </div>
            <div className="">
              <figure className="w-[330px]">
                <img
                  src={blog3}
                  alt=""
                  className="w-full h-[250px] object-cover"
                />
                <figcaption className="pt-3">
                  <h3 className="font-bold text-xl">
                    How to manage your work against fruad hackers{" "}
                  </h3>

                  <p className="opacity-70 pt-3 text-[15px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima est, libero cum similique corporis quidem nisi odit
                    earum eius ipsam?
                  </p>
                </figcaption>
                <button className="self-start font-semibold bg-transparent hover:font-bold mt-5">
                  Read more &#8594;
                </button>
              </figure>
            </div>
            <div className="">
              <figure className="w-[330px]">
                <img
                  src={blog4}
                  alt=""
                  className="w-full h-[250px] object-cover"
                />
                <figcaption className="pt-3">
                  <h3 className="font-bold text-xl">
                    How to manage your work against fruad hackers{" "}
                  </h3>

                  <p className="opacity-70 pt-3 text-[15px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima est, libero cum similique corporis quidem nisi odit
                    earum eius ipsam?
                  </p>
                </figcaption>
                <button className="self-start font-semibold bg-transparent hover:font-bold mt-5">
                  Read more &#8594;
                </button>
              </figure>
            </div>
            <div className="">
              <figure className="w-[330px]">
                <img
                  src={blog2}
                  alt=""
                  className="w-full h-[250px] object-cover"
                />
                <figcaption className="pt-3">
                  <h3 className="font-bold text-xl">
                    How to manage your work against fruad hackers{" "}
                  </h3>

                  <p className="opacity-70 pt-3 text-[15px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima est, libero cum similique corporis quidem nisi odit
                    earum eius ipsam?
                  </p>
                </figcaption>
                <button className="self-start font-semibold bg-transparent hover:font-bold mt-5">
                  Read more &#8594;
                </button>
              </figure>
            </div>
            <div className="">
              <figure className="w-[330px]">
                <img
                  src={blog6}
                  alt=""
                  className="w-full h-[250px] object-cover"
                />
                <figcaption className="pt-3">
                  <h3 className="font-bold text-xl">
                    How to manage your work against fruad hackers{" "}
                  </h3>

                  <p className="opacity-70 pt-3 text-[15px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima est, libero cum similique corporis quidem nisi odit
                    earum eius ipsam?
                  </p>
                </figcaption>
                <button className="self-start font-semibold bg-transparent hover:font-bold mt-5">
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
