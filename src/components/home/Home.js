import React from 'react';

import { Row, Col, ProgressBar } from "react-bootstrap";
import { Card } from 'primereact/card';
// import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { BiCylinder } from "react-icons/bi";
import { FaAmbulance } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";

// import Search from '../search/Search';
// import Table from '../table/Table'
import Map from '../Map';

import './Home.css';

function Home(props) {


    return (
        <div style={{
            overflowX: 'scroll',
        }}>
            <Row>
                <Col>
                    <h1>Hello, Garima</h1>
                </Col>
                <Col style={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <p>Last Updated on 05 June, 08:22 PM IST</p>
                </Col>
            </Row>
            <Row>
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
                            Total Outreach
                        </p>
                        <p className="p-card-subtitle"  style={{
                            fontSize: '25px',
                        }}>
                            70000
                        </p>
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card className="prime-card prime-state-card">
                        <p className="p-card-title">
                            <i className="pi pi-sitemap prime-icon-style" 
                                style={{
                                    fontSize : "1em",
                                    backgroundColor: "#e2e2e2",
                                }}
                            ></i>
                            Total States
                        </p>
                        <p className="p-card-subtitle" style={{
                            fontSize: '25px',
                        }}>
                            20
                        </p>
                    </Card>
                </Col>

            </Row>
            <Row style={{
                marginBottom: "30px",
                marginTop: '20px',
            }}>
                <Col lg={12} md={12} sm={12}>
                    <h1>Community Stats :</h1>
                    <Map />
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <Card className="prime-card prime-o2-cylinder-card">
                        <p className="p-card-title">
                            O2 Cylinder Distributed
                            <BiCylinder style={{ float: 'right' }}  />
                        </p>
                        {/* <p className="p-card-subtitle"  style={{
                            fontSize: '25px',
                        }}>
                            70000
                        </p> */}
                        {/* <div style={{display: 'flex' , justifyContent: 'center' }}>
                        <div style={{ width: 150, height: 150}}>
                            <CircularProgressbarWithChildren 
                                value={66}
                                styles={buildStyles({
                                    pathColor: `rgba(62, 152, 199, ${66 / 100})`,
                                    textColor: '#f88',
                                    trailColor: '#d6d6d6',
                                    backgroundColor: '#3e98c7',
                                    fontSize: '1px',
                                })}
                            >
                                <div> 66% <br/>Reached</div>
                            </CircularProgressbarWithChildren>
                        </div>
                        </div> */}

                        <div>
                            <h4>Procured</h4>
                            <p>50</p>
                        </div>
                        <div>
                            <h4>Distributed</h4>
                            <p>30</p>
                        </div>
                        <ProgressBar animated now={60} label={"60 %"} bsPrefix="o2" />
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card className="prime-card prime-auto-ambulance-card">
                        <p className="p-card-title">
                            Auto/Ambulances
                            <FaAmbulance style={{ float: 'right' }} />
                        </p>
                        <div>
                            <h4>Procured</h4>
                            <p>80</p>
                        </div>
                        <div>
                            <h4>Distributed</h4>
                            <p>40</p>
                        </div>
                        <ProgressBar animated now={50} label={"50 %"} bsPrefix="ambulance" />
                    </Card>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card className="prime-card prime-food-packet-card">
                        <p className="p-card-title">
                            Food Packet Distributed
                            <IoFastFood style={{ float: 'right' }} />
                        </p>
                        <div>
                            <h4>Procured</h4>
                            <p>1000</p>
                        </div>
                        <div>
                            <h4>Distributed</h4>
                            <p>800</p>
                        </div>
                        <ProgressBar animated now={80} label={"80 %"} bsPrefix="food" />
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    {/* <Search />
                    <Table /> */}
                </Col>
            </Row>
        </div>
    );
}

export default Home;