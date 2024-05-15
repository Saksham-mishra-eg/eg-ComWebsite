import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./DataTypesManage.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as React from 'react';
import { SlArrowRight } from "react-icons/sl";

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


function DataTypesManage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={styles.DataTypeManagerBg}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.pltrtradeText}>
                            <h2>Manage rev ops end-to-end from one dashboard</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.manageTwbsdshd}>
                            <Box sx={{ width: '100%' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs sx={{ "--Tabs-spacing": "37px", "--Tab-indicatorThickness": "3px", "--Tab-indicatorSize": "120px", "--Tab-indicatorRadius": "-15px" }} value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab className={styles.tabofMatrial} label="Detailed Data" {...a11yProps(0)} />
                                        <Tab className={styles.tabofMatrial} label="Statistical Data" {...a11yProps(1)} />
                                        <Tab className={styles.tabofMatrial} label="Mirror Data" {...a11yProps(2)} />
                                        <Tab className={styles.tabofMatrial} label="Bill of Lading Data" {...a11yProps(3)} />
                                        <Tab className={styles.tabofMatrial} label="Suez Canal Bill of Lading Data" {...a11yProps(4)} />
                                    </Tabs>
                                </Box>
                                <CustomTabPanel value={value} index={0}>
                                    <div className={styles.comprHendTbs}>
                                        <Row>
                                            <Col md={5}>
                                                <div className={styles.borboxtabs}>
                                                    <div className={styles.inetleInstigh}>
                                                        <h3>Detailed Data</h3>
                                                        <p>Detailed Customs Data contains 100% shipment information including company details. We provide detailed customs data of 55+ countries online, including Angola, Turkey, Thailand, Bangladesh, Burundi, Bolivia, DR Congo, Ethiopia, Fiji, Ghana, Guatemala, Guyana, Indonesia, Mexico, Nicaragua, Philippines, Russia, Singapore, Ukraine and many more. Customs data is useful to find importers & exporters, monitor trade activities of competitors and gain in-depth market insights.</p>
                                                        <a href="@#earmore">Learn More <SlArrowRight /> </a>
                                                    </div>
                                                    <div className={styles.inimgigh}>
                                                        <img src="image100.png" alt="comprehensive" />
                                                    </div>
                                                    <div className={styles.dataAvailSamle}>
                                                        <Button className={styles.DnownSample} >Download Sample</Button>
                                                        <Button className={styles.DnownSample} >Data Availability</Button>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={5}>
                                                <div className={styles.borboxtabs}>
                                                    <div className={styles.inetleInstigh}>
                                                        <h3>Statistical Data</h3>
                                                        <p>Statistical Data covers useful shipment information such as Date, Quantity, Price, Country and so on, but No Company Names. You can access statistical data of 30 European countries online and other nations. Statistical data is useful to find potential market, determine market price of every commodity which companies import & export globally and analyze market share of countries.</p>
                                                        <a href="@#earmore">Learn More <SlArrowRight /> </a>
                                                    </div>
                                                    <div className={styles.inimgigh}>
                                                        <img src="image100.png" alt="comprehensive" />
                                                    </div>
                                                    <div className={styles.dataAvailSamle}>
                                                        <Button className={styles.DnownSample} >Download Sample</Button>
                                                        <Button className={styles.DnownSample} >Data Availability</Button>
                                                    </div>
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
                                                    <h3>Trade Relationship</h3>
                                                    <p>Search import-export data online by country, importer, exporter, HS Code, commodity, data duration, port name, transport mode etc. and get the latest data and insights at your fingertips.</p>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className={styles.inimgigh}>
                                                    <img src="comprehensive.png" alt="comprehensive" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={2}>
                                    <div className={styles.comprHendTbs}>
                                        <Row>
                                            <Col md={5}>
                                                <div className={styles.inetleInstigh}>
                                                    <h3>Clear Trade Picture</h3>
                                                    <p>Search import-export data online by country, importer, exporter, HS Code, commodity, data duration, port name, transport mode etc. and get the latest data and insights at your fingertips.</p>
                                                </div>
                                                <div className={styles.inimgigh}>
                                                    <img src="image100.png" alt="comprehensive" />
                                                </div>
                                            </Col>
                                            <Col md={5}>
                                                <div className={styles.inetleInstigh}>
                                                    <h3>Clear Trade Picture</h3>
                                                    <p>Search import-export data online by country, importer, exporter, HS Code, commodity, data duration, port name, transport mode etc. and get the latest data and insights at your fingertips.</p>
                                                </div>
                                                <div className={styles.inimgigh}>
                                                    <img src="image100.png" alt="comprehensive" />
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
                                                    <h3>Current Market Price</h3>
                                                    <p>Search import-export data online by country, importer, exporter, HS Code, commodity, data duration, port name, transport mode etc. and get the latest data and insights at your fingertips.</p>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className={styles.inimgigh}>
                                                    <img src="comprehensive.png" alt="comprehensive" />
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
                                                    <h3>Build Your Network</h3>
                                                    <p>Search import-export data online by country, importer, exporter, HS Code, commodity, data duration, port name, transport mode etc. and get the latest data and insights at your fingertips.</p>
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className={styles.inimgigh}>
                                                    <img src="comprehensive.png" alt="comprehensive" />
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
        </div>
    );
}

export default DataTypesManage;