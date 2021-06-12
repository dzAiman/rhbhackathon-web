import React from 'react'
import { Navbar } from 'react-bootstrap'
const NavbarPage = () => {

    return (
      <Navbar style={{backgroundColor:'#70CDE3'}}>
        <Navbar.Brand href="#home">RHB @ Workforce Gigs</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Dezairail</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default NavbarPage;

