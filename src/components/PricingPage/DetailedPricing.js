import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./DetailedPricing.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

function DetailedPricing() {

    return (
        <div className={styles.DetailedPricingBg}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.PricnOverw}>
                            <h2>Detailed Pricing Overview</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered>
                            <thead className={styles.StartEnstial}>
                                <tr>
                                    <th></th>
                                    <th>Starter</th>
                                    <th>Essential</th>
                                    <th>Expert</th>
                                </tr>
                            </thead>
                            <tbody className={styles.TbodyEnstial}>
                                <tr>
                                    <th>Price</th>
                                    <th>$1400</th>
                                    <th>$4000</th>
                                    <th>$9000</th>
                                </tr>
                                <tr>
                                    <th>Countries Covered</th>
                                    <td>India, Mexico (Sea Mode), Argentina, Chile, Colombia, Ecuador, Paraguay, Peru, Uruguay and Venezuela... <a href="javascript:void(0)">View All</a> </td>
                                    <td>Starter Plan All Countries + Bangladesh, Bolivia, Botswana, Cote d Ivoire, Ethiopia... <a href="javascript:void(0)">View All</a></td>
                                    <td>Starter & Essential Plan All Countries + Angola, Cameroon, Chad, DR Congo, Ghana, <a href="javascript:void(0)">View All</a> </td>
                                </tr>
                                <tr>
                                    <th>Advanced Searches</th>
                                    <td>500 Per Month</td>
                                    <td>Unlimited Searches</td>
                                    <td>Unlimited Searches</td>
                                </tr>
                                <tr>
                                    <th>Trade Data for Excel Download</th>
                                    <td>3,60,000 Points</td>
                                    <td>10,80,000 Points</td>
                                    <td>24,00,000 Points</td>
                                </tr>
                                <tr>
                                    <th>Employee and Company Contact Information <small>(Email and Phone Number)</small> </th>
                                    <td>5000 Points</td>
                                    <td>10000 Points</td>
                                    <td>30000 Points</td>
                                </tr>
                                <tr>
                                    <th>Historical Data Access</th>
                                    <td>Jan 2020 Onwards</td>
                                    <td>Jan 2019 Onwards</td>
                                    <td>Jan 2010 Onwards</td>
                                </tr>
                                <tr>
                                    <th>Account Validation</th>
                                    <td>1 Year</td>
                                    <td>1 Year</td>
                                    <td>1 Year</td>
                                </tr>
                                <tr>
                                    <th>Visualize & Charts</th>
                                    <td>Unlimited</td>
                                    <td>Unlimited</td>
                                    <td>Unlimited</td>
                                </tr>
                                <tr>
                                    <th>Add to Favourite Shipments</th>
                                    <td>Unlimited</td>
                                    <td>Unlimited</td>
                                    <td>Unlimited</td>
                                </tr>
                                <tr>
                                    <th>Frequency of Data Update</th>
                                    <td>30 Days Depending on Country</td>
                                    <td>30 Days Depending on Country</td>
                                    <td>30 Days Depending on Country</td>
                                </tr>
                                <tr>
                                    <th>Roll Over Points to Next Year</th>
                                    <td>No</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <th>Shipment Records View</th>
                                    <td>Unlimited</td>
                                    <td>Unlimited</td>
                                    <td>Unlimited</td>
                                </tr>
                                <tr>
                                    <th>Company Profile View</th>
                                    <td>Unlimited</td>
                                    <td>Unlimited</td>
                                    <td>Unlimited</td>
                                </tr>
                                <tr>
                                    <th>Trade Relationship of Companies</th>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <th>User License</th>
                                    <td>1</td>
                                    <td>5</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <th>Customer Support</th>
                                    <td>Basic</td>
                                    <td>Standard</td>
                                    <td>Priority</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DetailedPricing;