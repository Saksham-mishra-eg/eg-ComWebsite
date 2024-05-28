import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./GetNews.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row, Tab, Nav } from "react-bootstrap";


function GetNews() {
    const map = 'asia.png'

    return (
        <div className={styles.GetNewsOnline}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.WrlLrgTxt}>
                            <h2>Get News & Insight </h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div className={styles.redirectBg}>
                            <img src="link.png" alt="Redirec link" />
                            <h3>Redirect</h3>
                            <h6>With Blogs</h6>
                            <p>Explore detailed Customs Data, Statistical Data,</p>
                            <a href="#">Read More..</a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.redirectBg}>
                            <img src="link.png" alt="Redirec link" />
                            <h3>Redirect</h3>
                            <h6>With Blogs</h6>
                            <p>Explore detailed Customs Data, Statistical Data,</p>
                            <a href="#">Read More..</a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.redirectBg}>
                            <img src="link.png" alt="Redirec link" />
                            <h3>Redirect</h3>
                            <h6>With Blogs</h6>
                            <p>Explore detailed Customs Data, Statistical Data,</p>
                            <a href="#">Read More..</a>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default GetNews;