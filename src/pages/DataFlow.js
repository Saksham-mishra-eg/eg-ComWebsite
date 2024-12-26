
import styles from "./Pricing.module.css";
import Header from "../components/HomePage/Header";

import Footer from "../components/HomePage/Footer";
import FooterPrivacy from "../components/HomePage/FooterPrivacy";
import GetGlobalTrade from "../components/DataFlow/GetGlobalTrade";
import DiscoverGlobaldata from "../components/DataFlow/DiscoverGlobaldata";
import ExclusiveData from "../components/DataFlow/ExclusiveData";
import GlobalTradeStats from "../components/DataFlow/GlobalTradeStats";
import TableDataCountry from "../components/DataFlow/TableDataCountry";
import FloatingButton from "../components/EmailForm/FloatingContactButton";

const DataFlow = () => {
  return (
    <div className={styles.DataFlowPage}>
      <Header />
      <DiscoverGlobaldata />
      <GlobalTradeStats />
      <ExclusiveData />
      <TableDataCountry />
      <GetGlobalTrade />
    
      <Footer />
      <FooterPrivacy />
      <FloatingButton />
    </div>
  );
};

export default DataFlow;
