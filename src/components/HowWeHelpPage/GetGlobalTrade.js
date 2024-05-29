import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./GetGlobalTrade.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { Player } from '@lottiefiles/react-lottie-player';



function GetGlobalTrade() {

    const backgroundStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
    };

    return (
        <div className={styles.GetGlobalTradeOnline}>
            <div className={styles.tagIDe} style={backgroundStyle}>
                <Player
                    autoplay
                    loop
                    src="/bgjason.json" // Local path to the JSON file
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.GeGlobl}>
                            <h2>See How We Can Help You.</h2>
                            <h3>Connect to Our Experts Now!</h3>
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