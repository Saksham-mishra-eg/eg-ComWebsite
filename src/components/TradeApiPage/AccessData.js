import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./AccessData.module.css";
import { Col, Container, Button, Row } from "react-bootstrap";


function AccessData() {

    return (
        <div className={styles.AccessDataPage}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className={styles.ApiSceData}>
                            <h2>Access data anywhere, anytime </h2>
                            <p>Get the freshest data at any time and keep it automatically updated so you don’t miss any opportunity.</p>
                            <Button className={styles.CnteExpertbtn}>Contact Our Expert</Button>{' '}
                        </div>

                    </Col>
                    <Col md={6}>
                        <div className={styles.ApiSceDatImfa}>
                            <img src="/api/access-data.png" alt="api" />
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AccessData;