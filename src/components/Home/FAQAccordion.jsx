import React, { useState } from "react";
import { styles } from "../../styles/styles";
const faqs = [
  {
    question: "How do solar panels help reduce electricity bills?",
    answer:
      "Solar panels convert sunlight into electricity, which you can use to power your home or business. This reduces the amount of electricity you need to buy from your utility provider, cutting your monthly bills significantly.",
  },
  {
    question: "How long do solar panels last?",
    answer:
      "Most solar panels come with a warranty of 25 years and can last even longer with proper maintenance. Their efficiency may decrease slightly over time, but they will continue to produce electricity for decades.",
  },
  {
    question: "Do solar panels work during cloudy or rainy days?",
    answer:
      "Yes, solar panels can still generate electricity on cloudy or rainy days, though at a lower efficiency compared to sunny days. Modern solar panels are designed to perform well even in less-than-ideal weather.",
  },
  {
    question: "What maintenance do solar panels require?",
    answer:
      "Solar panels require very little maintenance. It’s recommended to clean them a few times a year and inspect for dust, bird droppings, or leaves that could block sunlight. Annual inspections by a professional are also beneficial.",
  },{
    question: "How long does it take to install solar panels?",
    answer:
      "The actual installation of solar panels usually takes one to three days, depending on the system size and roof complexity. However, the entire process—including permits, inspections, and approvals—can take a few weeks to complete.",
  }
  
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`${styles.paddingHorizontal} w-full bodyBg py-16 flex flex-col gap-y-10  gap-12`}>
      <div className="flex items-center justify-center gap-x-3 py-5" data-aos="flip-up" >
        <div className="border w-24 border-purple" />
        <p className="text-purple font-bold text-center text-xl md:text-4xl uppercase">
          FAQ
        </p>
        <div className="border w-24 border-purple" />
      </div>
      <div className="flex flex-col w-full text-left ">
        {/* <div className="flex items-center justify-start gap-x-3">
        <div className="border w-24 border-purple" />
        <p className="text-purple font-semibold text-md uppercase">
        Solar Panel
        </p>
      </div>
      <div className="w-full flex mt-2 flex-col lg:flex-row items-start justify-between lg:items-end gap-y-6 lg:gap-y-0">
        <h2 className="text-5xl font-bold">
        FAQ
        </h2>
        
      </div> */}

      </div>
      <ul className="w-full ">
        {faqs.map((faq, index) => (
          <li key={index}
          data-aos="fade-up"
          >
            <button
              className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-gray-300"
              aria-expanded={openIndex === index}
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex-1 text-gray-800">{faq.question}</span>
              <svg
                className={`flex-shrink-0 w-4 h-4 ml-auto fill-purple transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""
                  }`}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="7" width="16" height="2" rx="1"></rect>
                <rect y="7" width="16" height="2" rx="1" className="rotate-90 origin-center"></rect>
              </svg>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-40" : "max-h-0"
                }`}
            >
              <div className="pb-5 leading-relaxed">
                <div className="space-y-2 text-base text-black leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default FAQAccordion;
