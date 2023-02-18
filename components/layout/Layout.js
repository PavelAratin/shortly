import React, { useState } from "react";
import Footer from "../footer/Footer";
import FormOverlay from "../formOverlay/FormOverlay";
import ActionForm from '../actionForm/ActionForm';
import Header from "../header/Header";

const Layout = ({ children }) => {
  const [overlayFormDisplayIs, setOverlayFormDisplayIs] = useState(false)
  const [buttonLoginText, setButtonLoginText] = useState();
  const overlayFormToggleDisplay = (buttonLoginText) => {
    setOverlayFormDisplayIs((previousState) => !previousState)
    setButtonLoginText(buttonLoginText)
  }
  return (
    <React.Fragment>
      <Header overlayFormToggleDisplay={overlayFormToggleDisplay}></Header>
      {children}
      <Footer></Footer>
      {overlayFormDisplayIs && <FormOverlay>
        <ActionForm
          overlayFormToggleDisplay={overlayFormToggleDisplay}
          buttonLoginText={buttonLoginText}
          setOverlayFormDisplayIs={setOverlayFormDisplayIs}
        ></ActionForm>
      </FormOverlay>}
    </React.Fragment>
  )
}


export default Layout;