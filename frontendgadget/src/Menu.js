import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const nav={
  margine:"5px"
 
}

const Menu = () => {
 


  return (

    
    <div style={{width:"100%"}}>

      {
         
    <Navbar bg="dark" variant="dark" className='m-2' style={nav}>     
         <Navbar.Brand href="#">Gadgets Shop</Navbar.Brand>
          <Nav className="text-center">
            <Nav.Link onClick={()=>{
              if(document.title==="Profile")
              {
                      window.location.href="/landing"
              }
              else{
                window.location.href="/profile"
              }
             } }  >
              
              {
              document.title==="Profile" ?"Menu":
              "Profile"
              }</Nav.Link>
            <Nav.Link onClick={()=>{
              if(document.title==="Cart")
              {
                      window.location.href="/landing"
              }
              else{
                window.location.href="/cart"
              }
             } }>
              {
                document.title==="Cart"?"Menu":
              "Cart"
}
              </Nav.Link>

            <Nav.Link onClick={()=>{  localStorage.removeItem('detail') ;  window.location.href="/"}}  >Log Out</Nav.Link>
          </Nav>
      </Navbar>
     
}
    </div>


  )
}
export default Menu
