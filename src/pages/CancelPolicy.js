import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";
import FooterPrivacy from "../components/HomePage/FooterPrivacy";
import CancelpolicyData from "../components/CancelPolicy/CancelpolicyData";

const CancelPolicy = () => {
    return (
        <div className="CancelPolicyPage">
            <Header />
            <CancelpolicyData />
            <Footer />
            <FooterPrivacy />
        </div>
    );
};

export default CancelPolicy;
