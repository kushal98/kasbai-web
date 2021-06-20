import React, { useState } from 'react';

import { 
  Navbar, 
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import { RiAdminLine } from "react-icons/ri";
import { FaHeart, FaRegEye } from "react-icons/fa";
import { BiDonateBlood, BiDownload } from "react-icons/bi";

import Sidebar from '../sidebar/SidebarPanel';
import DocumentDialog from '../donor/DocumentDialog';

function Header(props) {

  const [visible , setVisible] = useState(false)
  const [docdialog , setDocDialog] = useState(false)

  const handleAdminLogin = () => {
    props.setLoginTrue(true)
    props.setLoginType('Admin')
    localStorage.setItem('auth', true)  
    localStorage.setItem('login-type', 'Admin')  
  }

  const handleDonorLogin = () => {
    props.setLoginTrue(true)
    props.setLoginType('Donor')  
    localStorage.setItem('auth', true)  
    localStorage.setItem('login-type', 'Donor')  

  }

  return (
          <div>
            <Sidebar visibility = {visible} loginType={props.loginType} setVisibility = {setVisible} setLogin={props.setLoginTrue} />
            <Navbar className="navbar" sticky="top" expand="lg" >
              {
                props.loggedIn?
                <FcMenu size={25} onClick={() => setVisible(!visible)} style={{marginRight : '10px'}} />
                :
                <></>
              }
              <Navbar.Brand 
                href={
                  !props.loggedIn? 
                      '/' 
                    :
                      props.loginType === 'Admin' ?   
                        '/home' 
                      :
                        '/donor'
                } 
                style={{ fontSize: '25px' }}
              >
                Kasbai
              </Navbar.Brand>
              {
                props.loggedIn && props.loginType === 'Donor'?
                  <>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'flex-end' , backgroundColor: '#ffffff' }}>
                    <Nav style={{ fontSize: '20px' }} >
                      <Nav.Link as={Link} onClick={() => setDocDialog(true)} className="custTag cust1" to="/donor" style={{ padding: '5px', marginRight: '8px'  }}>
                        <FaRegEye size={25} style={{ marginRight: '5px' }}/>
                        View Documents
                      </Nav.Link>
                      <Nav.Link as={Link} onClick={() => props.setLoginTrue(true)} className="custTag cust1" to="/donor" style={{ padding: '5px', marginRight: '8px' }}>
                        <BiDownload size={25} style={{ marginRight: '5px' }}/>
                        Download Report
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </>
                :
                props.loggedIn && props.loginType === 'Admin'?
                <>
                {
                  window.location.pathname === '/donor'?
                  <>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'flex-end' , backgroundColor: '#ffffff' }}>
                    <Nav style={{ fontSize: '20px' }} >
                      <Nav.Link as={Link} onClick={() => setDocDialog(true)} className="custTag cust1" to="/donor" style={{ padding: '5px', marginRight: '8px'  }}>
                        <FaRegEye size={25} style={{ marginRight: '5px' }}/>
                        View Documents
                      </Nav.Link>
                      <Nav.Link as={Link} onClick={() => props.setLoginTrue(true)} className="custTag cust1" to="/donor" style={{ padding: '5px', marginRight: '8px' }}>
                        <BiDownload size={25} style={{ marginRight: '5px' }}/>
                        Download Report
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                  </>
                  :
                  <></>
                }    
                </>
                :
                <>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'flex-end' , backgroundColor: '#ffffff' }}>
                    <Nav style={{ fontSize: '20px' }} >
                      <Nav.Link as={Link} onClick={() => handleAdminLogin()} className="custTag cust1" to="/home" style={{ padding: '5px', marginRight: '8px'  }}>
                        <RiAdminLine size={25} style={{ marginRight: '5px' }}/>
                        Admin Login
                      </Nav.Link>
                      <Nav.Link as={Link} onClick={() => handleDonorLogin()} className="custTag cust1" to="/home" style={{ padding: '5px', marginRight: '8px' }}>
                        <BiDonateBlood size={25} style={{ marginRight: '5px' }}/>
                        Donor Login
                      </Nav.Link>
                      <Nav.Link as={Link} onClick={() => props.setLoginTrue(true)} className="custTag cust1" to="/home" style={{  color : 'red', padding: '5px', border: '1px dashed red', borderRadius: '10px' }} >
                        <FaHeart size={20} style={{ marginRight: '5px' }}/>
                        Donate Now
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </>
              } 
            </Navbar>
            <DocumentDialog docdialog={docdialog} setDocDialog={setDocDialog} />
          </div>
    );
}

export default Header;