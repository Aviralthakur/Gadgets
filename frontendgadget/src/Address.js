import React ,{ useEffect, useState }from 'react'
import './Register.css'
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"
import base_url from './api/bootapi';
 const Address = ({cancle}) => {

  // useEffect(()=>{
  //   getAddress();

  // },[]);

    const [uaddress,setAddress]=useState({
        address:"",
          city:"",
          state:"",
          zip:""
      } )
      
      var orders=[]
      var orderitem={}
       
      let name,value
      const handleInputs=(e) =>{
          console.log(e);
          name=e.target.name;
          value=e.target.value;
  
          setAddress({...uaddress,[name]:value})
  
      }

        const getAddress=async(event)=>{
          event.preventDefault();
          const{address,
          city ,
          state,
          zip} = uaddress;

          if(address &&
            city &&
            state &&
            zip)
            {
          await fetch(base_url+"/getcart",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                 body:(JSON.stringify(JSON.parse(localStorage.getItem('detail')).mobileNumber))
            }).then((resp)=>resp.json())
               .then((q)=>{
                q.map((data)=>{
                  orderitem.fname=JSON.parse(localStorage.getItem('detail')).fname
                 orderitem.mobileNumber=JSON.parse(localStorage.getItem('detail')).mobileNumber
                orderitem.type=data.type
                 orderitem.price=data.price
                 orderitem.address=uaddress.address
                 orderitem.city=uaddress.city
                 orderitem.state=uaddress.state
                 orderitem.zip=uaddress.zip
                 orders.push({...orderitem})
                        })      

               })
             
            await detail();

              }
              else{
                toast.warning("No Fields Should Be Empty")
              }
   
        }
        const detail=()=>{
           fetch(base_url+"/order",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
             body:(JSON.stringify(orders))
         })
         .then((res)=>{
           res.text()
           alert("hiii")
          } )
          .then((q)=>{
        
  
            if(q==="success")
              {
                   toast.success("Order Success")
                  
                   deleteCart()
           }
           else{
            toast.error("Error")
           }
    
           
    
           })
           deleteCart();
 
  
        }
        const deleteCart=()=>{
             fetch(base_url+"/order",{
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
             body:(JSON.stringify(JSON.parse(localStorage.getItem('detail')).mobileNumber))
        }).then((res)=>res.text())
           .then(()=>{
              window.location.href="/order"                                 
           })
            window.location.href="/order"   
        }



   
      // const [items,setItems]=useState([])

  return (
    
    <div className="d-flex justify-content-center align-items-center text-white" >
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
    <form className="address-box">
   <div>
    <button class=" btn-danger mb-4 mt-0" onClick={()=>cancle(false)}> X </button>
    </div>
    
    <div class="form-group">
      <label for="inputAddress2">Address </label>
      <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" name='address' value={uaddress.address} onChange={handleInputs}/>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputCity">City</label>
        <input type="text" class="form-control" id="inputCity" name='city' value={uaddress.city} onChange={handleInputs}/>
      </div>
      <div class="form-group col-md-4">

        <label for="inputState">State</label>
        <input type="text" class="form-control" id="inputState" name='state' value={uaddress.state} onChange={handleInputs}/>
        
      </div>
      <div class="form-group col-md-2">
        <label for="inputZip">Zip</label>
        <input type="text" class="form-control" id="inputZip" name='zip' value={uaddress.zip} onChange={handleInputs}/>
      </div>
    </div>
    <div class="form-group">
      
    </div>
    <div class="form-group m-2 p-2">
    <button type="submit" class="btn btn-secondary" onClick={()=>cancle(false)}>Cancle</button>
    <button type="submit" class="btn btn-primary m-2" onClick={getAddress}>Order</button>
    </div>
  </form>
  </div>
  )
}
export default Address