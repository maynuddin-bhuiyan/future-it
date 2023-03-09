import Image from "next/image";
import React from "react";
import { supportCard } from "../../data/data";
import styles from "./Support.module.css";

const SupportCard = () => {
  return (
    <div className={styles.supportCard}>
      <div className="auto-container">
        <div className="row">
          {supportCard?.map((c) => (
            <div className="col-lg-6 col-md-6 col-sm-12" key={c?.id}>
              <div className={styles.cardDetails}>
                <div className={styles.cardIcon}>
                  <Image width="75" height="70" src={c?.img} />
                </div>
                <div className={styles.cardText}>
                  <h3>
                    {c?.title}
                    <span>{c?.span}</span>
                  </h3>
                  <p>{c?.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportCard;
