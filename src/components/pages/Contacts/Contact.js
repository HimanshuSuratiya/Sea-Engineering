import React from "react";
import "./Contact.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { TextField, TextareaAutosize } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Contact = props => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="contact-address-main-area">
              <div className="contact-icon">
                <LocationOnIcon />
              </div>
              <h4>Address</h4>
              <p>Xpertis-consulting, 09 BP 564 Ouagadougou 09, Burkina Faso.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="contact-address-main-area">
              <div className="contact-icon">
                <CallIcon />
              </div>
              <h4>Call us on</h4>
              <p>(+226) 25 34 01 81</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="contact-address-main-area">
              <div className="contact-icon">
                <EmailIcon />
              </div>
              <h4>Mail at</h4>
              <p>Info@xpertis-consulting.com</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className='col-lg-12 text-center'>
            <h2 className="font-weight-light mt-3 mb-4">Quick Contact</h2>
          </div>
          <div className="col-lg-6">
            <div className='card-shadow d-flex justify-content-center align-items-center contact-us-img'>
              <img src="https://storage-asset.msi.com/template/images/contact_us/kv-contact-us-xs.jpg" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-box ml-3">
              <form className='contact-us-form'>
                <div className="row">
                  <div className="col-lg-12">
                    <TextField
                      fullWidth
                      variant='outlined'
                      size='large'
                      label={'Name'}
                    />
                  </div>
                  <div className="col-lg-12 mt-2">
                    <TextField
                      fullWidth
                      variant='outlined'
                      size='large'
                      label={'Email address'}
                    />
                  </div>
                  <div className="col-lg-12 mt-2">
                    <TextField
                      fullWidth
                      variant='outlined'
                      type="number"
                      size='large'
                      label={'Phone'}
                    />
                  </div>
                  <div className="col-lg-12 mt-2">
                    <TextareaAutosize
                      className='p-2'
                      aria-label="minimum height"
                      minRows={2}
                      style={{ width: '100%' }}
                      placeholder="Message"
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button className='btn btn-primary btn-lg btn-block contact-us-submit-btn'>Submit <ArrowRightAltIcon /></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;