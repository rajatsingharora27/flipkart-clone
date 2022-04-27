import React from "react";
import Header from "../Header/Header";

function Index(props) {
  return (
    <>
      <Header/>
      {props.children}
    </>
  );
}

export default Index;
