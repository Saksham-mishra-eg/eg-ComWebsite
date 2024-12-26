
import styles from "./Pricing.module.css";
import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";
import FooterPrivacy from "../components/HomePage/FooterPrivacy";
import ApiHeaderSectionPage from "../components/TradeApiPage/ApiHeaderSection";
import LeverageApi from "../components/TradeApiPage/LeverageApi";
import AccessData from "../components/TradeApiPage/AccessData";
import GlobalTradeStats from "../components/TradeApiPage/GlobalTradeStats";
import HereToHelp from "../components/TradeApiPage/HereToHelp";
import GetGlobalTrade from "../components/TradeApiPage/GetGlobalTrade";
import FloatingButton from "../components/EmailForm/FloatingContactButton";

const TradeApi = () => {
    return (
        <div className={styles.PricingPage}>
            <Header />
            <ApiHeaderSectionPage />
            <LeverageApi />
            <AccessData />
            <GlobalTradeStats />
            <HereToHelp />
            <GetGlobalTrade />
            <Footer />
            <FooterPrivacy />
            <FloatingButton />
        </div>
    );
}

export default TradeApi;
