import React from 'react';

import { Row, Col } from 'react-bootstrap';
import { Card } from 'primereact/card';

import Map from '../map/Map'

import './Donor.css';

function Donor(props) {
    return (
        <>
            <Row>
                <Col>
                    <h1>Hello, <i>Donor Name</i></h1>
                </Col>
                <Col style={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <p>Last Updated on 13 June, 08:22 PM IST</p>
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <Card className="prime-card prime-lives-card donor-info-card">
                        <p>
                            <b>About Project : </b><br/>  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card className="prime-card prime-lives-card">
                        <p className="p-card-title" >
                            <i className="pi pi-user prime-icon-style" 
                                style={{
                                    fontSize : "1em",
                                    backgroundColor: "#e2e2e2",
                                }}
                            >

                            </i>
                            Total Lives Impacted
                        </p>
                        <p className="p-card-subtitle"  style={{
                            fontSize: '25px',
                        }}>
                            50000
                        </p>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card className="prime-card prime-outreach-card">
                        <p className="p-card-title">
                            <i className="pi pi-user-plus prime-icon-style" 
                                style={{
                                    fontSize : "1em",
                                    backgroundColor: "#e2e2e2",
                                }}
                            ></i>
                            Total Resources Deployed
                        </p>
                        <p className="p-card-subtitle"  style={{
                            fontSize: '25px',
                        }}>
                            70000
                        </p>
                    </Card>
                </Col>
            </Row>
            <Row  style={{
                marginBottom: "30px",
                marginTop: '20px',
            }}>
                <Col lg={12} md={12} sm={12}>
                    <h1>Community Stats :</h1>
                    <Map />
                </Col>
            </Row>
        </>
    );
}

export default Donor;