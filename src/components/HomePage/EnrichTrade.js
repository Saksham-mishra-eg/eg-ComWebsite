import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./EnrichTrade.module.css";
import { Col, Container, Row } from "react-bootstrap";


function EnrichTrade() {

    return (
        <div className={styles.EnrichSection}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.TextEnrichtrd}>
                            <h2>Leverage Power of Trade Data</h2>
                            {/* <p>We’re your companions for the long run!</p> */}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <div className={styles.EnrchDtaBox}>
                            <div className={styles.BoxesOFDta}>
                                <img src="visually-appealing.png" alt="Enrich Trade Data" />
                                <h3>Visually-Appealing Data </h3>
                                <p>Sneak into International market dynamics and get complete visibility across imports and exports within the global supply chain network.All the complex trail of data is showcased in easy-to-understand format.</p>
                                <a href="#learnmoee">Learn more ?</a>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={styles.EnrchDtaBox}>
                            <div className={styles.BoxesOFDta}>
                                <img src="competition-analysis.png" alt="Enrich Trade Data" />
                                <h3>Competition Analysis </h3>
                                <p>Keep a close look at your competitor’s activities. Monitor their total shipments made, traded products, HS Code, quantity, price, and much more.</p>
                                <a href="#learnmoee">Learn more ?</a>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={styles.EnrchDtaBox}>
                            <div className={styles.BoxesOFDta}>
                                <img src="future-driven.png" alt="Enrich Trade Data" />
                                <h3>Future-Driven Analytics </h3>
                                <p>Dive into global data analytics at your fingertips. Access to trade analysis utilized by top industry leaders.  </p>
                                <a href="#learnmoee">Learn more ?</a>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={styles.EnrchDtaBox}>
                            <div className={styles.BoxesOFDta}>
                                <img src="trend-savvy.png" alt="Enrich Trade Data" />
                                <h3>Be a Trend-Savvy </h3>
                                <p>Stay tuned with the market’s latest trends. Get enriched data insights that will help you get a better idea of what’s happening in almost every industry. </p>
                                <a href="#learnmoee">Learn more ?</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}


export default EnrichTrade;