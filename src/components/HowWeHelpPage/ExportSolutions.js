import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ExportSolutions.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Form, Row } from "react-bootstrap";

function ExportSolutions() {

    return (
        <div className={styles.ExportSolutionsBG}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className={styles.tradeText}>
                            <h1>Export Genius Solutions</h1>
                            <p>Explore detailed Customs Data, Statistical Data, Mirror Data, Bill of Lading Data, Suez Canal Bill of Lading Data, </p>
                           <br />
                            <h3>ACTIONABLE INSIGHTS & INFORMATION</h3>
                            <Row>

                              <Col sm="7">
                              <Form.Control className={styles.frokDemo} column sm="2" type="text" placeholder="Enter Your Email" />
                              </Col>
                                <Col sm="4">
                                    <a href="#freetrails" className={styles.TrlBtn} > Free Trial</a>
                                </Col>

                            </Row>
                            <div className={styles.captImg}>
                                <img src="capterra.png" alt="capterra" />
                                <img src="g2.png" alt="g2" />
                                <img src="iso.png" alt="iso" />
                            </div>

                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.tradeBg}>
                            <img src="solutions.png" alt="Solutins banner" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ExportSolutions;