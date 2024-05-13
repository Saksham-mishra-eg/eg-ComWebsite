
import styles from "./Pricing.module.css";
import Header from "../components/HomePage/Header";

import Footer from "../components/HomePage/Footer";
import FooterPrivacy from "../components/HomePage/FooterPrivacy";

import DiscoverGlobaldata from "../components/DataFlow/DiscoverGlobaldata";
import ExclusiveData from "../components/DataFlow/ExclusiveData";
import GlobalTradeStats from "../components/DataFlow/GlobalTradeStats";

const DataFlow = () => {
  return (
    <div className={styles.DataFlowPage}>
      <Header />
      <DiscoverGlobaldata />
      <GlobalTradeStats />
      <ExclusiveData />

      <Footer />
      <FooterPrivacy />
    </div>
  );
};

export default DataFlow;
