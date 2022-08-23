import React, { useEffect, useState } from 'react'

import Gadgets from './Gadgets';
import "./Register.css"
import Menu from './Menu';
import base_url from './api/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';
import Footer from './Footer';


const searchdiv={
  marginLeft: "auto",
  marginRight: "auto",
  width:"300px",
  marginTop:"10px"
}

 const Landing = () => {
  useEffect(()=>{
    document.title="Gadgets";
    getAllCourcesFromServer();

  },[]);


  const getAllCourcesFromServer=() =>{
    axios.get(`${base_url}/gadgets`).then((responce)=>{

      console.log(responce)
      toast.success("Gadgets has been loaded")
      setGadgets(responce.data)
    },
    (error)=>{
      console.log(error)
      toast.error("Somthing went wrong")
    })
  }

  const search=(data)=>{
    return data.filter((item)=>item.type.toLowerCase().includes(query.toLowerCase()))
  }
  const [gadgets,setGadgets]=useState([])
  // const [showSearchAlert, setShowSearchAlert] = useState(false);
  const [query,setQuery]=useState("");
  return (
 

    <div >
      <Menu/>
      
  <div class="form-outline " style={searchdiv}>
    <input type="search" id="form1" class="form-control" placeholder='Search With Product Name' onChange={(e)=>setQuery(e.target.value)} />
    
</div>
      

      
    <div className='d-flex flex-wrap '> 
      {
        gadgets.length>0  ?  search(gadgets).map((item)=>(
          <Gadgets gadget={item}/>
        )):""
      }
      <Footer/>
</div>
    </div>
    
  )
}
export default Landing;