import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./FooterPrivacy.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";

function FooterPrivacy() {

    return (

        // <div className={styles.CopyrighFrt}>
        <div className={styles.CopyrighFrt}>
            <Container fluid>
                <Row>
                    <Col>
                        <div className={styles.CopyrighForLinst}>
                            <a href="/terms-and-conditions">TERMS & CONDITIONS</a> | <a href="/cancelation-policy">Cancelation policy</a> | <a href="/refund-policy">Refund policy</a> | <a href="/privacy-policy">Privacy policy</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>


    );
}

export default FooterPrivacy;