import React from "react";
import "../scss/news.scss";
import imag from "../images/뉴스 썸네일 1.png";

const NewsContent = (props) => {
  console.log(props.data);
  const newsContents = props.data;
  const newsContent = newsContents.map((El) => (
    <div className="news_contents">
      <div className="title">
        <span>{El.press + " " + El.reg_date}</span>
        <div className="icon">
          <i className="fa-star far"></i>
        </div>
      </div>
      <div
        onClick={() => {
          window.location.href = `${El.link}`;
        }}
      >
        <div className="contents_img">
          <img src={imag} alt="" />
        </div>
        <div className="content">
          <div className="content__title">{El.title}</div>
          <div className="content__summary">{El.content}</div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <section className="top_menu news active">
        <ul>
          <li className="active">
            <a>스타트업뉴스</a>
          </li>
          <li className="">
            <a>관심뉴스</a>
            <section className="contents_list news"></section>
          </li>
        </ul>
      </section>

      <section className="categori active">
        <div className="icon__constainer">
          <div className="icon active">
            <a>
              <div>
                <i className="far fa-building"></i>
              </div>
              <span>지원사업</span>
            </a>
          </div>
          <div className="icon">
            <a>
              <div>
                {" "}
                <i className="fa fa-coins"></i>
              </div>
              <span>투자/엑싯</span>
            </a>
          </div>
          <div className="icon">
            <a>
              <div>
                <i className="fas fa-clipboard-list"></i>
              </div>
              <span>실적</span>
            </a>
          </div>
          <div className="icon">
            <a>
              <div>
                <i className="fas fa-newspaper"></i>
              </div>
              <span>스타트업뉴스</span>
            </a>
          </div>
          <div className="icon">
            <a>
              <div>
                <i className="fas fa-microphone"></i>
              </div>
              <span>인터뷰</span>
            </a>
          </div>
          <div className="icon">
            <a>
              <div>
                {" "}
                <i className="fas fa-ellipsis-h"></i>
              </div>
              <span>기타</span>
            </a>
          </div>
        </div>
      </section>

      <section className="contents_list news active" id="startupNews">
        {newsContent}
      </section>
    </>
  );
};

export default NewsContent;
