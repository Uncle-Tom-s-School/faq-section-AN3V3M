import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="faq-item">
      <div className="faq-question" onClick={onClick}>
        <span style={{ color: isOpen ? '#000' : '#a855f7', fontWeight: 600 }}>
          {question}
        </span>
        <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

export default FAQItem;
