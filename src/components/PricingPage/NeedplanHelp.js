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
                                <img src="phone.png" alt="contact" />
                                <a href="#">+91 8003 8003 57</a>
                            </div>
                            <div className={styles.choseneed}>
                                <img src="chat.png" alt="contact" />
                                <a href="#">TALK TO EXPERTS</a>
                            </div>
                            <div className={styles.choseneed}>
                                <img src="calendar.png" alt="contact" />
                                <a href="#">Schedule a free demo</a>
                            </div>
                            <div className={styles.choseneed}>
                                <img src="settings.png" alt="contact" />
                                <a href="#">looking For api</a>
                            </div>
                            <div className={styles.choseneed}>
                                <img src="qr.png" alt="contact" />
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