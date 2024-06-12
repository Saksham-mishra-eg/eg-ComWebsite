import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TableDataCountry.module.css";
import { Row, Col, Container } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon'

import "./flag.css"

import { ProductService } from './CustomerService';

function TableDataCountry() {

    const [products, setProducts] = useState([]);
    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-download" text />;

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    const imageBodyTemplate = (rowData) => {
        return (
            <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={rowData.image} alt={rowData.country} style={{ width: '30px', height: '30px' }} />
            </a>
        );
    };

    const countryBodyTemplate = (rowData) => {
        const flagUrl = `country-map/${rowData.country.toLowerCase().replace(/ /g, '-')}.png`;
        return (
            <div>
                <img src={flagUrl} alt={rowData.country} style={{ width: '20px', height: '15px', marginRight: '8px' }} />
                <span>{rowData.country}</span>
            </div>
        );
    };

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        continent: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        country: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        dataType: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        direction: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
    });

    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
    };


    const renderHeader = () => {
        return (
            <div className="flex justify-content-end">
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </IconField>
            </div>
        );
    };

    const header = renderHeader();

    return (
        <div className={styles.TableDataCountryBg}>
            <Container fluid>
                <Row>
                    <Col>
                    <div className="card tblCard">
                    <DataTable value={products} scrollable scrollHeight="400px" paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} globalFilterFields={['continent', 'country', 'dataType', 'direction']} filters={filters} tableStyle={{ minWidth: '50rem' }}
                    paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                            <Column field="continent" header="Continent" sortable ></Column>
                            <Column field="country" header="Country" body={countryBodyTemplate} sortable ></Column>
                            <Column field="dataType" header="Data Type" sortable ></Column>
                            <Column field="direction" header="Direction" sortable ></Column>
                            <Column field="dataCoverage" header="Data Coverage" sortable ></Column>
                            <Column field="dataFields" header="Data Field" sortable style={{ width: '30%' }} ></Column>
                            <Column field="dataAvailability" header="Data Availability" sortable ></Column>
                            <Column field="image"  body={imageBodyTemplate} header="Sample" sortable ></Column>
                        </DataTable>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default TableDataCountry;