import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ManageEndtoEnd.module.css";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as React from 'react';

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


    return (
        <div className={styles.MangeEndtoend}>
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
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab className={styles.tabofMatrial} label="Comprehensive Market View" {...a11yProps(0)} />
                                        <Tab className={styles.tabofMatrial} label="Trade Relationship" {...a11yProps(1)} />
                                        <Tab className={styles.tabofMatrial} label="Clear Trade Picture" {...a11yProps(2)} />
                                        <Tab className={styles.tabofMatrial} label="Current Market Price" {...a11yProps(3)} />
                                        <Tab className={styles.tabofMatrial} label="Build Your Network" {...a11yProps(4)} />
                                    </Tabs>
                                </Box>
                                <CustomTabPanel value={value} index={0}>
                                    <div className={styles.comprHendTbs}>
                                        <Row>
                                            <Col md={3}>
                                                <div className={styles.inetleInstigh}>
                                                    <h6>Intelligent Insight</h6>
                                                    <h3>Comprehensive Market View</h3>
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
                                <CustomTabPanel value={value} index={1}>
                                <div className={styles.comprHendTbs}>
                                        <Row>
                                            <Col md={3}>
                                                <div className={styles.inetleInstigh}>
                                                    <h6>Intelligent Insight</h6>
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
                                            <Col md={3}>
                                                <div className={styles.inetleInstigh}>
                                                    <h6>Intelligent Insight</h6>
                                                    <h3>Clear Trade Picture</h3>
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
                                <CustomTabPanel value={value} index={3}>
                                <div className={styles.comprHendTbs}>
                                        <Row>
                                            <Col md={3}>
                                                <div className={styles.inetleInstigh}>
                                                    <h6>Intelligent Insight</h6>
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
                                                    <h6>Intelligent Insight</h6>
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

export default ManageEndtoEnd;