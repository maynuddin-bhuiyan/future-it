import React from "react";
import { businessData } from "../../../data/data";
import styles from "./OnlineBusiness.module.css";

const OnlineBusiness = () => {
  return (
    <div className={styles.onlineBusiness}>
      <h2>get your business online with future It</h2>
      <div className="auto-container">
        <div className="row">
          {businessData?.map((item, i) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={item?.id}>
              <div className={styles.card}>
                <h3>{item?.title}</h3>
                <div className={styles.cardPrice}>
                  <h4>${item?.price}</h4>
                  <p>
                    {item?.reg} <span>{item?.pricemin}</span>
                  </p>
                  <button className="button mb-3">{item?.view}</button>
                </div>
                {item.text.map((items, i) => (
                  <div className={styles.cardList} key={items?.id}>
                    <i class="ri-arrow-right-circle-fill"></i>
                    <p>{items?.item}</p>
                  </div>
                ))}

                <button className="button mt-3">{item?.button}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineBusiness;
