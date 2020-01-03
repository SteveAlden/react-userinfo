import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function AppHeaderB() {
  return (
    <div className='center-navbar'>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand>User Info</Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
export default AppHeaderB;
