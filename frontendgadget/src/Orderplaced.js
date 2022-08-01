import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import Menu from './Menu';
 const Orderplaced = () => {
  return (

<div>
    <Menu/>
    <Card className="text-center"  style={{
        backgroundColor:" rgba(0,0,0,0.870)",
        color:"white",
        height:"350px",
        
    }}>
    <Card.Header  style={{
        marginTop:"10px"
    }}>ORDER PLACED</Card.Header>
    <img style={{
        width:"100px",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"20px"
    
    }}
      alt="Card image"
      src="./image/img11.gif"
    />
    <Card.Body>
      <Card.Title>{JSON.parse(localStorage.getItem('detail')).fname} {JSON.parse(localStorage.getItem('detail')).lname}</Card.Title>
      <Card.Text>
      Thanks for Shopping with Gadgets Shop
      </Card.Text>
      <Button variant="primary" href='/landing'>Continue Shopping</Button>
    </Card.Body>
   
  </Card>
  <Footer/>
  </div>
  ) 

}
export default Orderplaced;
