import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { trustData, trustMoreData } from "../../../data/data";
import styles from "./TrustedLogo.module.css";
const TrustedLogo = () => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
      const settingsMore = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        rtl: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 425,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return (
        <div className={styles.CaseStudiesTrusted}>      
      <Slider {...settings}>
        {trustData?.map((c) => (
          <div key={c?.id} className={styles.TrustedCard}>
            <Image width="160" height="45" src={c?.img} />
          </div>
        ))}
      </Slider>
      <Slider {...settingsMore}>
        {trustMoreData?.map((c) => (
          <div key={c?.id} className={styles.TrustedMoreCard}>
            <Image width="160" height="45" src={c?.img} />
          </div>
        ))}
      </Slider>
    </div>
    );
};

export default TrustedLogo;