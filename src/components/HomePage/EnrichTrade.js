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
                        <h2>Enrich Trade Data from Export Genius</h2>
                        <p>Export Genius is Not Just Your Import-Export Data Partner But a Companion for Long-Run</p>
                    </div>
                   </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <div className={styles.EnrchDtaBox}>
                            <div className={styles.BoxesOFDta}>
                                <img src="visualization.png" alt="Enrich Trade Data" />
                                <h3>Visually-Appealing Data </h3>
                                <p>Ditch the long trial of complex trade data. Export Genius offers easy-to-explore and visually attractive import/export data</p>
                                <a href="#">Learn more ?</a>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={styles.EnrchDtaBox}>
                            <div className={styles.BoxesOFDta}>
                                <img src="comptitors.png" alt="Enrich Trade Data" />
                                <h3>Visually-Appealing Data </h3>
                                <p>Ditch the long trial of complex trade data. Export Genius offers easy-to-explore and visually attractive import/export data</p>
                                <a href="#">Learn more ?</a>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={styles.EnrchDtaBox}>
                            <div className={styles.BoxesOFDta}>
                                <img src="futures.png" alt="Enrich Trade Data" />
                                <h3>Visually-Appealing Data </h3>
                                <p>Ditch the long trial of complex trade data. Export Genius offers easy-to-explore and visually attractive import/export data</p>
                                <a href="#">Learn more ?</a>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={styles.EnrchDtaBox}>
                            <div className={styles.BoxesOFDta}>
                                <img src="trend.png" alt="Enrich Trade Data" />
                                <h3>Visually-Appealing Data </h3>
                                <p>Ditch the long trial of complex trade data. Export Genius offers easy-to-explore and visually attractive import/export data</p>
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