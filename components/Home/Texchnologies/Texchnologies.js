import Image from "next/image";
import React, { useState } from "react";
import { texchnologiesData } from "../../../data/data";
import TrustedLogo from "../../Shared/TrustedLogo/TrustedLogo";
import styles from "./Technologies.module.css";

const Texchnologies = () => {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.technologies}>
      <div className="auto-container">
        <div className={`row ${styles.technology}`}>
          <div className={`col-lg-5 col-md-12 col-sm-12 ${styles.techInfo}`}>
            <h2>Key Technologies and Methodologies</h2>
            <p>These are the methods and technologies we work with</p>
            <div className={styles.button}>
              {texchnologiesData.slice(0, 2).map((item, i) => (
                <div
                  onClick={() => setActive(item.id)}
                  className={`${styles.buttons} ${
                    active === item.id && styles.active
                  }`}
                  key={item?.id}
                >
                  <p>{item.name}</p>
                </div>
              ))}
              {texchnologiesData.slice(2, 4).map((item, i) => (
                <div
                  onClick={() => setActive(item.id)}
                  className={`${styles.buttons} ${
                    active === item.id && styles.active
                  }`}
                  key={item?.id}
                >
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className={``}>
              {texchnologiesData.map((item, index) => (
                <div
                  className={`${
                    item.id === active
                      ? `${styles.techIcons}`
                      : `${styles.techIconss}`
                  } `}
                  key={item?.id}
                >
                  {item.images.map((items, i) => (
                    <div className={styles.iconsInfo} key={items?.id}>
                      <Image src={items.image} width="95" height="95" />
                      <p>{items.text}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.siteExample}>
          <h2>
          Our Partners
          </h2>
          <div className={styles.siteExampleIcon}></div>
        </div>
        <TrustedLogo />
      </div>
    </div>
  );
};

export default Texchnologies;