
import styles from "./Pricing.module.css";
import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";
import FooterPrivacy from "../components/HomePage/FooterPrivacy";
import PlatformHeader from "../components/PlatformPage/PlatformHeader";
import ManageEndtoEnd from "../components/PlatformPage/ManageEndtoEnd";
import Datatypebg from "../components/PlatformPage/DatatypeBg";
import DataTypesManage from "../components/PlatformPage/DataTypesManage";
// import SearchList from "../components/PlatformPage/SearchList";
import GetGlobalTrade from "../components/PlatformPage/GetGlobalTrade";
import FloatingButton from "../components/EmailForm/FloatingContactButton";


const Pricing = () => {
  return (
    <div className={styles.PlatformPage}>
      <Header />
      <PlatformHeader />
      <ManageEndtoEnd />
      <Datatypebg />
      <DataTypesManage />
      {/* <SearchList /> */}
      {/* <br />
      <br /> */}
      {/* <br /> */}
      <GetGlobalTrade />
      <Footer />
      <FooterPrivacy />
      <FloatingButton />
    </div>
  );
};

export default Pricing;
