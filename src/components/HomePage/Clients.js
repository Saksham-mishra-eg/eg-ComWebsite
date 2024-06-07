import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Clients.module.css";
import { Container, Row } from "react-bootstrap";
import React from "react";
// import Marquee from "react-fast-marquee";
import "./customStyles.css"

function Clients() {


    return (
        <div className={styles.oveClntsSection}>
            <Container fluid>
                <Row>
                    <div className={styles.oveClnts}>
                        <div className={styles.selitxt}>
                            <h2>Over 20,000 Clients </h2>
                            <p>World's Trust on Data for their Market Research</p>
                        </div>
                    </div>
                    <div className={styles.oveClntsImng}>
                        <div className={styles.selitxtImngf}>

                            <div className="slider">
                                <div className="slide-track">
                                    <img src="clients/client.jpg" alt="clients" />
                                    <img src="clients/client1.png" alt="clients" />
                                    <img src="clients/client2.png" alt="clients" />
                                    <img src="clients/client3.png" alt="clients" />
                                    <img src="clients/client4.png" alt="clients" />
                                    <img src="clients/client5.png" alt="clients" />
                                    <img src="clients/client6.png" alt="clients" />
                                    <img src="clients/client7.jpg" alt="clients" />
                                    <img src="clients/client8.png" alt="clients" />
                                    <img src="clients/client9.png" alt="clients" />
                                    <img src="clients/client10.png" alt="clients" />

                                 

                                    {/* Duplicate images for infinite scroll effect */}
                                    <img src="clients/client.jpg" alt="clients" />
                                    <img src="clients/client1.png" alt="clients" />
                                    <img src="clients/client2.png" alt="clients" />
                                    <img src="clients/client3.png" alt="clients" />
                                    <img src="clients/client4.png" alt="clients" />
                                    <img src="clients/client5.png" alt="clients" />
                                    <img src="clients/client6.png" alt="clients" />
                                    <img src="clients/client7.jpg" alt="clients" />
                                    <img src="clients/client8.png" alt="clients" />
                                    <img src="clients/client9.png" alt="clients" />
                                    <img src="clients/client10.png" alt="clients" />
                                </div>
                            </div>

                            {/* <ul className={styles.clientListImngs}>
                            <Marquee>
                                <li><img src="clients/client.jpg" alt="clients" /></li>
                                <li><img src="clients/client1.png" alt="clients" /></li>
                                <li><img src="clients/client2.png" alt="clients" /></li>
                                <li><img src="clients/client3.png" alt="clients" /></li>
                                <li><img src="clients/client4.png" alt="clients" /></li>
                                <li><img src="clients/client5.png" alt="clients" /></li>
                                <li><img src="clients/client7.jpg" alt="clients" /></li>
                                <li><img src="clients/client6.png" alt="clients" /></li>
                                <li><img src="clients/client8.png" alt="clients" /></li>
                                <li><img src="clients/client9.png" alt="clients" /></li>
                                <li><img src="clients/client10.png" alt="clients" /></li>
                                </Marquee>
                            </ul> */}

                        </div>
                    </div>
                </Row>
            </Container>
        </div>

    );
}


export default Clients;