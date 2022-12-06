import React from "react";
import ReactDOM from "react-dom";

import "./Backdrop.css";

const backdropHook = document.getElementById("backdrop-hook");

const Backdrop = (props) => {
  const content = <div className="backdrop" onClick={props.onClick}></div>;
  return ReactDOM.createPortal(content, backdropHook);
};

export default Backdrop;
