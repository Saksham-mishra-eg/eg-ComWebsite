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
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <div className={styles.TrdetamOnline}>
                                    <h2>TRADE INTELLIGENCE DATA <span>ONLINE PLATFORM</span> </h2>
                                    <p>
                                        Export Genius delivers global trade data online beyond expectations to businesses from different industries and geographies.
                                    </p>
                                </div>
                                <div className={styles.TrdetamOnlineIMg}>
                                    <img src="find-global.png" alt="Global Data" />
                                </div>
                            </Tab.Pane>


                            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                            <Tab.Pane eventKey="third">Second tab content</Tab.Pane>
                            <Tab.Pane eventKey="fourth">Second tab content</Tab.Pane>
                            <Tab.Pane eventKey="five">Second tab content</Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Nav variant="pill" className={styles.NavTabsFlex} direction="horizontal" gap={5} >
                            <Nav.Item>
                                <Nav.Link eventKey="first" className={styles.finGobaTxt}>Find Global Importers and Exporters</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" className={styles.finGobaTxt}>Check Commodities Traded Price</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" className={styles.finGobaTxt}>Personalized Dashboard</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth" className={styles.finGobaTxt}>Review Market Trends</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="five" className={styles.finGobaTxt}>Get Company's and Employee's Contacts</Nav.Link>
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