import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./GlobalTradeStats.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";


function GlobalTradeStats() {

    return (
        <div className={styles.GlobalTradeStatsBg}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.GleoHeainfCover}>
                            <h2 className={styles.GlobalTradeStatsTitle}>Global Trade Data Coverage</h2>
                            <p>Access Import and Export Data of Global Countries including, 55+ Countries Detailed Customs Data and 30+ Countries Exclusive Data.</p>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className={styles.EnrichDataGlobaltr}>
                            <ul className={styles.lsitofTradedata}>
                                <li>
                                    <div className={styles.listofTrade}>
                                        <img src="trade-data.png" alt="countries" />
                                    </div>
                                    <div className={styles.listofTrade}>
                                        <h3>195+</h3>
                                        <h4>Countries</h4>
                                        <p>Import Export Trade Data</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listofTrade}>
                                        <img src="exclusive-data.png" alt="exclusive" />
                                    </div>
                                    <div className={styles.listofTrade}>
                                        <h3>55+</h3>
                                        <h4>Countries</h4>
                                        <p>Exclusive Data</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listofTrade}>
                                        <img src="countries-data.png" alt="detailed" />
                                    </div>
                                    <div className={styles.listofTrade}>
                                        <h3>30+</h3>
                                        <h4>Countries</h4>
                                        <p>Detailed Custom Data</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listofTrade}>
                                        <img src="company-contacts.png" alt="company" />
                                    </div>
                                    <div className={styles.listofTrade}>
                                        <h3>10M+</h3>
                                        <h4>Company’s</h4>
                                        <p>and Employee’s Contact</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default GlobalTradeStats;