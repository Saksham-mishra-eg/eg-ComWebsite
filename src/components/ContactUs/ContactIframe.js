import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ContactIframe.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";
import React from 'react';


function ContactIframe() {

    return (
        <div className={styles.ContactIframeBg}>
            <Container>
                <div className={styles.CntsctBgColr}>
                    <Row>
                        <Col md={12}>
                            <div className={styles.ContactAreas}>
                                <h3>Contact us</h3>
                                <h1>We're Just One Form Away From You. Fill in your details and our Experts are Happy to Assist! 
                                </h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <div className={styles.wantSee}>
                                <img src="demo.png" alt="Demo Icon" />
                                <div className={styles.dSdhdemo}>
                                    <h5>Want to see <span>Dashboard</span> in action?</h5>
                                    <h1>Schedule a Demo</h1>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <div className={styles.IframeAreassectn}>
                                <div className="dmscn">
                                    <iframe
                                        src="https://app.squarespacescheduling.com/schedule.php?owner=24269515"
                                        title="Schedule Appointment"
                                        width="100%"
                                        height="500"
                                        frameBorder="0"
                                        style={{ maxHeight: 'none', overflow: 'hidden', height: '360px' }}
                                    ></iframe>
                                    <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default ContactIframe;