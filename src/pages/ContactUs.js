
import styles from "./Pricing.module.css";
import Header from "../components/HomePage/Header";

import Footer from "../components/HomePage/Footer";
import FooterPrivacy from "../components/HomePage/FooterPrivacy";
import ContactIframe from "../components/ContactUs/ContactIframe";
import CustomerSupport from "../components/ContactUs/CustomerSupport";
import TrustedClient from "../components/ContactUs/TrustedClient";
import GetGlobalTrade from "../components/HomePage/GetGlobalTrade"


const ContactUs = () => {
  return (
    <div className={styles.ContactUsPage}>
      <Header />
      <ContactIframe />
      <CustomerSupport />
      <TrustedClient />
      <GetGlobalTrade />

      <Footer />
      <FooterPrivacy />
    </div>
  );
};

export default ContactUs;
