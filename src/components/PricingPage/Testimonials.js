import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Testimonials.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";


function Testimonials() {

    return (
        <div className={styles.TestimonialsBg}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.tesLoeisime}>
                            <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
                            <div className={styles.testimgeGoel}>
                                <img src="google.png" alt="google" />
                                <img src="drift.png" alt="drift" />
                                <img src="anaplan.png" alt="anaplan" />
                                <img src="seismic.png" alt="seismic" />
                                <img src="sisense.png" alt="sisense" />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.TestimlsFeedback}>
                            <Row>
                                <Col md={4}>
                                    <div className={styles.gamchnr}>
                                        <img src="brackets.png" alt="brackets" />
                                        <p>I couldn't honestly image working without Lusha. <a href="#">Game changer</a> </p>
                                        <div className={styles.iconImage}>
                                            <div className={styles.imageI}>
                                                <div className={styles.imgnameIcn}>
                                                    <img src="image1.png" alt="image 1" />
                                                    <div className={styles.gongEric}>
                                                        <h6>Eric Lindroos</h6>
                                                        <span>Gong</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.imageI}>
                                                <img src="icon1.png" alt="icon 1" />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className={styles.gamchnr}>
                                        <img src="brackets.png" alt="brackets" />
                                        <p>I couldn't honestly image working without Lusha. <a href="#">Game changer</a> </p>
                                        <div className={styles.iconImage}>
                                            <div className={styles.imageI}>
                                                <div className={styles.imgnameIcn}>
                                                    <img src="image2.png" alt="image 2" />
                                                    <div className={styles.gongEric}>
                                                        <h6>Eric Lindroos</h6>
                                                        <span>Gong</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.imageI}>
                                                <img src="icon2.png" alt="icon 2" />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className={styles.gamchnr}>
                                        <img src="brackets.png" alt="brackets" />
                                        <p>I couldn't honestly image working without Lusha. <a href="#">Game changer</a> </p>
                                        <div className={styles.iconImage}>
                                            <div className={styles.imageI}>
                                                <div className={styles.imgnameIcn}>
                                                    <img src="image3.png" alt="image 3" />
                                                    <div className={styles.gongEric}>
                                                        <h6>Eric Lindroos</h6>
                                                        <span>Gong</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.imageI}>
                                                <img src="icon3.png" alt="icon 3" />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
       
    );
}

export default Testimonials;