import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ExclusiveData.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";


function ExclusiveData() {

    return (
        <div className={styles.ExclusiveDataBg}>
            <Container fluid>
                <Row>
                    <div className={styles.grnBgcolor}>
                        <div className={styles.ExclCntrdtWh}>
                            <h3>Exclusive Data </h3>
                        </div>
                        <div className={styles.ExclCntrdtGR}>
                            <ul>
                                <li>
                                    <a href="#">Bangladesh</a>
                                </li>
                                <li>
                                    <a href="#">Bolivia</a>
                                </li>
                                <li>
                                    <a href="#">Burundi</a>
                                </li>
                                <li>
                                    <a href="#">Cameroon</a>
                                </li>
                                <li>
                                    <a href="#">Chad</a>
                                </li>
                                <li>
                                    <a href="#">Costa Rica</a>
                                </li>
                                <li>
                                    <a href="#">DR Congo</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Row>

            </Container>
        </div>

    );
}

export default ExclusiveData;