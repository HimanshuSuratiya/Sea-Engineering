import React from "react";
import "./Contact.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

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
      </div>
    </>
  )
}

export default Contact;