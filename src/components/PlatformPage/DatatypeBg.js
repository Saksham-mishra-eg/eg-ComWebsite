import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./DatatypeBg.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row} from "react-bootstrap";


function Datatypebg() {

    return (
        <div className={styles.DatatypebgOnline}>
            <Container>
                <Row>
                    <Col md={7}>
                        <div className={styles.GeGlobl}>
                            <h2>Data Type</h2>
                          <p>Access 190+ Countries’ Import-Export Data Online and analyze global market with detailed shipment information. Discover importers, exporters, markets & products and monitor competition with the help of 6 types of data we provide – Customs Data, Statistical Data, Mirror Data, Bill of Lading Data, Suez Canal Bill of Lading Data and Transit Data.</p>
                        </div>
                    </Col>
                </Row>
               
            </Container>
        </div>
    );
}

export default Datatypebg;