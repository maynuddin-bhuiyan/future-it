import Image from "next/image";
import React from 'react';
import { youGetdata } from "../../../data/data";
import styles from "./WhatYouGet.module.css";

const WhatYouGet = () => {
    return (
        <div className={styles.whatYouGet}>
        <div className="auto-container">
            <div className={styles.whatYouGetcontainer}>
                <h2> We Have Great Industry Expertise in</h2>
                <p>Your next development project will be easier to manage and more efficient with a well-managed staff and regular updates. Every step of the way, ApexDv helps our developers and gives you:</p>
                <div className={styles.whatYouGetCards}>
                    {
                        youGetdata.map((item,i ) => (
                            <div  className={styles.whatYouGetCard} key={item?.id}>
                                <div className={styles.whatYouGetCardImg}>
                                    <Image src={item.image} width="64" height="64" />
                                </div>
                                <h3>{ item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
    );
};

export default WhatYouGet;