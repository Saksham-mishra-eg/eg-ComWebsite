import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TradeIntelligence.module.css";
import Container from 'react-bootstrap/Container';
import { Button, Col, Form, Row } from "react-bootstrap";
import { Player } from '@lottiefiles/react-lottie-player';
import BoxReveal from "../HowWeHelpPage/box-reveal";
import EmailFormDialog from "../EmailForm/EmailFormDialog";

function TradeIntelligence() {
    const [email, setEmail] = useState("")
    const [isOpen, setIsOpen] = React.useState(false);

    // @ts-ignore
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsOpen(true)
    }

    return (
        <div className={styles.onlinePlatform}>
            <Container>
                {email && isOpen && <EmailFormDialog isOpen={isOpen} setIsOpen={setIsOpen} initialEmail={email} center={false} />}
                <Row>
                    <Col md={6}>
                        <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidde">
                            <BoxReveal boxColor={"#5046e6"} duration={0.5} >
                                <h1 className={styles.howYOur}>
                                    Global Trade Insights That Gives You The Edge<span className="text-[#5046e6]"></span>
                                </h1>
                            </BoxReveal>

                            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                                <h4 className="mt-[.5rem] text-[1rem]">
                                    {" "}
                                    <span className={styles.actnIsht}>ACTIONABLE INSIGHTS & INFORMATION</span>
                                </h4>
                            </BoxReveal>

                            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                                <div className="md:mt-[1.5rem] mt-0 lg:mt-[1.5rem]">
                                    <p>Discover the world of import and export data by using our AI-Powered Intelligent Trade database.</p>
                                </div>
                            </BoxReveal>

                            <BoxReveal boxColor={"#5046e6"} duration={0.5}>

                                <div className={styles.tradeText}>
                                    <Row>
                                        <Col>
                                            <form onSubmit={handleSubmit} className={styles.formFlext}>
                                                <Form.Control className={styles.frokDemo} value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                    column sm="2" type="text" placeholder="Enter Your Email" />
                                                <Button
                                                    type="submit"
                                                    className={styles.TrlBtn}
                                                >
                                                    Submit
                                                </Button>
                                                {/* <a href="#freetrails" className={styles.TrlBtn} > Free Trial</a> */}
                                            </form>
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