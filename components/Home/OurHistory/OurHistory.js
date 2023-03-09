import Image from "next/image";
import React from 'react';
import OurAwards from "../OurAwards/OurAwards";
import StateSction from "../StateSction/StateSction";
import styles from "./OurHistory.module.css";

const OurHistory = () => {
    return (
        <div className={styles.OurHistory}>
      <h2>Why You are choose us!</h2>
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={styles.HistoryText}>
              <h3>some reason here. </h3>
              <p>
              Here are the reasons you can depend on FUTURE IT to keep you and your business up and running.
              </p>
              <p>
              Your business depends on your IT systems. We’re confident that we are the only network services, computer support, or IT consulting business in the World areas that provides these benefits to your business.Here are the reasons you can depend on FUTURE IT to keep you and your business up and running: 11 THINGS WE DO BETTER 1.High Touch Communication. 2.We Are FUN To Work With. 3.Security is Paramount. 4.Committed to Quality. 5.We LOVE Documentation. 6.We Help Solve Your Business Problems. 7.Fast Response To Requests & Critical Response Time Guaranteed. 8.A Proven Track Record. 9.We Talk Plain English. 10.Satisfaction Guaranteed. 11.A Wide Spectrum Of Skills & Experience.
              </p>
              <OurAwards />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={styles.HistoryImg}>
              <div className={styles.CardImage}>
                <Image
                  width="550"
                  height="600"
                  src="/images/history/image.png"
                  className="img-fluid"
                />
                {/* <div className={styles.playButton}>
                <i className="ri-play-fill"></i>
                </div> */}

                <div className={styles.CardText}>
                  <h2>07</h2><p>Years of
experience</p>
                </div>
              </div>
            </div>
          </div>
          <StateSction />
        </div>
      </div>
    </div>
    );
};

export default OurHistory;