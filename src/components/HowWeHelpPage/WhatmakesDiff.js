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
                                <p>Dive into the past of products. Explore the history of countries with our easy-to-use historical data dating back to 2012. Discover about economies, societies, and politics. Analyze trends and patterns to make smarter decisions. </p>
                                <a href="#readmore">Read more...</a>
                            </div>
                            <div className={styles.WhatmakesDiffText}>
                                <img src="verrify.png" alt="Quality Data" />
                                <h3>Latest Trade Insights</h3>
                                <p>With Export Genius, stay at the edge of the world. The EG dashboard features the latest market trends, trade insights of commodities, and export-import data.</p>
                                <a href="#readmore">Read more...</a>
                            </div>
                            <div className={styles.WhatmakesDiffText}>
                                <img src="data-visualizatios.png" alt="visualizatios" />
                                <h3>Easy-On-Budget</h3>
                                <p>With EG, Be Assured to have a one-dashboard that fits your trade data needs. What's even special? Our dashboard is relatively affordable! </p>
                                <a href="#readmore">Read more...</a>
                            </div>
                            <div className={styles.WhatmakesDiffText}>
                                <img src="access-control.png" alt="Data Access" />
                                <h3>Personalized Dashboard </h3>
                                <p>Get a customized view of the trade data. Use multiple filters like HS Code, Product Description, Buyer, Seller, Origin, Destination, etc.</p>
                                <a href="#readmore">Read more...</a>
                            </div>

                            <div className={styles.WhatmakesDiffText}>
                                <img src="compehensive.png" alt="Comprehensive" />
                                <h3> Visually-Appealing Data</h3>
                                <p>Discover organized and visually appealing global trade data analysis. Discover insights categorized by importer, exporter, HS Code, and product description. Uncover the intricacies of global trade with ease and clarity.</p>
                                <a href="#readmore">Read more...</a>
                            </div>
                            <div className={styles.WhatmakesDiffText}>
                                <img src="verrify.png" alt="Quality Data" />
                                <h3>Add Country and Upgrade Plan</h3>
                                <p>With Export Genius, you can effortlessly add any country to your coverage or upgrade your plan whenever you need. Whether you're seeking to explore new markets or access additional data insights, our flexible options ensure that you stay in control of your international trade journey. With Export Genius, the power to grow and adapt is always in your hands."</p>
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