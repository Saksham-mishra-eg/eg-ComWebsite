import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./DiscoverGlobaldata.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Form, Row } from "react-bootstrap";


function DiscoverGlobaldata() {

    return (
        <div className={styles.discoverGlobaldataBg}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.globDataSrch}>
                            <h1>Discover Global Data of 190+ Countries.  Get Export-Import Insights, Buyers, Suppliers, Markets Here.</h1>
                            <p>At the helm of market research, we lead the way in deciphering industry landscapes, consumer preferences, and emerging trends.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>

                        <div className={styles.GlbSrchListForm}>
                            <Form.Select className={styles.glbSlctFormSrch} aria-label="Default select example">
                                <option>Product/Hs code</option>
                                <option value="1">Product</option>
                                <option value="2">Hs Code</option>
                                <option value="3">Data</option>
                            </Form.Select>


                            <Form.Control className={styles.flbSlctFormSrch}
                                type="text"
                                id="textBar" placeholder="Search Product, Hs Code"
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.globDataSrch}>
                            <img src="capterra.png" alt="client start" />
                            <img src="g2.png" alt="client start" />

                        </div>
                    </Col>
                </Row>

                {/* <Row>
                    <Col md={12}>
                        <div className={styles.EnrchglobData}>
                            <hr className={styles.hrLines} />
                            <h2>Enriched Global Trade Data</h2>
                            <hr className={styles.hrLines} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.EnrichDataGlobaltr}>
                            <ul className={styles.lsitofTradedata}>
                                <li>
                                    <div className={styles.listofTrade}>
                                        <img src="countries.png" alt="countries" />
                                    </div>
                                    <div className={styles.listofTrade}>
                                        <h3>190+</h3>
                                        <h4>Countries</h4>
                                        <p>Import Export Trade Data</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listofTrade}>
                                        <img src="exclusive.png" alt="exclusive" />
                                    </div>
                                    <div className={styles.listofTrade}>
                                        <h3>55+</h3>
                                        <h4>Countries</h4>
                                        <p>Exclusive Data</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listofTrade}>
                                        <img src="detailed.png" alt="detailed" />
                                    </div>
                                    <div className={styles.listofTrade}>
                                        <h3>30+</h3>
                                        <h4>Countries</h4>
                                        <p>Detailed Custom Data</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listofTrade}>
                                        <img src="company.png" alt="company" />
                                    </div>
                                    <div className={styles.listofTrade}>
                                        <h3>10M+</h3>
                                        <h4>Company’s</h4>
                                        <p>and Employee’s Contact</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row> */}
            </Container>
        </div>
    );
}

export default DiscoverGlobaldata;