import React from 'react';
import { Row, Table, Button } from "react-bootstrap";

function Approval(props) {

    // const data = [];

    return (
        <Row>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
        }}>
        <div>
            <h2>Pending Approvals</h2>
        </div>
        <div style={{
            display: "flex",
            alignItems: "center",
            width: '80%'
        }}>
             <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Region</th>
                  <th>Program Name</th>
                  <th>Registered People</th>
                  <th>Approve</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rajasthan</td>
                  <td>Kit </td>
                  <td>10</td>
                  <td>
                    <Button>
                        Approve
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Gujarat</td>
                  <td>Covid Care</td>
                  <td>15</td>
                  <td>
                    <Button>
                        Approve
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>Kerela</td>
                  <td>Primary Healthcare</td>
                  <td>40</td>
                  <td>
                    <Button>
                        Approve
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
        </div>
        </div>
        </Row>
    );
}

export default Approval;