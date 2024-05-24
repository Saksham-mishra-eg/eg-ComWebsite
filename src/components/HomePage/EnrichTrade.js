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
                            <p>We’re your companions for the long run!</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <div className={styles.EnrchDtaBox}>
                            <div className={styles.BoxesOFDta}>
                                <img src="visualization.png" alt="Enrich Trade Data" />
                                <h3>Visually-Appealing Data </h3>
                                <p>All the complex trail of data is showcased in easy-to-understand format. This is one amazing feature of EG’s OG Dashboard. Sneak into International market dynamics and get complete visibility across imports and exports within the global supply chain network. </p>
                                <a href="#">Learn more ?</a>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={styles.EnrchDtaBox}>
                            <div className={styles.BoxesOFDta}>
                                <img src="comptitors.png" alt="Enrich Trade Data" />
                                <h3>Competition Analysis </h3>
                                <p>Keep a close look at your competitor’s activities. Monitor their total shipments made, traded products, HS Code, quantity, price, and much more.</p>
                                <a href="#">Learn more ?</a>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={styles.EnrchDtaBox}>
                            <div className={styles.BoxesOFDta}>
                                <img src="futures.png" alt="Enrich Trade Data" />
                                <h3>Future-Driven Analytics </h3>
                                <p>Dive into global data analytics at your fingertips. Access to trade analysis utilized by top industry leaders.  </p>
                                <a href="#">Learn more ?</a>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={styles.EnrchDtaBox}>
                            <div className={styles.BoxesOFDta}>
                                <img src="trend.png" alt="Enrich Trade Data" />
                                <h3>Be a Trend-Savvy </h3>
                                <p>Stay tuned with the market’s latest trends. Get enriched data insights that will help you get a better idea of what’s happening in almost every industry. </p>
                                <a href="#">Learn more ?</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}


export default EnrichTrade;