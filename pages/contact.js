import React from 'react';
import Contact from '../components/ContactUs/Contact/Contact';
import ContactForm from '../components/ContactUs/ContactForm/ContactForm';
import Reseller from '../components/Home/Reseller/Reseller';
import Footer from '../components/Shared/Footer/Footer';
import Navbar from '../components/Shared/Navbar/Navbar';
import SupportFooter from '../components/Support/SupportFooter';
import styles from "../styles/projectWrapper.module.css";

const contact = () => {
    return (
        <div>
            <Navbar />
        <div className={styles.projectWrapper}>        
          <Contact />
        </div>
        <div className={styles.formWrapper}>
          <ContactForm />  
          </div>
          <Reseller />
          <SupportFooter />
          <Footer />          
          </div>
    );
};

export default contact;