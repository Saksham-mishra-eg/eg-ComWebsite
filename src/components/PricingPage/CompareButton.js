import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CompareButton.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";

function CompareButton() {

    return (
        <div className={styles.CompareButtonBg}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.notSure}>
                            <p>Not Sure Which Plan To Choose?</p>
                            <button className={styles.CompareNtn} >COMPARE PLANS</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CompareButton;