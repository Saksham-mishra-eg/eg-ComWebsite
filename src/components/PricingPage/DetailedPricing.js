import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./DetailedPricing.module.css";
import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import React, { useContext } from 'react';
import { PricingContext } from './PricingContext';

function DetailedPricing() {
    const { isUSD, isMonthly } = useContext(PricingContext);


    const starter = {
        USD: { monthly: 1400, yearly: 250 },
        INR: { monthly: 100000, yearly: 20000 },
    };

    const essential = {
        USD: { monthly: 4000, yearly: 500 },
        INR: { monthly: 300000, yearly: 37500 },
    };

    const expert = {
        USD: { monthly: 9000, yearly: 1200 },
        INR: { monthly: 700000, yearly: 95000 },
    };

    const excelDownloadStarter = isMonthly ? "3,60,000 Points" : "30,000 Points/ Month";
    const excelDownloadEssential = isMonthly ? "10,80,000 Points" : "90,000 Points/ Month";
    const excelDownloadExpert = isMonthly ? "24,00,000 Points" : "2,00,000 Points/ Month";

    const dataAccessStarter = isMonthly ? "Data Access Jan 2020 Onwards" : "3 Months Historical Data Acces";
    const dataAccessEssential = isMonthly ? "Data Access Jan 2019 Onwards" : "3 Months Historical Data Acces";
    const dataAccessExpert = isMonthly ? "Data Access Jan 2010 Onwards" : "3 Months Historical Data Acces";

    const accountValidationStarter = isMonthly ? "1 Year" : "1 Month";
    const accountValidationEssential = isMonthly ? "1 Year" : "1 Month";
    const accountValidationExpert = isMonthly ? "1 Year" : "1 Month";

    const employeeContctsStarter = isMonthly ? "5000 Points" : "300 Points";
    const employeeContctsEssential = isMonthly ? "10000 Points" : "600 Points";
    const employeeContctsExpert = isMonthly ? "30000 Points" : "1800 Points";

    return (
        <div className={styles.DetailedPricingBg} id="comparePlan">
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
                                    <th>{isUSD ? `$${isMonthly ? starter.USD.monthly : starter.USD.yearly}` : `₹${isMonthly ? starter.INR.monthly : starter.INR.yearly}`}</th>
                                    <th>{isUSD ? `$${isMonthly ? essential.USD.monthly : essential.USD.yearly}` : `₹${isMonthly ? essential.INR.monthly : essential.INR.yearly}`}</th>
                                    <th>{isUSD ? `$${isMonthly ? expert.USD.monthly : expert.USD.yearly}` : `₹${isMonthly ? expert.INR.monthly : expert.INR.yearly}`}</th>
                                </tr>
                                <tr>
                                    <th>Countries Covered</th>
                                    <td>India, Mexico (Sea Mode), Argentina, Chile, Colombia, Ecuador, Paraguay, Peru, Uruguay and Venezuela... <a href="viewall">View All</a> </td>
                                    <td>Starter Plan All Countries + Bangladesh, Bolivia, Botswana, Cote d Ivoire, Ethiopia... <a href="viewall">View All</a></td>
                                    <td>Starter & Essential Plan All Countries + Angola, Cameroon, Chad, DR Congo, Ghana, <a href="viewall">View All</a> </td>
                                </tr>
                                <tr>
                                    <th>Advanced Searches</th>
                                    <td>500 Per Month</td>
                                    <td>Unlimited Searches</td>
                                    <td>Unlimited Searches</td>
                                </tr>
                                <tr>
                                    <th>Trade Data for Excel Download</th>
                                    <td>{excelDownloadStarter}</td>
                                    <td>{excelDownloadEssential}</td>
                                    <td>{excelDownloadExpert}</td>
                                </tr>
                                <tr>
                                    <th>Employee and Company Contact Information <small>(Email and Phone Number)</small> </th>
                                    <td>{employeeContctsStarter}</td>
                                    <td>{employeeContctsEssential}</td>
                                    <td>{employeeContctsExpert}</td>
                                </tr>
                                <tr>
                                    <th>Historical Data Access</th>
                                    <td>{dataAccessStarter}</td>
                                    <td>{dataAccessEssential}</td>
                                    <td>{dataAccessExpert}</td>
                                </tr>
                                <tr>
                                    <th>Account Validation</th>
                                    <td>{accountValidationStarter}</td>
                                    <td>{accountValidationEssential}</td>
                                    <td>{accountValidationExpert}</td>
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