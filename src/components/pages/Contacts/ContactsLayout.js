import React from "react";
import { Outlet } from "react-router-dom";

const ContactsLayout = props => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default ContactsLayout;