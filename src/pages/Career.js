
import styles from "./Pricing.module.css";
import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";
import FooterPrivacy from "../components/HomePage/FooterPrivacy";
import CareerweMarch from "../components/Careers/CareerweMarch";
import WhyWork from "../components/Careers/WhyWork";
import OurCulture from "../components/Careers/OurCulture";
import WeAreeg from "../components/Careers/WeAreeg";
import CurrentOpening from "../components/Careers/CurrentOpening";
import Possitions from "../components/Careers/Possitions";
import GetGlobalTrade from "../components/Faqs/GetGlobalTrade";


const Career = () => {
  return (
    <div className={styles.CareerPage}>
      <Header />
      <CareerweMarch />
      <WhyWork />
      <OurCulture />
      <WeAreeg />
      <CurrentOpening />
      <Possitions />
      <GetGlobalTrade />

      <Footer />
      <FooterPrivacy />
    </div>
  );
};

export default Career;
