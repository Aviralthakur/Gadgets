import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit'
const Footer = () => {
  return (
    <MDBFooter bgColor='rgba(0,0,0,0.870)' className='text-center text-lg-start text-white ' style={{ width:"100%"}}>
    <section className='d-flex justify-content-center  p-4 border-bottom '>
    
      <div>
        <a href='' className='me-4 text-reset'>
          <i className='fab fa-facebook-f'></i>
        </a>
        <a href='' className='me-4 text-reset'>
          <i className='fab fa-twitter'></i>
        </a>
        <a href='' className='me-4 text-reset'>
          <i className='fab fa-google'></i>
        </a>
        <a href='' className='me-4 text-reset'>
          <i className='fab fa-instagram'></i>
        </a>
        <a href='' className='me-4 text-reset'>
          <i className='fab fa-linkedin'></i>
        </a>
        <a href='' className='me-4 text-reset'>
          <i className='fab fa-github'></i>
        </a>
      </div>
    </section>

    <section className=''>
      <div className='container text-center text-md-start mt-5'>
        <div className='row mt-3'>
          <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <i className='fas fa-gem me-3'></i>Company name
            </h6>
            <p>
              GADGETS CORPORATION INDIA
            </p>
          </div>

          <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
            <p>
              <a href='#!' className='text-reset'>
                MOBILE
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                LAPTOP
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                HEADPHONE
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                TAB
              </a>
            </p>
          </div>

          <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
            <p>
              <a href='#!' className='text-reset'>
                Pricing
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Settings
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Orders
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Help
              </a>
            </p>
          </div>

          <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <i className='fas fa-home me-3'></i> NEW DELHI, ND 10012, INDIA
            </p>
            <p>
              <i className='fas fa-envelope me-3'></i>
              Gadgets@example.com
            </p>
            <p>
              <i className='fas fa-phone me-3'></i> + 91 234 567 88
            </p>
            <p>
              <i className='fas fa-print me-3'></i> + 91 234 567 89
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2021 Copyright:
      <a className='text-reset fw-bold' href='/'>
        Gadgets.com
      </a>
    </div>
  </MDBFooter>
   
    
   
  )
}
export default Footer