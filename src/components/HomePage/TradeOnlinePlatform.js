import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TradeOnlinePlatform.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Tab, Row, Nav } from "react-bootstrap";

function TradeOnlinePlatform() {

    return (
        <div className={styles.TradeOnlinePlatformOnline}>
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col>
                            <div className={styles.TrdetamOnline}>
                                <h2>TRADE INTELLIGENCE DATA <span> PLATFORM</span> </h2>
                                {/* <p>
                                    Export Genius delivers global trade data online beyond expectations to businesses from different industries and geographies.
                                </p> */}
                            </div>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div className={styles.TrdetamOnlineIMg}>
                                        <img src="globalimpexp.png" alt="Global Data" />
                                        <div className={styles.GlbDataImg}>
                                            <h3>Find Global Importers & Exporters</h3>
                                            <p>Discover a global network of millions of importers and exporters on our trade intelligence platform. Gain a competitive edge with our exclusive "Tree Map" feature. This innovative tool visually maps your customers' and competitors' connections, providing clear insights into their trade ecosystems.</p>
                                        </div>
                                    </div>
                                </Tab.Pane>


                                <Tab.Pane eventKey="second">
                                    <div className={styles.TrdetamOnlineIMg}>
                                        <img src="commodities.png" alt="Commodities Traded" />
                                        <div className={styles.GlbDataImg}>
                                            <h3>Check Commodities Traded Price</h3>
                                            <p>Stay up-to-date with current prices of imported & exported commodities worldwide on sourcing and selling in various markets.</p>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div className={styles.TrdetamOnlineIMg}>
                                        <img src="personalized-dashboard.png" alt="Personalized Dashboard" />
                                        <div className={styles.GlbDataImg}>
                                            <h3>Personalized Dashboard</h3>
                                            <p>Personalize your dashboard in your own way. Search for the desired data using multiple filters such as the HS Code, Product Description, Buyer, Supplier, Origin Country, Destination Country, etc. Get the latest insights at your fingertips from our intelligent online dashboard. </p>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <div className={styles.TrdetamOnlineIMg}>
                                        <img src="markets-trends.png" alt="Market Trends" />
                                        <div className={styles.GlbDataImg}>
                                            <h3>Checkout Market Trends</h3>
                                            <p>Stay up-to-date with global trade developments by uncovering the latest market trends by product and company. Utilize export-import data online to gain valuable insights and make data-driven decisions to grow your business.</p>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="five">
                                    <div className={styles.TrdetamOnlineIMg}>
                                        <img src="companys-contacts.png" alt="ompany and Employee Contacts" />
                                        <div className={styles.GlbDataImg}>
                                            <h3>Get Company and Employee Contacts</h3>
                                            <p>Get contact information of import and export companies and their key decision makers and other employees. Our contact data covered Employee Name, Designation, Location, Email, Phone Numbers, and lots more.</p>
                                        </div>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Nav variant="pill" className={styles.NavTabsFlex} direction="horizontal" gap={5} >
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className={styles.finGobaTxt}>Find Global Importers & Exporters</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" className={styles.finGobaTxt}>Check Commodities Traded Price</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" className={styles.finGobaTxt}>Personalized Dashboard</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth" className={styles.finGobaTxt}>Checkout Market Trends</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="five" className={styles.finGobaTxt}>Get Company and Employee Contacts</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    );
}

export default TradeOnlinePlatform;