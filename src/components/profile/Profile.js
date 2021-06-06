import React, { useState } from 'react';

import { Row, Col } from 'react-bootstrap';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import './Profile.css';

function Profile(props) {

    const [mode , setMode] = useState("Normal")
    const [name , setName] = useState("Garima Singh")
    const [phone , setPhone] = useState("9438289231")
    const [email , setEmail] = useState("garima_singh@gmail.com")
    const [role , setRole] = useState("Admin")

    const handleEditMode = () => {
        setMode('Edit')
    }

    const handleNormalMode = () => {
        setMode('Normal')
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleRole = (e) => {
        setRole(e.target.value)
    }

    return (
        <div className="profile-div">
            <Row style={{
            }}>
                <Col lg={12} md={12} className="profile-input">
                    <h6 className="profile-title pl-2">Name</h6>
                        <InputText value={name} onChange={handleName} keyfilter="alpha" id="first-name" aria-describedby="first-name-help" className="p-d-block profile-input-box" disabled={ mode === "Normal" ? true : false}/>
                </Col>
                <Col lg={12} md={12} className="profile-input">
                    <h6 className="profile-title pl-2">Phone Number</h6>
                    <InputText value={phone} onChange={handlePhone} keyfilter="int" id="phone-name" aria-describedby="phone-name-help" className="p-d-block profile-input-box" disabled={ mode === "Normal" ? true : false}/>
                </Col>
                <Col lg={12} md={12} className="profile-input">
                    <h6 className="profile-title pl-2">Email </h6>
                    <InputText value={email} onChange={handleEmail} keyfilter="alphanum" id="phone-name" aria-describedby="phone-name-help" className="p-d-block profile-input-box" disabled={ mode === "Normal" ? true : false}/>
                </Col>
                <Col lg={12} md={12} className="profile-input">
                    <h6 className="profile-title pl-2">User Role</h6>
                    <InputText value={role} onChange={handleRole} keyfilter="alpha" id="phone-name" aria-describedby="phone-name-help" className="p-d-block profile-input-box" disabled={ mode === "Normal" ? true : false}/>
                </Col>
            </Row>
            <Row style={{
                marginTop : '20px',
                backgroundColor: '#e7e7e7',
                width: '100%',
                padding: '10px',
                justifyContent: 'flex-end'
            }}>
                {
                    mode === "Normal" ?
                        <div>
                            <Button className="p-button-raised p-button-secondary p-button-text"  onClick={handleEditMode} style={{ backgroundColor: '#fff' }}>
                                <i className="pi pi-user-edit p-px-2"></i>
                                <span className="p-px-3">Edit</span>
                            </Button>
                        </div>
                        :
                        <div>
                            <Button className="p-button-raised p-button-secondary p-button-text"  onClick={() => setMode('Normal')} style={{ marginRight: '15px', backgroundColor: '#fff' }} >
                                <i className="pi pi-replay p-px-2"></i>
                                <span className="p-px-3">Cancel</span>
                            </Button>
                            <Button className="p-button-raised p-button-secondary p-button-text"  onClick={handleNormalMode} style={{ backgroundColor: '#fff' }} >
                                <i className="pi pi-check p-px-2"></i>
                                <span className="p-px-3">Update</span>
                            </Button>    
                        </div>
                }
            </Row>
        </div>
    );
}

export default Profile;