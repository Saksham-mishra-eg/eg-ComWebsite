import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ManageEndtoEnd.module.css";
import { Col, Row, Form, Button, Container, Modal, Alert } from "react-bootstrap";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./metrialui.css"
import React, { useRef, useState } from 'react';
import axios from 'axios';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function ManageEndtoEnd() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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


    return (
        <div className={styles.MangeEndtoend}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.pltrtradeText}>
                            <h2>A High-level View of the Global Import-Export Market</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.manageTwbsdshd}>
                            <Box sx={{ width: '100%' }}>
                                <Box className={styles.boxclanameMogile} sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs className={styles.multitabsrootmng} value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab className={styles.tabofMatrial} label="Company Data Analysis" {...a11yProps(0)} />
                                        <Tab className={styles.tabofMatrial} label="Comprehensive Data Coverage" {...a11yProps(1)} />
                                        <Tab className={styles.tabofMatrial} label="Global Trade Data Search" {...a11yProps(2)} />
                                        <Tab className={styles.tabofMatrial} label="Commodity Price Analysis" {...a11yProps(3)} />
                                        <Tab className={styles.tabofMatrial} label="Reach Targeted Companies" {...a11yProps(4)} />
                                    </Tabs>
                                </Box>
                                <CustomTabPanel className={styles.boxtalbPanetd} value={value} index={0}>
                                    <div className={styles.comprHendTbs}>
                                        <Row>
                                            <Col md={3}>
                                                <div className={styles.inetleInstigh}>
                                                    <h3>Company Data Analysis</h3>
                                                    <p>Access import export data of companies and get a detailed trade overview of importers and exporters. Find and connect with new and potential buyers and suppliers. Identify which companies are growing and which ones are shrinking. Discover your competitors by knowing their market share and business aspects. </p>
                                                    <Button className={styles.Explormorebtn} onClick={handleShow}><span>Explore More</span> </Button>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className={styles.inimgigh}>
                                                    <img src="company-analysis.png" alt="company-analysis" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={1}>
                                    <div className={styles.comprHendTbs}>
                                        <Row>
                                            <Col md={3}>
                                                <div className={styles.inetleInstigh}>
                                                    <h3>Comprehensive Data Coverage</h3>
                                                    <p>Keep a tab on the global supply chain, and gain valuable business intelligence from import export trade data. Whatever your goals, our platform is designed to provide hassle-free data based on Importer, Exporter, HS Code, Commodity, Data Duration, Port, Transport Mode, and so on.</p>
                                                    <Button className={styles.Explormorebtn} onClick={handleShow}><span>Explore More</span> </Button>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className={styles.inimgigh}>
                                                    <img src="data-coverage.png" alt="data coverage" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={2}>
                                    <div className={styles.comprHendTbs}>
                                        <Row>
                                            <Col md={3}>
                                                <div className={styles.inetleInstigh}>
                                                    {/* <h6>Intelligent Insight</h6> */}
                                                    <h3>Global Trade Data Search</h3>
                                                    <p>Access our dashboard to get a bigger picture of global trade developments. Our global trade data search helps you find the biggest import and export countries, top trade commodities, and a lot more. Explore import export data worldwide and gain valuable market insights.</p>
                                                    <Button className={styles.Explormorebtn} onClick={handleShow}><span>Explore More</span> </Button>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className={styles.inimgigh}>
                                                    <img src="global-trade.png" alt="Global Trade Data" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={3}>
                                    <div className={styles.comprHendTbs}>
                                        <Row>
                                            <Col md={3}>
                                                <div className={styles.inetleInstigh}>
                                                    {/* <h6>Intelligent Insight</h6> */}
                                                    <h3>Commodity Price Analysis</h3>
                                                    <p>Access our dashboard and view historical data and the latest information on commodities that companies import and export globally to have a better price evaluation. Compare and understand the actual market value of products to choose the companies that can provide you with the best price.</p>
                                                    <Button className={styles.Explormorebtn} onClick={handleShow}><span>Explore More</span> </Button>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className={styles.inimgigh}>
                                                    <img src="price-analysis.png" alt="Price Analysis" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={4}>
                                    <div className={styles.comprHendTbs}>
                                        <Row>
                                            <Col md={3}>
                                                <div className={styles.inetleInstigh}>
                                                    <h3>Reach Targeted Companies</h3>
                                                    <p>Our import export data covers verified contact details – phone numbers, email addresses, websites, etc. of importers and exporters that will help you reach the targeted companies. Access our dashboard and start exploring crucial company information along with their contacts.</p>
                                                    <Button className={styles.Explormorebtn} onClick={handleShow}><span>Explore More</span> </Button>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className={styles.inimgigh}>
                                                    <img src="targeted-companies.png" alt="Targeted Companies" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </CustomTabPanel>
                            </Box>
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

export default ManageEndtoEnd;