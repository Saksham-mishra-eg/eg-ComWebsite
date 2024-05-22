import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./WhyWork.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row} from "react-bootstrap";

function WhyWork() {

    return (
        <div className={styles.WhyWorkOBg}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div  className={styles.WhycorkEG}>
                            <div className={styles.EgWorksnt}>
                                <h2>Why Work at Export Genius?</h2>
                            </div>
                            <div className={styles.EgWorksnt}>
                               <div className={styles.VlLines}></div>
                            </div>
                            <div className={styles.EgWorksnt}>
                                <p>When You run with the pack, you have the opportunity to own the out come lead the way and be part of Purpose driven community on mission to end cyber risk. we are strong together </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default WhyWork;