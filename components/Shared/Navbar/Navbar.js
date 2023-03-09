import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  contact
} from "../../../data/data";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [clickItem, setClickItem] = useState(null);
  const [item, setItem] = useState(null);
  const [webitem, setWebItem] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [mobilshow, setMobilShow] = useState(false);
  return (
    <div className={styles.Navbar}>
      <nav className="navbar navbar-expand-lg p-0">
        <div className="auto-container" id={styles.Navbar}>
          <div className={styles.NavbarLogo}>
           <Link href="/"
                target="_parent" >WebDev</Link>
          </div>
          <button
            className="navbar-toggler"
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <span
              className={`navbar-toggler-icon ${styles.NavbarToggler}`}
            ></span>
          </button>
          {!show ? (
            <>
              <div
                className={`collapse navbar-collapse ${styles.navbarCollapse}`}
                id="navbarSupportedContent"
              >
                <ul
                  className="navbar-nav m-auto mb-lg-0 mt-0"
                  onMouseMove={() => setMobilShow(false)}
                >
                  <li className="nav-item" onMouseEnter={() => setItem(true)}>
                    <a
                      className="nav-link"
                      aria-current="page"
                      href="/why-apexdv"
                    >
                      Domain
                      <i className="fa-sharp fa-solid fa-caret-down"></i>
                    </a>
                  </li>

                  <li
                    className="nav-item"
                    onMouseEnter={() => setClickItem(true)}
                  >
                    <a className="nav-link" href="/services">
                      Hosting{" "}
                      <i className="fa-sharp fa-solid fa-caret-down"></i>
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onMouseEnter={() => setWebItem(true)}
                  >
                    <a className="nav-link" href="/case-study">
                      Web Design
                      <i className="fa-sharp fa-solid fa-caret-down"></i>
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onMouseEnter={() => setClickItem(false)}
                  >
                    <a className="nav-link" href="/about-us">
                      Software
                      <i className="fa-sharp fa-solid fa-caret-down"></i>
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onMouseEnter={() => setClickItem(false)}
                  >
                    <a className="nav-link" href="/blog">
                      Digital Marketing
                      <i className="fa-sharp fa-solid fa-caret-down"></i>
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onMouseEnter={() => setClickItem(false)}
                  >
                    <a className="nav-link" href="">
                      company
                      <i className="fa-sharp fa-solid fa-caret-down"></i>
                    </a>
                  </li>

                  <li
                    className="nav-item"
                    onMouseEnter={() => setClickItem(false)}
                  >
                    <a className="nav-link" href="">
                      Web Security
                      <i className="fa-sharp fa-solid fa-caret-down"></i>
                    </a>
                  </li>

                  {/* <li className="nav-item">
                <a className="nav-link">
                  Company <i className="fa-sharp fa-solid fa-caret-down"></i>
                </a>
              </li> */}
                </ul>
                <div className="d-flex gap-3">
                  <button
                    className={styles.NavPhoBtn}
                    onMouseMove={() => setMobilShow(true)}
                  >
                    <i class="ri-phone-fill"></i>
                    {mobilshow ? (
                      <div
                        className={styles.apexdvContacts}
                        onMouseLeave={() => setMobilShow(false)}
                      >
                        <h4>Future It Contacts</h4>
                        {contact?.map((c) => (
                          <div key={c?.id}>
                            <a href={c.link} className={styles.Contact}>
                              <Image src={c?.img} width="32" height="20" />
                              <p>{c?.phone}</p>
                            </a>
                          </div>
                        ))}
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
                        <div className={styles.HRDepartment}>
                          <h3>For HR Department</h3>
                          <a
                            href="mailto:maynuddinbhu14grm@gmail.com"
                            className={styles.Department}
                          >
                            <Image
                              src="/images/mail.svg"
                              width="32"
                              height="20"
                            />
                            <p>maynuddinbhu14grm@gmail.com</p>
                          </a>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </button>

                  <Link
                    href="/contact"
                    target="_parent"
                    className={styles.NavbarBtn}
                    onMouseMove={() => setMobilShow(false)}
                  >
                    Contact us
                  </Link>
                </div>
              </div>

              {/* {item ? (
                <div
                  className={styles.dropDown}
                  onMouseLeave={() => setItem(false)}
                >
                  <ul className={styles.dropDownMune}>
                    {hostingData?.slice(0, 8).map((n) => (
                      <a className={styles.muneItem} href={n.link} key={n.id}>
                        <div className={styles.muneImg}>
                          <h3>{n?.title}</h3>
                        </div>
                        <div className={styles.munetext}>
                          <p>{n?.text}</p>
                          <p>{n?.text1}</p>
                          <p>{n?.text2}</p>
                        </div>
                      </a>
                    ))}
                  </ul>
                  <ul className={styles.dropDownItam}>
                    <div className={styles.DownImg}>
                      <Image src="/images/contact.svg" width="74" height="80" />
                    </div>
                    <h3>Let’s talk in brief about your idea</h3>
                    <button className="button">
                      <i class="ri-skype-fill"></i> Get connected
                    </button>
                    <p>Or contact us via email </p>
                    <a href="mailto:maynuddinbhu14grm@gmail.com" rel="noreferrer">
                    maynuddinbhu14grm@gmail.com
                    </a>
                  </ul>
                </div>
              ) : (
                ""
              )} */}
            </>
          ) : (
            ""
          )}

          {/* {clickItem ? (
            <div
              className={styles.dropDown}
              onMouseLeave={() => setClickItem(false)}
            >
              <ul className={styles.dropDownMune}>
                {domainData?.slice(0, 4).map((n) => (
                  <a className={styles.muneItem} href={n.link} key={n.id}>
                    <div className={styles.muneImg}>
                      <h3>{n?.title}</h3>
                    </div>
                    <div className={styles.munetext}>
                      <p>{n?.text}</p>
                      <p>{n?.text1}</p>
                    </div>
                  </a>
                ))}
              </ul>
              <ul className={styles.dropDownItam}>
                <div className={styles.DownImg}>
                  <Image src="/images/contact.svg" width="74" height="80" />
                </div>
                <h3>Let’s talk in brief about your idea</h3>
                <button className="button">
                  <i class="ri-skype-fill"></i> Get connected
                </button>
                <p>Or contact us via email </p>
                <a href="mailto:maynuddinbhu14grm@gmail.com" rel="noreferrer">
                maynuddinbhu14grm@gmail.com
                </a>
              </ul>
            </div>
          ) : (
            ""
          )} */}

          {/* {webitem ? (
            <div
              className={styles.dropDown}
              onMouseLeave={() => setWebItem(false)}
            >
              <ul className={styles.dropDownMune}>
                {webitemData?.map((n) => (
                  <a className={styles.muneItem} href={n.link} key={n.id}>
                    <div className={styles.muneImg}>
                      <h3>{n?.title}</h3>
                    </div>
                    <div className={styles.munetext}>
                      <p>{n?.text}</p>                     
                    </div>
                  </a>
                ))}
              </ul>
              <ul className={styles.dropDownItam}>
                <div className={styles.DownImg}>
                  <Image src="/images/contact.svg" width="74" height="80" />
                </div>
                <h3>Let’s talk in brief about your idea</h3>
                <button className="button">
                  <i class="ri-skype-fill"></i> Get connected
                </button>
                <p>Or contact us via email </p>
                <a href="mailto:maynuddinbhu14grm@gmail.com" rel="noreferrer">
                maynuddinbhu14grm@gmail.com
                </a>
              </ul>
            </div>
          ) : (
            ""
          )} */}
         
        </div> 
      </nav>

      {/* Code for Mobile Devices and Tablets Ipads portrait mode */}
    </div>
  );
};

export default Navbar;