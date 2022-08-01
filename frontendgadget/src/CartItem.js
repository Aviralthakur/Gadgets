import React,{ useEffect, useState } from 'react'
import { Card,CardBody,CardTitle,CardLink,CardSubtitle,CardText,CardFooter,Button,Container } from 'reactstrap';
import base_url from './api/bootapi';
import { ToastContainer, toast } from 'react-toastify';
import Menu from './Menu';

 const CartItem = ({cardProduct}) => {
    
    const images="./image/"+cardProduct.img

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
              
    <Card 
    style={{
      width: "75%",
      height:"400px",
      marginLeft:"180px",
      marginTop:"10px",
      backgroundColor:" rgba(0,0,0,0.870)"

    }}
  >
    <img style={{
        width:"200px",
        marginTop:"20px",
        marginLeft:"100px"
    }}
      alt="Card image"
      src={images}
    />
    <CardBody>
      <CardTitle tag="h5"  style={{
        marginLeft:"75%",
       
        color:"white"
      }}>
       {cardProduct.type}
      </CardTitle>
      <CardSubtitle
        className="mb-2 "
        style={{
            marginLeft:"75%",
            marginTop:"10px",
            color:"white"
          }}
        tag="h6"
      >
        Price:${cardProduct.price}
      </CardSubtitle>
      <Button outline color="danger" style={{
        marginLeft:"85%",
        marginTop:"10px",
        color:"white"
      }}  onClick={()=>{
        
        fetch(base_url+"/cart",{
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
             body:(JSON.stringify(cardProduct.type))
        })
        .then(()=>{
          toast.success("Deleted")
          window.location.href="/cart"
    })

      }}>
        Delete
      </Button>
    </CardBody>
  </Card>
  </>
  )
}
export default CartItem
