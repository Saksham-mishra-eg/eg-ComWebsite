
import styles from "./Pricing.module.css";
import Header from "../components/HomePage/Header";

import Footer from "../components/HomePage/Footer";
import FooterPrivacy from "../components/HomePage/FooterPrivacy";
import FaqHeader from "../components/Faqs/FaqHeader";
import FaQuestions from "../components/Faqs/FaQuestions";


const DataFlow = () => {
  return (
    <div className={styles.DataFlowPage}>
      <Header />
      <FaqHeader />
      <FaQuestions />

      <Footer />
      <FooterPrivacy />
    </div>
  );
};

export default DataFlow;
