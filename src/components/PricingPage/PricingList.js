import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./PricingList.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row, Form } from "react-bootstrap";


function PricingList() {


    return (
        <div className={styles.PricingListPg}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.PrcngEvry}>
                            <h1>Pricing & Plans for Enterprises</h1>
                            <div className={styles.UsdInrBtn}>
                                <div className={styles.intToUd}>
                                    <span>INR</span>
                                    <Form>
                                        <Form.Check className={styles.radioBtnCr} type="switch" id="custom-switch" />
                                    </Form>
                                    <span>USD</span>
                                </div>
                                <div className={styles.intToUd}>
                                    <span>Monthly</span>
                                    <Form>
                                        <Form.Check className={styles.radioBtnCr} type="switch" id="custom-switch" checked />
                                    </Form>
                                    <span>Annually <br />
                                        <small className={styles.prcngOff}>(Save 20%)</small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div class={styles.OPlan}>
                            <div class={styles.OPlanPrice}>
                                <h3 class={styles.OPrice}>Starter</h3>
                                <span class={styles.OCurrency}>$1400</span>
                                <p class={styles.PeYers}>/Per Year</p>
                            </div>
                            <div class={styles.Aplytnttl}>
                                <button class={styles.AplyOBtn}>Apply Now</button>
                                <span class={styles.tryIt}>Try it</span>
                                <hr class={styles.Hrtag} />
                            </div>
                            <div class={styles.OChoices}>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <p><b>11 Countries Detailed Data</b> Argentina, Chile, Colombia,
                                        Ecuador, India, Mexico (Sea Mode)....<a className={styles.viewLLs} href="/data-flow">View All</a> </p>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <h5>Other Countries & Data Type</h5>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="close.png" alt="icon" />
                                    <h6>No Exclusive Countries</h6>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <p>Data Access Jan 2020 Onwards</p>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <p>500 Searches/ Month</p>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <p>3,60,000 Points For Trade Data Excel Download</p>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <h5>5000 Points for Contact Information</h5>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <h5>Single User License</h5>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <p>3,60,000 Points For Trade Data Excel Download</p>
                                </div>
                            </div>
                        </div>

                        <div class={styles.OPlan}>
                            <div class={styles.OPlanPrice}>
                                <h3 class={styles.OPrice}>Essential</h3>
                                <span class={styles.OCurrency}>$4000</span>
                                <p class={styles.PeYers}>/Per Year</p>
                            </div>
                            <div class={styles.Aplytnttl}>
                                <button class={styles.AplyOBtn}>Apply Now</button>
                                <span class={styles.tryIt}>Try it</span>
                                <hr class={styles.Hrtag} />
                            </div>
                            <div class={styles.OChoices}>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <p><b>30 Countries Detailed Data</b> Argentina, Bangladesh, Bolivia, Botswana, Chile, Colombia....<a className={styles.viewLLs} href="/data-flow">View All</a> </p>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <h5>Starter Plan Countries + other Countries</h5>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <h5>6 Exclusive Countries</h5>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <h5>Data Access Jan 2019 Onwards</h5>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <h5>Unlimited Searches</h5>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <p>10,80,000 Points For Trade Data Excel Download</p>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <h5>10000 Points for Contact Information</h5>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <h5>5 Users License</h5>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <p>Email, Chat and Phone Customer Support</p>
                                </div>

                            </div>
                        </div>


                        <div class={styles.OPlan}>
                            <div className={styles.OHighlight}>
                                <p className={styles.OHighlightText}>Most Popular</p>
                            </div>

                            <div class={styles.OPlanPrice}>
                                <h3 class={styles.OPrice}>Export</h3>
                                <span class={styles.OCurrency}>$17000</span>
                                <p class={styles.PeYers}>/Per Year</p>
                            </div>
                            <div class={styles.Aplytnttl}>
                                <button class={styles.AplyOBtn}>Apply Now</button>
                                <span class={styles.tryIt}>Try it</span>
                                <hr class={styles.Hrtag} />
                            </div>
                            <div class={styles.OChoices}>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <p><b>55 Countries Detailed Data</b> Angola, Argentina, Bangladesh, Bolivia, Botswana, Burundi ....<a className={styles.viewLLs} href="/data-flow">View All</a> </p>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <h5>Starter & Essential Plan Countries + other Countries and Data Type</h5>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <h5>30 Exclusive Countries</h5>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <h5>Data Access Jan 2010 Onwards</h5>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <h5>Unlimited Searches</h5>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <h5>24,00,000 Points For Trade Data Excel Download</h5>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <h5>30000 Points for Contact Information</h5>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <h5>10 Users License</h5>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <p>Priority Customer Support</p>
                                </div>

                            </div>
                        </div>


                        <div class={styles.OPlan}>
                            <div class={styles.OPlanPrice}>
                                <span class={styles.OCurrency}>Customized Plan</span>
                                <h3 class={styles.OPrice}>Make Your Own Plan</h3>
                            </div>
                            <div class={styles.Aplytnttl}>
                                <button class={styles.AplyOBtn}>Apply Now</button>
                                <span class={styles.tryIt}>Learn more</span>
                                <hr class={styles.Hrtag} />
                            </div>
                            <div class={styles.OChoices}>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <p> Customizable Countries Covered</p>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <p>Choose from 55+ Countries Detailed Data</p>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <h5>190+ Countries Cargo BL,
                                        Turkey & Thailand Detailed
                                        Data Available</h5>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <p>Data Access Jan 2019 Onwards</p>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <p>Unlimited Searches</p>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <p>10,80,000 Points For Trade Data Excel Download</p>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <p>10000 Points for Contact Information</p>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <p>5 Users License</p>
                                </div>
                                <div class={styles.OChoiceGroup}>
                                    <img src="right.png" alt="icon" />
                                    <p>Email, Chat and Phone Customer Support</p>
                                </div>

                            </div>
                        </div>
                    </Col>

                </Row>

            </Container>
        </div>
    );
}

export default PricingList;