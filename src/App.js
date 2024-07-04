import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import DataFlow from "./pages/DataFlow";
import AboutUs from "./pages/AboutUs"
import HowWeHelp from "./pages/HowWeHelpPage"
import Faq from "./pages/Faq";
import Platform from "./pages/Platform";
import Testimonial from "./pages/Testimonial";
import Career from "./pages/Career";
import ContactUs from "./pages/ContactUs";
import DataLicense from "./pages/DataLicense";
import TradeApi from "./pages/TradeApi";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/about-us":
        title = "About the Company";
        metaDescription = "Export Genius is global leader in trade intelligence and committed to deliver quality import export trade data with complete shipment records and market insights.";
        break;
      case "/career-page":
        title = "Careers - Join Export Genius";
        metaDescription = "See all the updates on available job openings at Export Genius and become a working member of trade data intelligence platform.";
        break;
      case "/how-we-help":
        title = "Trade Data for Every Global Business";
        metaDescription = "Export Genius provides import export data solutions to global businesses and every industry with complete shipment records and essential market insights. ";
        break;
      case "/data":
        title = "Export Genius - Global Import Export Trade Data of 190+ Countries";
        metaDescription = "Export Genius provides import export trade data of global countries with importers and exporters, commodity information, and complete shipment details.";
        break;
      case "/faq":
        title = "Export Genius Platform FAQs";
        metaDescription = "We are a leading global trade data provider, offering full coverage of import and export business. Learn more about us from our FAQs and explore trade intelligence.";
        break;
      case "/data-license":
        title = "Export Genius Data Licenses for Global Trade Data and Analysis";
        metaDescription = "Access international trade data to gain supply chain insights and enhance market potential with Export Genius data licenses.";
        break;
      case "/trade-api":
        title = "Export Genius Trade Intelligence API ";
        metaDescription = "Export Genius Trade Intelligence API helps you access global trade data. With multiple APIs, you can instantly explore trade intelligence and supply chain analytics. ";
        break;
      case "/pricing":
        title = "Plans and Pricing - Powerful Insights at Your Fingertips";
        metaDescription = "Subscribe to Export Genius global trade intelligence platform and access industry-standard import export data with plans that suit your business.";
        break;
      case "/client-testimonials":
        title = "Export Genius Clients and Testimonials";
        metaDescription = "Export Genius has served over 20,000 clients worldwide and trust they are showing is incredible. See what our esteemed clients have to say about our platform and services.";
        break;
      case "/contact-us":
        title = "Export Genius Contact";
        metaDescription = "We aim to provide timely and best customer support. For any assistance, inquiries, technical support, or any other query, contact us on the given details.";
        break;
      case "/platform":
        title = "Export Genius Powerful Global Trade Database";
        metaDescription = "Export Genius provides essential data that powers your business with actual shipment records, company overviews, and contact information on global companies.  ";
        break;
      case "/home":
        title = "Export Genius - Global Trade Intelligence Platform";
        metaDescription = "Discover global buyers and suppliers, profitable markets, and competitive advantage, and empower your business with intelligence, compliance, and visibility.";
        break;
      default:
        title = "Export Genius - Global Trade Intelligence Platform";
        metaDescription = "Discover global buyers and suppliers, profitable markets, and competitive advantage, and empower your business with intelligence, compliance, and visibility.";
        break;
    }

    document.title = title;

    const metaDescriptionTag = document.querySelector(
      'head > meta[name="description"]'
    );
    if (metaDescriptionTag) {
      metaDescriptionTag.content = metaDescription;
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/home" exact element={<Home />} />
      <Route path="/pricing" exact element={<Pricing />} />
      <Route path="/data" exact element={<DataFlow />} />
      <Route path="/about-us" exact element={<AboutUs />} />
      <Route path="/how-we-help" exact element={<HowWeHelp />} />
      <Route path="/faq" exact element={<Faq />} />
      <Route path="/platform" exact element={<Platform />} />
      <Route path="/career-page" exact element={<Career />} />
      <Route path="/contact-us" exact element={<ContactUs />} />
      <Route path="/client-testimonials" exact element={<Testimonial />} />
      <Route path="/data-license" exact element={<DataLicense />} />
      <Route path="/trade-api" exact element={<TradeApi />} />

    </Routes>
  );
}

export default App;
