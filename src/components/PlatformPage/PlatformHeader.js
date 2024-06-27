import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./PlatformHeader.module.css";
import { Col, Row, Form, Button, Container, Modal } from "react-bootstrap";
import { useState } from 'react';
import { SlArrowRight } from "react-icons/sl";
import { Player } from '@lottiefiles/react-lottie-player';
import BoxReveal from "../HowWeHelpPage/box-reveal";
import "../PricingPage/modal.css"

function PlatformHeader() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                    <a href="#freetrails" className={styles.TrlBtn} > Book Demo <SlArrowRight /> </a>
                                    <a href="#insier" className={styles.getainsider} onClick={handleShow}>Get an Inside View of the Dashboard! <SlArrowRight /> </a>
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
                                    <Form.Control className={styles.formContrCaresd} as="textarea" />
                                </Form.Group>
                                <Button className={styles.subtmBtinFrom} type="submit">Submit</Button>

                            </Form>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </div>
    );
}

export default PlatformHeader;