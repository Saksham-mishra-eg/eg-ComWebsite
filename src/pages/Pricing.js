
import styles from "./Pricing.module.css";
import Header from "../components/HomePage/Header";

import Footer from "../components/HomePage/Footer";
import FooterPrivacy from "../components/HomePage/FooterPrivacy";
import PricingList from "../components/PricingPage/PricingList";
import CompareButton from "../components/PricingPage/CompareButton";
import DetailedPricing from "../components/PricingPage/DetailedPricing";
import CustomizedPlan from "../components/PricingPage/CustomizedPlan";
import NeedplanHelp from "../components/PricingPage/NeedplanHelp";
import Faqs from "../components/PricingPage/Faqs";
// import Testimonials from "../components/PricingPage/Testimonials";
import GetGlobalTrade from "../components/PricingPage/GetGlobalTrade";
import { PricingProvider } from '../components/PricingPage/PricingContext';

const Pricing = () => {
  return (
 
    <div className={styles.PricingPage}>
      <PricingProvider>
      <Header />
      <PricingList />
      <CompareButton />
      <DetailedPricing />
      <CustomizedPlan />
      <NeedplanHelp />
      <Faqs />
      {/* <Testimonials /> */}
      <GetGlobalTrade />
      <Footer />
      <FooterPrivacy />
      </PricingProvider>
    </div>
   
  );
};

export default Pricing;
