import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TradedataMap.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row, Tab, Nav } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import './customStyles.css';

function TradedataMap() {
    const map = 'asia.png'
    const Africamap = 'africa-map.png'
    const Americamap = 'america-map.png'
    const Europemap = 'europe-map.png'
    const Oceaniamap = 'oceania-map.png'

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();  // Initial check

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className={styles.TradedataMapOnline}>
            <Container>
                <Row>
                    <Col md={5}>
                        <div className={styles.WrlLrgTxt}>
                            <h2>Prime Center for  <span>Import & Export</span> Data  <img src="arow.png" /> </h2>
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className={styles.WrlLrgBox}>
                            <p>The all-in-one platform allows you to access detailed Customs Data,  Statistical Data, Mirror Data, Bill of Lading Data, Suez Canal Bill of Lading Data, Transit Data, and Cargo BL Data for your desired country. Gain strategic insights from the world’s most trusted trade intelligence platform. </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="Asia">
                            <Row>
                                <Col sm={12}>
                                    <div className={styles.continentTabs}>
                                        <Nav
                                            variant="pills"
                                            className={`flex-row justify-content-evenly ${isMobile ? 'nav-mobile' : ''}`}
                                            direction="horizontal"
                                            gap={5}
                                        >
                                            <Nav.Item>
                                                <Nav.Link className={styles.tabsCntnt} eventKey="Asia">Asia</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className={styles.tabsCntnt} eventKey="Africa">Africa</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className={styles.tabsCntnt} eventKey="America">America</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className={styles.tabsCntnt} eventKey="Europe">Europe</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className={styles.tabsCntnt} eventKey="Oceania">Oceania</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                </Col>
                                <Col sm={12}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="Asia">
                                            <Row>
                                                <Col md={4}>
                                                    <div className={styles.mapImg}>
                                                        <img src={map} alt="map asia" />
                                                    </div>
                                                </Col>
                                                <Col md={7}>
                                                    <div className={styles.ContntSecton}>
                                                        <div className={styles.CntntTextBr}>
                                                            <h3>Asia</h3>
                                                        </div>
                                                        <ul className={styles.UListCntnt}>
                                                            <li className={styles.StstDtDatat}> <a href="#asia">Canada</a> </li>
                                                            <li className={styles.StstDtDatat}> <a href="#asia">Hong Kong</a> </li>
                                                            <li className={styles.CstmDatat}> <a href="#asia">Turkey</a> </li>
                                                            <li className={styles.CstmDatat}> <a href="#asia">Indonesia</a> </li>
                                                            <li className={styles.CstmDatat}> <a href="#asia">Singapore</a> </li>
                                                            <li className={styles.CstmDatat}> <a href="#asia">Bangladesh</a> </li>
                                                            <li className={styles.CstmDatat}> <a href="#asia">Vietnam</a> </li>
                                                            <li className={styles.CstmDatat}> <a href="#asia">Philippines</a> </li>
                                                            <li className={styles.CstmDatat}> <a href="#asia">Sri Lanka</a> </li>
                                                            <li className={styles.CstmDatat}> <a href="#asia">Pakistan</a> </li>
                                                            <li className={styles.CstmDatat}> <a href="#asia">Russia</a> </li>
                                                            <li className={styles.CstmDatat}> <a href="#asia">Thailand</a> </li>
                                                            <li className={styles.StstDtDatat}> <a href="#asia">Nepal</a> </li>
                                                            <li className={styles.CstmDatat}> <a href="#asia">Thailand</a> </li>
                                                            <li className={styles.CstmDatat}> <a href="#asia">Uzbekistan</a> </li>
                                                            <li className={styles.CstmDatat}> <a href="#asia">Vietnam</a> </li>

                                                        </ul>
                                                        <ul className={styles.DtaYpe}>
                                                            <li className={styles.CstmDt}>Detailed Customs</li>
                                                            <li className={styles.StstDt}>Statistical Data</li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Africa">
                                            <Row>
                                                <Col md={4}>
                                                    <div className={styles.mapImg}>
                                                        <img src={Africamap} alt="map africa" />
                                                    </div>
                                                </Col>
                                                <Col md={7}>
                                                    <div className={styles.ContntSecton}>
                                                        <div className={styles.CntntTextBr}>
                                                            <h3>Africa</h3>
                                                        </div>
                                                        <ul className={styles.UListCntnt}>
                                                            <li> <a href="#">Bangladesh</a> </li>
                                                            <li> <a href="#">Kazakhstan</a> </li>
                                                            <li> <a href="#">Singapore</a> </li>
                                                            <li> <a href="#">Turkey</a> </li>
                                                            <li> <a href="#">Bangladesh</a> </li>
                                                            <li> <a href="#">Kazakhstan</a> </li>
                                                            <li> <a href="#">Singapore</a> </li>
                                                            <li> <a href="#">Turkey</a> </li>
                                                            <li> <a href="#">Bangladesh</a> </li>
                                                            <li> <a href="#">Kazakhstan</a> </li>
                                                            <li> <a href="#">Singapore</a> </li>
                                                            <li> <a href="#">Turkey</a> </li>
                                                            <li> <a href="#">Bangladesh</a> </li>
                                                            <li> <a href="#">Kazakhstan</a> </li>
                                                            <li> <a href="#">Singapore</a> </li>
                                                            <li> <a href="#">Turkey</a> </li>
                                                        </ul>
                                                        <ul className={styles.DtaYpe}>
                                                            <li className={styles.CstmDt}>Detailed Customs</li>
                                                            <li className={styles.StstDt}>Statistical Data</li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="America">
                                            <Row>
                                                <Col md={4}>
                                                    <div className={styles.mapImg}>
                                                        <img src={Americamap} alt="america map" />
                                                    </div>
                                                </Col>
                                                <Col md={7}>
                                                    <div className={styles.ContntSecton}>
                                                        <div className={styles.CntntTextBr}>
                                                            <h3>America</h3>
                                                        </div>
                                                        <ul className={styles.UListCntnt}>
                                                            <li> <a href="#">Bangladesh</a> </li>
                                                            <li> <a href="#">Kazakhstan</a> </li>
                                                            <li> <a href="#">Singapore</a> </li>
                                                            <li> <a href="#">Turkey</a> </li>
                                                            <li> <a href="#">Bangladesh</a> </li>
                                                            <li> <a href="#">Kazakhstan</a> </li>
                                                            <li> <a href="#">Singapore</a> </li>
                                                            <li> <a href="#">Turkey</a> </li>
                                                            <li> <a href="#">Bangladesh</a> </li>
                                                            <li> <a href="#">Kazakhstan</a> </li>
                                                            <li> <a href="#">Singapore</a> </li>
                                                            <li> <a href="#">Turkey</a> </li>
                                                            <li> <a href="#">Bangladesh</a> </li>
                                                            <li> <a href="#">Kazakhstan</a> </li>
                                                            <li> <a href="#">Singapore</a> </li>
                                                            <li> <a href="#">Turkey</a> </li>
                                                        </ul>
                                                        <ul className={styles.DtaYpe}>
                                                            <li>Detailed Customs</li>
                                                            <li>Statistical Data</li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Europe">
                                            <Row>
                                                <Col md={4}>
                                                    <div className={styles.mapImg}>
                                                        <img src={Europemap} alt="europe map" />
                                                    </div>
                                                </Col>
                                                <Col md={7}>
                                                    <div className={styles.ContntSecton}>
                                                        <div className={styles.CntntTextBr}>
                                                            <h3>Europe</h3>
                                                        </div>
                                                        <ul className={styles.UListCntnt}>
                                                            <li> <a href="#">Bangladesh</a> </li>
                                                            <li> <a href="#">Kazakhstan</a> </li>
                                                            <li> <a href="#">Singapore</a> </li>
                                                            <li> <a href="#">Turkey</a> </li>
                                                            <li> <a href="#">Bangladesh</a> </li>
                                                            <li> <a href="#">Kazakhstan</a> </li>
                                                            <li> <a href="#">Singapore</a> </li>
                                                            <li> <a href="#">Turkey</a> </li>
                                                            <li> <a href="#">Bangladesh</a> </li>
                                                            <li> <a href="#">Kazakhstan</a> </li>
                                                            <li> <a href="#">Singapore</a> </li>
                                                            <li> <a href="#">Turkey</a> </li>
                                                            <li> <a href="#">Bangladesh</a> </li>
                                                            <li> <a href="#">Kazakhstan</a> </li>
                                                            <li> <a href="#">Singapore</a> </li>
                                                            <li> <a href="#">Turkey</a> </li>
                                                        </ul>
                                                        <ul className={styles.DtaYpe}>
                                                            <li>Detailed Customs</li>
                                                            <li>Statistical Data</li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Oceania">
                                            <Row>
                                                <Col md={4}>
                                                    <div className={styles.mapImg}>
                                                        <img src={Oceaniamap} alt="oceania map" />
                                                    </div>
                                                </Col>
                                                <Col md={7}>
                                                    <div className={styles.ContntSecton}>
                                                        <div className={styles.CntntTextBr}>
                                                            <h3>Oceania</h3>
                                                        </div>
                                                        <ul className={styles.UListCntnt}>
                                                            <li> <a href="#">Bangladesh</a> </li>
                                                            <li> <a href="#">Kazakhstan</a> </li>
                                                            <li> <a href="#">Singapore</a> </li>
                                                            <li> <a href="#">Turkey</a> </li>
                                                            <li> <a href="#">Bangladesh</a> </li>
                                                            <li> <a href="#">Kazakhstan</a> </li>
                                                            <li> <a href="#">Singapore</a> </li>
                                                            <li> <a href="#">Turkey</a> </li>
                                                            <li> <a href="#">Bangladesh</a> </li>
                                                            <li> <a href="#">Kazakhstan</a> </li>
                                                            <li> <a href="#">Singapore</a> </li>
                                                            <li> <a href="#">Turkey</a> </li>
                                                            <li> <a href="#">Bangladesh</a> </li>
                                                            <li> <a href="#">Kazakhstan</a> </li>
                                                            <li> <a href="#">Singapore</a> </li>
                                                            <li> <a href="#">Turkey</a> </li>
                                                        </ul>
                                                        <ul className={styles.DtaYpe}>
                                                            <li>Detailed Customs</li>
                                                            <li>Statistical Data</li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>

                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TradedataMap;