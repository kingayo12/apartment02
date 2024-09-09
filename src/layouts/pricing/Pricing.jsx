import { useState } from "react";
import "./pricing.css";
import { FaArrowRight } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Pricing = () => {
  const [selectedOption, setSelectedOption] = useState("250sqm");

  const plotPlans = {
    "250sqm": [
      {
        title: "Outright Payment",
        price: "₦27,000,000",
        features: [
          "Initial Deposit: ₦5,000,000",
          "Infrastructure Development Fee: ₦3,500,000",
          "Survey Fee: ₦1,500,000",
          "Legal Fee: ₦1,000,000",
        ],
      },
      {
        title: "3 Months Payment Plan",
        price: "N/A",
        features: [
          "Initial Deposit: ₦5,000,000",
          "Infrastructure Development Fee: ₦3,500,000",
          "Survey Fee: ₦1,500,000",
          "Legal Fee: ₦1,000,000",
        ],
      },
      {
        title: "6 Months Payment Plan",
        price: "N/A",
        features: [
          "Initial Deposit: ₦5,000,000",
          "Infrastructure Development Fee: ₦3,500,000",
          "Survey Fee: ₦1,500,000",
          "Legal Fee: ₦1,000,000",
        ],
      },
      {
        title: "12 Months Payment Plan",
        price: "N/A",
        features: [
          "Initial Deposit: ₦5,000,000",
          "Infrastructure Development Fee: ₦3,500,000",
          "Survey Fee: ₦1,500,000",
          "Legal Fee: ₦1,000,000",
        ],
      },
    ],
    "300sqm": [
      {
        title: "Outright Payment",
        price: "₦27,000,000",
        features: [
          "Initial Deposit: ₦5,000,000",
          "Infrastructure Development Fee: ₦3,500,000",
          "Survey Fee: ₦1,500,000",
          "Legal Fee: ₦1,000,000",
        ],
      },
      {
        title: "3 Months Payment Plan",
        price: "₦27,000,000",
        features: [
          "Initial Deposit: ₦5,000,000",
          "Infrastructure Development Fee: ₦3,500,000",
          "Survey Fee: ₦1,500,000",
          "Legal Fee: ₦1,000,000",
        ],
      },
      {
        title: "6 Months Payment Plan",
        price: "₦30,000,000",
        features: [
          "Initial Deposit: ₦5,000,000",
          "Infrastructure Development Fee: ₦3,500,000",
          "Survey Fee: ₦1,500,000",
          "Legal Fee: ₦1,000,000",
        ],
      },
      {
        title: "12 Months Payment Plan",
        price: "₦33,000,000",
        features: [
          "Initial Deposit: ₦5,000,000",
          "Infrastructure Development Fee: ₦3,500,000",
          "Survey Fee: ₦1,500,000",
          "Legal Fee: ₦1,000,000",
        ],
      },
    ],
    "500sqm": [
      {
        title: "Outright Payment",
        price: "₦45,000,000",
        features: [
          "Initial Deposit: ₦5,000,000",
          "Infrastructure Development Fee: ₦3,500,000",
          "Survey Fee: ₦1,500,000",
          "Legal Fee: ₦1,000,000",
        ],
      },
      {
        title: "3 Months Payment Plan",
        price: "₦45,000,000",
        features: [
          "Initial Deposit: ₦5,000,000",
          "Infrastructure Development Fee: ₦3,500,000",
          "Survey Fee: ₦1,500,000",
          "Legal Fee: ₦1,000,000",
        ],
      },
      {
        title: "6 Months Payment Plan",
        price: "₦48,000,000",
        features: [
          "Initial Deposit: ₦5,000,000",
          "Infrastructure Development Fee: ₦3,500,000",
          "Survey Fee: ₦1,500,000",
          "Legal Fee: ₦1,000,000",
        ],
      },
      {
        title: "12 Months Payment Plan",
        price: "₦51,000,000",
        features: [
          "Initial Deposit: ₦5,000,000",
          "Infrastructure Development Fee: ₦3,500,000",
          "Survey Fee: ₦1,500,000",
          "Legal Fee: ₦1,000,000",
        ],
      },
    ],
  };

  const currentPlans = plotPlans[selectedOption];

  return (
    <motion.div className='pricing_container' id='pricing'>
      <motion.section className='pricing_cont'>
        <motion.div
          className='price_header'
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Pricing</h1>
          <p>Choose the perfect plan that suits your needs</p>
        </motion.div>
        <motion.div
          className='price_action'
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.8, opacity: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <button
            className={selectedOption === "250sqm" ? "active" : ""}
            onClick={() => setSelectedOption("250sqm")}
          >
            250sqm
          </button>
          <button
            className={selectedOption === "300sqm" ? "active" : ""}
            onClick={() => setSelectedOption("300sqm")}
          >
            300sqm
          </button>
          <button
            className={selectedOption === "500sqm" ? "active" : ""}
            onClick={() => setSelectedOption("500sqm")}
          >
            500sqm
          </button>
        </motion.div>
        <motion.div
          className='prices'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {currentPlans.map((plan, index) => (
            <motion.div
              className='pricing-card'
              key={index}
              whileHover={{ scale: 1.05 }}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
              }}
            >
              <div className='wrap'>
                <h2>{plan.title}</h2>
                <div className='long'></div>
              </div>
              <p className='price'>{plan.price}</p>
              <ul className='price_features'>
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <BsPatchCheckFill className='iconp' /> {feature}
                  </li>
                ))}
              </ul>
              <button className='cta-button'>
                <h4>
                  <FaArrowRight className='iconpo' /> Choose Plan
                </h4>
                <div className='long'></div>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Pricing;
