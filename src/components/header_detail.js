import React from "react";
import { Link } from "react-router-dom";
import "../scss/main.scss";

const Back_page = () => {
  window.history.back();
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
            <Link to="/nael/search">
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
              props.setMoreContent ? props.setMoreContent("more") : Back_page();
            }}
          >
            <i className="fas fa-arrow-left"></i>
          </div>
          {window.location.pathname.includes("main_tap/") ? (
            <div class="contents__contain">
              <div class="content__star">
                <i class="fa-star far" aria-hidden="true"></i>
              </div>
            </div>
          ) : (
            ""
          )}
        </header>
      )}
    </>
  );
};

export default Headerdetail;
