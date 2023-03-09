import Image from "next/image";
import Link from "next/link";
import React from "react";
import { company, footerContact, number, support } from "../../../data/data";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.footerTopBg}>
        <div className="auto-container">
          <div className={styles.footertop}>
            <div className={styles.BottomImg}>
              <h3>
                {/* <Image width="162" height="80" src="/images/logo.png" /> */}
                follow us on
              </h3>
            </div>
            <div className={styles.Bottomtext}>
              <a
                href="https://www.facebook.com/futureit14/"
                rel="noreferrer"
                target="_blank"
                className={styles.text}
              >
                <i className="fa-brands fa-linkedin"></i>
                <p>linkedIn</p>
              </a>

              <a
                href="https://www.facebook.com/futureit14/"
                rel="noreferrer"
                target="_blank"
                className={styles.text}
              >
                <i className="ri-twitter-fill"></i>
                <p>Twitter</p>
              </a>
              <a
                href="https://www.facebook.com/futureit14/"
                rel="noreferrer"
                target="_blank"
                className={styles.text}
              >
                <i className="fa-brands fa-facebook-f"></i>
                <p>Facebook</p>
              </a>

              <a
                href="https://www.facebook.com/futureit14/"
                rel="noreferrer"
                target="_blank"
                className={styles.text}
              >
                <i className="ri-instagram-line"></i>
                <p>Instagram</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={styles.FooterTouch}>
              <h2>Our Location</h2>
              {footerContact?.map((c) => (
                <div key={c?.id} className={styles.Contact}>
                  <div className={styles.CardImg}>
                    <Image src={c?.img} width="32" height="32" />
                  </div>
                  <div className={styles.CardText}>
                    <h4>{c?.title}</h4>
                    <p>{c?.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <div className={styles.CompanyItam}>
              <div className={styles.Company}>
                <h2>Company</h2>
                {company?.map((n) => (
                  <a href={n?.link} rel="noreferrer" key={n?.id}>
                    {n?.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <div className={styles.CompanyItam}>
              <div className={styles.Company}>
                <h2>Services</h2>
                {support?.map((m) => (
                  <a href={m?.link} rel="noreferrer" key={m?.id}>
                    {m?.text}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className={styles.Touch}>
              <h2>consultation</h2>
              <div className={styles.stayTouch}>
                <div className={styles.Project}>
                  {number?.map((q) => (
                    <div className={styles.ProjectCard} key={q?.id}>
                      <div className={styles.cardImg}>
                        <Image width="25" height="25" src={q?.img} />
                      </div>
                      <div className={styles.cardText}>
                        <a href={q?.link} rel="noreferrer">
                          {q?.phone}
                        </a>
                        <p>{q?.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={styles.ProjectLink}>
                  <a
                    href="https://wa.me/+8801774870073"
                    rel="noreferrer"
                    target="_blank"
                  >
                    {" "}
                    <Image
                      width="32"
                      height="32"
                      src="/images/Contact/whatsapp 1.svg"
                    />
                  </a>
                  <a
                    href="https://t.me/apexdvnft"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Image
                      width="32"
                      height="32"
                      src="/images/Contact/telegram 1.svg"
                    />
                  </a>
                  <a
                    href="https://discord.gg/YJUfuCkb"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Image
                      width="32"
                      height="32"
                      src="/images/Contact/telegram 2.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.FooterBottom}>
        <div className="auto-container">
          <div className={styles.Footerlogo}>
            {/* <Image width="152" height="40" src="/images/Clutch review.svg" /> */}
            <Link rel="noreferrer" target="_parent" href="/">
              {" "}
              WebDev
            </Link>
            <p>© 2018-2020 WebDev ALL Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
