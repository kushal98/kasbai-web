import React from 'react';

import { Col, ProgressBar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Card } from 'primereact/card';
// import { Chart } from 'primereact/chart';

import { GiLoveInjection } from 'react-icons/gi'
import { MdKitchen } from "react-icons/md";

function Program(props) {

    return (
        <Col lg={4} md={12} sm={12}>
            <div>
                
                <Card 
                    className="prime-card prime-card-community-selected"
                    style={{
                        marginBottom: "25px",
                    }}
                >
                    <p className="p-card-title">
                        <GiLoveInjection />
                        Selection
                    </p>
                    <p className="p-card-subtitle"  style={{
                            fontSize: '25px',
                        }}>
                            {props.community}
                    </p>
                </Card>
                <Card 
                    className="prime-card prime-card-survival-kit"
                    style={{
                        marginBottom: "25px",
                    }}
                >
                    <p className="p-card-title" style={{
                            marginBottom: '55px',
                        }}>
                        <GiLoveInjection />
                        Survival Kits
                    </p>
                    <OverlayTrigger
                        key={'top-sk'}
                        placement={'top-end'}
                        defaultShow={true}
                        overlay={
                            <Tooltip id={`tooltip-top-sk`}>
                                <b>Target : </b> 50k Individuals<br />
                                <b>Achieved till now : </b> 20k
                            </Tooltip>
                        }
                    >
                        <ProgressBar animated now={40} label={"40 %"} bsPrefix="sk" />
                    </OverlayTrigger>
                    
                  </Card>
                <Card 
                    className="prime-card prime-card-community-vaccine"
                    style={{
                        marginBottom: "25px",
                    }}
                >
                    <p className="p-card-title" style={{
                            marginBottom: '55px',
                        }}>
                        <GiLoveInjection />
                        Vaccine Registrations
                    </p>
                    <OverlayTrigger
                        key={'top-vr'}
                        placement={'top-end'}
                        defaultShow={true}
                        overlay={
                            <Tooltip id={`tooltip-top-vr`}>
                                <b>Target : </b> 100k Individuals<br />
                                <b>Achieved till now : </b> 60k
                            </Tooltip>
                        }
                    >
                        <ProgressBar animated now={60} label={"60 %"} bsPrefix="cv" />
                    </OverlayTrigger>
                </Card>
                <Card 
                    className="prime-card prime-card-ph-connect"
                >
                    <p className="p-card-title" style={{
                            marginBottom: '55px',
                        }}>
                        <MdKitchen />
                        Primary Health Connectivity
                    </p>
                    <OverlayTrigger
                        key={'top-ph'}
                        placement={'top-end'}
                        defaultShow={true}
                        overlay={
                            <Tooltip id={`tooltip-top-ph`}>
                                <b>Target : </b> 10k Families <br />
                                <b>Achieved till now : </b> 5K
                            </Tooltip>
                        }
                    >
                        <ProgressBar animated now={50} label={"50 %"} bsPrefix="ph" />
                    </OverlayTrigger>
                </Card>
                <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}>
                    <h1 style={{
                        marginTop : '40px',
                        marginLeft: '20px',
                    }}>
                        Impacted  Areas :
                    </h1>
                </div>
            </div>
        </Col>
    );
}

export default Program;