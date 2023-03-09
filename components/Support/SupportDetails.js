import Image from "next/image";
import React from "react";
import { supportData } from "../../data/data";
import styles from "./Support.module.css";

const SupportDetails = () => {
  return (
    <div className={styles.supportDetails}>
      <h2>
        Tools for Teams from <span>Future It</span>
      </h2>
      <p>
        A small river named Duden flows by their place and supplies it with the
        necessary regelialia. It is a paradisematic country, in which roasted
        parts of sentences fly into your mouth.
      </p>
      <div className="auto-container">
        {supportData?.map((c) => (
          <div className="row" key={c?.id} id={styles.supportDetails}>
            <div className="col-lg-9 col-md-8 col-sm-12">
              <div className={styles.detailsText}>
                <h3>
                  {c?.title} <span>{c?.span}</span>
                </h3>
                <p>{c?.text}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 text-center">
              <Image width="215" height="195" src={c?.img} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportDetails;
