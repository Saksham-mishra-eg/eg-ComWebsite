
import styles from "./Home.module.css";
import Header from "../components/HomePage/Header";
import TradeIntelligence from "../components/HomePage/TradeIntelligence";
// import SearchList from "../components/HomePage/SearchList";
import TradedataMap from "../components/HomePage/TradedataMap";
import Clients from "../components/HomePage/Clients";
import EnrichTrade from "../components/HomePage/EnrichTrade";
// import Schedulebox from "../components/HomePage/ScheduleBox";
import TradeOnlinePlatform from "../components/HomePage/TradeOnlinePlatform";
// import GetNews from "../components/HomePage/GetNews";
import GetGlobalTrade from "../components/HomePage/GetGlobalTrade";
import Footer from "../components/HomePage/Footer";
import FooterPrivacy from "../components/HomePage/FooterPrivacy";
import StatsScheduleDemo from "../components/HomePage/StatsScheduleDemo";

const Home = () => {
  return (
    <div className={styles.MainPage}>
      <Header />
      <TradeIntelligence />
      {/* <SearchList /> */}
      <TradedataMap />
      <Clients />
      <EnrichTrade />
      {/* <Schedulebox /> */}
      <StatsScheduleDemo />
      <TradeOnlinePlatform />
      {/* <GetNews /> */}
      <GetGlobalTrade />
      <Footer />
      <FooterPrivacy />
    </div>
  );
};

export default Home;
