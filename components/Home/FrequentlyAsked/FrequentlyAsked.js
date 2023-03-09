import React, { useState } from 'react';
import styles from "./FaqQuestions.module.css";

const FrequentlyAsked = () => {
    const [defaultActive, setDefaultActive] = useState(1);
  const [show, setShow] = useState(1);
  const data = [
    {
      id: 1,
      title: "What tech professionals can you provide to extend my team?",
      text: "Developers, QA engineers, business analysts, scrum masters, project managers, DevOps engineers, UX/UI designers, support engineers to name a few.",
    },
    {
      id: 2,
      title: "How quickly will I get a response from Future It?",
      text: "Will will do our best to contact you within 2 hours. In exceptional cases we might need 24 hours.",
    },
    {
      id: 3,
      title: "I have a startup idea. Can you develop a custom product for me?",
      text: "Absolutely. We deliver full-cycle custom product development with further product support and maintenance.",
    },
    {
      id: 4,
      title: "What kind of tech support do you provide?",
      text: "We provide thorough third-line product support: modifications and updates after the software product delivery.",
    },
    {
        id: 5,
        title: "What kind of tech support do you provide?",
        text: "We provide thorough third-line product support: modifications and updates after the software product delivery.",
      },
  ];
    return (
        <div className={styles.FaqQuestions}>
        <h2>Frequently Asked Questions</h2>
        <div className={`container`}>
          <div className="row" id={styles.WhatWeDoPart}>
            <div
              className={`col-lg-12 col-md-12 col-sm-12  ${styles.WhatWeDoAccordion}`}
            >
              <div
                className={`accordion accordion-flush faqAccordion`}
                id="accordionPanelsStayOpenExample"
              >
                {data.map((item, index) => {
                  return (
                    <div
                      className={`accordion-item ${styles.Accordion}`}
                      key={item?.id}
                    >
                      <h2
                        className={`accordion-header ${styles.Title}`}
                        // id={`panelsStayOpen-heading${item?.id}`}
                      >
                        <button
                          className={`accordion-button collapsed ${
                            defaultActive === item.id ? "active" : ""
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#panelsStayOpen-collapse${item.id}`}
                          aria-expanded={item.id === 1 ? "true" : "false"}
                          aria-controls={`panelsStayOpen-collapse${item.id}`}
                          onClick={() => {
                            setShow(item.id);
                            setDefaultActive(null);
                          }}
                        >
                          <span>{item?.number}</span> {item?.title}{" "}
                        </button>
                      </h2>
                      <div
                        id={`panelsStayOpen-collapse${item.id}`}
                        className={`accordion-collapse collapse ${
                          item.id === 1 ? "show" : ""
                        }`}
                        aria-labelledby={`panelsStayOpen-heading${item.id}`}
                        data-bs-parent="#accordionPanelsStayOpenExample"
                      >
                        <div
                          className={`accordion-body  ${styles.AccordionBody}`}
                        >
                          {item?.text}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FrequentlyAsked;