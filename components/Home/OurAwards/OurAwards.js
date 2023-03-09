import Image from 'next/image';
import React from 'react';
import { awardsData } from '../../../data/data';
import styles from "./OurAwards.module.css";

const OurAwards = () => {
    return (
        <div className={styles.OurAwards}>
      <h3>Our Awards & Recognition</h3>
      <div className={styles.AwardsImg}>
      {awardsData.slice(0, 4).map((n) => (
          <div className={styles.Card} key={n?.id}> 
          <Image
          src={n.img}
          width="150"
          height="118"
        />
          </div>
        ))}        
      </div>
    </div>
    );
};

export default OurAwards;