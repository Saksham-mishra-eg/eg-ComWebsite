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
                            <h1>Global Trade Insights That Gives You The Edge</h1>
                            <h3>ACTIONABLE INSIGHTS & INFORMATION</h3>
                            <p>Discover the world of import and export data by using our AI-Powered Intelligent Trade database.</p>
                            <Row>

                                <Col ms="12">
                                    <div className={styles.linanchdem}>
                                    <Form.Control className={styles.frokDemo} column sm="2" type="text" placeholder="Enter Your Email" />
                                        <a href="#" className={styles.TrlBtn} > Free Trial</a>
                                    </div>
                                </Col>
                                {/* <Col md="4">
                                   <div className={styles.linanchdem}>
                                   <a href="#" className={styles.TrlBtn} > Free Trial</a>
                                   </div>
                                </Col> */}

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