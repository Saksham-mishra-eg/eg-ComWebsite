import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CustomerSupport.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row, Nav, Tab } from "react-bootstrap";



function CustomerSupport() {


    return (
        <div className={styles.CustomerSupportBg}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.CusomerSuproHead}>
                            <h2>Round-the-Clock Customer Support</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first" >

                        <Col sm={3}>
                            <div className={styles.navHeadnLetside}>
                                <Nav variant="" className="flex-column custom-tabs">
                                    <Nav.Item className={styles.navItemClsmdn}>
                                        <Nav.Link eventKey="first"> <img className={styles.supporIncsImg} src="cus-support.png" alt="support" /> Support Center </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className={styles.navItemClsmdn}>
                                        <Nav.Link eventKey="second"> <img className={styles.supporIncsImg} src="ticket.png" alt="ticket" /> Ticket Mangement</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className={styles.navItemClsmdn}>
                                        <Nav.Link eventKey="third"> <img className={styles.supporIncsImg} src="schedule.png" alt="demo" /> Schedule demo</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className={styles.navItemClsmdn}>
                                        <Nav.Link eventKey="fourth"> <img className={styles.supporIncsImg} src="help.png" alt="faq" /> FAQ</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </Col>
                        <Col sm={9}>
                            <div className={styles.tabXConterares}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className={styles.tabPaneCenter}>
                                            <h3>Support Center</h3>
                                            <div className={styles.tabpNecenflex}>
                                                <div className={styles.EmailImgeicn}>
                                                    <img src="email.png" alt="email" />
                                                    <h5>support@exportgenius.in</h5>
                                                </div>
                                                <div className={styles.EmailImgeicn}>
                                                    <img src="live-chat.png" alt="email" />
                                                    <h5>Live Chat</h5>
                                                </div>
                                                <div className={styles.EmailImgeicn}>
                                                    <img src="phone-call.png" alt="email" />
                                                    <h5>+91-9319-157-357</h5>
                                                </div>
                                                <div className={styles.EmailImgeicn}>
                                                    <img src="qrscan.png" alt="email" />
                                                    <h5>+91-9319-157-357</h5>
                                                    <p>Scan QR code & get in
                                                        touch with us</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div className={styles.tabPaneCenter}>
                                            <h3>Ticket Mangement Center</h3>
                                            <div className={styles.tabpNecenflex}>
                                                <div className={styles.EmailImgeicn}>
                                                    <img src="email.png" alt="email" />
                                                    <h5>support@exportgenius.in</h5>
                                                </div>
                                                <div className={styles.EmailImgeicn}>
                                                    <img src="live-chat.png" alt="email" />
                                                    <h5>Live Chat</h5>
                                                </div>
                                                <div className={styles.EmailImgeicn}>
                                                    <img src="phone-call.png" alt="email" />
                                                    <h5>+91-9319-157-357</h5>
                                                </div>
                                                <div className={styles.EmailImgeicn}>
                                                    <img src="qrscan.png" alt="email" />
                                                    <h5>+91-9319-157-357</h5>
                                                    <p>Scan QR code & get in
                                                        touch with us</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <div className={styles.tabPaneCenter}>
                                            <h3>Schedule demo Center</h3>
                                            <div className={styles.tabpNecenflex}>
                                                <div className={styles.EmailImgeicn}>
                                                    <img src="email.png" alt="email" />
                                                    <h5>support@exportgenius.in</h5>
                                                </div>
                                                <div className={styles.EmailImgeicn}>
                                                    <img src="live-chat.png" alt="email" />
                                                    <h5>Live Chat</h5>
                                                </div>
                                                <div className={styles.EmailImgeicn}>
                                                    <img src="phone-call.png" alt="email" />
                                                    <h5>+91-9319-157-357</h5>
                                                </div>
                                                <div className={styles.EmailImgeicn}>
                                                    <img src="qrscan.png" alt="email" />
                                                    <h5>+91-9319-157-357</h5>
                                                    <p>Scan QR code & get in
                                                        touch with us</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <div className={styles.tabPaneCenter}>
                                            <h3>FAQ Center</h3>
                                            <div className={styles.tabpNecenflex}>
                                                <div className={styles.EmailImgeicn}>
                                                    <img src="email.png" alt="email" />
                                                    <h5>support@exportgenius.in</h5>
                                                </div>
                                                <div className={styles.EmailImgeicn}>
                                                    <img src="live-chat.png" alt="email" />
                                                    <h5>Live Chat</h5>
                                                </div>
                                                <div className={styles.EmailImgeicn}>
                                                    <img src="phone-call.png" alt="email" />
                                                    <h5>+91-9319-157-357</h5>
                                                </div>
                                                <div className={styles.EmailImgeicn}>
                                                    <img src="qrscan.png" alt="email" />
                                                    <h5>+91-9319-157-357</h5>
                                                    <p>Scan QR code & get in
                                                        touch with us</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Col>

                    </Tab.Container>
                </Row>
            </Container>
        </div>
    );
}

export default CustomerSupport;