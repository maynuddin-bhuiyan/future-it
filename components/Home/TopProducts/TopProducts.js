import Image from "next/image";
import React, { useState } from "react";
import { caseData } from "../../../data/data";
import styles from "./TopProducts.module.css";

const TopProducts = () => {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.TopProducts}>
      <h2>Top Products</h2>
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={styles.Products}>
              {caseData.slice(0, 6).map((item, i) => (
                <div
                  onClick={() => setActive(item.id)}
                  className={`${styles.buttons} ${
                    active === item.id && styles.active
                  }`}
                  key={item?.id}
                >
                  <p>{item.name}</p>
                </div>
              ))}
              {/* {caseData.slice(4, 6).map((item, i) => (
                <div
                  onClick={() => setActive(item.id)}
                  className={`${styles.buttons} ${
                    active === item.id && styles.active
                  }`}
                  key={item?.id}
                >
                  <p>{item.name}</p>
                </div>
              ))} */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className={``}>
              {caseData.map((item, index) => (
                <div
                  className={`${
                    item.id === active
                      ? `${styles.techIcons}`
                      : `${styles.techIconss}`
                  } `}
                  key={item?.id}
                >
                  {item.images.map((items, i) => (
                    <div className={styles.iconsInfo} key={items?.id}>
                      <Image src={items.image} width="60" height="60" className="img-fluid" />
                      <p>{items.text}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className={``}>
              {caseData.map((item, index) => (
                <div
                  className={`${
                    item.id === active
                      ? `${styles.product}`
                      : `${styles.productImg}`
                  } `}
                  key={item?.id}
                >
                  <Image src={item.img} width="500" height="400" className="img-fluid" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
