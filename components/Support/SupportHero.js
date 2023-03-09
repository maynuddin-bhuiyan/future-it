import React from "react";
import { footerContact } from "../../data/data";
import styles from "./Support.module.css";

const SupportHero = () => {
  return (
    <div className={styles.supportHero}>
      <h2>get Support</h2>
      <p>
      Intuitive, Feature-Rich, Affordable Customer
Support Software
      </p>
      <div className="auto-container">
        <div className="row">
          {footerContact?.map((c) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={c?.id}>
              <div className={styles.supportCard}>
              <div className={styles.cardImg}>
              <i class="ri-home-4-fill"></i>
              </div>
              <a href={c?.link} rel="noreferrer">{c?.phone}</a>
              <p>{c?.text}</p>
              <h3>{c?.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportHero;
