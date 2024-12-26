
import styles from "./Pricing.module.css";
import Header from "../components/HomePage/Header";

import Footer from "../components/HomePage/Footer";
import FooterPrivacy from "../components/HomePage/FooterPrivacy";
import ExportSolutions from "../components/HowWeHelpPage/ExportSolutions";
import Clients from "../components/HomePage/Clients";
// import AllSolutionsList from "../components/HowWeHelpPage/AllSolutionsList";
import GlobalTradeStats from "../components/HowWeHelpPage/GlobalTradeStats";
// import BusinessEdge from "../components/HowWeHelpPage/BusinessEdge";
import WhatmakesDiff from "../components/HowWeHelpPage/WhatmakesDiff";
import GetGlobalTrade from "../components/HowWeHelpPage/GetGlobalTrade";
import SideImage from "../components/HowWeHelpPage/SlideImage"
import FloatingButton from "../components/EmailForm/FloatingContactButton";



const DataFlow = () => {
  return (
    <div className={styles.DataFlowPage}>
      <Header />
      <ExportSolutions />
      <Clients />
      {/* <AllSolutionsList /> */}
      <SideImage />
      <GlobalTradeStats />
      {/* <BusinessEdge /> */}
      <WhatmakesDiff />
      <GetGlobalTrade />

      <Footer />
      <FooterPrivacy />
      <FloatingButton />
    </div>
  );
};

export default DataFlow;
