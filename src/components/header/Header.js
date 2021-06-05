import React from 'react';
import { Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";

function Header(props) {
    return (
          <div>
            <Navbar className="navbar" sticky="top" expand="lg" >
              <Navbar.Brand href="/home">Kasbai</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'flex-end' }}>
                <Nav >
                  <Nav.Link as={Link} className="custTag cust1" to="/home">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link}   className="custTag cust1" to="/approval">
                    Approvals
                  </Nav.Link>
                  <Nav.Link as={Link}  className="custTag cust1" to="/link">
                    User Management
                  </Nav.Link>
                  <Nav.Link as={Link}  className="custTag cust1" to="/Profile">
                    Profile
                  </Nav.Link>
                  <Nav.Link as={Link}  className="custTag cust1" to="/Profile">
                    Sign out
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
    );
}

export default Header;