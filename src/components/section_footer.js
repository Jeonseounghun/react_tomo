import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const state = props.state;
  return (
    <>
      <footer>
        <div className="footer__tag">
          <div
            className={
              "footer container " + (state === "main_tap" ? "active" : "")
            }
          >
            <Link to="/main_tap">
              <span>
                <i className="fas fa-list selected"></i>
              </span>
              <span>지원사업</span>
            </Link>
          </div>
          <div
            className={"footer container " + (state === "news" ? "active" : "")}
          >
            <Link to="/news">
              <span>
                <i className="fas fa-newspaper"></i>
              </span>
              <span>뉴스</span>
            </Link>
          </div>
          <div
            className={
              "footer container " + (state === "stage" ? "active" : "")
            }
          >
            <Link to="/stage">
              <span>
                <i className="far fa-comment-dots"></i>
              </span>
              <span>스테이지</span>
            </Link>
          </div>
          <div
            className={"footer container " + (state === "more" ? "active" : "")}
          >
            <Link to="/more">
              <span>
                <i className="fas fa-ellipsis-h"></i>
              </span>
              <span>More</span>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
