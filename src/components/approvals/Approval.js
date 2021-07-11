import React from 'react';

import { Row } from "react-bootstrap";
import { Card } from 'primereact/card';

function Approval(props) {

    // const data = [];

    return (
        <>
        <Row style={{ display: 'flex' , flexDirection: 'column' }}>
          <Row>
            <h1>User Approval</h1>
          </Row>
          <Row style={{ justifyContent: 'center' }}>
          <div className="p-grid">
            <div className="p-col-4">
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
            </div>

            <div className="p-col-4">
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
            </div>

            <div className="p-col-4">
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
            </div>

            <div className="p-col-4">
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
            </div>
          </div>
          </Row>
        </Row>
        <Row>
          <h1>Form Data Approval</h1>

        </Row>
        </>
    );
}

export default Approval;