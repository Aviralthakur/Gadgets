import React, { useEffect } from 'react'
import { Card,CardBody,CardTitle,CardLink,CardSubtitle,CardText,CardFooter,Button,Container,CardHeader } from 'reactstrap';
import Footer from './Footer';
import Menu from './Menu';

 const Profile = () => {
  
  
   useEffect(()=>{
    document.title=("Profile");
   },[]);

  return (
    <div >
<Menu/>
<Card
    // className="my-2 "
    // color="black"
    inverse
    style={{
      width: '1150px',
      height:"500px",
      textAlign:"center",
      backgroundColor:"rgba(0,0,0,0.870)",
      marginTop:"50px",
      marginLeft:"12%"
    }} 
  >
    <CardHeader className='' tag="h1" style={{marginTop:"50px" }}>
          DETAILS
    </CardHeader>
    <img  src='./image/profile.png' style={{hight:"100px",width:"100px" ,marginLeft: "auto",
      marginRight: "auto"}}/>
    <CardBody>
      <CardTitle tag="h5">
        First Name: {JSON.parse(localStorage.getItem('detail')).fname} 
      </CardTitle>
      <CardTitle tag="h5">
         Last Name:   {JSON.parse(localStorage.getItem('detail')).lname}
      </CardTitle>
      <CardText>
         Mobile Number:
       {JSON.parse(localStorage.getItem('detail')).mobileNumber}
      </CardText>
    </CardBody>
  </Card>

  <Footer/>
    </div>
  )
}
export default Profile