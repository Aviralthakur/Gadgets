import React, { useState } from 'react'
import { Card,CardBody,CardTitle,CardLink,CardSubtitle,CardText,CardFooter,Button,Container } from 'reactstrap';
import "./Register.css"
import base_url from './api/bootapi';
import Productdetail from './Productdetail';




const img={
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width:"100px",
    hight:"100px"
}
const text={
  color:"white"

}
const cart={
  backgroundColor:" rgba(0,0,0,0.870)",
  marginLeft:"80px",
  marginTop:"20px"
}

const Gadgets = ({gadget},{title}) => {
  const images="./image/"+gadget.img
  return (
    
            <Card className=' text-center  ' style={cart}>
        <CardBody style={text}>
          <CardTitle  className='font-weight-bold m-4'>GADGETS</CardTitle>
          <CardSubtitle>{gadget.type}</CardSubtitle>
        </CardBody>
        <img  src={images} style={img} alt="gadgets image cap" />
        <CardBody style={text}>
          <CardText color='danger'>PRICE:${gadget.price}</CardText>
          <CardText>{gadget.discription}</CardText>
            <Button  outline color="secondary"  >Add to cart</Button>
          <CardLink className='m-3 ' onClick={()=>{
             //  alert(JSON.stringify(gadget.type));     
             localStorage.setItem('type',gadget.type);
                           window.location.href="/detail"
                            
                          }
          
          }>More Details</CardLink>
          
        </CardBody>

      </Card>
    
  )
}
export default Gadgets;