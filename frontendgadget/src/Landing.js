import React, { useEffect, useState } from 'react'
import { Col, Container,Row ,ListGroup,ListGroupItem} from 'reactstrap';
import Gadgets from './Gadgets';
import "./Register.css"
import Menu from './Menu';
import base_url from './api/bootapi';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Footer from './Footer';

 const Landing = () => {
  useEffect(()=>{
    document.title="Gadgets";
    getAllCourcesFromServer();

  },[]);


  const getAllCourcesFromServer=() =>{
    axios.get(`${base_url}/gadgets`).then((responce)=>{

      console.log(responce)
      toast.success("Cources has been loaded")
      setGadgets(responce.data)
    },
    (error)=>{
      console.log(error)
      toast.error("Somthing went wrong")
    })
  }

  const [gadgets,setGadgets]=useState([])


  return (
 

    <div >
      
      <Menu/>
    <div className='d-flex flex-wrap '> 
      {
        gadgets.length>0? gadgets.map((item)=>(
          <Gadgets gadget={item}/>
        )):"NO cources"
      }
      <Footer/>
</div>

     

   
    </div>
    
  )
}
export default Landing;