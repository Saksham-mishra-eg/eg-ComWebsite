import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CountriCoverd.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";

function CountriCoverd() {

    return (
        <div className={styles.CountriCoverdPorm}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className={styles.tradeBg}>
                            <img src="country-coverd.png" alt="trade analysis" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.tradeText}>
                            <h1 className={styles.howYOur}>
                                Countries Covered
                            </h1>
                            <p>Whether you want to analyze the market of a particular country or a whole continent, we provide Trade data for global Market.</p>
                            <ul className={styles.countrContinetn}>
                           
                                <li><a href="#asia">Asia Trade Data</a> </li>
                                <li><a href="#asia">Africa Trade Data</a> </li>
                                <li><a href="#asia">Latin America Trade Data</a> </li>
                                <li><a href="#asia">Europe Trade Data </a> </li>
                                
                            </ul>
                            <a className={styles.Explormorebtn} href="#requestaquote"><span>Explore All Countries Data</span> </a>
                        </div>
                    </Col>
                </Row>
            </Container >
        </div >
    );
}

export default CountriCoverd;