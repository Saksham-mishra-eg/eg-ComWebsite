import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./HereToHelp.module.css";
import { Col, Row, Form, Button, Container, Alert } from "react-bootstrap";
import React, { useRef, useState } from 'react';
import axios from 'axios';
import Client from "./Clients";

function HereToHelp() {

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
        <div className={styles.HereToHelpPage}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className={styles.ForHereTole}>
                            <h3>We’re Here to Help</h3>
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
                    </Col>
                    <Col md={6}>
                        <div className={styles.ApiSceDatImfa}>
                            <Client />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HereToHelp;