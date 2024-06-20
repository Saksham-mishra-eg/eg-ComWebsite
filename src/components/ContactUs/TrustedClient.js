import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TrustedClient.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";
import React, { useState } from 'react';


function TrustedClient() {


    return (
        <div className={styles.TrustedClientBg}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.CusomerSuproHead}>
                            <h2>Join the 20,000+ Clients Who Trust Us</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className={styles.clientIcnimgTru}>
                            <div className={styles.imgClinEn}>
                                <img src="shell.png" alt="shell" />
                            </div>
                            <div className={styles.imgClinEn}>
                                <img src="philip.png" alt="philip" />
                            </div>
                            <div className={styles.imgClinEn}>
                                <img src="motorola.png" alt="motorola" />
                            </div>
                            <div className={styles.imgClinEn}>
                                <img src="imerys.png" alt="imerys" />
                            </div>
                            <div className={styles.imgClinEn}>
                                <img src="hyundai.png" alt="hyundai" />
                            </div>
                            <div className={styles.imgClinEn}>
                                <img src="honda.png" alt="honda" />
                            </div>
                            <div className={styles.imgClinEn}>
                                <img src="healthcare.png" alt="healthcare" />
                            </div>
                            <div className={styles.imgClinEn}>
                                <img src="exonmobil.png" alt="exonmobil" />
                            </div>
                            <div className={styles.imgClinEn}>
                                <img src="coppervision.png" alt="coppervision" />
                            </div>
                            <div className={styles.imgClinEn}>
                                <img src="cipla.png" alt="cipla" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TrustedClient;