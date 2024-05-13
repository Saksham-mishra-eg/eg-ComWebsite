// Ourjourney.js

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from "./Ourjourney.module.css";

function Ourjourney() {

    return (
        <div className={styles.OurjourneyBg}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.FocuOnd}>
                            <h6>Our core values</h6>
                            <h2>Focus on impact.</h2>
                            <p>Solve the most important problems and identify them through data.</p>
                        </div>
                    </Col>
                    <Col>
                       
                    </Col>
                </Row>
                <Row>

                </Row>
            </Container>
        </div>
    );
}

export default Ourjourney;
