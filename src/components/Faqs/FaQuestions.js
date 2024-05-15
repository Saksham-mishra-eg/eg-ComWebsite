import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./FaQuestions.module.css";
import Container from 'react-bootstrap/Container';
import { Card, Col, Row } from "react-bootstrap";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';


function FaQuestions() {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    const [open9, setOpen9] = useState(false);
    const [open10, setOpen10] = useState(false);
    const [open11, setOpen11] = useState(false);
    const [open12, setOpen12] = useState(false);

    const toggleAll = () => {
        setOpen1(!open1);
        setOpen2(!open2);
        setOpen3(!open3);
        setOpen4(!open4);
        setOpen5(!open5);
        setOpen6(!open6);
        setOpen7(!open7);
        setOpen8(!open8);
        setOpen9(!open9);
        setOpen10(!open10);
        setOpen11(!open11);
        setOpen12(!open12);
    };

    return (
        <div className={styles.FaQuestionsBg}>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.FaQuestionsText}>
                            <h2>About Our Ploatform and Data</h2>
                            {/* <a href="#showall">Show All</a> */}
                            <Button onClick={toggleAll} variant="secondary">
                                {open1 || open2 || open3 || open4 || open5 || open6 || open7 || open8 || open9 || open10 || open11 || open12 ? 'Close All' : 'Open All'}
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
                                    What is Export Genius?
                                    {open1 ? <BsChevronUp /> : <BsChevronDown />}
                                </Button>
                                <Collapse in={open1}>
                                    <div id="example-collapse-text-1" className={styles.bodytextColssp}>
                                        Export Genius is a leading market research company, providing import-export trade data online of 190+ Countries around the globe. We have 10 years of experience in the industry and the trust that clients have shown in us is commendable. We provide an online platform to access global trade data by Importers, Exporters, Products, and Markets and so on that is presented in neat, meaningful and relevant charts for having quick analysis.
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
                                    How many countries’ data can I access on Export Genius?
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
                                    How many countries’ exclusive data is available in your database?
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
                                    How many types of data do you provide?
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
                                    Can I access the contact information of companies and their employees?
                                    {open5 ? <BsChevronUp /> : <BsChevronDown />}
                                </Button>
                                <Collapse in={open5}>
                                    <div id="example-collapse-text-5" className={styles.bodytextColssp}>
                                        Another collapse item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                        <Card className={styles.CllaseCard} >
                            <Card.Body className={styles.CllaseCardBody} >
                                <Button className={styles.btnPromeColaspe}
                                    onClick={() => setOpen6(!open6)}
                                    aria-controls="example-collapse-text-6"
                                    aria-expanded={open6}
                                >
                                    Can I search data online?
                                    {open6 ? <BsChevronUp /> : <BsChevronDown />}
                                </Button>
                                <Collapse in={open6}>
                                    <div id="example-collapse-text-6" className={styles.bodytextColssp}>
                                        Another collapse item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                        <Card className={styles.CllaseCard} >
                            <Card.Body className={styles.CllaseCardBody} >
                                <Button className={styles.btnPromeColaspe}
                                    onClick={() => setOpen7(!open7)}
                                    aria-controls="example-collapse-text-7"
                                    aria-expanded={open7}
                                >
                                    What is the source of data, its authenticity and accuracy?
                                    {open7 ? <BsChevronUp /> : <BsChevronDown />}
                                </Button>
                                <Collapse in={open7}>
                                    <div id="example-collapse-text-7" className={styles.bodytextColssp}>
                                        Another collapse item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                        <Card className={styles.CllaseCard} >
                            <Card.Body className={styles.CllaseCardBody} >
                                <Button className={styles.btnPromeColaspe}
                                    onClick={() => setOpen8(!open8)}
                                    aria-controls="example-collapse-text-8"
                                    aria-expanded={open8}
                                >
                                    How many countries’ exclusive data is available in your database?
                                    {open8 ? <BsChevronUp /> : <BsChevronDown />}
                                </Button>
                                <Collapse in={open8}>
                                    <div id="example-collapse-text-8" className={styles.bodytextColssp}>
                                        Another collapse item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                        <Card className={styles.CllaseCard} >
                            <Card.Body className={styles.CllaseCardBody} >
                                <Button className={styles.btnPromeColaspe}
                                    onClick={() => setOpen9(!open9)}
                                    aria-controls="example-collapse-text-9"
                                    aria-expanded={open9}
                                >
                                    How many types of data do you provide?
                                    {open9 ? <BsChevronUp /> : <BsChevronDown />}
                                </Button>
                                <Collapse in={open9}>
                                    <div id="example-collapse-text-9" className={styles.bodytextColssp}>
                                        Another collapse item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                        <Card className={styles.CllaseCard} >
                            <Card.Body className={styles.CllaseCardBody} >
                                <Button className={styles.btnPromeColaspe}
                                    onClick={() => setOpen10(!open10)}
                                    aria-controls="example-collapse-text-10"
                                    aria-expanded={open10}
                                >
                                    Can I access the contact information of companies and their employees?
                                    {open10 ? <BsChevronUp /> : <BsChevronDown />}
                                </Button>
                                <Collapse in={open10}>
                                    <div id="example-collapse-text-10" className={styles.bodytextColssp}>
                                        Another collapse item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                        <Card className={styles.CllaseCard} >
                            <Card.Body className={styles.CllaseCardBody} >
                                <Button className={styles.btnPromeColaspe}
                                    onClick={() => setOpen11(!open11)}
                                    aria-controls="example-collapse-text-11"
                                    aria-expanded={open11}
                                >
                                    How many countries’ exclusive data is available in your database?
                                    {open11 ? <BsChevronUp /> : <BsChevronDown />}
                                </Button>
                                <Collapse in={open11}>
                                    <div id="example-collapse-text-11" className={styles.bodytextColssp}>
                                        Another collapse item. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                </Collapse>
                            </Card.Body>
                        </Card>
                        <Card className={styles.CllaseCard} >
                            <Card.Body className={styles.CllaseCardBody} >
                                <Button className={styles.btnPromeColaspe}
                                    onClick={() => setOpen12(!open12)}
                                    aria-controls="example-collapse-text-12"
                                    aria-expanded={open12}
                                >
                                    What is the source of data, its authenticity and accuracy?
                                    {open12 ? <BsChevronUp /> : <BsChevronDown />}
                                </Button>
                                <Collapse in={open12}>
                                    <div id="example-collapse-text-12" className={styles.bodytextColssp}>
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

export default FaQuestions;