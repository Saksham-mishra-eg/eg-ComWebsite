import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./StatsScheduleDemo.module.css";
import { Col, Container, Row } from "react-bootstrap";
import React from 'react';
import GlobalTradeStats from "./GlobalTradeStats";


function StatsScheduleDemo() {

    return (
        <div className={styles.StatsDemoSection}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.briadbisemo}>
                            <div className={styles.TextEnrichtrd}>
                                <GlobalTradeStats />
                            </div>
                            <div className={styles.Iframdemobcs}>
                                <iframe
                                    src="https://app.squarespacescheduling.com/schedule.php?owner=24269515"
                                    title="Schedule Appointment"
                                    width="100%"
                                    height="560"
                                    frameBorder="0"
                                    style={{ maxHeight: 'none', overflow: 'hidden', height: '100%' }}
                                ></iframe>
                                <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>

    );
}


export default StatsScheduleDemo;