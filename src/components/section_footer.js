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
            <a>
              <i className="fas fa-list selected"></i>
            </a>
            <a>지원사업</a>
          </div>
          <div
            className={"footer container " + (state === "news" ? "active" : "")}
            onClick={() => {
              window.location.href = "/news";
              setState("news");
            }}
          >
            <a>
              <i className="fas fa-newspaper"></i>
            </a>
            <a>뉴스</a>
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
            <a>
              <i className="far fa-comment-dots"></i>
            </a>
            <a>스테이지</a>
          </div>
          <div
            className={"footer container " + (state === "more" ? "active" : "")}
            onClick={() => {
              window.location.href = "/more";
              setState("more");
            }}
          >
            <a>
              <i className="fas fa-ellipsis-h"></i>
            </a>
            <a>More</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
