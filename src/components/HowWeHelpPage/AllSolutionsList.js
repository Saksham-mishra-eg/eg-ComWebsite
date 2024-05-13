
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
                                            Online payments
                                        </Link>

                                        <Link activeClass="active" to="secondInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
                                            Global payments
                                        </Link>
                                        <Link activeClass="active" to="thirdInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
                                            In-person payments
                                        </Link>
                                        <Link activeClass="active" to="fourthInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
                                            Payment performance
                                        </Link>
                                        <Link activeClass="active" to="fifthInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
                                            Unified platform
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
                                                    <h5>For Solutions</h5>
                                                    <h3>Importer</h3>
                                                    <p>Find relevant & alternative suppliers of your commodity and proactively monitor shipment details of your competitors & existing partners by accessing import-export data online.</p>
                                                    <ul className={styles.ulilistSolutin}>
                                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</li>
                                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</li>
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
                                                    <h5>For Solutions</h5>
                                                    <h3>Exporter</h3>
                                                    <p>Identify new importers globally and check price of commodities which differ country to country. Find unexplored trade regions and new markets to expand your business.</p>
                                                    <ul className={styles.ulilistSolutin}>
                                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</li>
                                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</li>
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
                                                    <h5>For Solutions</h5>
                                                    <h3>Logistics</h3>
                                                    <p>Identify new importers globally and check price of commodities which differ country to country. Find unexplored trade regions and new markets to expand your business.</p>
                                                    <ul className={styles.ulilistSolutin}>
                                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</li>
                                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</li>
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
                                                    <h5>For Solutions</h5>
                                                    <h3>Corporations</h3>
                                                    <p>Identify new importers globally and check price of commodities which differ country to country. Find unexplored trade regions and new markets to expand your business.</p>
                                                    <ul className={styles.ulilistSolutin}>
                                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</li>
                                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</li>
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
                                                    <h5>For Solutions</h5>
                                                    <h3>Law Firms</h3>
                                                    <p>Identify new importers globally and check price of commodities which differ country to country. Find unexplored trade regions and new markets to expand your business.</p>
                                                    <ul className={styles.ulilistSolutin}>
                                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</li>
                                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</li>
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
