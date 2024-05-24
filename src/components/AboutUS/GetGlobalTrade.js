import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./GetGlobalTrade.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


function GetGlobalTrade() {

    return (
        <div className={styles.GetGlobalTradeOnline}>
            <Container>
                <Row>
                    <Col md={8}>
                        <div className={styles.GeGlobl}>
                            <h2>Want to know more about the Unique World of Export Genius? </h2>
                            <h3>Get on Touch with Export Genius now!</h3>

                            <Button className={styles.scheDemoBtn} variant="success">Schedule a Demo</Button>{' '}
                            <Button className={styles.LogonDemoBtn} variant="primary">Login</Button>{' '}
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default GetGlobalTrade;