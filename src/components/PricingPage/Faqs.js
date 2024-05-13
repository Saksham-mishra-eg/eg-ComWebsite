import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Faqs.module.css";
import Container from 'react-bootstrap/Container';
import { Accordion, Col, Row } from "react-bootstrap";


function Faqs() {

    return (
        <div className={styles.FaqsBg}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.faqheading}>
                            <h2>frequently ASKED QUESTIONS</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.acOrdingTbs}>
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0" className={styles.acronItems}>
                                    <Accordion.Header className={styles.Acroheader} > <button className={styles.acnrAtivebtn}>What is Export Genius?</button> </Accordion.Header>
                                    <Accordion.Body className={styles.acrBodyares}>
                                        Export Genius is a leading market research company, providing import-export trade data online of 190+ Countries around the globe. We have 10 years of experience in the industry and the trust that clients have shown in us is commendable. We provide an online platform to access global trade data by Importers, Exporters, Products, and Markets and so on that is presented in neat, meaningful and relevant charts for having quick analysis.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className={styles.acronItems}>
                                    <Accordion.Header className={styles.Acroheader} ><button className={styles.acnrAtivebtn}> How many countries’ data can I access on Export Genius? </button></Accordion.Header>
                                    <Accordion.Body className={styles.acrBodyares}>
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className={styles.acronItems}>
                                    <Accordion.Header className={styles.Acroheader} ><button className={styles.acnrAtivebtn}>How many countries’ exclusive data is available in your database? </button></Accordion.Header>
                                    <Accordion.Body className={styles.acrBodyares}>
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className={styles.acronItems}>
                                    <Accordion.Header className={styles.Acroheader} ><button className={styles.acnrAtivebtn}>How many types of data do you provide? </button></Accordion.Header>
                                    <Accordion.Body className={styles.acrBodyares}>
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className={styles.acronItems}>
                                    <Accordion.Header className={styles.Acroheader} ><button className={styles.acnrAtivebtn}>Can I access the contact information of companies and their employees? </button></Accordion.Header>
                                    <Accordion.Body className={styles.acrBodyares}>
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5" className={styles.acronItems}>
                                    <Accordion.Header className={styles.Acroheader} ><button className={styles.acnrAtivebtn}>Can I search data online? </button></Accordion.Header>
                                    <Accordion.Body className={styles.acrBodyares}>
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6" className={styles.acronItems}>
                                    <Accordion.Header className={styles.Acroheader} ><button className={styles.acnrAtivebtn}>What is the source of data, its authenticity and accuracy? </button></Accordion.Header>
                                    <Accordion.Body className={styles.acrBodyares}>
                                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Faqs;