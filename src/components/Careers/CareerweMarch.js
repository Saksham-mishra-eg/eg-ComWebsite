import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CareerweMarch.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row} from "react-bootstrap";

function CareerweMarch() {

    return (
        <div className={styles.CareerweMarchOBg}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div  className={styles.carkeermarch}>
                           <h3>Careers At EG</h3>
                           <h1>WE MARCH AS ONE </h1>
                        </div>
                    </Col>
                </Row>
               
            </Container>
        </div>
    );
}

export default CareerweMarch;