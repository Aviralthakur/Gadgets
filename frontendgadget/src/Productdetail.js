import React, { useEffect, useState } from 'react'
import { Card,CardBody,CardTitle,CardLink,CardSubtitle,CardText,CardFooter,Button,Container,CardHeader } from 'reactstrap';
import base_url from './api/bootapi';
import Footer from './Footer';
import Menu from './Menu';
import ReactImageMagnify from 'react-image-magnify';

const Productdetail = () => {
  const [detail,setDetail]=useState([])
     const images="./image/"+detail.img
     const imageL="./image/L"+detail.img
      useEffect(()=>{
        document.title="Product Detail";
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
  <Menu/>
    <Card className='text-center '
  style={{
    width: '10rem',
    backgroundColor:" rgba(0,0,0,0.870)",
    color:"white",
    marginLeft:"auto",
    marginRight:"auto",
    marginTop:"10px",
    width:"80%",
    height:"700px",
    textAlign:"center"
   
  }}

>
<div style={{ display: "block",width:"342px",height:"513px",marginTop:"40px",  marginLeft: "auto",
      marginRight: "auto"}}>
<ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: images
    },
    largeImage: {
        src: imageL,
        width: 1200,
        height: 1800
    }
}} />
</div>
  {/* <img
    alt="Card image" style={{
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    
      marginTop:"40px"
    }}
    src={images}
  /> */}
<div style={{marginBootom:"15px"}}>
  <CardBody >
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
  </div>
</Card>

<Footer/>
</>

  )
}
export default Productdetail;
