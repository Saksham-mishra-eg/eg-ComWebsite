import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./LeverageApi.module.css";
import { Col, Container, Button, Tab, Tabs, Nav, Row, Modal, Form, Alert } from "react-bootstrap";
import "./navTabs.css";
import React, { useRef, useState } from 'react';
import axios from 'axios';
import {
    CompnyLookUPReqSnippet,
    CompnyLookUPRespnSnippet,
    CompnyPrfAPiReqSnippet,
    CompnyPrfAPiRespnSnippet, HsCodeAPiReqSnippet, HsCodeAPiRespnSnippet,
    ImpExpSrchrReqSnippet,
    ImpExpSrchrRespnSnippet,
    TotalBYReqSnippet,
    TotalBYRespnSnippet,
    TradePartnerReqSnippet,
    TradePartnerReswSnippet,
    TrdPrnerAPiReqSnippet,
    TrdPrnerAPiRespnSnippet,
    TrendByReqSnippet,
    TrendByRespnSnippet
} from "../../constants/ResponseSnippets";

function LeverageApi() {


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

    const handleChangeUrl = () => {
        window.location.href = "/contact-us";
    }


    return (
        <div className={styles.LeverageApiPage}>
            <Container>
                <Row>
                    <Col xs={12} md={12} lg={12} xl={12}>
                        <div className={styles.datWIthLeverg}>
                            <h2>Leverage the Power of Data with Various APIs</h2>
                            <p>Stay ahead in this globally competitive market by catching every economic opportunity with a comprehensive analysis of international trade dynamics by integrating various APIs into your system as per your business suitability. </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} lg={12} xl={12}>
                        <div className={styles.datWIthLevergYTabs}>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col sm={4}>
                                        <Nav variant="pills" className={styles.UlislitNavRveit}>
                                            <Nav.Item className={styles.TbnnLinsItmsk}>
                                                <Nav.Link className={styles.TbnnLinsk} eventKey="first">GLOBAL TRADE DATA API</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className={styles.TbnnLinsItmsk}>
                                                <Nav.Link className={styles.TbnnLinsk} eventKey="second">TREND BY AND TOTAL BY API</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className={styles.TbnnLinsItmsk}>
                                                <Nav.Link className={styles.TbnnLinsk} eventKey="third">IMPORTER AND EXPORTER SEARCH API</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className={styles.TbnnLinsItmsk}>
                                                <Nav.Link className={styles.TbnnLinsk} eventKey="fourth">COMPANY LOOKUP API</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className={styles.TbnnLinsItmsk}>
                                                <Nav.Link className={styles.TbnnLinsk} eventKey="fifth">COMPANY PROFILE API</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className={styles.TbnnLinsItmsk}>
                                                <Nav.Link className={styles.TbnnLinsk} eventKey="sixth">TRADE PARTNERS API</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className={styles.TbnnLinsItmsk}>
                                                <Nav.Link className={styles.TbnnLinsk} eventKey="seventh">HS CODE SEARCH API</Nav.Link>
                                            </Nav.Item>

                                        </Nav>
                                    </Col>
                                    <Col sm={8}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first" className={styles.TbnnLTabPnae}>
                                                <div className={styles.TbnSectPane}>
                                                    <h3>Global Trade Data API</h3>
                                                    <p>This API helps you access shipment records based on custom parameters such as HS Code, Product Description, Importer Name, Exporter Name, Origin Country, Destination Country, Port, Transport Mode and so on.</p>
                                                    <div className={styles.dataCodeTxt}>
                                                        <h4>Sample Request & Response </h4>
                                                        <div className={styles.sectoOfcde}>
                                                            <pre className="preblckcode">
                                                                <h6>Request </h6>
                                                                <code>{TradePartnerReqSnippet}</code>
                                                                <br /> <br />
                                                                <h6>Response </h6>
                                                                <code>{TradePartnerReswSnippet}</code>
                                                            </pre>

                                                        </div>
                                                    </div>
                                                    <Button className={styles.scheDemoBtn} variant="success" onClick={handleShow}>Contact Our Expert</Button>{' '}
                                                    <Button className={styles.LogonDemoBtn} variant="primary" onClick={handleChangeUrl}>Book A Meeting</Button>{' '}
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second" className={styles.TbnnLTabPnae}>
                                                <div className={styles.TbnSectPane}>
                                                    <h3>Trend By and Total By API</h3>
                                                    <p>This API helps users to get duration-based import and export data and access total values of traded commodities, countries, companies, and other market components. Users can analyse monthly and yearly trends based on HS Code, Product, Importer, Exporter, Port, Country, and so on.</p>
                                                    <div className={styles.dataCodeTxt}>
                                                        <h4>Sample Request & Response </h4>
                                                        <div className={styles.sectoOfcde}>

                                                            <Tabs
                                                                defaultActiveKey="TrendBy"
                                                                id="uncontrolled-tab-example"
                                                                className="mb-3"
                                                            >
                                                                <Tab eventKey="TrendBy" title="Trend By">
                                                                    <pre className="preblckcode">
                                                                        <h6>Request </h6>
                                                                        <code>{TrendByReqSnippet}</code>
                                                                        <br /> <br />
                                                                        <h6>Response </h6>
                                                                        <code>{TrendByRespnSnippet}</code>
                                                                    </pre>
                                                                </Tab>
                                                                <Tab eventKey="TotalBY" title="Total By">
                                                                    <pre className="preblckcode">
                                                                        <h6>Request </h6>
                                                                        <code>{TotalBYReqSnippet}</code>
                                                                        <br /> <br />
                                                                        <h6>Response </h6>
                                                                        <code>{TotalBYRespnSnippet}</code>
                                                                    </pre>
                                                                </Tab>

                                                            </Tabs>

                                                        </div>
                                                    </div>
                                                    <Button className={styles.scheDemoBtn} variant="success" onClick={handleShow}>Contact Our Expert</Button>{' '}
                                                    <Button className={styles.LogonDemoBtn} variant="primary" onClick={handleChangeUrl}>Book A Meeting</Button>{' '}
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third" className={styles.TbnnLTabPnae}>
                                                <div className={styles.TbnSectPane}>
                                                    <h3>Importer and Exporter Search API</h3>
                                                    <p>You can find global importers and exporters list and select those that match to your requirements. You can access company-based information on various filters like HS Codes, Products, Trade Countries, and so on.</p>
                                                    <div className={styles.dataCodeTxt}>
                                                        <h4>Sample Request & Response </h4>
                                                        <div className={styles.sectoOfcde}>
                                                            <pre className="preblckcode">
                                                                <h6>Request </h6>
                                                                <code>{ImpExpSrchrReqSnippet}</code>
                                                                <br /> <br />
                                                                <h6>Response </h6>
                                                                <code>{ImpExpSrchrRespnSnippet}</code>
                                                            </pre>

                                                        </div>
                                                    </div>
                                                    <Button className={styles.scheDemoBtn} variant="success" onClick={handleShow}>Contact Our Expert</Button>{' '}
                                                    <Button className={styles.LogonDemoBtn} variant="primary" onClick={handleChangeUrl}>Book A Meeting</Button>{' '}
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="fourth" className={styles.TbnnLTabPnae}>
                                                <div className={styles.TbnSectPane}>
                                                    <h3>Company Lookup API</h3>
                                                    <p>The Company Lookup API allows users to find and match companies with their unique IDs based on names. Users can integrate this API with Company Profile API.</p>
                                                    <div className={styles.dataCodeTxt}>
                                                        <h4>Sample Request & Response </h4>
                                                        <div className={styles.sectoOfcde}>
                                                            <pre className="preblckcode">
                                                                <h6>Request </h6>
                                                                <code>{CompnyLookUPReqSnippet}</code>
                                                                <br /> <br />
                                                                <h6>Response </h6>
                                                                <code>{CompnyLookUPRespnSnippet}</code>
                                                            </pre>

                                                        </div>
                                                    </div>
                                                    <Button className={styles.scheDemoBtn} variant="success" onClick={handleShow}>Contact Our Expert</Button>{' '}
                                                    <Button className={styles.LogonDemoBtn} variant="primary" onClick={handleChangeUrl}>Book A Meeting</Button>{' '}
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="fifth" className={styles.TbnnLTabPnae}>
                                                <div className={styles.TbnSectPane}>
                                                    <h3>Company Profile API</h3>
                                                    <p>Company Profile API provides detailed overview of specific companies. With this API, users can access company’s data, covering import & export turnover, top commodities, top trade partners, and so on.</p>
                                                    <div className={styles.dataCodeTxt}>
                                                        <h4>Sample Request & Response </h4>
                                                        <div className={styles.sectoOfcde}>
                                                            <pre className="preblckcode">
                                                                <h6>Request </h6>
                                                                <code>{CompnyPrfAPiReqSnippet}</code>
                                                                <br /> <br />
                                                                <h6>Response </h6>
                                                                <code>{CompnyPrfAPiRespnSnippet}</code>
                                                            </pre>

                                                        </div>
                                                    </div>
                                                    <Button className={styles.scheDemoBtn} variant="success" onClick={handleShow}>Contact Our Expert</Button>{' '}
                                                    <Button className={styles.LogonDemoBtn} variant="primary" onClick={handleChangeUrl}>Book A Meeting</Button>{' '}
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="sixth" className={styles.TbnnLTabPnae}>
                                                <div className={styles.TbnSectPane}>
                                                    <h3>Trade Partners API</h3>
                                                    <p>Trade Partners API helps users to find buyers or suppliers of a particular company, and their import or export partners with supply chain intelligence.</p>
                                                    <div className={styles.dataCodeTxt}>
                                                        <h4>Sample Request & Response </h4>
                                                        <div className={styles.sectoOfcde}>
                                                            <pre className="preblckcode">
                                                                <h6>Request </h6>
                                                                <code>{TrdPrnerAPiReqSnippet}</code>
                                                                <br /> <br />
                                                                <h6>Response </h6>
                                                                <code>{TrdPrnerAPiRespnSnippet}</code>
                                                            </pre>

                                                        </div>
                                                    </div>
                                                    <Button className={styles.scheDemoBtn} variant="success" onClick={handleShow}>Contact Our Expert</Button>{' '}
                                                    <Button className={styles.LogonDemoBtn} variant="primary" onClick={handleChangeUrl}>Book A Meeting</Button>{' '}
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="seventh" className={styles.TbnnLTabPnae}>
                                                <div className={styles.TbnSectPane}>
                                                    <h3>HS Code Search API</h3>
                                                    <p>This API enables users to obtain accurate Harmonized System (HS) codes and their descriptions in multiple languages based on product names, and country specifications. The output includes specific HS codes, their global weightage as a percentage, country-specific weightage as a percentage, additional relevant HS codes corresponding to the product description, and editions of the Harmonized System (HS) nomenclature.</p>
                                                    <div className={styles.dataCodeTxt}>
                                                        <h4>Sample Request & Response </h4>
                                                        <div className={styles.sectoOfcde}>
                                                            <pre className="preblckcode">
                                                                <h6>Request </h6>
                                                                <code>{HsCodeAPiReqSnippet}</code>
                                                                <br /> <br />
                                                                <h6>Response </h6>
                                                                <code>{HsCodeAPiRespnSnippet}</code>
                                                            </pre>

                                                        </div>
                                                    </div>
                                                    <Button className={styles.scheDemoBtn} variant="success" onClick={handleShow}>Contact Our Expert</Button>{' '}
                                                    <Button className={styles.LogonDemoBtn} variant="primary" onClick={handleChangeUrl}>Book A Meeting</Button>{' '}
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className={styles.modalHeader}>
                    <Modal.Title>
                        Global Trade Data API
                    </Modal.Title>
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
        </div >
    );
}

export default LeverageApi;