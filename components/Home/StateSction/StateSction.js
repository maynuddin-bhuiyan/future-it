import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import styles from "./StateSction.module.css";

const StateSction = () => {
  const data = [
    { id: 1, title: "35", tag: "+", text: "IN-HOUSE DEVELOPERS" },
    { id: 2, title: "986", tag: "+", text: "SUCCESSFUL PROJECTS" },
    { id: 3, title: "98", tag: "%", text: "SATISFIED CUSTOMER PERCENTAGE" },
    { id: 4, title: "7", tag: "+", text: "YEARS OF OPERATION" },
  ];
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };
  return (
    <ReactVisibilitySensor
      offset={{ top: 10 }}
      delayedCall={true}
      onChange={onVisibilityChange}
    >
      <div className={styles.StateSction}>
        {data.slice(0, 4).map((n) => (
          <div className={styles.Card} key={n?.id}>
            <p> {n?.text}</p>
            <h2>
              <CountUp duration={5} start={0} end={countStart ? n?.title : 0} />{" "}
              {n?.tag}
            </h2>
          </div>
        ))}
      </div>
    </ReactVisibilitySensor>
  );
};

export default StateSction;
