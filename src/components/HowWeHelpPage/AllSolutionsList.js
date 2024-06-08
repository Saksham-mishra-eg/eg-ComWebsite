
// import React, { useEffect, } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./AllSolutionsList.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";
import { Element } from 'react-scroll'


import 'animate.css';


function AllSolutionsList() {

    return (
        <div className={styles.AllSolutionsListBG}>

            {/* <Container fluid>
                <Row>
                    <div className={styles.tabsOfSolutions}>
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <div className={styles.linActivetb}>
                                        <Link activeClass="active" to="firstInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
                                            Importers
                                        </Link>
                                        <Link to="secondInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
                                            Exporters
                                        </Link>
                                        <Link to="thirdInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
                                            Logistics
                                        </Link>
                                        <Link to="fourthInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
                                            Consulting and Research
                                        </Link>
                                        <Link to="fifthInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
                                            Law Firms
                                        </Link>
                                        <Link to="sixthInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
                                            Investment Agencies
                                        </Link>
                                        <Link to="seventhInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
                                            Government Agencies
                                        </Link>
                                        <Link to="eighthInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
                                            Financial Institutions
                                        </Link>
                                        <Link to="ninthInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
                                            Media & Communications
                                        </Link>
                                        <Link to="tenthInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
                                            Manufacturing & Retail Companies
                                        </Link>
                                        <Link to="eleventhInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
                                            Sales & Marketing Teams
                                        </Link>
                                        <Link to="twelfthInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
                                            Corporation
                                        </Link>
                                        <Link to="thirteenthInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>
                                            Trade Promotion Councils
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Row>
            </Container> */}
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
                                                    <img src="importer.png" alt="Importers" />
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
                                                    <img src="exporter.png" alt="Exporters" />
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
                                                    <img src="logistics.png" alt="Logistics" />
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
                                                    <p>Examine international trade markets by analyzing specific data parameters including HSN Code, country, port, value, and the involved importing and exporting entities.</p>
                                                    <ul className={styles.ulilistSolutin}>
                                                        <li>Make thorough research and evaluate business products and services. </li>
                                                        <li>Analyse metrics such as HSN Code, Country, Port and value, etc.</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col md={7}>
                                                <div className={styles.imeImageDash}>
                                                    <img src="consulting-research.png" alt="Consulting" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Element>


                                    <Element name="fifthInsideContainer" style={{
                                        marginBottom: '70px'
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
                                                    <img src="law-firms.png" alt="Law Firms" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Element>


                                    <Element name="sixthInsideContainer" style={{
                                        marginBottom: '70px'
                                    }}>
                                        <Row>
                                            <Col md={5}>
                                                <div className={styles.imprSecoDesti}>
                                                    <h3>Investment Agencies</h3>
                                                    <p>Investment agencies can see a company’s credibility, past score, fraud detections, evaluate its past performance, and detect any signs of fraud.</p>
                                                    <ul className={styles.ulilistSolutin}>
                                                        <li>Assess real-time market trends, emerging sectors and evaluate investment opportunities.  </li>
                                                        <li>Monitor investment portfolios and track the impact of external factors on investment returns. </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col md={7}>
                                                <div className={styles.imeImageDash}>
                                                    <img src="investment-agencies.png" alt="Law Firms" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Element>


                                    <Element name="seventhInsideContainer" style={{
                                        marginBottom: '70px'
                                    }}>
                                        <Row>
                                            <Col md={5}>
                                                <div className={styles.imprSecoDesti}>
                                                    <h3>Government Agencies</h3>
                                                    <p>Government agencies leverage trade data to introduce effective trade regulations, such as subsidies and taxes on foreign products. </p>
                                                    <ul className={styles.ulilistSolutin}>
                                                        <li>By analyzing systematic tariffs & utilizing the largest searchable trade database covering over 195 countries. </li>
                                                        <li>Create effective regulations for subsidies, and taxes for foreign products. </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col md={7}>
                                                <div className={styles.imeImageDash}>
                                                    <img src="government-agencies.png" alt="Government Agencies" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Element>


                                    <Element name="eighthInsideContainer" style={{
                                        marginBottom: '70px'
                                    }}>
                                        <Row>
                                            <Col md={5}>
                                                <div className={styles.imprSecoDesti}>
                                                    <h3>Financial Institutions</h3>
                                                    <p>Many financial institutions like Banks and insurance providers can utilize import & export data to analyze market trends and credit risk to offer loans and taxations.</p>
                                                    <ul className={styles.ulilistSolutin}>
                                                        <li>Determine the turnover of import and export businesses, services of loans, and taxation to small and medium enterprises (SMEs). </li>
                                                        <li>Access financial aspects such as shipping volume, and value and analyze the performance of import and export companies to connect with the prospects. </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col md={7}>
                                                <div className={styles.imeImageDash}>
                                                    <img src="financial-institutions.png" alt="financial-institutions" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Element>

                                    <Element name="ninthInsideContainer" style={{
                                        marginBottom: '70px'
                                    }}>
                                        <Row>
                                            <Col md={5}>
                                                <div className={styles.imprSecoDesti}>
                                                    <h3>Media & Communications</h3>
                                                    <p>Media houses can leverage the global trade data and analyze company trade data and curate research reports depicting the expected curve in the market.</p>
                                                    <ul className={styles.ulilistSolutin}>
                                                        <li>Analyze vendor’s or company trade data and show where the market is heading to. </li>
                                                        <li>Check which commodity is getting traded from which country or port of discharge. </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col md={7}>
                                                <div className={styles.imeImageDash}>
                                                    <img src="media-communications.png" alt="Law Firms" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Element>
                                    <Element name="tenthInsideContainer" style={{
                                        marginBottom: '70px'
                                    }}>
                                        <Row>
                                            <Col md={5}>
                                                <div className={styles.imprSecoDesti}>
                                                    <h3>Manufacturing & Retail Companies</h3>
                                                    <p>Manufacturing and retail companies can utilize import and export data to identify new opportunities for market expansion or product diversification. </p>
                                                    <ul className={styles.ulilistSolutin}>
                                                        <li>Companies can assess geopolitical risks such as trade disputes or regulatory changes that impact operations.</li>
                                                        <li>Import & export data provide visibility into trade compliance requirements and regulations.</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col md={7}>
                                                <div className={styles.imeImageDash}>
                                                    <img src="retail-company.png" alt="Law Firms" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Element>
                                    <Element name="eleventhInsideContainer" style={{
                                        marginBottom: '70px'
                                    }}>
                                        <Row>
                                            <Col md={5}>
                                                <div className={styles.imprSecoDesti}>
                                                    <h3>Sales & Marketing Teams</h3>
                                                    <p>Monitor trends within your chosen commodity, market, or geographic area, formulate pricing strategies, discover fresh markets and sales opportunities, and enhance the company’s performance through valuable data insights and analytics.</p>
                                                    <ul className={styles.ulilistSolutin}>
                                                        <li>Connect with businesses from different business sectors and expand opportunities.</li>
                                                        <li>Find leads for your business through import-export customs data and check for your business requirements.</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col md={7}>
                                                <div className={styles.imeImageDash}>
                                                    <img src="sales-marketing.png" alt="Law Firms" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Element>
                                    <Element name="twelfthInsideContainer" style={{
                                        marginBottom: '70px'
                                    }}>
                                        <Row>
                                            <Col md={5}>
                                                <div className={styles.imprSecoDesti}>
                                                    <h3>Corporation</h3>
                                                    <p>Whether your business is engaged into leather & textile, FMCG, chemicals, mineral & metal or any other sector; get industry-focused data for strategic business decisions.</p>
                                                    {/* <ul className={styles.ulilistSolutin}>
                                                        <li>Connect with businesses from different business sectors and expand opportunities.</li>
                                                        <li>Find leads for your business through import-export customs data and check for your business requirements.</li>
                                                    </ul> */}
                                                </div>
                                            </Col>
                                            <Col md={7}>
                                                <div className={styles.imeImageDash}>
                                                    <img src="corporation.png" alt="Law Firms" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Element>
                                    <Element name="thirteenthInsideContainer" style={{
                                        marginBottom: '70px'
                                    }}>
                                        <Row>
                                            <Col md={5}>
                                                <div className={styles.imprSecoDesti}>
                                                    <h3>Trade Promotion Councils</h3>
                                                    <p>Trade promotion councils use import export data of their members and other essential data to compare industry growth. They access contacts of importers & exporters at our online platform and approach them to attend trade shows for exploring new opportunities.</p>
                                                    <ul className={styles.ulilistSolutin}>
                                                        <li>Ascertain the weather conditions and how it can affect the commodities.</li>
                                                        <li>Check for data country, distributors help in decision-making.</li>
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col md={7}>
                                                <div className={styles.imeImageDash}>
                                                    <img src="trade-promotion.png" alt="Law Firms" />
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
