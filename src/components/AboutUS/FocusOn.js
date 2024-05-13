// FocusOn.js

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import styles from "./FocusOn.module.css";

function FocusOn() {


  return (
    <div className={styles.FocusOnBg}>
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
            <div className={styles.foncImg}>
              <img src="focuson.png" alt="focuson" />
            </div>
          </Col>
        </Row>
        <Row>

        </Row>
      </Container>
    </div>
  );
}

export default FocusOn;
