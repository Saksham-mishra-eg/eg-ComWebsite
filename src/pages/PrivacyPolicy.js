import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";
import FooterPrivacy from "../components/HomePage/FooterPrivacy";
import PrivacyPolicyData from "../components/PrivacyPolicy/PrivacyPolicyData";
import FloatingButton from "../components/EmailForm/FloatingContactButton";

const PrivacyPolicy = () => {
    return (
        <div className="PrivacyPolicyPage">
            <Header />
            <PrivacyPolicyData />
            <Footer />
            <FooterPrivacy />
            <FloatingButton />
        </div>
    );
};

export default PrivacyPolicy;
