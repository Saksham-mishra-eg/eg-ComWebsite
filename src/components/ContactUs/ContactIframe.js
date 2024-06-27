import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ContactIframe.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row, Form, Button } from "react-bootstrap";
import React from 'react';


function ContactIframe() {

    return (
        <div className={styles.ContactIframeBg}>
            <Container>
                <div className={styles.CntsctBgColr}>
                    <Row>
                        <Col md={6}>
                            <div className={styles.ContactAreas}>
                                <h3>Contact us</h3>
                                <h1>We're Just One Form Away From You. Fill in your details and our Experts are Happy to Assist!
                                </h1>
                            </div>

                            <div className={styles.wantSee}>
                                <img src="demo.png" alt="Demo Icon" />
                                <div className={styles.dSdhdemo}>
                                    <h5>Want to see <span>Dashboard</span> in action?</h5>
                                    <h1>Schedule a Demo</h1>
                                </div>
                            </div>

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
                        <Col md={6}>
                            <div className={styles.FomrDentnormCrer}>

                                <div className={styles.aformareasent}>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formGroupFname">
                                            <Form.Label className={styles.formLaelCar}>Full Name</Form.Label>
                                            <Form.Control className={styles.formContrCaresd} type="name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupCname">
                                            <Form.Label className={styles.formLaelCar}>Company Name</Form.Label>
                                            <Form.Control className={styles.formContrCaresd} type="name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPhone">
                                            <Form.Label className={styles.formLaelCar}>Contact Number</Form.Label>
                                            <Form.Control className={styles.formContrCaresd} type="number" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label className={styles.formLaelCar}>Work Email Id</Form.Label>
                                            <Form.Control className={styles.formContrCaresd} type="email" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control  className={styles.formContrCaresd} as="textarea" />
                                        </Form.Group>
                                        <Button className={styles.subtmBtinFrom} type="submit">Submit</Button>

                                    </Form>
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