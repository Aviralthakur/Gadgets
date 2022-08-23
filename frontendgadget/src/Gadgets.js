import React, { useState, useEffect } from 'react'
import { Card,CardBody,CardTitle,CardLink,CardSubtitle,CardText,Button } from 'reactstrap';
import "./Register.css"
import base_url from './api/bootapi';
import { ToastContainer, toast } from 'react-toastify';



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

const Gadgets = ({gadget}) => {

  useEffect(()=>{
    setCarts({
      type:gadget.type,
      price:gadget.price,
      img:gadget.img,
      mobileNumber:JSON.parse(localStorage.getItem('detail')).mobileNumber
    })

  },[]);
  
  const[carts,setCarts]=useState({
    type: "",
    price:"",
    img:"",
    mobileNumber:""
  });
  const images="./image/"+gadget.img
  return (
   <>
   <ToastContainer 
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover/>
            <Card className=' text-center  ' style={cart}>
        <CardBody style={text}>
          <CardTitle  className='font-weight-bold m-4'>GADGETS</CardTitle>
          <CardSubtitle>{gadget.type}</CardSubtitle>
        </CardBody>
        <img  src={images} style={img} alt="gadgets image cap" />
        <CardBody style={text}>
          <CardText color='danger'>PRICE: ₹ {gadget.price}</CardText>
          <CardText>{gadget.discription}</CardText>
            <Button  outline color="danger"onClick={()=>{
             
              
              //  alert(JSON.stringify(carts))
              fetch(base_url+"/cart",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                 body:(JSON.stringify(carts))
            })
            .then(()=>{
              toast.success("Added to cart")
              
            })
             }}
            
            
            >Add to cart</Button>
            
          <CardLink className='m-3 ' onClick={()=>{
             //  alert(JSON.stringify(gadget.type));     
             localStorage.setItem('type',gadget.type);
                           window.location.href="/detail"
                          }
          
          }>More Details</CardLink>
          
        </CardBody>

      </Card>
      </>
  )
}
export default Gadgets;