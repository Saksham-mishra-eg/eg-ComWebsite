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
                            <h2>Prime Center for  <span>Import & Export</span> Data  <img src="arow.png" alt="arrow" /> </h2>
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
                                            <Nav.Item className={styles.navClassWidth}>
                                                <Nav.Link className={styles.tabsCntnt} eventKey="Asia">Asia</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className={styles.navClassWidth}>
                                                <Nav.Link className={styles.tabsCntnt} eventKey="Africa">Africa</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className={styles.navClassWidth}>
                                                <Nav.Link className={styles.tabsCntnt} eventKey="America">America</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className={styles.navClassWidth}>
                                                <Nav.Link className={styles.tabsCntnt} eventKey="Europe">Europe</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className={styles.navClassWidth}>
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
                                                            <li className={styles.CstmDatat}><a href="/bangladesh-import" target="_blank">Bangladesh</a></li>
                                                            <li className={styles.StstDtDatat}><a href="china-import" target="_blank">China</a></li>
                                                            <li className={styles.StstDtDatat}>Hong Kong</li>
                                                            <li className={styles.CstmDatat}><a href="/indonesia-import" target="_blank">Indonesia</a></li>
                                                            <li className={styles.StstDtDatat}><a href="iran-import" target="_blank">Iran</a></li>
                                                            <li className={styles.CstmDatat}><a href="/kazakhstan-import" target="_blank">Kazakhstan</a></li>
                                                            <li className={styles.CstmDatat}><a href="/pakistan-import" target="_blank">Pakistan</a> </li>
                                                            <li className={styles.CstmDatat}><a href="/philippines-import" target="_blank">Philippines</a></li>
                                                            <li className={styles.CstmDatat}><a href="/russia-import" target="_blank">Russia</a> </li>
                                                            <li className={styles.CstmDatat}><a href="/singapore-import" target="_blank">Singapore</a></li>
                                                            <li className={styles.CstmDatat}><a href="/sri-lanka.php" target="_blank">Sri Lanka</a> </li>
                                                            <li className={styles.StstDtDatat}>Qatar</li>
                                                            <li className={styles.CstmDatat}><a href="/uzbekistan-import" target="_blank">Uzbekistan</a></li>
                                                            <li className={styles.CstmDatat}><a href="/vietnam-import" target="_blank">Vietnam</a></li>
                                                            <li className={styles.StstDtDatat}>Taiwan</li>
                                                            <li className={styles.CstmDatat}><a href="/turkey-import" target="_blank">Turkey</a></li>
                                                            <li className={styles.CstmDatat}><a href="/ukraine-import" target="_blank">Ukraine</a></li>
                                                            <li className={styles.CstmDatat}><a href="/thailand-import" target="_blank">Thailand</a></li>
                                                            <li className={styles.StstDtDatat}><a href="thailand-import" target="_blank">Thailand</a></li>
                                                            <li className={styles.StstDtDatat}><a href="japan-import" target="_blank">Japan</a></li>

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
                                                            <li className={styles.CstmDatat}><a href="/angola-import" target="_blank">Angola</a></li>
                                                            <li className={styles.CstmDatat}><a href="/botswana-import" target="_blank">Botswana</a></li>
                                                            <li className={styles.CstmDatat}><a href="/burundi-import" target="_blank">Burundi</a></li>
                                                            <li className={styles.CstmDatat}>
                                                                <a href="/cameroon-import" target="_blank">Cameroon</a></li>
                                                            <li className={styles.CstmDatat}>
                                                                <a href="/chad-import" target="_blank">Chad</a></li>
                                                            <li className={styles.CstmDatat}><a href="/dr-congo-import" target="_blank">DR Congo</a></li>
                                                            <li className={styles.CstmDatat}><a href="/ethiopia-import" target="_blank">Ethiopia</a></li>
                                                            <li className={styles.CstmDatat}><a href="/ghana-import" target="_blank">Ghana</a></li>
                                                            <li className={styles.CstmDatat}><a href="/ivory-coast-import" target="_blank">Ivory Coast</a></li>
                                                            <li className={styles.CstmDatat}><a href="/kenya-import" target="_blank">Kenya</a></li>
                                                            <li className={styles.CstmDatat}><a href="/lesotho-import" target="_blank">Lesotho</a></li>
                                                            <li className={styles.CstmDatat}><a href="/liberia-import" target="_blank">Liberia</a></li>
                                                            <li className={styles.CstmDatat}><a href="/malawi-import" target="_blank">Malawi</a></li>
                                                            <li className={styles.CstmDatat}><a href="/namibia-import" target="_blank">Namibia</a></li>
                                                            <li className={styles.CstmDatat}> <a href="/niger-import" target="_blank">Niger</a></li>
                                                            <li className={styles.CstmDatat}><a href="/nigeria-import" target="_blank">Nigeria</a></li>
                                                            <li className={styles.CstmDatat}><a href="/sao-tome-and-principe-import" target="_blank">Sao Tome</a></li>
                                                            <li className={styles.CstmDatat}><a href="/senegal-import" target="_blank">Senegal</a></li>
                                                            <li className={styles.CstmDatat}><a href="/tanzania-import" target="_blank">Tanzania</a></li>
                                                            <li className={styles.CstmDatat}><a href="/uganda-import" target="_blank">Uganda</a></li>
                                                            <li className={styles.CstmDatat}><a href="/zambia-import" target="_blank">Zambia</a></li>
                                                            <li className={styles.CstmDatat}><a href="/zimbabwe-import" target="_blank">Zimbabwe</a></li>
                                                            <li className={styles.CstmDatat}><a href="/sierra-leone-import" target="_blank">Sierra Leone</a></li>
                                                            <li className={styles.StstDtDatat}><a href="/south-africa-import" target="_blank">South Africa</a></li>
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
                                                            <li className={styles.CstmDatat}><a href="/argentina-import" target="_blank">Argentina</a> </li>
                                                            <li className={styles.CstmDatat}><a href="/bolivia-import" target="_blank">Bolivia</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/brazil-import" target="_blank">Brazil</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/canada-import" target="_blank">Canada</a> </li>
                                                            <li className={styles.CstmDatat}><a href="/chile-import" target="_blank">Chile</a> </li>
                                                            <li className={styles.CstmDatat}><a href="/colombia-import" target="_blank">Colombia</a> </li>
                                                            <li className={styles.CstmDatat}><a href="/costa-rica" target="_blank">Costa Rica</a> </li>
                                                            <li className={styles.CstmDatat}><a href="/ecuador-import" target="_blank">Ecuador</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/guatemala-import" target="_blank">Guatemala</a> </li>
                                                            <li className={styles.CstmDatat}><a href="/guyana-import" target="_blank">Guyana</a> </li>
                                                            <li className={styles.CstmDatat}><a href="/paraguay-import" target="_blank">Paraguay</a> </li>
                                                            <li className={styles.CstmDatat}><a href="/peru-import" target="_blank">Peru</a> </li>
                                                            <li className={styles.CstmDatat}><a href="/uruguay-import" target="_blank">Uruguay</a> </li>
                                                            <li className={styles.CstmDatat}><a href="/venezuela-import" target="_blank">Venezuela</a> </li>
                                                            <li className={styles.CstmDatat}><a href="/panama-import" target="_blank">Panama</a> </li>
                                                        </ul>
                                                        <ul className={styles.DtaYpe}>
                                                            <li className={styles.CstmDt}>Detailed Customs</li>
                                                            <li className={styles.StstDt}>Statistical Data</li>
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
                                                            <li className={styles.CstmDatat}><a href="/kosovo-import" target="_blank">Kosovo</a> </li>
                                                            <li className={styles.CstmDatat}><a href="/turkey-import" target="_blank">Turkey</a> </li>
                                                            <li className={styles.CstmDatat}><a href="/ukraine-import" target="_blank">Ukraine</a> </li>
                                                            <li className={styles.CstmDatat}><a href="/russia-import" target="_blank">Russia</a> </li>
                                                            <li className={styles.CstmDatat}><a href="/uzbekistan-import" target="_blank">Uzbekistan</a> </li>
                                                            <li className={styles.CstmDatat}><a href="/moldova-import" target="_blank">Moldova </a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/austria-import" target="_blank">Austria</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/belgium-import" target="_blank">Belgium </a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/bulgaria-import" target="_blank">Bulgaria</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/croatia-import" target="_blank">Croatia</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/cyprus-import" target="_blank">Cyprus</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/czech-republic-import" target="_blank">Czech Republic</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/denmark-import" target="_blank">Denmark</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/estonia-import" target="_blank">Estonia</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/finland-import" target="_blank">Finland</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/france-import" target="_blank">France</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/germany-import" target="_blank">Germany</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/greece-import" target="_blank">Greece</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/hungary-import" target="_blank">Hungary</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/ireland-import" target="_blank">Ireland</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/italy-import" target="_blank">Italy</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/latvia-import" target="_blank">Latvia</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/lithuania-import" target="_blank">Lithuania</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/luxembourg-import" target="_blank">Luxembourg</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/malta-import" target="_blank">Malta</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/netherlands-import" target="_blank">Netherlands</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/poland-import" target="_blank">Poland</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/portugal-import" target="_blank">Portugal</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/romania-import" target="_blank">Romania</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/slovakia-import" target="_blank">Slovakia</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/slovenia-import" target="_blank">Slovenia</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/spain-import" target="_blank">Spain</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/sweden-import" target="_blank">Sweden</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/uk-import" target="_blank">UK</a> </li>
                                                        </ul>
                                                        <ul className={styles.DtaYpe}>
                                                            <li className={styles.CstmDt}>Detailed Customs</li>
                                                            <li className={styles.StstDt}>Statistical Data</li>
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
                                                            <li className={styles.CstmDatat}><a href="/fiji-import" target="_blank">Fiji</a> </li>
                                                            <li className={styles.StstDtDatat}><a href="/new-zealand-import" target="_blank">New Zealand</a> </li>
                                                        </ul>
                                                        <ul className={styles.DtaYpe}>
                                                            <li className={styles.CstmDt}>Detailed Customs</li>
                                                            <li className={styles.StstDt}>Statistical Data</li>
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