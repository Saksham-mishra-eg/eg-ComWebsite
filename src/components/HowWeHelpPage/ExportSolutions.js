import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ExportSolutions.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Form, Row } from "react-bootstrap";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

function ExportSolutions() {

    return (
        <div className={styles.ExportSolutionsBG}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className={styles.tradeText}>
                            <h1>How You Can Make the Most from our OG Dashboard?</h1>
                            <p>Access trade insights, explore new markets, and keep a check on your competitors with Export Genius.  </p>
                            <br />
                            <h3>ACTIONABLE INSIGHTS & INFORMATION</h3>
                            <Row>

                                <Col sm="7">
                                    <Form.Control className={styles.frokDemo} column sm="2" type="text" placeholder="Enter Your Email" />
                                </Col>
                                <Col sm="4">
                                   <div className={styles.devidt}>
                                   <a href="#freetrails" className={styles.TrlBtn} > Free Trial</a>
                                   </div>
                                </Col>

                            </Row>
                            <div className={styles.captImg}>
                                <img src="capterra.png" alt="capterra" />
                                <img src="g2.png" alt="g2" />
                                <img src="iso.png" alt="iso" />
                            </div>

                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.tradeBg}>
                            {/* <img src="solutions.png" alt="Solutins banner" /> */}
                            <Player
                                autoplay
                                loop
                                src="https://lottie.host/48321ee3-9023-4aab-a9bf-7b9420afdb6b/p5BatflLvh.json"
                                style={{}}
                            >
                                <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
                            </Player>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ExportSolutions;