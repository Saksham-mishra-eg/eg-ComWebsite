
import styles from "./Pricing.module.css";
import Header from "../components/HomePage/Header";

import Footer from "../components/HomePage/Footer";
import FooterPrivacy from "../components/HomePage/FooterPrivacy";
import TestiClientImg from "../components/Testimonials/TestiClientImg";
import Clients from "../components/HomePage/Clients";
import CommentTestimonial from "../components/Testimonials/CommentTestimonial";
import GetGlobalTrade from "../components/Testimonials/GetGlobalTrade";
import FloatingButton from "../components/EmailForm/FloatingContactButton";



const Testimonial = () => {
  return (
    <div className={styles.TestimonialPage}>
      <Header />
      <TestiClientImg />
      <Clients />
      <CommentTestimonial />
      <GetGlobalTrade />
      <Footer />
      <FooterPrivacy />
      <FloatingButton />
    </div>
  );
};

export default Testimonial;
