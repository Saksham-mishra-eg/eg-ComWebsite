
import styles from "./Pricing.module.css";
import Header from "../components/HomePage/Header";

import Footer from "../components/HomePage/Footer";
import FooterPrivacy from "../components/HomePage/FooterPrivacy";
import FaqHeader from "../components/Faqs/FaqHeader";
import FaQuestions from "../components/Faqs/FaQuestions";
import FaqPlanPricing from "../components/Faqs/FaqPlanPricing";
import GetGlobalTrade from "../components/Faqs/GetGlobalTrade";


const DataFlow = () => {
  return (
    <div className={styles.DataFlowPage}>
      <Header />
      <FaqHeader />
      <FaQuestions />
      <FaqPlanPricing />
      <GetGlobalTrade />

      <Footer />
      <FooterPrivacy />
    </div>
  );
};

export default DataFlow;
