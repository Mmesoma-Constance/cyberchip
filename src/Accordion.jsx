// // Accordion.js
// import React, { useState } from "react";
// import "./Accordion.css";

// const Accordion = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="accordion-container">
//       <h2>Accordion</h2>

//       <button
//         className={`accordion ${activeIndex === 0 ? "active" : ""}`}
//         onClick={() => toggleAccordion(0)}
//       >
//         Section 1
//       </button>
//       <div className={`panel ${activeIndex === 0 ? "open" : ""}`}>
//         console.log(
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
//           urna sit amet nulla.
//         </p>
//         )
//       </div>

//       <button
//         className={`accordion ${activeIndex === 1 ? "active" : ""}`}
//         onClick={() => toggleAccordion(1)}
//       >
//         Section 2
//       </button>
//       <div className={`panel ${activeIndex === 1 ? "open" : ""}`}>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
//           urna sit amet nulla.
//         </p>
//       </div>

//       <button
//         className={`accordion ${activeIndex === 2 ? "active" : ""}`}
//         onClick={() => toggleAccordion(2)}
//       >
//         Section 3
//       </button>
//       <div className={`panel ${activeIndex === 2 ? "open" : ""}`}>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
//           urna sit amet nulla. why are tou not working
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Accordion;
