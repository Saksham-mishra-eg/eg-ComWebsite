import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TradeAnalysis.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";

function TradeAnalysis() {

    return (
        <div className={styles.onlinePlatform}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className={styles.tradeText}>
                            <h1 className={styles.howYOur}>
                                Do your Trade Analysis with Global Import and Export Trade Data
                            </h1>
                            <p>Leverage the power of Global Trade data with extensive market insights for better decision-making.</p>
                            <a className={styles.Explormorebtn} href="#requestaquote"><span>Request a quote</span> </a>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.tradeBg}>
                            <img src="tradeanalysis.png" alt="trade analysis" />
                        </div>
                    </Col>
                </Row>
            </Container >
        </div >
    );
}

export default TradeAnalysis;