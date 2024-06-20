import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Footer.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";


function Footer() {
    const map = 'asia.png'

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
                                        <a href="#">
                                            <img src="fb.png" alt="Facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="ld.png" alt="Linkedin" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="yt.png" alt="Youtube" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="tw.png" alt="Twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
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
                            <div className={styles.HedComFtr}>COMPANY</div>
                            <ul className={styles.ForListTags}>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">How we help</a></li>
                                <li><a href="#">Product and services</a></li>
                                <li><a href="#">Data availability</a></li>
                                <li><a href="#">Why choose us</a></li>
                                <li><a href="#">Plan and pricing</a></li>
                                <li><a href="#">Career - we’re hiring!</a></li>
                                <li><a href="#">Our clients</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Contact us</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={styles.FooterCompny}>
                            <div className={styles.HedComFtr}>OUR DATA</div>
                            <ul className={styles.ForListTags}>
                                <li><a href="#">Data availability</a></li>
                                <li><a href="#">Country covered</a></li>
                                <li><a href="#">Search live data</a></li>
                                <li><a href="#">Download data samples</a></li>
                                <li><a href="#">Asia trade data</a></li>
                                <li><a href="#">South America trade data</a></li>
                                <li><a href="#">North America trade data</a></li>
                                <li><a href="#">Africa trade data</a></li>
                                <li><a href="#">Europe trade data</a></li>
                                <li><a href="#">Oceania trade data</a></li>
                            </ul>

                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={styles.FooterCompny}>
                            <div className={styles.HedComFtr}>MORE RESOURCES</div>
                            <ul className={styles.ForListTags}>
                                <li><a href="#">Partner program</a></li>
                                <li><a href="#">Global product wise data</a></li>
                                <li><a href="#">Search Importers globally</a></li>
                                <li><a href="#">Search exporters globally</a></li>
                                <li><a href="#">Search market trends</a></li>
                                <li><a href="#">List of companies</a></li>
                                <li><a href="#">Global trade news</a></li>
                                <li><a href="#">Notification</a></li>
                                <li><a href="#">Trade tools</a></li>
                                <li><a href="#">Find HS code</a></li>
                            </ul>

                        </div>
                    </Col>
                </Row>


            </Container>
            
        </div>

    );
}

export default Footer;