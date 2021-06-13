import React, { useState } from 'react';

import { Row, Col } from 'react-bootstrap';
import { Card } from 'primereact/card'
import { Button } from 'primereact/button';

import SurvivalKitForm from './SurvivalKitForm';
import PHForm from './PHForm';
import VaccineRegForm from './VaccineRegForm';


function FormPage(props) {

    const [skdialog , setSkDialog] = useState(false)
    const [phdialog , setPhDialog] = useState(false)
    const [vrdialog , setVrDialog] = useState(false)

    const Cardfooter = ({ setDialog }) => (
        <span>
            <Button 
                label="Edit" 
                icon='pi pi-user-edit' 
                className='p-button-raised p-button-secondary' 
                onClick={() => setDialog(true)}
            />
        </span>
    )

    return (
        <>
            <Row>
                <Col lg={4} md={6} sm={12}>
                    <Card
                        title="Survival Kit Form"
                        subTitle="Collects data from the people regarding the needs they have and how the kit can be beneficial for them."
                        footer={<Cardfooter setDialog={setSkDialog} />}
                        style={{ marginTop: '10px' }}
                    />
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card
                        title="Vaccine Reg Form"
                        subTitle="Collects data from the people regarding the needs they have and how the kit can be beneficial for them."
                        footer={<Cardfooter setDialog={setVrDialog} />}
                        style={{ marginTop: '10px' }}
                    />
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <Card
                        title="PH Connectivity Form"
                        subTitle="Collects data from the people regarding the needs they have and how the kit can be beneficial for them."
                        footer={<Cardfooter setDialog={setPhDialog} />}
                        style={{ marginTop: '10px' }}
                    />
                </Col>
            </Row>
            <SurvivalKitForm skdialog={skdialog} setSkDialog={setSkDialog} />
            <VaccineRegForm vrdialog={vrdialog} setVrDialog={setVrDialog} />
            <PHForm phdialog={phdialog} setPhDialog={setPhDialog} />
        </>
    );
}

export default FormPage;