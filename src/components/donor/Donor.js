import React from 'react';

import { Row, Col } from 'react-bootstrap';
import {Button} from 'primereact/button';

function Donor(props) {
    return (
        <>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <Button label="View Documents" />
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Button label="Download Report" />
                </Col>
            </Row>
        </>
    );
}

export default Donor;