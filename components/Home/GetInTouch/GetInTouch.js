import Link from "next/link";
import React from "react";
import styles from "./GetInTouch.module.css";

const GetInTouch = () => {
  return (
    <div className={styles.getInTouch}>
      <h2>get in touch</h2>
      <div className={styles.inTouch}>
        <Link className="button" href="/contact" target="_parent">
          Contact Us
        </Link>
        <Link className="button" href="/support" target="_parent">
          Get Support
        </Link>
      </div>
    </div>
  );
};

export default GetInTouch;
