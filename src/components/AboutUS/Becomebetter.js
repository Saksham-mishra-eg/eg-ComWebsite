
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import styles from "./Becomebetter.module.css";

function Becomebetter() {


  return (
    <div className={styles.BecomebetterBg}>
      <Container>
        <Row>
          <Col md={12}>
            <div className={styles.FocuOnFeaturs}>
              <h2>Become a Better Team, Together.</h2>
              <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              <button className={styles.aPllyNowbtn}>Apply Now</button>
              <br />
              <br />
              <img src='company-peoples.png' width={`${100}%`} alt='company peoples' />
            </div>
          </Col>
          
        </Row>
        <Row>

        </Row>
      </Container>
    </div>
  );
}

export default Becomebetter;
