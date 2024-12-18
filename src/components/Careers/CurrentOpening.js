import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CurrentOpening.module.css";
import Container from 'react-bootstrap/Container';
import { Button, Col, Form, Row } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { useState, useMemo } from "react";

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

    const [selectedJobTitle, setSelectedJobTitle] = useState("Business Development Representative");

    const handleJobSelection = (title) => {
        setSelectedJobTitle(title);
    };

    const [show, setShow] = useState("All")

    const handleOption = (event) => {
        setShow(event.target.value);
    };

    const cardsData = [
        {
            id: 0,
            department: "Sales",
            title: "Business Development Representative",
            description: "Export genius is growing and therefore seeking a talented Business Development Representative to join our exceptional team.",
        },
        {
            id: 1,
            department: "IT",
            title: "Software Development Representative",
            description: "Export genius is growing and therefore seeking a talented Software Development Representative to join our exceptional team.",
        },
        {
            id: 2,
            department: "Marketing",
            title: "Marketing Representative",
            description: "Export genius is growing and therefore seeking a talented Marketing Representative to join our exceptional team.",
        },
        {
            id: 3,
            department: "Sales",
            title: "Senior Sales Representative",
            description: "Export genius is growing and therefore seeking a talented Senior Sales Representative to join our exceptional team.",
        },
    ];

    const filteredCards = useMemo(() => {
        return show === "All" ? cardsData : cardsData.filter(card => card.department === show);
    }, [show, cardsData]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process form data
    };

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
                                {/* <Form.Group as={Col} md="6" sm="6" controlId="validationCustom01">
                                    <Form.Select className={styles.fonrSelectEgOption} aria-label="Default select example">
                                        <option>All Offices</option>
                                        <option>Delhi</option>
                                        <option>Gurgaon</option>
                                        <option>Noida</option>
                                    </Form.Select>
                                </Form.Group> */}
                                <Col md={3} sm={3}></Col>
                                <Form.Group as={Col} md="6" sm="6" controlId="validationCustom01">
                                    <Form.Select
                                        className={styles.fonrSelectEgOption}
                                        aria-label="Select department"
                                        onChange={handleOption}
                                    >
                                        <option value="All">All Departments...</option>
                                        <option value="IT">IT</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Sales">Sales</option>
                                    </Form.Select>
                                </Form.Group>
                                <Col md={3} sm={3}></Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div className={styles.acordionFormCrer}>
                            <Accordion defaultActiveKey="0">
                                {filteredCards.map(card => (
                                    <Card key={card.id} className={styles.acrndCardcrr}>
                                        <Card.Header className={styles.careheaderAcrnd}>
                                            <ContextAwareToggle eventKey={String(card.id)}>
                                                {card.title}
                                            </ContextAwareToggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={String(card.id)}>
                                            <Card.Body>
                                                <div className={styles.carbodyAcrnd}>
                                                    <p> <span>{card.department}, team</span> </p>
                                                    <p>{card.description}</p>
                                                    <p>
                                                        <a href="#fillpost" onClick={() => handleJobSelection(card.title)}>
                                                            Fill post <img src="fillarow.png" alt="fill post" />
                                                        </a>
                                                    </p>
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                ))}
                            </Accordion>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.FomrDentnormCrer}>
                            <div className={styles.aplythished}>
                                <h3>Apply for this position</h3>
                            </div>
                            <div className={styles.aformareasent}>
                                <h4>{selectedJobTitle}</h4>
                                <Form onSubmit={handleSubmit}>
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