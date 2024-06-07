import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./PlatformHeader.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { SlArrowRight } from "react-icons/sl";
import { Player } from '@lottiefiles/react-lottie-player';
import BoxReveal from "../HowWeHelpPage/box-reveal";

function PlatformHeader() {

    return (
        <div className={styles.PlatformHeaderine}>
            <Container>
                <Row>
                    <Col md={6}>

                        <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8">
                            <BoxReveal boxColor={"#5046e6"} duration={0.5} >
                                <h1 className={styles.howYOur}>
                                A Comprehensive View of Global Trade Developments
                                </h1>
                            </BoxReveal>

                          

                            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                                <div className={styles.ditextorkder}>
                                    <p>Powered by quality & industry-standard import export trade data, and intelligence market insights, our platform is built to scale your pipeline and keep you ahead of the competition.
                                    </p>
                                </div>
                            </BoxReveal>

                            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                            <div className={styles.captDemobd}>
                                <a href="#freetrails" className={styles.TrlBtn} > Book Demo <SlArrowRight /> </a>
                                <a href="#insier" className={styles.getainsider}>Get an Inside View of the Dashboard! <SlArrowRight /> </a>
                            </div>
                            </BoxReveal>

                            <BoxReveal boxColor={"#5046e6"} duration={0.5}>

                            <div className={styles.captImg}>
                                {/* <img src="capterra.png" alt="capterra" />
                                <img src="g2.png" alt="g2" /> */}
                                <img src="iso.png" alt="iso" />
                            </div>

                            </BoxReveal>
                        </div>


                       
                    </Col>
                    <Col md={6}>
                        <div className={styles.tradeBg}>
                            {/* <img src="platformbg.png" alt="Platform banner" /> */}
                            <Player
                                autoplay
                                loop
                                src="https://lottie.host/b293592f-f94b-4f71-84d0-2af78cabc0e3/wKHRgNWbQX.json"
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

export default PlatformHeader;