import React, { useState } from "react";
import Footer from "../footer/Footer";
import FormOverlay from "../formOverlay/FormOverlay";
import ActionForm from '../actionForm/ActionForm';
import Header from "../header/Header";
import MobileMenu from "../mobileMenu/MobileMenu";

const Layout = ({ children }) => {
  const [overlayFormDisplayIs, setOverlayFormDisplayIs] = useState(false)
  const [buttonLoginText, setButtonLoginText] = useState();
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false)
  const overlayFormToggleDisplay = (buttonLoginText) => {
    setOverlayFormDisplayIs((previousState) => !previousState)
    setButtonLoginText(buttonLoginText)
  }
  const mobileMenuToogle = () => {
    setDisplayMobileMenu(previousState => !previousState)
    console.log(displayMobileMenu)
  }
  return (
    <React.Fragment>
      <Header overlayFormToggleDisplay={overlayFormToggleDisplay} mobileMenuToogle={mobileMenuToogle}></Header>
      {displayMobileMenu && <MobileMenu overlayFormToggleDisplay={overlayFormToggleDisplay}></MobileMenu>}
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