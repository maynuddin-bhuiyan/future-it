import React from "react";
import GoogleMap from "../../GoogleMap/GoogleMap";
import styles from "../ContactUs.module.css";

const ContactForm = () => {
  return (
    <div className={styles.contactForm}>
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={styles.text}>
              <h3>
                Tell us about your software project we{`'`}ll be in touch right
                away.
              </h3>
            </div>
            <div className={styles.googleMap}>
            <GoogleMap />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <form className={styles.form}>
              <h3>
                Fill In The Boxes In The Necessary Fields And Our Expert Will
                Contact You Within 24 Hours.
              </h3>
              <div className={styles.form_input}>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  required={true}
                />
              </div>

              <div className={styles.form_input}>
                <input
                  type="text"
                  placeholder="Enter Your Company Name"
                  required={true}
                />
              </div>

              <div className={styles.form_input}>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  required={true}
                />
              </div>

              <div className={styles.form_input}>
                <input
                  type="number"
                  placeholder="Phone Number (with country code)"
                  required={true}
                  min={1000000000}
                  onInput={(e) => {
                    e.target.setCustomValidity("");
                  }}
                />
              </div>
              <div className={styles.form_textarea}>
                <textarea
                  type="text"
                  placeholder="Your Project Description"
                  required={true}
                />
              </div>
              <button className="button" type="submit">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
