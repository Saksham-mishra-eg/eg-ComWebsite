
import styles from "./Pricing.module.css";
import Header from "../components/HomePage/Header";

import Footer from "../components/HomePage/Footer";
import FooterPrivacy from "../components/HomePage/FooterPrivacy";
import TradeAnalysis from "../components/DataLicense/TradeAnalysis";
import WhatGlobaldata from "../components/DataLicense/WhatGlobaldata";


const DataFlow = () => {
  return (
    <div className={styles.DataFlowPage}>
      <Header />
      <TradeAnalysis />
      <WhatGlobaldata />
     
      <Footer />
      <FooterPrivacy />
    </div>
  );
};

export default DataFlow;
