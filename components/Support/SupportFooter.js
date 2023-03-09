import Image from "next/image";
import Link from "next/link";
import React from "react";
import { supportFooter } from "../../data/data";
import styles from "./Support.module.css";

const SupportFooter = () => {
  return (
    <div className={styles.supportFooter}>     
          <h2>
            Try us. You will love the <span>Future It</span> experience.
          </h2>
          <p>
            Start your 21-day free trial. No credit card required. No strings
            attached. Help your customers at the office or at home, at the
            airport with your tablet, or out and about with your mobile device.
          </p>
          <div className="auto-container">
        <div className="row">
          {supportFooter?.map((c) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={c?.id}>
              <div className={styles.supportItem}>
                <Image width="43" height="42" src={c?.img} />
                <p>{c?.title}</p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
      <div className={styles.supportContact}>
            <h3>Didn{`'`}t find an answer to your question?</h3>
            <Link href="/contact" target="_parent" className="button">
              {" "}
              Stay In Touch{" "}
            </Link>
          </div>
    </div>
  );
};

export default SupportFooter;
