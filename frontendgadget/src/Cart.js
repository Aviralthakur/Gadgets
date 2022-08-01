import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CartItem from './CartItem';
import { ToastContainer, toast } from 'react-toastify';
import base_url from './api/bootapi';
import Footer from './Footer';
import { Card,CardBody,CardTitle,CardLink,CardSubtitle,CardText,CardFooter,Button,Container } from 'reactstrap';
import Menu from './Menu';
import userEvent from '@testing-library/user-event';



 const Cart = () => {

    useEffect(()=>{
        document.title="Cart";
        getAllCartItem();
  
        
      },[]);
  const getAllCartItem=()=>{

   
    fetch(base_url+"/getcart",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
       body:(JSON.stringify(JSON.parse(localStorage.getItem('detail')).mobileNumber))
  }).then((resp)=>resp.json())
     .then((q)=>{
      setcartItem(q)
      
     })

    // axios.get(`${base_url}/getcart`).then((responce)=>{

    //     console.log(responce)
    //     setcartItem(responce.data)
        
    //   },
    //   (error)=>{
    //     console.log(error)
    //     toast.error("Somthing went wrong")
    //   })
    }



    const deleteCart=()=>{
         
      fetch(base_url+"/order",{
        method:"DELETE",
        headers:{"Content-Type":"application/json"},
         body:(JSON.stringify(JSON.parse(localStorage.getItem('detail')).mobileNumber))
    }).then((res)=>res.text())
       .then((q)=>{
        window.location.href="/order"

       })

    }
    
    const detail=()=>{

        
      fetch(base_url+"/order",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
         body:(JSON.stringify(orders))
    }).then((res)=>res.text())
       .then((q)=>{

     

        if(q==="success")
         { toast.success("Order Success")
             deleteCart()
        

       }
       else{
        toast.error("Error")
       }

       

       })
    }
    var orders=[]
    var orderitem={}
    const GetOrder=()=>{

 
    
      
    cartItems.map((data)=>{

          
           orderitem.fname=JSON.parse(localStorage.getItem('detail')).fname
          orderitem.mobileNumber=JSON.parse(localStorage.getItem('detail')).mobileNumber
         orderitem.type=data.type
          orderitem.price=data.price
          orders.push({...orderitem})
      })
    
      detail();
    
    
    //   fetch(base_url+"/order",{
    //     method:"POST",
    //     headers:{"Content-Type":"application/json"},
    //      body:(JSON.stringify(orders))
    // }).then(response => response.json())
    // .then((q)=>{

    //     if(q==="success")
    //      { toast.success("Order Success")
    //      window.location.href="/order"
    //    }
    //    else{
    //     toast.error("Error")
    //    }
   
    //   })

   
    }

    const [cartItems,setcartItem]=useState([]);
    // const [mobile,setmobileNumber]=useState({
    //   mobileNumber:""
    // })

    // setmobileNumber({
    //   mobileNumber:JSON.parse(localStorage.getItem('detail')).mobileNumber
    // })
  return (
    
<div>
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
<Menu/>

<div className='d-flex flex-wrap '  style={{
    color:"white"
   
   
    
}}> 

    {
        cartItems.length>0? cartItems.map((data)=>(
            <CartItem cardProduct={data} />
        )):"No Cart Item"
    }

   {
    cartItems.length>0?
     <Button outline color="primary" 
      onClick={ GetOrder}
        
        // ()=>{

    //   fetch(base_url+"/order",{
    //     method:"POST",
    //     headers:{"Content-Type":"application/json"},
    //      body:(JSON.stringify(order))
    // }).then((resp)=>resp.json())
    //    .then((q)=>{
    //      toast.success("Order Success")
        
        
    //      window.location.href="/order"
        

    //    })
      
    //  }}
      
     
     style={{
        marginLeft:"80%",
        marginTop:"10px",
        color:"white"}}
        
     
        >Place Order</Button>:""
     }
   
    
   </div>
   <Footer/>
   </div>
    
  )
}
export default Cart;