import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./PlatformHeader.module.css";
import { Col, Row, Form, Button, Container, Modal, Alert } from "react-bootstrap";
import { SlArrowRight } from "react-icons/sl";
import { Player } from '@lottiefiles/react-lottie-player';
import BoxReveal from "../HowWeHelpPage/box-reveal";
import "../PricingPage/modal.css"
import React, { useRef, useState } from 'react';
import axios from 'axios';

function PlatformHeader() {

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


    return (
        <div className={styles.PlatformHeaderine}>
            <Container>
                <Row>
                    <Col md={6}>

                        <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8">
                            <BoxReveal boxColor={"#5046e6"} duration={0.5} >
                                <h1 className={styles.howYOur}>
                                    A Comprehensive View of Global Trade Development
                                </h1>
                            </BoxReveal>

                            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                                <div className={styles.ditextorkder}>
                                    <p>Powered by quality & industry-standard import export trade data, and intelligence market insights, our platform is built to scale your pipeline and keep you ahead of the competition.
                                    </p>
                                </div>
                            </BoxReveal>

                            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                                <div className={styles.captDemobd}>
                                    <a href="/contact-us" className={styles.TrlBtn} > Book Demo <SlArrowRight /> </a>
                                    <a href="#popup" className={styles.getainsider} onClick={handleShow}>Get an Inside View of the Dashboard! <SlArrowRight /> </a>
                                </div>
                            </BoxReveal>

                            <BoxReveal boxColor={"#5046e6"} duration={0.5}>

                                <div className={styles.captImg}>
                                    {/* <img src="capterra.png" alt="capterra" />
                                <img src="g2.png" alt="g2" /> */}
                                    <img src="iso.png" alt="iso" />
                                </div>

                            </BoxReveal>
                        </div>

                    </Col>
                    <Col md={6}>
                        <div className={styles.tradeBg}>
                            {/* <img src="platformbg.png" alt="Platform banner" /> */}
                            <Player
                                autoplay
                                loop
                                src="https://lottie.host/bd1d4ef3-6627-4ba6-b32d-5a66439b0c0b/nJo8C1NMja.json"
                                style={{}}
                            >
                                {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
                            </Player>
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

export default PlatformHeader;