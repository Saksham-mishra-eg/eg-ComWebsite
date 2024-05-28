
// import React, { useEffect, } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./AllSolutionsList.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";
import { Link, Element } from 'react-scroll'


function AllSolutionsList() {

    return (
        <div className={styles.AllSolutionsListBG}>
            <Container fluid>
                <Row>
                    <div className={styles.tabsOfSolutions}>
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <div className={styles.linActivetb}>
                                        <Link activeClass="active" to="firstInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
                                        Importers
                                        </Link>

                                        <Link activeClass="active" to="secondInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
                                        Exporters
                                        </Link>
                                        <Link activeClass="active" to="thirdInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
                                        Logistics
                                        </Link>
                                        <Link activeClass="active" to="fourthInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
                                            Consulting and Research
                                        </Link>
                                        <Link activeClass="active" to="fifthInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
                                        Law Firms
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.Solutheading}>
                            <div className={styles.ForSoltinng}>

                                <Element name="test7" className={styles.elementofSlt} id="containerElement" >

                                    <Element name="firstInsideContainer" style={{
                                        marginBottom: '70px'
                                    }}>
                                        <Row>
                                            <Col md={5}>
                                                <div className={styles.imprSecoDesti}>
                                                    <h3>Importers</h3>
                                                    <p>Redefine your search for potential suppliers for your commodities from the world. Get extensive information by making use of filters. </p>
                                                    <ul className={styles.ulilistSolutin}>
                                                        <li>Monitor shipment details of your competitors and access import-export data online. </li>
                                                        <li>Check the global inbound and outbound shipments.</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col md={7}>
                                                <div className={styles.imeImageDash}>
                                                    <img src="imp-dashboard.png" alt="ime" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Element>

                                    <Element name="secondInsideContainer" style={{
                                        marginBottom: '70px'
                                    }}>
                                        <Row>
                                            <Col md={5}>
                                                <div className={styles.imprSecoDesti}>
                                                    <h3>Exporters</h3>
                                                    <p>Check out who’s your buyers and trace the competitors, latest trade insights, and global import/export of 195+ countries at our all-in-one dashboard. </p>
                                                    <ul className={styles.ulilistSolutin}>
                                                        <li>List of prospects from the registered profiles of importing/exporting companies in the global trade intelligence platform. </li>
                                                        <li>See the market share of commodities activity using global import and export data.</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col md={7}>
                                                <div className={styles.imeImageDash}>
                                                    <img src="imp-dashboard.png" alt="ime" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Element>
                                    <Element name="thirdInsideContainer" style={{
                                        marginBottom: '70px'
                                    }}>
                                       <Row>
                                            <Col md={5}>
                                                <div className={styles.imprSecoDesti}>
                                                    <h3>Logistics</h3>
                                                    <p>Optimize logistics operations, gain invaluable insights into the international trade markets, and make informed business decisions.</p>
                                                    <ul className={styles.ulilistSolutin}>
                                                        <li>Check out trade variables and metrics such as port, country, HS Code, Suppliers, Buyers & more.  </li>
                                                        <li>Analyze the overseas markets and discover potential business opportunities.</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col md={7}>
                                                <div className={styles.imeImageDash}>
                                                    <img src="imp-dashboard.png" alt="ime" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Element>
                                    <Element name="fourthInsideContainer" style={{
                                        marginBottom: '70px'
                                    }}>
                                        <Row>
                                            <Col md={5}>
                                                <div className={styles.imprSecoDesti}>
                                                    <h3>Consulting and Research Firms</h3>
                                                    <p>Harness the power of Export Genius to access the world’s trade insights and data analytics. Deliver comprehensive and actionable reports to clients. </p>
                                                    <ul className={styles.ulilistSolutin}>
                                                        <li>Make thorough research and evaluate business products and services. </li>
                                                        <li>Analyse metrics such as HSN Code, Country, Port and value, etc.</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col md={7}>
                                                <div className={styles.imeImageDash}>
                                                    <img src="imp-dashboard.png" alt="ime" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Element>
                                    <Element name="fifthInsideContainer" style={{
                                        marginBottom: '10px'
                                    }}>
                                        <Row>
                                            <Col md={5}>
                                                <div className={styles.imprSecoDesti}>
                                                    <h3>Law Firms</h3>
                                                    <p>Adhere to the legal compliance and regulate the procedures in the international trade landscape. Get access to trade data of counterfeit goods and maintain advisory relationships. </p>
                                                    <ul className={styles.ulilistSolutin}>
                                                        <li>Registered companies listed in the platform give in-depth information on company transactions. </li>
                                                        <li>Keep a check on inbound and outbound shipments while maintaining legal trading activities.</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col md={7}>
                                                <div className={styles.imeImageDash}>
                                                    <img src="imp-dashboard.png" alt="ime" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Element>
                                </Element>

                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default AllSolutionsList;
