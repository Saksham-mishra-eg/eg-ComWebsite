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
                            {/* <p>
                                Gain instant access to our trade intelligence online platform and get valuable import-export data to turn information into powerful insights.
                            </p> */}
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className={styles.DirrderRest}>
                            <div className={styles.WhatmakesDiffText}>
                                <img src="report.png" alt="Data report" />
                                <h3>Historical Data Available</h3>
                                <p>Explore the history of countries from 2012 & see how markets, global economies have changed. Analyze trends and patterns to make smarter decisions.</p>
                                <a href="#readmore">Read more...</a>
                            </div>
                            <div className={styles.WhatmakesDiffText}>
                                <img src="trends.png" alt="Quality Data" />
                                <h3>Latest Trade Insights</h3>
                                <p>With Export Genius, stay at the edge of the world. The EG dashboard features the latest market trends, trade insights of commodities, and export-import data.</p>
                                <a href="#readmore">Read more...</a>
                            </div>
                            <div className={styles.WhatmakesDiffText}>
                                <img src="data-visualizatios.png" alt="visualizatios" />
                                <h3>Easy-On-Budget</h3>
                                <p>Be Assured to have a one-dashboard that fits your trade data needs. What's even special? Our dashboard is economical and affordable</p>
                                <a href="#readmore">Read more...</a>
                            </div>
                            <div className={styles.WhatmakesDiffText}>
                                <img src="access-control.png" alt="Data Access" />
                                <h3>Personalized Dashboard </h3>
                                <p>Get a customized view of data by using multiple filters like HS Code, Product Description, Buyer, Seller, Origin, Destination, etc.</p>
                                <a href="#readmore">Read more...</a>
                            </div>

                            <div className={styles.WhatmakesDiffText}>
                                <img src="compehensive.png" alt="Comprehensive" />
                                <h3> Visually-Appealing Data</h3>
                                <p>Concise, organized data made on the basis of importer, exporter, HS Code, Product description. Discover the intricacies of global trade data with ease & clarity.</p>
                                <a href="#readmore">Read more...</a>
                            </div>
                            <div className={styles.WhatmakesDiffText}>
                                <img src="verrify.png" alt="Quality Data" />
                                <h3>Add Country and Upgrade Plan</h3>
                                <p>Access to flexible custom options to stay in control of your international trade journey. View a specific country or upgrade your plan whenever you need. </p>
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