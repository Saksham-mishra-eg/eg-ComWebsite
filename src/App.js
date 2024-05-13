import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import DataFlow from "./pages/DataFlow";
import AboutUs from "./pages/AboutUs"
import HowWeHelp from "./pages/HowWeHelpPage"
import Faq from "./pages/Faq";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const pathname = location.pathname;

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
      <Route path="/pricing" exact element={<Pricing />} />
      <Route path="/data-flow" exact element={<DataFlow />} />
      <Route path="/about-us" exact element={<AboutUs />} />
      <Route path="/how-we-help" exact element={<HowWeHelp />} />
      <Route path="/faq" exact element={ <Faq /> } />
    </Routes>
  );
}

export default App;
