import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Footer.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";


function Footer() {

    return (
        <div className={styles.FooterOnline}>
            <Container>
                <Row>
                    <Col md={3}>
                        <div className={styles.GeFooterLg}>
                            <img src="footer-logo.png" alt="Footer Logo" />
                            <div className={styles.SocilIncs}>
                                <ul className={styles.SociLisstss}>
                                    <li>
                                        <a href="www.facebook.com">
                                            <img src="fb.png" alt="Facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="www.linkedin.com">
                                            <img src="ld.png" alt="Linkedin" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="www.youtube.com">
                                            <img src="yt.png" alt="Youtube" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="www.twitter.com">
                                            <img src="tw.png" alt="Twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="web.skype.com">
                                            <img src="sk.png" alt="Skype" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <p>Copyright © 2024 Export Genius. All rights reserved</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={styles.FooterCompny}>
                            <div className={styles.HedComFtr}>Product</div>
                            <ul className={styles.ForListTags}>
                                <li><a href="/platform">Platform</a></li>
                                <li><a href="/api">API</a></li>
                                <li><a href="data-license">Data License</a></li>
                                <li><a href="/faq">FAQs</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={styles.FooterCompny}>
                            <div className={styles.HedComFtr}>COMPANY</div>
                            <ul className={styles.ForListTags}>
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="/career-page">Careers</a></li>
                                <li><a href="/client-testimonials">Clients & Testimonials</a></li>
                                <li><a href="/contact-us">Contact Us</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={styles.FooterCompny}>
                            <div className={styles.HedComFtr}>Other RESOURCES</div>
                            <ul className={styles.ForListTags}>
                                <li><a href="/data">Data Availability</a></li>
                                <li><a href="/pricing">Pricing</a></li>
                                <li><a href="/how-we-help">How We Help</a></li>
                                <li><a href="https://blog.exportgenius.com/">Blog</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;