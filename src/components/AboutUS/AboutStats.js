import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./AboutStats.module.css";
import { Col, Container, Row } from "react-bootstrap";


function AboutStats() {

    return (
        <div className={styles.AboutStatsBg}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.StatsOFabout}>
                            <div className={styles.lsitofststs}>
                                <div className={styles.yerinDustb}>
                                    <h2>10+</h2>
                                    <p>Years Industry
                                        Experience</p>
                                </div>
                            </div>
                            <div className={styles.lsitofststs}>
                                <div className={styles.yerinDustb}>
                                    <h2>190+</h2>
                                    <p>Countries Import
                                        Export Trade Data</p>
                                </div>
                            </div>
                            <div className={styles.lsitofststs}>
                                <div className={styles.yerinDustb}>
                                    <h2>55+</h2>
                                    <p>Countries
                                        Exclusive Data</p>
                                </div>
                            </div>
                            <div className={styles.lsitofststs}>
                                <div className={styles.yerinDustb}>
                                    <h2>30+</h2>
                                    <p>Countries Detailed
                                        Custom Data</p>
                                </div>
                            </div>
                            <div className={styles.lsitofststs}>
                                <div className={styles.yerinDustb}>
                                    <h2>10M+</h2>
                                    <p>Company’s and
                                        Employee’s Contact </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col lg={12}>
                        <div className={styles.bgCircle}>
                            <Row>
                                <Col md={6}>
                                    <div className={styles.abouEgs}>
                                        <img src="officeBg.png" alt="Building" />
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className={styles.abouEgGns}>
                                        <h2>What is Export Genius?</h2>
                                        <p>Export Genius is an intelligence platform, providing industry-standard import-export data online through powerful AI-based technologies and dynamic data visualizations. For over 10 years, we have served over 20,000 clients with quality global trade data and in-depth market research reports.
                                        </p>
                                        <p>Our mission is to provide the widest data coverage of international trade developments with meaningful insights that help companies to make more informed decisions and put moon-shot goals within reach.</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>

    );
}

export default AboutStats;