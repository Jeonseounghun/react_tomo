import React from "react";
import { Link } from "react-router-dom";
import "../scss/main.scss";

const Back_page = () => {
  window.history.back();
};

const Back_more = () => {
  window.location.href = `./more`;
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
            <Link to="/search">
              <i className="fas fa-search"></i>
            </Link>
          </div>
        </header>
      ) : (
        <header className="detail">
          <div className="title">{props.tap_title.title}</div>
          <div
            className="back_arrow"
            onClick={() => {
              window.location.pathname === "/more" ? Back_more() : Back_page();
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
