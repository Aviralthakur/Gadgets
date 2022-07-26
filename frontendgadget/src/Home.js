

import React, { useEffect, useState } from 'react'
import './Register.css'
import {Container,Button} from "reactstrap";

const butt={
  width:"40%",hight:"100px",margin:"10px"
}

const h1={
  color:"white",
  size:"70px"
}
 const Home = () => {
  
  useEffect(()=>{
    document.title="Home";
  },[]);


  const login=async(event)=>{
    event.preventDefault();
    window.location.href="/login" 
  }
  const register=async(event)=>{
    event.preventDefault();
    window.location.href="/register"
  }
  return (
   
    <Container className='text-center  container' >

    <h1 style={h1}>WELCOME TO GADGETS WEB APPLICATION</h1>

  
 <Button outline color="primary" size="lg" style={butt} className= " butt" onClick={login}>Login</Button><br></br>
 <Button  outline color="primary" size="lg" style={butt} className= " butt" onClick={register}>Register</Button>
 
    </Container>
    
  )
}
export default Home;