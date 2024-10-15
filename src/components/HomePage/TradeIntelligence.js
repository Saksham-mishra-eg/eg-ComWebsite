import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TradeIntelligence.module.css";
import Container from 'react-bootstrap/Container';
import { Button, Col, Form, Row } from "react-bootstrap";
import { Player } from '@lottiefiles/react-lottie-player';
import BoxReveal from "../HowWeHelpPage/box-reveal";

function TradeIntelligence() {
    const [email, setEmail] = useState("")


    // @ts-ignore
    const handleSubmit = async (e) => {
        e.preventDefault()

        const apiPayload = {
            firstName: "Home Page",
            lastName: "Query",
            countryCode: "91", // Assuming India as a default country code
            contactNumber: "0000000000",
            workEmail: email || "example@example.com",
            message: "Market Intelligence Inquiry Home Page",
            url: window.location.href || "https://dummyurl.com",
        }

        try {
            const response = await fetch(
                "https://fjgjyxhtdds.marketinsidedata.com/api/send-email-eg",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(apiPayload),
                }
            )

            const result = await response.json()

            if (response.ok) {
                alert("Form submitted successfully!")
            } else {
                alert("Form submission failed!")
            }
        } catch (error) {
            console.error("Form submission error:", error)
            alert("There was an error submitting the form. Please try again.")
        }
    }

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