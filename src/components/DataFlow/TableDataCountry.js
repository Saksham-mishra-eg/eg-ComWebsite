import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TableDataCountry.module.css";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "./flag.css"

import { ProductService } from './CustomerService';


function TableDataCountry() {

    const [products, setProducts] = useState([]);


    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    
    const priceBodyTemplate = (product) => {
        return formatCurrency(product.price);
    };

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);


    return (
        <div className={styles.TableDataCountryBg}>
            <Container fluid>
                <Row>
                    <div className={styles.conrinentDataTble}>
                        <div className="card">
                            <DataTable value={products} removableSort tableStyle={{ minWidth: '50rem' }}>
                                <Column field="code" header="Code" sortable style={{ width: '20%' }}></Column>
                                <Column field="name" header="Name" sortable style={{ width: '20%' }}></Column>
                                <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ width: '20%' }}></Column>
                                <Column field="category" header="Category" sortable style={{ width: '20%' }}></Column>
                                <Column field="quantity" header="Quantity" sortable style={{ width: '20%' }}></Column>
                            </DataTable>
                        </div>
                    </div>
                </Row>

            </Container>
        </div>

    );
}

export default TableDataCountry;