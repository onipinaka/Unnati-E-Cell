import React, { useState, useRef, useEffect } from "react";
import "./faq.css";

const data = [
  {
    question: "How many agents can we add?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia debitis consectetur similique excepturi ullam autem doloribus consequatur deserunt fuga non dolores nostrum alias itaque magni officia, repudiandae neque. Adipisci non nisi ex omnis temporibus repellat.",
  },
  {
    question: "How many agents can we add?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia debitis consectetur similique excepturi ullam autem doloribus consequatur deserunt fuga non dolores nostrum alias itaque magni officia, repudiandae neque. Adipisci non nisi ex omnis temporibus repellat.",
  },
  {
    question: "How many agents can we add?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia debitis consectetur similique excepturi ullam autem doloribus consequatur deserunt fuga non dolores nostrum alias itaque magni officia, repudiandae neque. Adipisci non nisi ex omnis temporibus repellat.",
  },
  {
    question: "How many agents can we add?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia debitis consectetur similique excepturi ullam autem doloribus consequatur deserunt fuga non dolores nostrum alias itaque magni officia, repudiandae neque. Adipisci non nisi ex omnis temporibus repellat.",
  },
  {
    question: "How many agents can we add?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia debitis consectetur similique excepturi ullam autem doloribus consequatur deserunt fuga non dolores nostrum alias itaque magni officia, repudiandae neque. Adipisci non nisi ex omnis temporibus repellat.",
  },
  {
    question: "How many agents can we add?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia debitis consectetur similique excepturi ullam autem doloribus consequatur deserunt fuga non dolores nostrum alias itaque magni officia, repudiandae neque. Adipisci non nisi ex omnis temporibus repellat.",
  },
  {
    question: "How many agents can we add?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia debitis consectetur similique excepturi ullam autem doloribus consequatur deserunt fuga non dolores nostrum alias itaque magni officia, repudiandae neque. Adipisci non nisi ex omnis temporibus repellat.",
  },
];

function FaqSection() {

  const[selected, setSelected] = useState(null);
  const faqRefs = useRef([]);

  const toggle = (i) => {
    if(selected === i) {
      setSelected(null);
    }
    else {
      setSelected(i);
    }
  };

 useEffect(() => {
  if (selected !== null && faqRefs.current[selected]) {
    const element = faqRefs.current[selected];
    const top = element.getBoundingClientRect().top + window.scrollY;
    const offset = 80;

    window.scrollTo({
      top: top - offset,
      behavior: "smooth",
    });
  }
}, [selected]);


  return (
    <div className="faq-container">
      <div className="faq-left">
        <span className="faq-tag">FAQ</span>
        <h1 className="heading">Frequently Asked Questions</h1>
        <p className="para">
          Let's do our best to answer your most frequently asked questions
        </p>
        <div className="contact">
          <div className="inner-card1">
            <div className="icon-background">
              <span className="question-mark">?</span>
            </div>
            <div className="inner-card2">
              <h3 className="contact-title">Still have questions?</h3>
              <p className="contact-text">
                Can't find the answer you're looking for? Please chat to our
                friendly team
              </p>
            </div>
          </div>
          <button className="get-in-touch-button">Get in touch</button>
        </div>
      </div>
      <div className="faq-right">
        {data.map((items, i) => {

          let symbol;
          if (selected === i) {
            symbol = '-'
          } 
          else {
            symbol = '+'
          }

          return (
        <div className="question-card"
         key={i}
         ref={(el) => (faqRefs.current[i] = el)}
        >
            <div className="question" onClick={() => {toggle(i)}}>
                <h3 className="quest">{items.question}</h3>
                <span className="open-button">{symbol}</span>
            </div>
            <div className={`answer ${selected === i ? 'open' : ''}`}>
                <p>{items.answer}</p>
            </div>
        </div>
        )
        })}
      </div>
      
    </div>
  );
}

export default FaqSection;
