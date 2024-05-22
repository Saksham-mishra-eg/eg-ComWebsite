import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CommentTestimonial.module.css";
import { Col, Container, Row } from "react-bootstrap";

function CommentTestimonial() {

    return (

        <div className={styles.TestiCommentBg}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.TesmTheding}>
                            <h2>Testimonials</h2>
                            <hr className={styles.hrlintemondil} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.Writerjack}>
                            <div className={styles.TestiRechText}>
                                <img src="quote.png" alt="quote" />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley .</p>
                                <div className={styles.jaWriteImg}>
                                    <img src="jack3.png" alt="jack" />
                                    <h5>Jack Morton</h5>
                                    <h6>Writer</h6>
                                </div>
                            </div>

                            <div className={styles.TestiRechText}>
                                <img src="quote.png" alt="quote" />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley .</p>
                                <div className={styles.jaWriteImg}>
                                    <img src="jack2.png" alt="jack" />
                                    <h5>Jack Morton</h5>
                                    <h6>Writer</h6>
                                </div>
                            </div>

                            <div className={styles.TestiRechText}>
                                <img src="quote.png" alt="quote" />
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley .</p>
                                <div className={styles.jaWriteImg}>
                                    <img src="jack1.png" alt="jack" />
                                    <h5>Jack Morton</h5>
                                    <h6>Writer</h6>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CommentTestimonial;