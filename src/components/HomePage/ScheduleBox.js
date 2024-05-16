import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Schedulebox.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";

function Schedulebox() {

    return (
        <div className={styles.ScheduleboxOnline}>
            <Container>
                <Row>
                    <div className={styles.ScheDmeo}>
                        <Row>
                            <Col md={7}>
                                <div className={styles.wantSee}>
                                    <img src="demo.png" alt="Demo Icon" />
                                    <div className={styles.dSdhdemo}>
                                        <h5>Want to see <span>Dashboard</span> in action?</h5>
                                        <h1>Schedule a Demo</h1>
                                    </div>
                                </div>
                            </Col>
                            <Col md={5}>
                                <div className={styles.wantSee}>
                                    <button className={styles.SchenNow} >Schedule Now</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Schedulebox;