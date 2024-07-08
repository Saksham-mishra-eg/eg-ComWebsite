import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ContactIframe.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row, Form, Button, Alert } from "react-bootstrap";
import React, { useRef, useState } from 'react';
import axios from 'axios';

function ContactIframe() {
    const formRef = useRef(null);
    const [submitStatus, setSubmitStatus] = useState(null);

    const url = window.location.href

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = formRef.current;

        if (form.checkValidity() === false) {
            e.stopPropagation();
            form.classList.add('was-validated');
            return;
        }

        const formData = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            countryCode: form.countryCode.value,
            contactNumber: form.contactNumber.value,
            workEmail: form.workEmail.value,
            message: form.message.value,
            url: url
        };

        try {
            console.log('Form Data:', formData);
            const response = await axios.post('http://localhost:4000/api/send-email-eg', formData);
            console.log('Response:', response);
            setSubmitStatus({ success: true, message: 'Email sent successfully!' });
            form.reset();
            form.classList.remove('was-validated');
        } catch (error) {
            console.error('Error sending email:', formData);
            console.error('Error Response:', error.response.data);  // Add this line to log the error response from the server
            setSubmitStatus({ success: false, message: 'Failed to send email. Please try again.' });
        }
    };


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
                                    <Form ref={formRef} noValidate onSubmit={handleSubmit} className={styles.modalFormhndl}>
                                        <Form.Group className="mb-3" controlId="formGroupFname">
                                            <Form.Label className={styles.formLaelCar}>First Name</Form.Label>
                                            <Form.Control
                                                className={styles.formContrCaresd}
                                                name="firstName"
                                                type="text"
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupLname">
                                            <Form.Label className={styles.formLaelCar}>Last Name</Form.Label>
                                            <Form.Control
                                                className={styles.formContrCaresd}
                                                name="lastName"
                                                type="text"
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupCname">
                                            <Form.Label className={styles.formLaelCar}>Company Name</Form.Label>
                                            <Form.Control
                                                className={styles.formContrCaresd}
                                                name="countryCode"
                                                type="text"
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPhone">
                                            <Form.Label className={styles.formLaelCar}>Contact Number</Form.Label>
                                            <Form.Control
                                                className={styles.formContrCaresd}
                                                name="contactNumber"
                                                type="number"
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label className={styles.formLaelCar}>Work Email Id</Form.Label>
                                            <Form.Control
                                                className={styles.formContrCaresd}
                                                name="workEmail"
                                                type="email"
                                                required
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control
                                                className={styles.formContrCaresd}
                                                name="message"
                                                as="textarea"
                                                required
                                            />
                                        </Form.Group>
                                        <Button className={styles.subtmBtinFrom} type="submit">Submit</Button>
                                    </Form>
                                    {submitStatus && (
                                        <Alert variant={submitStatus.success ? 'success' : 'danger'} className="mt-3">
                                            {submitStatus.message}
                                        </Alert>
                                    )}
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