import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./PlatformHeader.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { SlArrowRight } from "react-icons/sl";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

function PlatformHeader() {

    return (
        <div className={styles.PlatformHeaderine}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className={styles.pltrtradeText}>
                            <h1>A Comprehensive View of Global Trade Developments</h1>
                            <p>Powered by quality & industry-standard import export trade data, and intelligence market insights, our platform is built to scale your pipeline and keep you ahead of the competition.</p>
                            <br />

                            <div className={styles.captDemobd}>
                                <a href="#freetrails" className={styles.TrlBtn} > Book Demo <SlArrowRight /> </a>
                                <a href="#insier" className={styles.getainsider}>Get an Inside View of the Dashboard! <SlArrowRight /> </a>
                            </div>
                            <div className={styles.captImg}>
                                <img src="capterra.png" alt="capterra" />
                                <img src="g2.png" alt="g2" />
                                <img src="iso.png" alt="iso" />
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.tradeBg}>
                            {/* <img src="platformbg.png" alt="Platform banner" /> */}
                            <Player
                                autoplay
                                loop
                                src="https://lottie.host/5909a539-0a41-46dd-ad3f-2547542b4dcf/HavB9efRRn.json"
                                style={{}}
                            >
                                <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
                            </Player>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PlatformHeader;