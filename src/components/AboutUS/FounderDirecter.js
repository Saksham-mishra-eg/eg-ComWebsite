
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from "./FounderDirecter.module.css";

function FounderDirecter() {

    return (
        <div className={styles.FounderDirecterBg}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className={styles.FondDire}>
                            <div className={styles.heaindRiectr}>
                                <h2>Director and Founder Den</h2>
                                <hr className={styles.direLne} />
                            </div>
                            <div className={styles.fornParaghr}>
                                <p>The duo of director and founder are the real motivation behind the success of Export Genius. Their steer-clear vision and consistent efforts have led to the company’s success. Under the aegis of their leadership, Export Genius continues to empower businesses to thrive in the international marketplace. </p>
                                {/* <a href='#readmore'>Read More...</a> */}
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.Fondimer}>
                            <div className={styles.directImge}>
                                <img src='ankur.jpg' alt='Founder' />
                                <h3>ANKUR GUPTA</h3>
                                <h6>Founder</h6>
                            </div>
                            <div className={styles.directImge}>
                                <img src='aashita.jpg' alt='Director' />
                                <h3>AASHITA GUPTA</h3>
                                <h6>Director</h6>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FounderDirecter;
