import React, { useState } from 'react';
import FAQItem from './FAQItem';

interface FAQData {
  question: string;
  answer: string;
}

const faqData: FAQData[] = [
  {
    question: 'What is Frontend Mentor, and how will it help me?',
    answer:
      'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building.',
  },
  {
    question: 'Is Frontend Mentor free?',
    answer: 'Yes, Frontend Mentor offers both free and premium challenges.',
  },
  {
    question: 'Can I use Frontend Mentor projects in my portfolio?',
    answer: 'Yes, you can use completed projects in your portfolio to showcase your skills.',
  },
  {
    question: "How can I get help if I'm stuck on a challenge?",
    answer: 'You can ask questions and get support from the community on the Frontend Mentor Discord server.',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); 

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">FAQs</h2>
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={index === openIndex}
          onClick={() => toggleFAQ(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
