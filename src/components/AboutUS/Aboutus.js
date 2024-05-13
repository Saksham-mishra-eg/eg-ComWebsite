import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Aboutus.module.css";
import { Col, Container, Row } from "react-bootstrap";


function Aboutus() {

    return (
        <div className={styles.AboutusBg}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.aboutHeader}>
                            <h4>About Us</h4>
                            <h1>Simplifying Data For You</h1>
                            <p>
                                At the helm of market research, we lead the way in deciphering industry landscapes, consumer preferences, and emerging trends.
                            </p>
                            <div className={styles.imgeCline}>
                                <img src="capterra.png" alt="capterra" />
                                <img src="g2.png" alt="g2" />
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>

    );
}

export default Aboutus;