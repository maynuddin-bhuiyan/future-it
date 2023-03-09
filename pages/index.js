import Head from 'next/head';
import FrequentlyAsked from '../components/Home/FrequentlyAsked/FrequentlyAsked';
import GetInTouch from '../components/Home/GetInTouch/GetInTouch';
import HeroSec from '../components/Home/HeroSec/HeroSec';
import NewsAndEvents from '../components/Home/NewsAndEvents/NewsAndEvents';
import OnlineBusiness from '../components/Home/OnlineBusiness/OnlineBusiness';
import OurHistory from '../components/Home/OurHistory/OurHistory';
import Reseller from '../components/Home/Reseller/Reseller';
import Texchnologies from '../components/Home/Texchnologies/Texchnologies';
import TopProducts from '../components/Home/TopProducts/TopProducts';
import WhatYouGet from '../components/Home/WhatYouGet/WhatYouGet';
import Footer from '../components/Shared/Footer/Footer';
import Navbar from '../components/Shared/Navbar/Navbar';
import styles from "../styles/projectWrapper.module.css";

export default function Home() {
  return (
    <div>
     <Head>
        <title>WebDev: Development Experts</title>
        <meta name="description" content="WebDev" />
        <link rel="icon" href="WebDev Favicon.svg" />
     </Head>
     <div className={styles.projectWrapper}>
     <Navbar />
     <HeroSec />
     </div>
     <OurHistory />
     <Texchnologies />
     <NewsAndEvents />
     <OnlineBusiness />
     <TopProducts />     
     <WhatYouGet />
     <Reseller />
     <FrequentlyAsked />
     <GetInTouch />
     <Footer />
     {/* <TrustedLogo /> */}
    </div>
  )
}