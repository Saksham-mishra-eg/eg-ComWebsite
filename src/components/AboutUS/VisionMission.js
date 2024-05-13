import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./VisionMission.module.css";
import { Col, Container, Row } from "react-bootstrap";


function VisionMission() {

    return (
        <div className={styles.VisionMissionBg}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.vsnmsn}>
                            <h2>Vision & Mission</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.visonndmisson}>
                            <div className={styles.visonbx}>
                                <img src="vision.png" alt="vision" />
                                <h3>Vision</h3>
                                <p>To be the global leader in empowering businesses with unparalleled insights and intelligence for international trade through innovative AI-based technologies and dynamic data visualizations, fostering growth and prosperity across industries and continents.</p>
                            </div>
                            <div className={styles.visonbx}>
                                <img src="mission.png" alt="mission" />
                                <h3>Mission</h3>
                                <p>To be the global leader in empowering businesses with unparalleled insights and intelligence for international trade through innovative AI-based technologies and dynamic data visualizations, fostering growth and prosperity across industries and continents.</p>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>

    );
}

export default VisionMission;