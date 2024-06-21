import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TradeOnlinePlatform.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Tab, Row, Nav } from "react-bootstrap";
import "./customStyles.css"

function TradeOnlinePlatform() {

    return (
        <div className={styles.TradeOnlinePlatformOnline}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.TrdetamOnline}>
                            <h2>TRADE INTELLIGENCE DATA <span> PLATFORM</span> </h2>
                            {/* <p>
                                    Export Genius delivers global trade data online beyond expectations to businesses from different industries and geographies.
                                </p> */}
                        </div>
                        <br />
                        <br />
                    </Col>
                </Row>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col>
                            <Nav variant="pill" className={styles.NavTabsFlex} direction="horizontal" gap={5} >
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className={styles.finGobaTxt}>Global Traders</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" className={styles.finGobaTxt}>Track Commodities</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" className={styles.finGobaTxt}>Custom Dashboard</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth" className={styles.finGobaTxt}>Market Trends</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="five" className={styles.finGobaTxt}>Contact Details</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>

                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        <Col md={5}>
                                            <div className={styles.TrdetamOnlineIMg}>
                                                <div className={styles.GlbDataImg}>
                                                    <h3>Find Global Importers & Exporters</h3>
                                                    <p>Discover a global network of millions of importers and exporters on our trade intelligence platform. Gain a competitive edge with our exclusive "Tree Map" feature. This innovative tool visually maps your customers' and competitors' connections, providing clear insights into their trade ecosystems.</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={7}>
                                            <div className={styles.GlbDataImg}>
                                                <img src="globalimpexp.png" alt="Global Data" />
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <Row>
                                        <Col md={5}>
                                            <div className={styles.TrdetamOnlineIMg}>
                                                <div className={styles.GlbDataImg}>
                                                    <h3>Check Commodities Traded Price</h3>
                                                    <p>Stay up-to-date with current prices of imported & exported commodities worldwide on sourcing and selling in various markets.</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={7}>
                                            <div className={styles.GlbDataImg}>
                                                <img src="commodities.jpg" alt="Global Data" />
                                            </div>
                                        </Col>
                                    </Row>

                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        <Col md={5}>
                                            <div className={styles.TrdetamOnlineIMg}>
                                                <div className={styles.GlbDataImg}>
                                                    <h3>Personalized Dashboard</h3>
                                                    <p>Personalize your dashboard in your own way. Search for the desired data using multiple filters such as the HS Code, Product Description, Buyer, Supplier, Origin Country, Destination Country, etc. Get the latest insights at your fingertips from our intelligent online dashboard. </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={7}>
                                            <div className={styles.GlbDataImg}>
                                                <img src="personalized-dashboard.png" alt="Global Data" />
                                            </div>
                                        </Col>
                                    </Row>

                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <Row>
                                        <Col md={5}>
                                            <div className={styles.TrdetamOnlineIMg}>
                                                <div className={styles.GlbDataImg}>
                                                    <h3>Checkout Market Trends</h3>
                                                    <p>Stay up-to-date with global trade developments by uncovering the latest market trends by product and company. Utilize export-import data online to gain valuable insights and make data-driven decisions to grow your business.</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={7}>
                                            <div className={styles.GlbDataImg}>
                                                <img src="markets-trends.png" alt="Global Data" />
                                            </div>
                                        </Col>
                                    </Row>

                                </Tab.Pane>
                                <Tab.Pane eventKey="five">
                                    <Row>
                                        <Col md={5}>
                                            <div className={styles.TrdetamOnlineIMg}>
                                                <div className={styles.GlbDataImg}>
                                                    <h3>Get Company and Employee Contacts</h3>
                                                    <p>Get contact information of import and export companies and their key decision makers and other employees. Our contact data covered Employee Name, Designation, Location, Email, Phone Numbers, and lots more.</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={7}>
                                            <div className={styles.GlbDataImg}>
                                                <img src="companys-contacts.png" alt="Global Data" />
                                            </div>
                                        </Col>
                                    </Row>

                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>

                </Tab.Container>
            </Container>
        </div>
    );
}

export default TradeOnlinePlatform;