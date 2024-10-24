import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ApiHeaderSection.module.css";
import { Col, Row, Form, Button, Container, Modal, Alert } from "react-bootstrap";
import React, { useRef, useState } from 'react';
import axios from 'axios';


function ApiHeaderSection() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            const response = await axios.post('https://fjgjyxhtdds.marketinsidedata.com/api/send-email-eg', formData);
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


    const handleContactClick = () => {
        // Add your contact form link here
        window.location.href = "/contact-us";
    };


    return (
        <div className={styles.ApiHeaderSectionPage}>
            <Container>
                <Row>
                    <Col md={5}>
                        <div className={styles.ApiGeGlobl}>
                            <img src="/api/api-image.png" alt="API Illustration" />
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className={styles.ApiGeGloblHead}>
                            <div className={styles.genSPi}>Export Genius APIs –</div>
                            <h1>Decoding Global Trade with Data</h1>
                            <p>Integrate the highest quality and detailed import export trade data directly into any database, any system, and any application seamlessly.</p>
                            <Button
                                className={styles.scheDemoBtn}
                                variant="success"
                                onClick={handleShow}
                            >
                                Contact Our Expert
                            </Button>
                            <Button
                                className={styles.LogonDemoBtn}
                                variant="primary"
                                onClick={handleContactClick}
                            >
                                Book A Meeting
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className={styles.modalHeader}>
                    <Modal.Title>
                        Get an Inside View of the Dashboard!</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modalBodytxt}>
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
                                    <Form.Label className={styles.formLaelCar}>Message</Form.Label>
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
                </Modal.Body>

            </Modal>
        </div>
    );
}

export default ApiHeaderSection;
