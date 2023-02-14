import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header></Header>
      {children}
      <Footer></Footer>
    </React.Fragment>
  )
}


export default Layout;