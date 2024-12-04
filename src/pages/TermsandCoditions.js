
import Header from "../components/HomePage/Header";
import Footer from "../components/HomePage/Footer";
import FooterPrivacy from "../components/HomePage/FooterPrivacy";
import TermsandCoditionsData from "../components/TermsandCoditions/TermsandCoditionsData";


const TermsandCoditions = () => {
    return (
        <div className="TermsandCoditionsPage">
            <Header />
            <TermsandCoditionsData />
            <Footer />
            <FooterPrivacy />
        </div>
    );
};

export default TermsandCoditions;
