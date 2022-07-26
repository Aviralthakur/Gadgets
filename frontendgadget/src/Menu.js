import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const nav={
  margine:"5px"
 
}

const Menu = () => {
 
  return (
    <>
    <Navbar bg="dark" variant="dark" className='m-2' style={nav}>
        
          <Navbar.Brand href="#">Gadgets Shop</Navbar.Brand>
          <Nav className="text-center">
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="#">Cart</Nav.Link>
            <Nav.Link onClick={()=>{  localStorage.removeItem('detail') ;  window.location.href="/"}}  >Log Out</Nav.Link>
          </Nav>
       
      </Navbar>
    </>
  )
}
export default Menu
