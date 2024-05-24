
import styles from "./Pricing.module.css";
import Header from "../components/HomePage/Header";

import Footer from "../components/HomePage/Footer";
import FooterPrivacy from "../components/HomePage/FooterPrivacy";
import Aboutus from "../components/AboutUS/Aboutus";
import AboutStats from "../components/AboutUS/AboutStats";
import VisionMission from "../components/AboutUS/VisionMission";
import AboutFeatures from "../components/AboutUS/AboutFeatures";
import FocusOn from "../components/AboutUS/FocusOn";
import Becomebetter from "../components/AboutUS/Becomebetter";
import OurJourney from "../components/AboutUS/OurJourney";
import FounderDirecter from "../components/AboutUS/FounderDirecter";
import GetGlobalTrade from "../components/AboutUS/GetGlobalTrade";



const DataFlow = () => {
  return (
    <div className={styles.DataFlowPage}>
      <Header />
      <Aboutus />
      <AboutStats />
      <VisionMission />
      <AboutFeatures />
      <FocusOn />
      <Becomebetter />
      <br /><br /><br /><br /><br />
      <OurJourney />
      <FounderDirecter />
      <GetGlobalTrade />
      {/* <HorizontalTimelines /> */}

      <Footer />
      <FooterPrivacy />
    </div>
  );
};

export default DataFlow;
