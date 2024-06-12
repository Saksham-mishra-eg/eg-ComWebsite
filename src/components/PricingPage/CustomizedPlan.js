import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./CustomizedPlan.module.css";
import { Button, Card, CloseButton, Col, Container, Form, Nav, Row, Tab } from "react-bootstrap";
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



function CustomizedPlan() {

    // const [count, setCount] = useState(3);

    // const handleUpArrowClick = () => {
    //     setCount(count + 1);
    // };

    // const handleDownArrowClick = () => {
    //     setCount(count - 1);
    // };

    // const handleInputChange = (event) => {
    //     const newCount = parseInt(event.target.value, 10);
    //     if (!isNaN(newCount)) {
    //         setCount(newCount);
    //     }
    // };

    return (
        <div className={styles.CustmPlaand}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.PricnOverw}>
                            <h2>Make your customized plan</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <div className={styles.selcBuyCntr}>

                            <div className={styles.selcBuy}>Select Your Country to buy</div>

                            <Tab.Container id="left-tabs-example" defaultActiveKey="Asia">
                                <Row>
                                    <Col sm={3}>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link className={styles.LinkselcBuy} eventKey="Asia">Asia</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className={styles.LinkselcBuy} eventKey="Africa">Africa</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className={styles.LinkselcBuy} eventKey="America">America</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className={styles.LinkselcBuy} eventKey="Europe">Europe</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link className={styles.LinkselcBuy} eventKey="Oceania">Oceania</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col sm={9}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="Asia">
                                                <Row>
                                                    <Form className={styles.FormItemsBs}>
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-1"
                                                            label="Angola"
                                                        />
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-2"
                                                            label="Ghana"
                                                        />
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-3"
                                                            label="Sao Tome and Principe"
                                                        />
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-4"
                                                            label="Botswana"
                                                        />
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-5"
                                                            label="Kenya"
                                                        />
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-6"
                                                            label="Senegal"
                                                        />
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-7"
                                                            label="Burundi"
                                                        />
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-8"
                                                            label="Lesotho"
                                                        />
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-9"
                                                            label="Sierra Leone"
                                                        />
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-10"
                                                            label="Cameroon"
                                                        />
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-11"
                                                            label=" Liberia"
                                                        />
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-12"
                                                            label="Tanzania"
                                                        />
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-13"
                                                            label="Chad"
                                                        />
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-14"
                                                            label=" Malawi"
                                                        />
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-15"
                                                            label="Uganda"
                                                        />
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-16"
                                                            label="Cote d Ivoire"
                                                        />
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-17"
                                                            label="Namibia"
                                                        />
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-18"
                                                            label="Zambia"
                                                        />
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-19"
                                                            label="DR Congo"
                                                        />
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-20"
                                                            label="Niger"
                                                        />
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-21"
                                                            label="Zimbabwe"
                                                        />
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-22"
                                                            label="Ethiopia"
                                                        />
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-23"
                                                            label=" Nigeria"
                                                        />
                                                        <Form.Check className={styles.FormCheckbx}
                                                            type="checkbox"
                                                            id="inline-checkbox-24"
                                                            label="Zimbabwe"
                                                        />
                                                    </Form>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="Africa">Second tab content</Tab.Pane>
                                            <Tab.Pane eventKey="America">First tab content</Tab.Pane>
                                            <Tab.Pane eventKey="Europe">Second tab content</Tab.Pane>
                                            <Tab.Pane eventKey="Oceania">Second tab content</Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.YourProducts}>
                            <div className={styles.prodcth3lg}>
                                <h3>Your Products</h3>
                            </div>
                            <div className={styles.YourProducts_box}>
                                <Card className={styles.ProducBodx}>
                                    <Card.Body className={styles.cardBoddy}>
                                        <CloseButton className={styles.CloseBodybtn} aria-label="Hide" />

                                        <div className={styles.carbdTilusd}>
                                            <Card.Title className={styles.CrdTitle}>Professional </Card.Title>
                                            <Card.Text className={styles.CrdTitle}>$700/mo </Card.Text>
                                        </div>
                                        <Card.Text className={styles.CrdTixt}>Includes 1 Core Seat</Card.Text>
                                        <Card.Text className={styles.CrdTixt}>Includes 1,000 marketing contacts</Card.Text>
                                    </Card.Body>
                                </Card>
                                <div className={styles.prodcth3lg}>
                                    <h3>Select Date</h3>
                                </div>
                               
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker', 'DatePicker']}>
                                            <DatePicker label={'"to"'} openTo="year" />
                                            <DatePicker
                                                label={'"from"'}
                                                openTo="month"
                                                views={['year', 'month', 'day']}
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                
                            </div>
                            <div className={styles.BillingMonthyly}>
                                <h3>$9000 /mo</h3>
                                <p>Billed Monthaly</p>
                                <h6>Estimated cost to get started:</h6>
                                <h4>$3,890*</h4>
                                <Button className={styles.TaklSelsbn}>Talk to Sales</Button>
                                <p> <a className={styles.viewPricebn} href="view">View Price Breakdown</a> </p>
                                <p>  <a className={styles.viewPricebn} href="share"> <img src="share.png" alt="share this" /> ShareThis Price</a> </p>
                            </div>
                            <div className={styles.coushwoTxt}>
                                <p>*Cost shown also includes required, one-time
                                    <b> Professional Onboarding </b>
                                    for a fee of $3,000. <a href="learnmore"> Learn More <img src="url.png" alt="learn more" /> </a>
                                </p>
                            </div>


                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}
export default CustomizedPlan;