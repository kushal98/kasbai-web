import React, { useState } from 'react';

import { 
  Navbar, 
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";

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
              <Navbar.Brand href="/home">Kasbai</Navbar.Brand>
              {
                props.loggedIn?
                  <></> 
                :
                <>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'flex-end' }}>
                    <Nav >
                      <Nav.Link as={Link} onClick={() => props.setLoginTrue(true)} className="custTag cust1" to="/home">
                        Login
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