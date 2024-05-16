import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./FooterPrivacy.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";


function FooterPrivacy() {
    const map = 'asia.png'

    return (

            <div className={styles.CopyrighFrt}>
                <Container fluid>
                    <Row>
                        <Col>
                        <div className={styles.CopyrighForLinst}>
                            <a href="#">TERMS & CONDITIONS</a> | <a href="#">Cancelation policy</a> | <a href="#">Refund policy</a> | <a href="#">Privacy policy</a> 
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
       

    );
}

export default FooterPrivacy;