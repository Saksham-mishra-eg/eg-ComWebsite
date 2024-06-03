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
                                <p>We consulted Export Genius for getting an insider view of the export and import data. What’s exciting is- they offer multiple customisations that helped us in selecting the fields we needed. Their dashboard has almost everything one could ask for.</p>
                                <div className={styles.jaWriteImg}>
                                    <img src="jack3.png" alt="jack" />
                                    <h5>Jack Morton</h5>
                                    <h6>Writer</h6>
                                </div>
                            </div>

                            <div className={styles.TestiRechText}>
                                <img src="quote.png" alt="quote" />
                                <p>Data Analysis and data reviewing becomes easy with Export Genius. We were able to tap the potential markets, top-traded commodities specific to the country and check for the latest market trends. Export Genius helped us overcome limited visibility into trade flows across key industries.</p>
                                <div className={styles.jaWriteImg}>
                                    <img src="jack2.png" alt="jack" />
                                    <h5>Jack Morton</h5>
                                    <h6>Writer</h6>
                                </div>
                            </div>

                            <div className={styles.TestiRechText}>
                                <img src="quote.png" alt="quote" />
                                <p>Export Genius made it possible for me to explore data for European regions or Moldova,  Kosova, Slovenia. We ventured upon the top traded commodities, their extensive analysis and saw the headwinds for the market. . It's hard to imagine how we could have competed effectively over the years without quick access to this information.</p>
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