import React from "react";
import "../thankpage.css";
import msgIcon from "../msgIcon.svg";
import closeIcon from "../closeIcon.svg";

const ThankPage = ({ toHome }) => {
  return (
    <div className="thank_main">
      <img src={msgIcon} className="msg_icon" />
      <img
        src={closeIcon}
        className="close_icon"
        onClick={() => {
          toHome();
        }}
      />
      <div className="thank_title">THANK YOU!</div>
      <p>We hope you enjoy our weekly emails!</p>
    </div>
  );
};

export default ThankPage;
