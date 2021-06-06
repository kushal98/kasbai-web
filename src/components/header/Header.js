import React, { useState } from 'react';

import { 
  Navbar, 
  // Nav,
} from "react-bootstrap";
// import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";

import Sidebar from '../sidebar/SidebarPanel'

function Header(props) {

  const [visible , setVisible] = useState(false)

    return (
          <div>
            <Sidebar visibility = {visible} setVisibility = {setVisible} />
            <Navbar className="navbar" sticky="top" expand="lg" >
              <FcMenu size={25} onClick={() => setVisible(!visible)} style={{marginRight : '10px'}} />
              <Navbar.Brand href="/home">Kasbai</Navbar.Brand>
              {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
              {/* <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'flex-end' }}>
                <Nav >
                  <Nav.Link as={Link} className="custTag cust1" to="/home">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link}   className="custTag cust1" to="/approval">
                    Approvals
                  </Nav.Link>
                  <Nav.Link as={Link}  className="custTag cust1" to="/user-management">
                    User Management
                  </Nav.Link>
                  <Nav.Link as={Link}  className="custTag cust1" to="/profile">
                    Profile
                  </Nav.Link>
                  <Nav.Link as={Link}  className="custTag cust1" to="/home">
                    Sign out
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse> */}
            </Navbar>
          </div>
    );
}

export default Header;