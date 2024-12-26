import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";
import FooterPrivacy from "../components/HomePage/FooterPrivacy";
import CancelpolicyData from "../components/CancelPolicy/CancelpolicyData";
import FloatingContactButton from "../components/EmailForm/FloatingContactButton";

const CancelPolicy = () => {
    return (
        <div className="CancelPolicyPage">
            <Header />
            <CancelpolicyData />
            <Footer />
            <FooterPrivacy />
            <FloatingContactButton />
        </div>
    );
};

export default CancelPolicy;
