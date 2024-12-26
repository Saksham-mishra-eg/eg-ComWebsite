import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";
import FooterPrivacy from "../components/HomePage/FooterPrivacy";
import RefundPolicyData from "../components/RefundPolicy/RefundPolicyData";
import FloatingButton from "../components/EmailForm/FloatingContactButton";

const RefundPolicy = () => {
    return (
        <div className="RefundPolicyPage">
            <Header />
            <RefundPolicyData />
            <Footer />
            <FooterPrivacy />
            <FloatingButton />
        </div>
    );
};

export default RefundPolicy;
