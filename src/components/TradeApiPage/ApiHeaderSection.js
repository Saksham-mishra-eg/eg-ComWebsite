import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ApiHeaderSection.module.css";
import { Col, Container, Button, Row } from "react-bootstrap";


function ApiHeaderSection() {

    return (
        <div className={styles.ApiHeaderSectionPage}>
            <Container>
                <Row>
                    <Col md={5}>
                        <div className={styles.ApiGeGlobl}>
                            <img src="/api/api-image.png" alt="api" />
                        </div>

                    </Col>
                    <Col md={7}>
                        <div className={styles.ApiGeGloblHead}>
                            <div className={styles.genSPi}>Export Genius APIs –</div>
                            <h1>Decoding Global Trade with Data </h1>
                            <p>Integrate the highest quality and detailed import export trade data directly into any database, any system, and any application seamlessly.</p>
                            <Button className={styles.scheDemoBtn} variant="success">Contact Our Expert</Button>{' '}
                            <Button className={styles.LogonDemoBtn} variant="primary">Book A Meeting</Button>{' '}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ApiHeaderSection;