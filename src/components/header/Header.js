import React, { useState } from 'react';

import { 
  Navbar, 
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import { RiAdminLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { BiDonateBlood } from "react-icons/bi";

import Sidebar from '../sidebar/SidebarPanel'

function Header(props) {

  const [visible , setVisible] = useState(false)

    return (
          <div>
            {console.log(props.loggedIn)}
            <Sidebar visibility = {visible} setVisibility = {setVisible} setLogin={props.setLoginTrue} />
            <Navbar className="navbar" sticky="top" expand="lg" >
              {
                props.loggedIn?
                <FcMenu size={25} onClick={() => setVisible(!visible)} style={{marginRight : '10px'}} />
                :
                <></>
              }
              <Navbar.Brand href="/home" style={{ fontSize: '25px' }}>Kasbai</Navbar.Brand>
              {
                props.loggedIn?
                  <></> 
                :
                <>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'flex-end' , backgroundColor: '#ffffff' }}>
                    <Nav style={{ fontSize: '20px' }} >
                      <Nav.Link as={Link} onClick={() => props.setLoginTrue(true)} className="custTag cust1" to="/home">
                        <RiAdminLine size={25} style={{ marginRight: '5px' }}/>
                        Admin Login
                      </Nav.Link>
                      <Nav.Link as={Link} onClick={() => props.setLoginTrue(true)} className="custTag cust1" to="/home">
                        <BiDonateBlood size={25} style={{ marginRight: '5px' }}/>
                        Donor Login
                      </Nav.Link>
                      <Nav.Link as={Link} onClick={() => props.setLoginTrue(true)} className="custTag cust1" style={{  color : 'red', padding: '5px', border: '1px dashed red', borderRadius: '10px' }} to="/home">
                        <FaHeart size={20} style={{ marginRight: '5px' }}/>
                        Donate Now
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </>
              } 
            </Navbar>
          </div>
    );
}

export default Header;