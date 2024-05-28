import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./OurCulture.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";

function OurCulture() {

    return (
        <div className={styles.OurCulturebG}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.Seekpeek}>
                            {/* <h2>Sneak Peek to Our Culture</h2> */}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div className={styles.OurCultureImg}>
                            <img src="medal.png" alt="medal" />
                            <h4>Sneak- Peek to Our Culture</h4>
                            <p>Drop your CV option at the end of Get to Know Each Other</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.OurCultureImg}>
                            <img src="highfive.png" alt="highfive" />
                            <h4>Best-in-class Remuneration </h4>
                            <p>Be assured to grab a good cheque and a competitive salary that justifies your talent, skills, and contribution as our employee. </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.OurCultureImg}>
                            <img src="group.png" alt="group" />
                            <h4>Corporate-Friendly Environment</h4>
                            <p>Our is not the “Office” you know or have seen. For us, we find our joy in work and work in fun. We promise you won’t get entangled with sheer boredom.</p>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className={styles.OurCultureImg}>
                            <img src="portfolio.png" alt="portfolio" />
                            <h4>Team-Warming Sessions</h4>
                            <p>The dynamic session offers a platform for team members to fairly connect, engage, and build strong relationships in a fun and interactive environment.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.OurCultureImg}>
                            <img src="careerpath.png" alt="careerpath" />
                            <h4>Corporate Vacation</h4>
                            <p>The experts spend quality time together, everywhere by planning and going for a trip where we make uncountable memories and fun-around with the team!</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.OurCultureImg}>
                            <img src="sunumbrella.png" alt="sunumbrella" />
                            <h4>On-The-Job Training</h4>
                            <p>We believe in keeping our team up-to-date with the latest technologies, tools, and algorithms and building a skilled and knowledgeable team workforce to drive organizational success. </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default OurCulture;