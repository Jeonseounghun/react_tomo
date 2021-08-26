import React, { useState } from "react";
import "../scss/news.scss";
import "../scss/main.scss";
import image2 from "../images/logo.png";

const NewsContent = (props) => {
  const [category, setCategory] = useState(props.state.category);
  const newsContents = props.data;
  const newsContent = newsContents.map((El) =>
    category === El.category ? (
      <div className="news_contents">
        <div className="title">
          <span>{El.content_priod}</span>
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
            <img src={El.content_img ? El.content_img : image2} alt="" />
          </div>
          <div className="content">
            <div className="content__title">{El.content_title}</div>
            <div className="content__summary">{El.content_sumary}....</div>
          </div>
        </div>
      </div>
    ) : (
      ""
    )
  );

  return (
    <>
      <section className="top_menu news active">
        <ul>
          <li className="active">
            <span>스타트업뉴스</span>
          </li>
          <li className="">
            <span>관심뉴스</span>
            <section className="contents_list news"></section>
          </li>
        </ul>
      </section>

      <section className="categori active">
        <div className="icon__constainer">
          <div
            className={"icon " + (category === "지원사업" ? "active" : "")}
            onClick={() => {
              setCategory("지원사업");
            }}
          >
            <div>
              <i className="far fa-building"></i>
            </div>
            <span>지원사업</span>
          </div>
          <div
            className={"icon " + (category === "투자/엑싯" ? "active" : "")}
            onClick={() => {
              setCategory("투자/엑싯");
            }}
          >
            <div>
              {" "}
              <i className="fa fa-coins"></i>
            </div>
            <span>투자/엑싯</span>
          </div>
          <div
            className={"icon " + (category === "실적" ? "active" : "")}
            onClick={() => {
              setCategory("실적");
            }}
          >
            <div>
              <i className="fas fa-clipboard-list"></i>
            </div>
            <span>실적</span>
          </div>
          <div
            className={"icon " + (category === "스타트업뉴스" ? "active" : "")}
            onClick={() => {
              setCategory("스타트업뉴스");
            }}
          >
            <div>
              <i className="fas fa-newspaper"></i>
            </div>
            <span>스타트업뉴스</span>
          </div>
          <div
            className={"icon " + (category === "인터뷰" ? "active" : "")}
            onClick={() => {
              setCategory("인터뷰");
            }}
          >
            <div>
              <i className="fas fa-microphone"></i>
            </div>
            <span>인터뷰</span>
          </div>
          <div
            className={"icon " + (category === "기타" ? "active" : "")}
            onClick={() => {
              setCategory("기타");
            }}
          >
            <div>
              {" "}
              <i className="fas fa-ellipsis-h"></i>
            </div>
            <span>기타</span>
          </div>
        </div>
      </section>
      <div class="bd"></div>
      <section className="contents_list news active" id="startupNews">
        {!props.status ? newsContent : "로딩중"}
      </section>
    </>
  );
};

export default NewsContent;
