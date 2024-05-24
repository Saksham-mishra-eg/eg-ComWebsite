import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Clients.module.css";
import { Container, Row } from "react-bootstrap";


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
                            <img src="clientsImg.png" alt="clients" />
                        </div>
                    </div>
                </Row>
            </Container>
        </div>

    );
}


export default Clients;