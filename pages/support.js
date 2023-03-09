import React from 'react';
import Reseller from '../components/Home/Reseller/Reseller';
import Footer from '../components/Shared/Footer/Footer';
import Navbar from '../components/Shared/Navbar/Navbar';
import SupportCard from '../components/Support/SupportCard';
import SupportDetails from '../components/Support/SupportDetails';
import SupportFooter from '../components/Support/SupportFooter';
import SupportHero from '../components/Support/SupportHero';

const support = () => {
    return (
        <div>
            <Navbar />
            <SupportHero />
            <SupportDetails />
            <SupportCard />
            <SupportFooter />
            <Reseller />
            <Footer />
        </div>
    );
};

export default support;