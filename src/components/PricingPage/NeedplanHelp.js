import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./NeedplanHelp.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";


function NeedplanHelp() {

    return (
        <div className={styles.NeedplanHelpBg}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.Chooseplan}>
                            <h2>Need help choosing a plan?</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.ChooseplanBoxex}>
                            <div className={styles.choseneed}>
                                <img src="phone-icon.png" alt="phone" />
                                <a href="#phone">+91 8003 8003 57</a>
                            </div>
                            <div className={styles.choseneed}>
                                <img src="chat-icon.png" alt="chat" />
                                <a href="#chat">TALK TO EXPERTS</a>
                            </div>
                            <div className={styles.choseneed}>
                                <img src="calendar-icon.png" alt="calendar" />
                                <a href="#calendar">Schedule a free demo</a>
                            </div>
                            <div className={styles.choseneed}>
                                <img src="settings-icon.png" alt="settings" />
                                <a href="#settings">looking For api</a>
                            </div>
                            <div className={styles.choseneed}>
                                <img src="qr.png" alt="qr code" />
                                <p>+91-9319-157-357
                                    Scan QR code & get in
                                    touch with us
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default NeedplanHelp;