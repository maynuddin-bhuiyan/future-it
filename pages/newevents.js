import React from 'react';
import Reseller from '../components/Home/Reseller/Reseller';
import NewsEventsCard from '../components/NewsEvents/NewsEventsCard';
import Footer from '../components/Shared/Footer/Footer';
import Navbar from '../components/Shared/Navbar/Navbar';
import SupportFooter from '../components/Support/SupportFooter';

const newevents = () => {
    return (
        <div>
            <Navbar />
            <NewsEventsCard />
            <Reseller />
            <SupportFooter />
            <Footer />
        </div>
    );
};

export default newevents;