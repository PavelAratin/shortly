import React, { useState } from "react";
import Footer from "../footer/Footer";
import FormOverlay from "../formOverlay/FormOverlay";
import ActionForm from '../actionForm/ActionForm';
import Header from "../header/Header";

const Layout = ({ children }) => {
  const [overlayFormDisplayIs, setOverlayFormDisplayIs] = useState(false)
  const overlayFormToggleDisplay = () => {
    console.log('overlayFormToggleDisplay')
    setOverlayFormDisplayIs((previousState) => !previousState)
  }
  return (
    <React.Fragment>
      <Header overlayFormToggleDisplay={overlayFormToggleDisplay}></Header>
      {children}
      <Footer></Footer>
      {overlayFormDisplayIs && <FormOverlay>
        <ActionForm overlayFormToggleDisplay={overlayFormToggleDisplay}></ActionForm>
      </FormOverlay>}
    </React.Fragment>
  )
}


export default Layout;