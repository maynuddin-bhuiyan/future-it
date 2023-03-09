import Image from "next/image";
import Link from "next/link";
import React from "react";
import { newsData } from "../../../data/data";
import styles from "./NewsAndEvents.module.css";

const NewsAndEvents = () => {
  return (
    <div className={styles.NewsAndEvents}>
      <h2>News And Events</h2>
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12">
            {newsData?.slice(0, 1)?.map((item, i) => (
              <div className={styles.BlogStoryCard} key={item?.id}>
                <div className={styles.CardImg}>
                  <Image width="650" height="340" src={item?.img} className="img-fluid" />
                </div>
                <div className={styles.Blogtext}>
                  <h3>{item?.type}</h3>
                  <h2>{item?.title}</h2>
                  <p>
                    {item?.subTitle}
                  </p>
                  <div className={styles.dateAndTime}>
                    <p>{item?.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12">
            {newsData?.slice(1, 4)?.map((items, i) => (
              <div className="row" key={items?.id}>
                <div className="col-lg-12 col-md-4 col-sm-12">
                  <div className={styles.BlogCard}>
                    <h3>{items?.type}</h3>
                    <h2>{items?.title}</h2>
                    <h3>{items?.subTitle}</h3>
                    <div className={styles.dateAndTime}>
                      <p>{items?.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`auto-container ${styles.CaseStudyFooter}`}>
        <h2>
          Keep your eyes on us to have a look at our consolidated News And
          Events <span>Coming Soon</span>
        </h2>
        <Link className="btn btn1" href="/newevents" target="_parent"> View all News And Events</Link>
      </div>
    </div>
  );
};

export default NewsAndEvents;
