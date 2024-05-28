import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CurrentOpening.module.css";
import Container from 'react-bootstrap/Container';
import { Button, Col, Form, Row } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';



function ContextAwareToggle({ children, eventKey, callback }) {
    // const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    // const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <button
            type="button"
            className={styles.AcrdinBtn}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}


function CurrentOpening() {

    return (
        <div className={styles.CurrentOpeningBg}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.CurOpenhading}>
                            <h4>Positions</h4>
                            <h2>Attracting Best Talent in All Heads</h2>
                            <p>Apply for available positions at our head office. </p>
                        </div>
                    </Col>
                    <Col md={12}>
                        <Form noValidate className={styles.fonrSelectEg} >
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" sm="6" controlId="validationCustom01">
                                    <Form.Select className={styles.fonrSelectEgOption} aria-label="Default select example">
                                        <option>All offices...</option>
                                        <option>One</option>
                                        <option>Two</option>
                                        <option>Three</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} md="6" sm="6" controlId="validationCustom01">
                                    <Form.Select className={styles.fonrSelectEgOption} aria-label="Default select example">
                                        <option>All departments...</option>
                                        <option>One</option>
                                        <option>Two</option>
                                        <option>Three</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className={styles.acordionFormCrer}>
                            <Accordion defaultActiveKey="0">
                                <Card className={styles.acrndCardcrr}>
                                    <Card.Header className={styles.careheaderAcrnd}>
                                        <ContextAwareToggle eventKey="0">Business Development Representative</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <div className={styles.carbodyAcrnd}>
                                                <p> <span>Sales, team</span> </p>
                                                <p>Export genius is growing and therefore seeking a talented Business Development Representative to join our exceptional team.</p>
                                                <p> <a href="#fillpost">Fill post <img src="fillarow.png" alt="fill post" /> </a> </p>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className={styles.acrndCardcrr}>
                                    <Card.Header className={styles.careheaderAcrnd}>
                                        <ContextAwareToggle eventKey="1">Business Development Representative</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <div className={styles.carbodyAcrnd}>
                                                <p> <span>Sales, team</span> </p>
                                                <p>Export genius is growing and therefore seeking a talented Business Development Representative to join our exceptional team.</p>
                                                <p> <a href="#fillpost">Fill post <img src="fillarow.png" alt="fill post" /> </a> </p>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className={styles.acrndCardcrr}>
                                    <Card.Header className={styles.careheaderAcrnd}>
                                        <ContextAwareToggle eventKey="2">Business Development Representative</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            <div className={styles.carbodyAcrnd}>
                                                <p> <span>Sales, team</span> </p>
                                                <p>Export genius is growing and therefore seeking a talented Business Development Representative to join our exceptional team.</p>
                                                <p> <a href="#fillpost">Fill post <img src="fillarow.png" alt="fill post" /> </a> </p>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className={styles.acrndCardcrr}>
                                    <Card.Header className={styles.careheaderAcrnd}>
                                        <ContextAwareToggle eventKey="3">Business Development Representative</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>
                                            <div className={styles.carbodyAcrnd}>
                                                <p> <span>Sales, team</span> </p>
                                                <p>Export genius is growing and therefore seeking a talented Business Development Representative to join our exceptional team.</p>
                                                <p> <a href="#fillpost">Fill post <img src="fillarow.png" alt="fill post" /> </a> </p>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className={styles.acrndCardcrr}>
                                    <Card.Header className={styles.careheaderAcrnd}>
                                        <ContextAwareToggle eventKey="4">Business Development Representative</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>
                                            <div className={styles.carbodyAcrnd}>
                                                <p> <span>Sales, team</span> </p>
                                                <p>Export genius is growing and therefore seeking a talented Business Development Representative to join our exceptional team.</p>
                                                <p> <a href="#fillpost">Fill post <img src="fillarow.png" alt="fill post" /> </a> </p>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className={styles.acrndCardcrr}>
                                    <Card.Header className={styles.careheaderAcrnd}>
                                        <ContextAwareToggle eventKey="5">Business Development Representative</ContextAwareToggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="5">
                                        <Card.Body>
                                            <div className={styles.carbodyAcrnd}>
                                                <p> <span>Sales, team</span> </p>
                                                <p>Export genius is growing and therefore seeking a talented Business Development Representative to join our exceptional team.</p>
                                                <p> <a href="#fillpost">Fill post <img src="fillarow.png" alt="fill post" /> </a> </p>
                                            </div>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.FomrDentnormCrer}>
                            <div className={styles.aplythished}>
                                <h3>Apply for this position</h3>
                            </div>
                            <div className={styles.aformareasent}>
                                <h4>Business Development Representative</h4>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formGroupFname">
                                        <Form.Label className={styles.formLaelCar}>Full Name</Form.Label>
                                        <Form.Control className={styles.formContrCaresd} type="name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupLname">
                                        <Form.Label className={styles.formLaelCar}>Last Name</Form.Label>
                                        <Form.Control className={styles.formContrCaresd} type="name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Label className={styles.formLaelCar}>Email</Form.Label>
                                        <Form.Control className={styles.formContrCaresd} type="email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGroupPhone">
                                        <Form.Label className={styles.formLaelCar}>Phone</Form.Label>
                                        <Form.Control className={styles.formContrCaresd} type="number" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupResume">
                                        <Form.Label className={styles.formLaelCarresm}>Resume</Form.Label>
                                        <div className={styles.inputFielAtacth}>
                                            <Form.Control plaintext defaultValue="" className={styles.atacthresumeUpld} type="file" />
                                            <span>Attach resume</span>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formGroupPortfolio">
                                        <Form.Label className={styles.formLaelCarresm}>Portfolio</Form.Label>
                                        <div className={styles.inputFielAtacth}>
                                            <Form.Control plaintext defaultValue="" className={styles.atacthresumeUpld} type="file" />
                                            <span>Attach Portfolio</span>
                                        </div>
                                    </Form.Group>
                                    <Button className={styles.subtmBtinFrom} type="submit">Submit</Button>

                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CurrentOpening;