import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ManageEndtoEnd.module.css";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as React from 'react';
import "./metrialui.css"

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
                                                </div>
                                            </Col>
                                            <Col md={9}>
                                                <div className={styles.inimgigh}>
                                                    <img src="data-analysis.png" alt="comprehensive" />
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
                                                    {/* <h6>Intelligent Insight</h6> */}
                                                    <h3>Global Trade Data Search</h3>
                                                    <p>Access our dashboard to get a bigger picture of global trade developments. Our global trade data search helps you find the biggest import and export countries, top trade commodities, and a lot more. Explore import export data worldwide and gain valuable market insights.</p>
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
                                                    {/* <h6>Intelligent Insight</h6> */}
                                                    <h3>Commodity Price Analysis</h3>
                                                    <p>Access our dashboard and view historical data and the latest information on commodities that companies import and export globally to have a better price evaluation. Compare and understand the actual market value of products to choose the companies that can provide you with the best price.</p>
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
                                                    <h3>Reach Targeted Companies</h3>
                                                    <p>Our import export data covers verified contact details – phone numbers, email addresses, websites, etc. of importers and exporters that will help you reach the targeted companies. Access our dashboard and start exploring crucial company information along with their contacts.</p>
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