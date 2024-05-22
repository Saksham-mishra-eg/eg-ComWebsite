import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./OurCulture.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";

function OurCulture() {

    return (
        <div className={styles.OurCulturebG}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.Seekpeek}>
                            <h2>Sneak Peek to Our Culture</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div className={styles.OurCultureImg}>
                            <img src="medal.png" alt="medal" />
                            <h4>Best-in-class
                                Remuneration</h4>
                            <p>Explore detailed Customs Data, Statistical Data, </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.OurCultureImg}>
                            <img src="highfive.png" alt="highfive" />
                            <h4>Friendly
                                Corporate Environment</h4>
                            <p>Explore detailed Customs Data, Statistical Data, </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.OurCultureImg}>
                            <img src="group.png" alt="group" />
                            <h4>Team- Warming Sessions</h4>
                            <p>Explore detailed Customs Data, Statistical Data, </p>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className={styles.OurCultureImg}>
                            <img src="portfolio.png" alt="portfolio" />
                            <h4>On-The-Job
                                Career Advancement</h4>
                            <p>Explore detailed Customs Data, Statistical Data, </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.OurCultureImg}>
                            <img src="careerpath.png" alt="careerpath" />
                            <h4>Career
                                Growtht</h4>
                            <p>Explore detailed Customs Data, Statistical Data, </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.OurCultureImg}>
                            <img src="sunumbrella.png" alt="sunumbrella" />
                            <h4>Flexible
                                Leave Policy</h4>
                            <p>Explore detailed Customs Data, Statistical Data, </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default OurCulture;