import { getValue } from '@testing-library/user-event/dist/utils'
import React , { useEffect, useState }from 'react'
import './Register.css'
import { ToastContainer, toast } from 'react-toastify';
import base_url from './api/bootapi';


const butt={
    width:"100%"
   }
const Login = () => {

// const[detail,setDetail]=useState({});

  useEffect(()=>{
    document.title="Login";
  },[]);



    const [user,setUser]=useState({
      mobileNumber:"",
        passworld:""
    } )

    let name,value
    const handleInputs=(e) =>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;

        setUser({...user,[name]:value})

    }

    const detail=()=>{

        
      fetch(base_url+"/profile",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
         body:(JSON.stringify(user.mobileNumber))
    }).then((resp)=>resp.json())
       .then((q)=>{
         toast.success("Login Success")
        // alert(q.mobileNumber)
         localStorage.setItem('detail',JSON.stringify(q))
         window.location.href="/landing"
        //  alert(JSON.parse(localStorage.getItem('detail')).mobileNumber)

       })
    }

     const login= async(event) =>{
        event.preventDefault();
        
        const{mobileNumber,passworld}=user
        if(mobileNumber && passworld){
          
          fetch(base_url+"/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
             body:(JSON.stringify(user))
        })
         .then((response)=>response.text()
        
        )
        .then(
          (p) => {
           
           
            if(p==='found')
            {
              
           
            detail();

           
            
         
            }
            else{
              toast.error("Login Failed")
            }
          }
        )
        
        // window.location.href="/landing" 
        }
        else{
          // alert("No Field should be empty")
          toast.warning("No Field should be empty")
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
        <img src ='' alt=""/>
   
    </div>
    <div className="d-flex justify-content-center align-items-center" >
<section className="login-box">
    <h2 className="text-white">Sign In</h2>
    <form className="mt-4">
        <div className="mb-3 bg-white rounded px-2">
          <label for="exampleInputEmail2" className="form-label small-text ">Email address or Phone Number</label>
          <input type="email" className="form-control border-0 p-0" id="exampleInputEmail2" aria-describedby="emailHelp" name='mobileNumber' value={user.mobileNumber} onChange={handleInputs}/>
          
        </div>
        <div className="mb-3 bg-white rounded px-2">
          <label for="exampleInputPassword2" className="form-label small-text">Password</label>
          <input type="password" className="form-control border-0 p-0" id="exampleInputPassword2" name='passworld' value={user.passworld} onChange={handleInputs}/>
        </div>
        
        <button type="Submit" className="btn btn-danger mt-3" style ={butt} onClick={login}>Sign In</button>
        
        <a className="m-1 small-text text-white my-signin" href="/register">Register</a>
    
        <div className="mb-3 mt-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label text-white small-text  " for="exampleCheck1">Remember Me</label>
        </div>
        <div className="mt-3 d-flex">
            <img width= '20px' src="./image/fb.png" alt=""/>
            <p className="m-0 small-text text-white"> Login with facebook</p>
        </div>
      </form>
</section>
    </div>
    </div>
  )
}
export default Login;