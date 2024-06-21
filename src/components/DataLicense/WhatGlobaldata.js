import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./WhatGlobaldata.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";

function WhatGlobaldata() {

    return (
        <div className={styles.WhatGlobaldata}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className={styles.GlbatradeImg}>
                            <img src="what-global-data.png" alt="trade analysis" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.Glbatrade}>
                            <h2>What is Global Trade Data? </h2>
                            <p>Global Trade data is a set of import-export Transactions information Which collected from various sources Such as Ports Authorities, shipping companies, Customs and other government organizations. The data is based on Documents which is used in Import and Export Business such as Import Bills, Invoices, Bill of Lading etc. we collect this data in very raw format and process it so that our client can understand Global Market better.</p>
                        </div>
                    </Col>
                </Row>
            </Container >
        </div >
    );
}

export default WhatGlobaldata;