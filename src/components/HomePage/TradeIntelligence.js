import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TradeIntelligence.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Form, Row } from "react-bootstrap";
import { Player } from '@lottiefiles/react-lottie-player';
import BoxReveal from "../HowWeHelpPage/box-reveal";

function TradeIntelligence() {

    return (
        <div className={styles.onlinePlatform}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8">
                            <BoxReveal boxColor={"#5046e6"} duration={0.5} >
                                <h1 className={styles.howYOur}>
                                    Global Trade Insights That Gives You The Edge<span className="text-[#5046e6]"></span>
                                </h1>
                            </BoxReveal>

                            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                                <h2 className="mt-[.5rem] text-[1rem]">
                                    {" "}
                                    <span className={styles.actnIsht}>ACTIONABLE INSIGHTS & INFORMATION</span>
                                </h2>
                            </BoxReveal>

                            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                                <div className="mt-[1.5rem]">
                                    <p>Discover the world of import and export data by using our AI-Powered Intelligent Trade database.</p>
                                </div>
                            </BoxReveal>

                            <BoxReveal boxColor={"#5046e6"} duration={0.5}>

                                <div className={styles.tradeText}>

                                    <Row>

                                        <Col sm="7">
                                            <Form.Control className={styles.frokDemo} column sm="2" type="text" placeholder="Enter Your Email" />
                                        </Col>
                                        <Col sm="4">
                                            <div className={styles.devidt}>
                                                <a href="#freetrails" className={styles.TrlBtn} > Free Trial</a>
                                            </div>
                                        </Col>

                                    </Row>
                                    <div className={styles.captImg}>
                                        {/* <img src="capterra.png" alt="capterra" />
                                         <img src="g2.png" alt="g2" /> */}
                                        <img src="iso.png" alt="iso" />
                                    </div>

                                </div>

                            </BoxReveal>
                        </div>

                        {/* <div className={styles.tradeText}>
                            <h1>Global Trade Insights That Gives You The Edge</h1>
                            <h3>ACTIONABLE INSIGHTS & INFORMATION</h3>
                            <p>Discover the world of import and export data by using our AI-Powered Intelligent Trade database.</p>
                            <Row>

                                <Col ms="12">
                                    <div className={styles.linanchdem}>
                                        <Form.Control className={styles.frokDemo} column sm="2" type="text" placeholder="Enter Your Email" />
                                        <a href="#freetrails" className={styles.TrlBtn} > Free Trial</a>
                                    </div>
                                </Col>

                            </Row>
                            <div className={styles.captImg}>
                                <img src="capterra.png" alt="captera" />
                                <img src="g2.png" alt="g2" />
                        <img src="iso.png" alt="iso" />
                    </div>
                </div> */}
                    </Col>
                    <Col md={6}>
                        <div className={styles.tradeBg}>
                            {/* <img src="tradeBg.png" /> */}
                            <Player
                                autoplay
                                loop
                                src="https://lottie.host/f7d12853-6515-4149-aa1f-89b79edfa439/JfrbWvVka0.json"
                                // src="https://lottie.host/f628bd7d-9ca5-4bfe-944f-e8ae6afed835/TdicbjfosJ.json"
                                style={{}}
                            >
                                {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
                            </Player>
                        </div>
                    </Col>
                </Row>
            </Container >
        </div >
    );
}

export default TradeIntelligence;