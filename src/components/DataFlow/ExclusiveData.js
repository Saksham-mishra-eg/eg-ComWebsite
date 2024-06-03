import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ExclusiveData.module.css";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";


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
                                    <a href="#bangladesh">Bangladesh</a>
                                </li>
                                <li>
                                    <a href="#bolivia">Bolivia</a>
                                </li>
                                <li>
                                    <a href="#burundi">Burundi</a>
                                </li>
                                <li>
                                    <a href="#cameroon">Cameroon</a>
                                </li>
                                <li>
                                    <a href="#chad">Chad</a>
                                </li>
                                <li>
                                    <a href="#costa">Costa Rica</a>
                                </li>
                                <li>
                                    <a href="#drcongo">DR Congo</a>
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