import React, { useEffect, useState } from 'react'
import CartItem from './CartItem';
import { ToastContainer, toast } from 'react-toastify';
import base_url from './api/bootapi';
import Footer from './Footer';
import { Button } from 'reactstrap';
import Menu from './Menu';
import Address from './Address';


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
      let  total=0
      q.map((data)=>{
       total+=parseInt(data.price) 
      })
     settotalPrice({
      price:total.toString()
     })
     })
   
  
    }
   
    const GetOrder=()=>{
     setAdressDetail(true);
  
    
    //   detail();
  
   
    }

    const [cartItems,setcartItem]=useState([])
    const [adressDetail,setAdressDetail]=useState(false);
  
    const [totalPrice,settotalPrice]=useState({
      price:""
    } )
  
  
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
 {adressDetail &&  <Address cancle={setAdressDetail}  />} 


 {!adressDetail && 
<div className='d-flex flex-wrap '  style={{
    color:"white"
   
   
    
}}> 

    {
        cartItems.length>0? cartItems.map((data)=>(
            <CartItem cardProduct={data} />
        )):"No Cart Item"
    }
    {  cartItems.length!==0 && <Button outline color="danger" 
      onClick={ GetOrder}
     style={{
        marginLeft:"80%",
        marginTop:"10px",
        color:"white"}}
        >Total :{totalPrice.price}</Button>
 }
   {
    cartItems.length>0?
     <Button outline color="primary" 
      onClick={ GetOrder}
     style={{
        marginLeft:"80%",
        marginTop:"10px",
        color:"white"}}
        >Place Order</Button>:""
     }
    
   </div>
 }
   <Footer/>
   </div>
    
  )
}
export default Cart;