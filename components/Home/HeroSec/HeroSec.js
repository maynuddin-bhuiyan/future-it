import Image from 'next/image';
import React from 'react';
import Slider from "react-slick";
import { heroSectionData } from '../../../data/data';
import styles from "./HeroSec.module.css";

const HeroSec = () => {

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

    return (
        <div className={styles.heroSec}>
      
      <Slider {...settings}>
        {heroSectionData.map((item, i) => ( 
        <div className="row d-flex align-items-center" key={item?.id}>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={styles.heroSecText}>
              <h1>
                <span className={styles.TextColor}>
                  <span className={styles.TextRetro}>{item?.span}</span> 
                </span>{" "}
                {item?.title}
              </h1>
              <p>
              {item?.text}
              </p>
              <a
                href="/contact"
                rel="noreferrer"
                target="_blank"
                className="btn btn1"
              >
                {" "}
                View Products
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className={styles.heroSecImg}>
              <div className={styles.ImgDiv}>
                <Image
                  src={item?.img}
                  alt="360 Degree   Solution For Your Blockchain and NFT Business"
                  width={600}
                  height={450}
                  className='img-fluid'
                />               
              </div>
            </div>
          </div>
        </div>
            ))}
              </Slider>    
    </div>
    );
};

export default HeroSec;