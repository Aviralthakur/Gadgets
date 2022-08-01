import React, { useEffect, useState } from 'react'
import './Register.css'
// import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import base_url from './api/bootapi';

const butt={
 width:"100%"
}
 const Registe = () => {

  useEffect(()=>{
    document.title="Register";
  },[]);

  const [Register,setUser]=useState({
    fname:"",
    lname:"",
    mobileNumber:"",
    passworld:""
} )

let name,value
const handleInputs=(e) =>{
  console.log(e); 
  name=e.target.name;
  value=e.target.value;

  setUser({...Register,[name]:value})

}
const regis=async(event) =>{
  event.preventDefault();

  const{ fname,lname,
    mobileNumber,
    passworld}=Register
  if(fname&&
    lname&&
    mobileNumber&&
    passworld
    ){

      // axios.post('http://localhost:8082/register',Register)
      // .then(res=>{
      //    // alert(res.data.message)
      //     // history.push('/Login')
      //    window.location.href="/login"
      //   alert("Registered")
      // })
      fetch(base_url+"/register",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
         body:(JSON.stringify(Register))
       
  
    })
    .then(()=>{
      alert("Registered Successful")
       window.location.href="/login" 
    }
    
    )
      
    
  }
  else{
    // alert("No Field should be empty")
    toast.error("No Field should be empty")
  }
}


  return (
    <div className='body'>
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
        <div className="login-top" >
        <img src ='' alt=""></img>
   
     </div> 
    <div className="d-flex justify-content-center align-items-center" >
<section className="reg-box">
    <h2 className="text-white">Sign In</h2>
    <form className="mt-4">
        <div className="mb-3 bg-white rounded px-2">
          <label for="exampleInputEmail1" className="form-label small-text ">First Name</label>
          <input type="text" className="form-control border-0 p-0" id="exampleInputEmail1"name='fname'  value={Register.fname} onChange={handleInputs}></input>
          
        </div>
        <div className="mb-3 bg-white rounded px-2">
            <label for="exampleInputEmail1" className="form-label small-text ">Last Name</label>
            <input type="text" className="form-control border-0 p-0" id="exampleInputEmail1" aria-describedby="emailHelp"name='lname'  value={Register.lname} onChange={handleInputs}></input>
            
          </div>
          {/* <div className="mb-3 bg-white rounded px-2">
            <label for="exampleInputEmail1" className="form-label small-text ">Email</label>
            <input type="Email" className="form-control border-0 p-0" id="exampleInputEmail1" aria-describedby="emailHelp" name='email'  value={user.email} onChange={handleInputs}></input>
            
          </div> */}

          <div className="mb-3 bg-white rounded px-2">
            <label for="exampleInputEmail1" className="form-label small-text ">Mobile Number</label>
            <input type="text" className="form-control border-0 p-0" id="exampleInputEmail1" aria-describedby="emailHelp"name='mobileNumber'  value={Register.mobileNumber} onChange={handleInputs}></input>
            
          </div>
        <div className="mb-3 bg-white rounded px-2">
          <label for="exampleInputPassword1" className="form-label small-text">Password</label>
          <input type="password" className="form-control border-0 p-0" id="exampleInputPassword1" name='passworld'  value={Register.passworld} onChange={handleInputs}></input>
        </div>
        {/* <div className="mb-3 bg-white rounded px-2">
            <label for="exampleInputPassword1" className="form-label small-text">Confirm Password</label>
            <input type="password" className="form-control border-0 p-0" id="exampleInputPassword1" name='cpassworld'  value={user.cpassworld} onChange={handleInputs}></input>
          </div> */}
        <button type="Submit" className="btn btn-danger mt-3 " style={butt} onClick={regis}> Register</button>
        <br></br>
        <a className="m-1 small-text text-white my-signin" href="/login">Sign In</a>
        <div className="mb-3 mt-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
          <label className="form-check-label text-white small-text  " for="exampleCheck1">Remember Me</label>
        </div>
        <div className="mt-3 d-flex">
            <img width= '20px' src="./image/fb.png" alt=""></img>
            <p className="m-0 small-text text-white"> Login with facebook</p>
            
    </div>
    </form>
    </section>
    </div>
    </div>
  )
}
export default Registe;
