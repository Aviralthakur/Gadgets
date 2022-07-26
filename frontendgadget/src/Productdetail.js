import React, { useEffect, useState } from 'react'
import { Card,CardBody,CardTitle,CardLink,CardSubtitle,CardText,CardFooter,Button,Container,CardHeader } from 'reactstrap';
import base_url from './api/bootapi';
import Footer from './Footer';



const Productdetail = () => {
  const [detail,setDetail]=useState([])
     const images="./image/"+detail.img
      useEffect(()=>{
        document.title="Product Detail";
        // alert(localStorage.getItem('type'))
        fetch(base_url+"/detail",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
             body:(JSON.stringify(localStorage.getItem('type')))
        }).then((resp)=>resp.json())
        .then((p)=>{
             setDetail(p);
            //  localStorage.removeItem('type')
        })
    
      },[]);
  return (
  <>
    <Card className='text-center '
  style={{
    width: '18rem',
    backgroundColor:" rgba(0,0,0,0.870)",
    color:"white",
    marginLeft:"10px",
    marginRight:"10px",
    marginTop:"10px",
    width:"100%",
    height:"650px",
    textAlign:"center"
   
  }}
>
  <img
    alt="Card image" style={{
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width:"350px",
      hight:"350px",
      marginTop:"40px"
    }}
    src={images}
  />
  <CardBody>
    <CardTitle tag="h5">
      {detail.type}
    </CardTitle>
    <div style={{width:"300px",marginLeft:"auto",marginRight:"auto"}}>
    <CardText>
      {detail.discription}
    </CardText>
    </div>
  </CardBody>
  <CardBody>
  <Button  outline color="secondary"  >Add to cart</Button>
  <Button outline className='m-3 '  onClick={()=>{    
             localStorage.removeItem('type')
                           window.location.href="/landing"
                                }}>
      Menu
      </Button>
  </CardBody>
</Card>
<Footer/>
</>

  )
}
export default Productdetail;
