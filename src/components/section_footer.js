import React, { useState } from "react";

const Footer = (props) => {
  const [state, setState] = useState(props.state);
  return (
    <>
      <footer>
        <div className="footer__tag">
          <div
            className={
              "footer container " + (state === "main_tap" ? "active" : "")
            }
            onClick={() => {
              window.location.href = "/main_tap";
              setState("main_tap");
            }}
          >
            <span>
              <i className="fas fa-list selected"></i>
            </span>
            <span>지원사업</span>
          </div>
          <div
            className={"footer container " + (state === "news" ? "active" : "")}
            onClick={() => {
              window.location.href = "/news";
              setState("news");
            }}
          >
            <span>
              <i className="fas fa-newspaper"></i>
            </span>
            <span>뉴스</span>
          </div>
          <div
            className={
              "footer container " + (state === "stage" ? "active" : "")
            }
            onClick={() => {
              window.location.href = "/stage";
              setState("stage");
            }}
          >
            <span>
              <i className="far fa-comment-dots"></i>
            </span>
            <span>스테이지</span>
          </div>
          <div
            className={"footer container " + (state === "more" ? "active" : "")}
            onClick={() => {
              window.location.href = "/more";
              setState("more");
            }}
          >
            <span>
              <i className="fas fa-ellipsis-h"></i>
            </span>
            <span>More</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
