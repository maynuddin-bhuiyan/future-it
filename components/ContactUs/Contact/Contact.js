import Link from "next/link";
import React from "react";
import styles from "../ContactUs.module.css";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2>Contact Us</h2>
      <p>It is good to meet you.</p>
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className={styles.sales}>
              <Link href="tel:+8801908145097" className={styles.salesIcon}>
                <i class="ri-phone-line"></i>
              </Link>
              <a href="tel:+8801908145097" rel="noreferrer">
                +8801908145097 (BD)
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className={styles.sales}>
              <Link href="https://goo.gl/maps/k8cBHNPVH3dQMUMWA" target="_blank" className={styles.salesIcon}>
                <i class="ri-map-pin-2-line"></i>
              </Link>
              <p>
              20/19 Tilotoma Tolarbag Mirpur 1 Dhaka Bangladesh
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className={styles.sales}>
              <Link href="mailto:maynuddinbhu14grm@gmail.com" className={styles.salesIcon}>
                <i class="ri-mail-unread-line"></i>
              </Link>
              <a href="mailto:maynuddinbhu14grm@gmail.com" rel="noreferrer">
              maynuddinbhu14grm@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
