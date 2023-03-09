import Link from 'next/link';
import React from 'react';
import styles from "./Reseller.module.css";

const Reseller = () => {
    return (
        <div className={styles.Reseller}> 
              <div className={styles.resellerText}> 
              <h4>Lowest Priced Domains & Free Domain Reseller!</h4>
              <p>.com for 11.99$, .net for 11.99$ Zero deposit free domain reseller account with discounted pricing.</p>
              </div>
              <div className={styles.resellerBtn}> 
              <Link href="https://domainbuy.partnersite.myorderbox.com/" className='button' target="_blank">
              REGISTER NOW
              </Link>
              </div>
        </div>
    );
};

export default Reseller;