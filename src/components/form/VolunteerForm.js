import React, { useState } from 'react';

import { Row, Col } from 'react-bootstrap';
import { Card } from 'primereact/card'
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

function VolunteerForm(props) {

    const [skdialog , setSkDialog] = useState(false)
    const [vrdialog , setVrDialog] = useState(false)
    const [phdialog , setPhDialog] = useState(false)

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

    const SKDialog = () => (
        <Dialog 
            header= 'Survival Kit Form'
            visible={skdialog} 
            onHide={() => setSkDialog(false)}
            style={{width: '50vw'}}
        >

        </Dialog>
    );

    const VRDialog = () => (
        <Dialog 
            header= 'Vaccine Registration Form'
            visible={vrdialog} 
            onHide={() => setVrDialog(false)}
            style={{width: '50vw'}}
        >

        </Dialog>
    );

    const PHDialog = () => (
        <Dialog 
            header= 'Primary Healthcare Form'
            visible={phdialog} 
            onHide={() => setPhDialog(false)}
            style={{width: '50vw'}}
        >

        </Dialog>
    );

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
            <SKDialog />
            <VRDialog />
            <PHDialog />
        </>
    );
}

export default VolunteerForm;