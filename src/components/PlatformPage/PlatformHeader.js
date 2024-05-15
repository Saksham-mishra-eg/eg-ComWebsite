import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./PlatformHeader.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { SlArrowRight } from "react-icons/sl";

function PlatformHeader() {

    return (
        <div className={styles.PlatformHeaderine}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className={styles.pltrtradeText}>
                            <h1>World's Most Intelligent Source for Global Trade Data</h1>
                            <p>At the helm of market research, we lead the way in deciphering industry landscapes, consumer preferences, and emerging trends. Our expertise drives informed decision-making and fuels innovation</p>
                            <br />
                           
                            <div className={styles.captDemobd}>
                            <a href="#freetrails" className={styles.TrlBtn} > Book Demo <SlArrowRight /> </a>
                                <a href="#insier" className={styles.getainsider}>Get an Insider View to OG EG Dashboard! <SlArrowRight /> </a>
                            </div>
                            <div className={styles.captImg}>
                                <img src="capterra.png" alt="capterra" />
                                <img src="g2.png" alt="g2" />
                                <img src="iso.png" alt="iso" />
                            </div>

                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.tradeBg}>
                            <img src="platformbg.png" alt="Platform banner" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PlatformHeader;