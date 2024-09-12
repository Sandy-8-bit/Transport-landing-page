import React, { useState } from 'react';
import './Ques.css'; // Using your CSS file

const Faq = () => {
  const faqData = [
    { question: "1. How do I book in the Eintransport App?", answer: "Follow these simple steps to start leveraging hassle-free logistics from Porter 1.Download the Porter app  2.Choose the service you want to use 3.Select your pick up and delivery locations 4.Add any extra stops, if applicable 5.Choose the most appropriate vehicle type as per your requirements 2 wheeler, three-wheelers or trucks  6.Select the type of goods you’re sending 7.Choose your payment method 8.Click on Book Nowand your vehicle is on its way!" },
    { question: "2. What regions do you cover ?", answer: "Our transport services cover [specific KERALA , KARNATAKA , TAMIL NADU ]. We also offer long-distance and interstate transport depending on the requirements. " },
    { question: "3. Eintransport provides two types of services?", answer: "1. Packers and Movers services 2. Goods Transportation Service [Any kinds of goods Which are permitted]" },
    { question: "4. Does Eintransport provide Packers and Movers services?", answer: "Packing cities are [Kochi, Kottayam, Thiruvananthapuram, Bangalore, Chennai, Coimbatore]. Delivery is depending on the requirements. " },
    { question: "5. What type of vehicles do you use?", answer: " We are using 7 to 32 feet vehicles; it includes containers and open vehicles. We can transport upto 15000 kg.." },
    { question: "6. How can I track my shipment?", answer: "We provide tracking options via mobile app, where you can monitor your shipment in real-time" },
    { question: "7. What are your payment methods?", answer: "We accept two types of payment methods: UPI and bank transfer. Payment terms can be discussed during the booking process." },
  ];

  const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="faq-item" onClick={toggleAnswer}>
        <div className="faq-question">
          {question}
          <span className="faq-arrow">{isOpen ? '▲' : '▼'}</span>
        </div>
        {isOpen && <div className="faq-answer">{answer}</div>}
      </div>
    );
  };

  return (
    <div className="faq-container">
      <div className="header-cont">
        <h2 className="faq-title">
          <span className="faq-highlight">Frequently</span> Asked Questions
        </h2>
      </div>
      <div className="faq-portion">
        {faqData.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
