import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { newsData } from '../../data/data';
import styles from "./NewsEventsCard.module.css";

const NewsEventsCard = () => {
    return (
        <div className={styles.NewsEventsCard}>
        <div className="auto-container">
        <div className="row">
        {newsData?.map((c) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={c?.id}>
              <div className={styles.cardItem}>
                <Image width="360" height="200" src={c?.img} />
                <h3>{c?.type}</h3>
                <h4>{c?.title}</h4>                
                <p>{c?.subTitle}</p>
                <div className={styles.dateAndTime}>
                      <p>{c?.date}</p>
                      <Link href="/">Details</Link>
                </div>
              </div>
            </div>
          ))}
            </div>
        </div>
        </div>
    );
};

export default NewsEventsCard;