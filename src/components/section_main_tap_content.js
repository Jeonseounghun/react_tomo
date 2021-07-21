import React, { useState } from "react";
import "../scss/main_tap.scss";

const MainTapContent = (props) => {
  const [headtag, setHeadtag] = useState(props.headtag);
  const suppoertDatas = props.data;
  const suppoertData = suppoertDatas.map((El) => (
    <div className="contents" key={El.index}>
      <div className="content">
        <div className="content__title">{El.title}</div>
        <div className="content__period">
          {El.start_day} ~ {El.end_day}
        </div>
        <div className="content__period">중소벤처기업부</div>

        <div className="content__tags">
          {El.tag ? (
            El.tag.map((El) => (
              <a className="content__tag" href="">
                {El}
              </a>
            ))
          ) : (
            <a className="content__tag" href="">
              태그없음
            </a>
          )}

          <div className="content__money">{El.sup_pay}</div>
        </div>
      </div>
      <div className="content__Dday">
        <i className="fa-star far"></i>
        <span>D-9</span>
      </div>
    </div>
  ));

  return (
    <>
      <section className="top_menu Business active">
        <ul>
          <li
            key="1"
            className={headtag === "business" ? "active" : ""}
            onClick={() => {
              setHeadtag("business");
            }}
          >
            <span>맞춤사업</span>
          </li>
          <li
            key="2"
            className={headtag === "redcommand" ? "active" : ""}
            onClick={() => {
              setHeadtag("redcommand");
            }}
          >
            <span>추천사업</span>
          </li>
          <li
            key="3"
            className={headtag === "interest" ? "active" : ""}
            onClick={() => {
              setHeadtag("interest");
            }}
          >
            <span>관심사업</span>
          </li>
          <li
            key="4"
            className={headtag === "all" ? "active" : ""}
            onClick={() => {
              setHeadtag("all");
            }}
          >
            <span>전체사업</span>
          </li>
        </ul>
      </section>
      <section
        className="contents_list Business active"
        id="CustomizedBusiness"
      >
        {suppoertData}
      </section>
    </>
  );
};

export default MainTapContent;
