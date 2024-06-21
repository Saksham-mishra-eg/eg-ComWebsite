import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./DiscoverGlobaldata.module.css";
import Container from 'react-bootstrap/Container';
import { Col,  Row } from "react-bootstrap";


function DiscoverGlobaldata() {

    return (
        <div className={styles.discoverGlobaldataBg}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.globDataSrch}>
                            <h1>Discover Global Data of 190+ Countries. Get Export-Import Insights, Buyers, Suppliers, Markets Here.</h1>
                            <p>At the helm of market research, we lead the way in deciphering industry landscapes, consumer preferences, and emerging trends.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {/* <Col>
                        <div className={styles.GlbSrchListForm}>
                            <Form.Select className={styles.glbSlctFormSrch} aria-label="Default select example">
                                <option>Product/Hs code</option>
                                <option value="1">Product</option>
                                <option value="2">Hs Code</option>
                                <option value="3">Data</option>
                            </Form.Select>


                            <Form.Control className={styles.flbSlctFormSrch}
                                type="text"
                                id="textBar" placeholder="Search Product, Hs Code"
                            />
                        </div>
                    </Col> */}
                </Row>
                <Row>
                    <Col>
                        {/* <div className={styles.globDataSrch}>
                            <img src="capterra.png" alt="client start" />
                            <img src="g2.png" alt="client start" />

                        </div> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DiscoverGlobaldata;