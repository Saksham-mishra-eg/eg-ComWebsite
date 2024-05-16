import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TradeIntelligence.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Form, Row } from "react-bootstrap";

function TradeIntelligence() {

    return (
        <div className={styles.onlinePlatform}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className={styles.tradeText}>
                            <h1>Trade Intelligence Online Platform</h1>
                            <h3>ACTIONABLE INSIGHTS & INFORMATION</h3>
                            <p>Access global trade data online in an AI-powered market intelligence platform and grow your business.</p>
                            <Row>

                              <Col sm="7">
                              <Form.Control className={styles.frokDemo} column sm="2" type="text" placeholder="Enter Your Email" />
                              </Col>
                                <Col sm="4">
                                    <a href="#" className={styles.TrlBtn} > Free Trial</a>
                                </Col>

                            </Row>
                            <div className={styles.captImg}>
                                <img src="capterra.png" />
                                <img src="g2.png" />
                                <img src="iso.png" />
                            </div>

                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.tradeBg}>
                            <img src="tradeBg.png" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TradeIntelligence;