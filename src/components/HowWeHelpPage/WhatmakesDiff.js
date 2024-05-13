import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./WhatmakesDiff.module.css";
import { Col, Container, Row } from "react-bootstrap";


function WhatmakesDiff() {


    return (
        <div className={styles.WhatmakesDiffBG}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.Whtmakesoems}>
                            <h2>What makes Export Genius Different from the rest?</h2>
                            <p>
                                Gain instant access to our trade intelligence online platform and get valuable import-export data to turn information into powerful insights.
                            </p>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className={styles.DirrderRest}>
                            <div className={styles.WhatmakesDiffText}>
                                <img src="report.png" alt="Data report" />
                                <h3>Customized Reports</h3>
                                <p>Our trade data specialists combine data and their professional knowledge </p>
                                <a href="#readmore">Read more...</a>
                            </div>
                            <div className={styles.WhatmakesDiffText}>
                                <img src="verrify.png" alt="Quality Data" />
                                <h3>Verified & Quality Data</h3>
                                <p>We ensure that our database of over a billion records .</p>
                                <a href="#readmore">Read more...</a>
                            </div>
                            <div className={styles.WhatmakesDiffText}>
                                <img src="data-visualizatios.png" alt="visualizatios" />
                                <h3>Visualize Data</h3>
                                <p>Analyze global trade data by importer, exporter, HS Code, </p>
                                <a href="#readmore">Read more...</a>
                            </div>
                            <div className={styles.WhatmakesDiffText}>
                                <img src="access-control.png" alt="Data Access" />
                                <h3>Unlimited Data Access</h3>
                                <p>There is no limit to access global trade data,   </p>
                                <a href="#readmore">Read more...</a>
                            </div>

                            <div className={styles.WhatmakesDiffText}>
                                <img src="compehensive.png" alt="Comprehensive" />
                                <h3>Comprehensive Information</h3>
                                <p>Import-export data covers precise shipment information</p>
                                <a href="#readmore">Read more...</a>
                            </div>
                            <div className={styles.WhatmakesDiffText}>
                                <img src="verrify.png" alt="Quality Data" />
                                <h3>Verified & Quality Data</h3>
                                <p>We ensure that our database of over a billion records .</p>
                                <a href="#readmore">Read more...</a>
                            </div>
                            <div className={styles.WhatmakesDiffText}>
                                <img src="data-visualizatios.png" alt="visualizatios" />
                                <h3>Visualize Data</h3>
                                <p>Analyze global trade data by importer, exporter, HS Code, </p>
                                <a href="#readmore">Read more...</a>
                            </div>
                            <div className={styles.WhatmakesDiffText}>
                                <img src="access-control.png" alt="Data Access" />
                                <h3>Unlimited Data Access</h3>
                                <p>There is no limit to access global trade data,   </p>
                                <a href="#readmore">Read more...</a>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>

    );
}


export default WhatmakesDiff;