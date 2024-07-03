import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./HereToHelp.module.css";
import { Col, Container, Form, Button, Row } from "react-bootstrap";
import Client from "./Clients";

function HereToHelp() {

    return (
        <div className={styles.HereToHelpPage}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className={styles.ForHereTole}>
                            <h3>We’re Here to Help</h3>
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