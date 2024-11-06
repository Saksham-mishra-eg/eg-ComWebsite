"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ExportSolutions.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Form, Row } from "react-bootstrap";
import { Player } from '@lottiefiles/react-lottie-player';

import BoxReveal from "./box-reveal";
// import { Button } from "@/components/ui/button";

function ExportSolutions() {

    return (
        <div className={styles.ExportSolutionsBG}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden">
                            <BoxReveal boxColor={"#5046e6"} duration={0.5} >
                                <h1 className={styles.howYOur}>
                                    How You Can Make the Most from our EG Dashboard?<span className="text-[#5046e6]"></span>
                                </h1>
                            </BoxReveal>

                            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                                <div className="mt-[1.5rem]">
                                    <p className={styles.paratRadetx}>Access trade insights, explore new markets, and keep a check on your competitors with Export Genius.
                                    </p>
                                </div>
                            </BoxReveal>
                            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                                <h4 className="mt-[.5rem] text-[1rem]">
                                    <span className={styles.actnIsht}>ACTIONABLE INSIGHTS & INFORMATION</span>
                                </h4>
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

                    </Col>
                    <Col md={6}>
                        <div className={styles.tradeBg}>
                            {/* <img src="solutions.png" alt="Solutins banner" /> */}
                            <Player
                                autoplay
                                loop
                                src="https://lottie.host/9a84e5f1-c863-4535-b64f-7c34bb2cd892/Uu2Q9VVgsr.json"
                                style={{}}
                            >
                                {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
                            </Player>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ExportSolutions;