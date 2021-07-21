import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../scss/main.scss";

const Back_page = () => {
  window.location.href = "javascript:history.back()";
};

const Headerdetail = (props) => {
  return (
    <>
      {props.tap_title.logo ? (
        <header>
          <div className="main_logo">
            <img src={props.tap_title.logo} alt="" />
          </div>
          <div className="search__icon">
            <i className="fas fa-search"></i>
          </div>
        </header>
      ) : (
        <header className="detail">
          <div className="title">{props.tap_title.title}</div>
          <div
            className="back_arrow"
            onClick={() => {
              Back_page();
            }}
          >
            <i className="fas fa-arrow-left"></i>
          </div>
        </header>
      )}
    </>
  );
};

export default Headerdetail;
