
import styles from "./Pricing.module.css";
import Header from "../components/HomePage/Header";

import Footer from "../components/HomePage/Footer";
import FooterPrivacy from "../components/HomePage/FooterPrivacy";
import TradeAnalysis from "../components/DataLicense/TradeAnalysis";
import WhatGlobaldata from "../components/DataLicense/WhatGlobaldata";
import BusinessNeeds from "../components/DataLicense/BusinessNeeds";
import Clients from "../components/HomePage/Clients";
import CountriCoverd from "../components/DataLicense/CountriCoverd";
import GetGlobalTrade from "../components/DataLicense/GetGlobalTrade";
import FloatingButton from "../components/EmailForm/FloatingContactButton";

const DataLicense = () => {
  return (
    <div className={styles.DataLicensePage}>
      <Header />
      <TradeAnalysis />
      <WhatGlobaldata />
      <BusinessNeeds />
      <Clients />
      <CountriCoverd />
      <GetGlobalTrade />
      <Footer />
      <FooterPrivacy />
      <FloatingButton />
    </div>
  );
};

export default DataLicense;
