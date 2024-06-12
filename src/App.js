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
      case "/":
        // title = "Global Trade Data | Import Export Data | Detailed Customs Data";
        // metaDescription = "Export Genius is one of the top online import export data provider. Get global trade data online by country, HS code, importer-exporter and more shipment details.";
        break;
      case "/pricing":
        // title = "Plans and Pricing - World Largest Trade Intelligence Data by Export Genius";
        // metaDescription = "Plan and Pricing - Export Genius provides world largest trade intelligence data. Maximum number of data coverage help you to make worldwide business strategy by evaluating new buyers, suppliers, products and monitor competitors.";
        break;
      default:
        title = "Global Trade Data | Import Export Data | Detailed Customs Data";
        metaDescription = "Global Trade Data | Import Export Data | Detailed Customs Data";
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
      <Route path="/data-flow" exact element={<DataFlow />} />
      <Route path="/about-us" exact element={<AboutUs />} />
      <Route path="/how-we-help" exact element={<HowWeHelp />} />
      <Route path="/faq" exact element={<Faq />} />
      <Route path="/platform" exact element={<Platform />} />
      <Route path="/career-page" exact element={<Career />} />
      <Route path="/contact-us" exact element={<ContactUs />} />
      <Route path="/client-testimonials" exact element={<Testimonial />} />
    </Routes>
  );
}

export default App;
