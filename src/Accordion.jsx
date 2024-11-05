import React, { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionItems = [
    {
      id: 1,
      title: "Why is cybersecurity important for my business?",
      content:
        "Cybersecurity is crucial because it protects your business data and clients’ information from breaches and cyber attacks.",
    },
    {
      id: 2,
      title: "How do you ensure my data stays secure?",
      content:
        "We implement advanced encryption methods, regular security audits, and robust access controls to secure your data.",
    },
    {
      id: 3,
      title: "Do you offer customized security solutions?",
      content:
        "Yes, we provide tailored security solutions based on your business’s specific needs and requirements.",
    },
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="lg:w-[52%]">
      <div className="flex flex-wrap gap-8">
        {accordionItems.map((item, index) => (
          <div key={item.id} className="flex self-start">
            <h1 className="w-12 sm:w-16 font-bold text-5xl text-[#2fd6ff] opacity-70 rye-regular">
              {item.id}
            </h1>
            <ul>
              <li
                className="font-semibold bg-[#00b3b3] bg-opacity-35 p-5 cursor-pointer  text-sm sm:text-base w-[250px] sm:w-[450px] lg:w-auto lgSm:w-[450px] flex justify-between gap-6"
                onClick={() => toggleItem(index)}
              >
                <span>{item.title}</span>
                <span>
                  <i
                    className={`fa-solid ${
                      openIndex === index ? "fa-chevron-up" : "fa-chevron-down"
                    }`}
                  />
                </span>
              </li>
              {openIndex === index && (
                <li className="p-5 shadow-xl bg-[#00b3b3] bg-opacity-20 w-[250px] sm:w-[450px] lg:w-auto lgSm:w-[450px] ">
                  <p>{item.content}</p>
                </li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
