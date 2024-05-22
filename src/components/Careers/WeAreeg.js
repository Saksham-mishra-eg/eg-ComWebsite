import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./WeAreeg.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";

function WeAreeg() {

    return (
        <div className={styles.WeAreegOBg}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.WEEhading}>
                            <h3>We Are Export Genius</h3>
                            <p>Join our journey to build a global company and share rewarding experiences.</p>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className={styles.WEEhadingVideo}>
                            <img src="eg-video.png" alt="eg video" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default WeAreeg;