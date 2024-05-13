
import styles from "./Pricing.module.css";
import Header from "../components/HomePage/Header";

import Footer from "../components/HomePage/Footer";
import FooterPrivacy from "../components/HomePage/FooterPrivacy";
import FaqHeader from "../components/Faqs/FaqHeader";


const DataFlow = () => {
  return (
    <div className={styles.DataFlowPage}>
      <Header />
      <FaqHeader />
      
      <Footer />
      <FooterPrivacy />
    </div>
  );
};

export default DataFlow;
