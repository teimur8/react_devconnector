import React from "react";
import Header from "../Components/Header_footer/Header";
import Footer from "../Components/Header_footer/Footer";

export default props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer/>
    </div>
  );
};
