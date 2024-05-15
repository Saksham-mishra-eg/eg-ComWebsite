import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./FaqPlanPricing.module.css";
import { Card, Container, Col, Row } from "react-bootstrap";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

function FaqPlanPricing() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  const toggleAll = () => {
    setOpen1(!open1);
    setOpen2(!open2);
    setOpen3(!open3);
    setOpen4(!open4);
    setOpen5(!open5);
  };

  return (
    <div className={styles.FaQuestionsBg}>
    <Container>
        <Row>
            <Col md={12}>
                <div className={styles.FaQuestionsText}>
                    <h2>Plans and Pricing</h2>
                    {/* <a href="#showall">Show All</a> */}
                    <Button onClick={toggleAll} variant="secondary">
                        {open1 || open2 || open3 || open4 || open5  ? 'Close All' : 'Open All'}
                    </Button>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <Card className={styles.CllaseCard} >
                    <Card.Body className={styles.CllaseCardBody} >
                        <Button className={styles.btnPromeColaspe}
                            onClick={() => setOpen1(!open1)}
                            aria-controls="example-collapse-text-1"
                            aria-expanded={open1}
                        >
                           What are the data plans you offer?
                            {open1 ? <BsChevronUp /> : <BsChevronDown />}
                        </Button>
                        <Collapse in={open1}>
                            <div id="example-collapse-text-1" className={styles.bodytextColssp}>
                            We offer 4 different data plans – Starter, Essential, Expert and Customized Plan.
                            </div>
                        </Collapse>
                    </Card.Body>
                </Card>
                <Card className={styles.CllaseCard} >
                    <Card.Body className={styles.CllaseCardBody} >
                        <Button className={styles.btnPromeColaspe}
                            onClick={() => setOpen2(!open2)}
                            aria-controls="example-collapse-text-2"
                            aria-expanded={open2}
                        >
                           Can I get a free trial?
                            {open2 ? <BsChevronUp /> : <BsChevronDown />}
                        </Button>
                        <Collapse in={open2}>
                            <div id="example-collapse-text-2" className={styles.bodytextColssp}>
                                Another collapse item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </Collapse>
                    </Card.Body>
                </Card>
                <Card className={styles.CllaseCard} >
                    <Card.Body className={styles.CllaseCardBody} >
                        <Button className={styles.btnPromeColaspe}
                            onClick={() => setOpen3(!open3)}
                            aria-controls="example-collapse-text-3"
                            aria-expanded={open3}
                        >
                           How does the point system work for my data download?
                            {open3 ? <BsChevronUp /> : <BsChevronDown />}
                        </Button>
                        <Collapse in={open3}>
                            <div id="example-collapse-text-3" className={styles.bodytextColssp}>
                                Another collapse item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </Collapse>
                    </Card.Body>
                </Card>
                <Card className={styles.CllaseCard} >
                    <Card.Body className={styles.CllaseCardBody} >
                        <Button className={styles.btnPromeColaspe}
                            onClick={() => setOpen4(!open4)}
                            aria-controls="example-collapse-text-4"
                            aria-expanded={open4}
                        >
                           What are the payment modes?
                            {open4 ? <BsChevronUp /> : <BsChevronDown />}
                        </Button>
                        <Collapse in={open4}>
                            <div id="example-collapse-text-4" className={styles.bodytextColssp}>
                                Another collapse item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </Collapse>
                    </Card.Body>
                </Card>
                <Card className={styles.CllaseCard} >
                    <Card.Body className={styles.CllaseCardBody} >
                        <Button className={styles.btnPromeColaspe}
                            onClick={() => setOpen5(!open5)}
                            aria-controls="example-collapse-text-5"
                            aria-expanded={open5}
                        >
                            How can I contact you for creating my Customized Data Plan to suit my requirement and budget?
                            {open5 ? <BsChevronUp /> : <BsChevronDown />}
                        </Button>
                        <Collapse in={open5}>
                            <div id="example-collapse-text-5" className={styles.bodytextColssp}>
                                Another collapse item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </Collapse>
                    </Card.Body>
                </Card>
              
            </Col>
        </Row>

    </Container>
</div>
  );
}

export default FaqPlanPricing;