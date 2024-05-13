
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
                                <h2> Founders & Director </h2>
                                <hr className={styles.direLne} />
                            </div>
                            <div className={styles.fornParaghr}>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <a href='#readmore'>Read More...</a>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.Fondimer}>
                            <div className={styles.directImge}>
                                <img src='ankur.png' alt='Founder' />
                                <h3>aNKUR GUPTA</h3>
                                <h6>Founder</h6>
                            </div>
                            <div className={styles.directImge}>
                                <img src='aashita.png' alt='Founder' />
                                <h3>aASHITA GUPTA</h3>
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
