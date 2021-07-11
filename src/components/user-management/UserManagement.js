import React, { useState } from 'react';

import { Row, Col, Modal, Dropdown } from 'react-bootstrap'
import { Button, } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import './DataTable.css';
import DataTableDemo from './DataTableDemo';

function UserManagement(props) {

    const [show, setShow] = useState(false);
    const [username, setUser] = useState("");
    const [selectedRole, setSelectedRole] = useState("Select a Role");
    const [errorMsg, setErrorMsg] = useState("")
    const [disabled, setDisable] = useState(true)
    // const roles =["Volunteer", "Donor", "Approver"];

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   
    const handleSetUser = (number) => {
        var length = number.split("").length
        length > 10 ?   
            setErrorMsg("Phone Number cannot be more than 10 digits.") :
            length < 10 ?
                setErrorMsg("Phone Number cannot be less than 10 digits.") :
                setErrorMsg("")
        
        if(length === 0){
            setErrorMsg("")
        }

        if(length === 10){
            setDisable(false)
        }
        else{
            setDisable(true)
        }
        
        setUser(number);
    }

    const handleRoleChange = (e) => {
        setSelectedRole(e)
    }

    


    return (
        <>
            <Row style={{ alignItems:'center' , justifyContent: 'center' }}>
                <Col>
                    <h2>User Management</h2>
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'flex-end' , width: '200px' }} >
                        <Button label="Create User" onClick={handleShow} className="p-button-raised p-button-secondary p-button-text" />
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={{
                        margin: '20px',
                    }}>
                        <span className="p-field">
                            <label htmlFor="username" className="p-d-block">Phone No. (Don't Add +91 or 91)</label>
                            <InputText keyfilter="pnum" id="username" value={username} onChange={(e) => {handleSetUser(e.target.value)}} />
                            <small id="username-help" className="p-d-block">{errorMsg}</small>
                        </span>
                        <span className="p-field" >
                            <label htmlFor="role" className="p-d-block" style={{marginTop : '10px'}}>Role</label>
                            <Dropdown >
                                <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "white", color: "#000", borderColor: "#e2e2e2" }}>
                                    {selectedRole + "  "}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey="Volunteer" onSelect={(e) => handleRoleChange(e)} >Volunteer</Dropdown.Item>
                                    <Dropdown.Item eventKey="Donor" onSelect={(e) => handleRoleChange(e)} >Donor</Dropdown.Item>
                                    <Dropdown.Item eventKey="Approver" onSelect={(e) => handleRoleChange(e)} >Approver</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button label="Create User" className="p-button-raised p-button-secondary p-button-text"  onClick={handleClose} style={{ marginRight: '15px' }} disabled={disabled} />
                    <Button label="Close" className="p-button-raised p-button-secondary p-button-text"  onClick={handleClose} />
                </Modal.Footer>
            </Modal>
            <Row>
                <Col style={{marginTop : '20px'}}>
                    <DataTableDemo />
                </Col>
            </Row>
        </>
    );
}

export default UserManagement;