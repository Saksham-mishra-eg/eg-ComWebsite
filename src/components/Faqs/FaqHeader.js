import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./FaqHeader.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";


function FaqHeader() {

    return (
        <div className={styles.FaqHeaderBg}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.FaqHeaderText}>
                            <img src="helpfaq.png" alt="faq" />
                            <h1>Frequently Asked Questions</h1>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>

    );
}

export default FaqHeader;