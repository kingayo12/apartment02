import { useState } from "react";
import "./faq.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";
import Img1 from "../../assets/images/banner-shape.png";
import Img2 from "../../assets/images/dotted-bg.png";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Nathan's Bay?",
      answer:
        "Nathan's Bay is a premium waterfront development located in Lakowe, Lagos, offering luxurious living with breathtaking views and modern amenities.",
    },
    {
      question: "What types of properties are available?",
      answer:
        "We offer various plot sizes, ranging from 250sqm to 500sqm, each with unique pricing and flexible payment plans.",
    },
    {
      question: "Are there payment plans available?",
      answer:
        "Yes, we offer outright purchase, as well as 3-month, 6-month, and 12-month payment plans with varying prices for each option.",
    },
    {
      question: "What fees are involved?",
      answer:
        "Along with the property purchase, there are additional fees including Infrastructure Development Fee, Survey Fee, and Legal Fee.",
    },
    {
      question: "What amenities are included?",
      answer:
        "Nathan's Bay provides top-class amenities like recreational areas, 24-hour security, good road networks, and waterfront views.",
    },
  ];

  return (
    <div className='faq-section' id='faq'>
      <img src={Img1} alt='' className='banner-three__shape ' />
      <img src={Img2} alt='' className='banner-three__dotted' />
      <h2>Frequently Asked Questions</h2>
      <section className='faq-container'>
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className='faq-item'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
          >
            <div
              className={`faq-question ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <h4>{faq.question}</h4>
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {activeIndex === index && (
              <motion.div
                className='faq-answer'
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                <p>{faq.answer}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Faq;
