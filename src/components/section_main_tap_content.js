import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../scss/main_tap.scss";

const MainTapContent = (props) => {
  const [headtag, setHeadtag] = useState(props.headtag);

  const suppoertDatas = props.data;

  let suppoertData = [];
  let suppoertData2 = [(<div className="contents">
    로딩중
  </div>)];
  setTimeout(() => {
    const contentDday = document.querySelectorAll(".content__Dday");
    contentDday.forEach((El) => {
      const contentHeight = El.previousElementSibling.clientHeight;
      El.style.height = contentHeight + "px";
    });

  }, 1);

  switch (headtag) {
    case "관심사업":
      suppoertData = suppoertDatas.map((El) =>
        El.sup_type === "사업화" ? (
          <div className="contents" key={El.idx}>
            <div className="content">
              <Link to={"/main_tap/" + El.idx}>
                <div className="content__title">{El.title}</div>
                <div className="content__period">
                  {El.start_day} ~ {El.end_day}
                </div>
                <div className="content__period">중소벤처기업부</div>

                <div className="content__tags">
                  {El.tag ? (
                    El.tag.map((El) => (
                      <span className="content__tag">{El}</span>
                    ))
                  ) : (
                    <span className="content__tag">태그없음</span>
                  )}

                  <div className="content__money">{El.sup_pay}</div>
                </div>
              </Link>
            </div>
            <div className="content__Dday">
              <i className="fa-star far"></i>
              <span>
                {El.dday >= 0
                  ? El.dday === 0
                    ? "D-day"
                    : `D-${El.dday}`
                  : "OVER"}
              </span>
            </div>
          </div>
        ) : (
          ""
        )
      );

      break;
    case "전체사업":
      suppoertData = suppoertDatas.map((El, i) => (
        <div className="contents" key={El.idx}>
          <div className="content">
            <Link to={"/main_tap/" + El.idx}>
              <div className="content__title">{El.title}</div>
              <div className="content__period">
                {El.start_day} ~ {El.end_day}
              </div>
              <div className="content__period">중소벤처기업부</div>

              <div className="content__tags">
                {El.tag ? (
                  El.tag.map((El) => <span className="content__tag">{El}</span>)
                ) : (
                  <span className="content__tag">태그없음</span>
                )}

                <div className="content__money">{El.sup_pay}</div>
              </div>
            </Link>
          </div>

          <div className={"content__Dday " + "num" + i}>
            <i className="fa-star far"></i>
            <span>
              {El.dday >= 0
                ? El.dday === 0
                  ? "D-day"
                  : `D-${El.dday}`
                : "OVER"}
            </span>
          </div>
        </div>
      ));

      break;
    case "추천사업":
      suppoertData = suppoertDatas.map((El) =>
        El.recommend > 50 ? (
          <div className="contents" key={El.idx}>
            <div className="content">
              <Link to={"/main_tap/" + El.idx}>
                <div className="content__title">{El.title}</div>
                <div className="content__period">
                  {El.start_day} ~ {El.end_day}
                </div>
                <div className="content__period">중소벤처기업부</div>

                <div className="content__tags">
                  {El.tag ? (
                    El.tag.map((El) => (
                      <span className="content__tag">{El}</span>
                    ))
                  ) : (
                    <span className="content__tag">태그없음</span>
                  )}

                  <div className="content__money">{El.sup_pay}</div>
                </div>
              </Link>
            </div>
            <div className="content__Dday">
              <i className="fa-star far"></i>
              <span>
                {El.dday >= 0
                  ? El.dday === 0
                    ? "D-day"
                    : `D-${El.dday}`
                  : "OVER"}
              </span>
            </div>
          </div>
        ) : (
          ""
        )
      );
      break;
    default:
      suppoertData = suppoertDatas.map((El) =>
        El.sup_condition === "창업5년미만" ? (
          <div className="contents" key={El.idx}>
            <div className="content">
              <Link to={"/main_tap/" + El.idx}>
                <div className="content__title">{El.title}</div>
                <div className="content__period">
                  {El.start_day} ~ {El.end_day}
                </div>
                <div className="content__period">중소벤처기업부</div>

                <div className="content__tags">
                  {El.tag ? (
                    El.tag.map((El) => (
                      <span className="content__tag">{El}</span>
                    ))
                  ) : (
                    <span className="content__tag">태그없음</span>
                  )}

                  <div className="content__money">{El.sup_pay}</div>
                </div>
              </Link>
            </div>
            <div className="content__Dday">
              <i className="fa-star far"></i>
              <span>
                {El.dday >= 0
                  ? El.dday === 0
                    ? "D-day"
                    : `D-${El.dday}`
                  : "OVER"}
              </span>
            </div>
          </div>
        ) : (
          ""
        )
      );
  }

  return (
    <>
      <section className="top_menu Business active">
        <ul>
          <li
            key="1"
            className={headtag === "맞춤사업" ? "active" : ""}
            onClick={() => {
              setHeadtag("맞춤사업");
            }}
          >
            <span>맞춤사업</span>
          </li>
          <li
            key="2"
            className={headtag === "추천사업" ? "active" : ""}
            onClick={() => {
              setHeadtag("추천사업");
            }}
          >
            <span>추천사업</span>
          </li>
          <li
            key="3"
            className={headtag === "관심사업" ? "active" : ""}
            onClick={() => {
              setHeadtag("관심사업");
            }}
          >
            <span>관심사업</span>
          </li>
          <li
            key="4"
            className={headtag === "전체사업" ? "active" : ""}
            onClick={() => {
              setHeadtag("전체사업");
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
        {props.state.item <= props.state.all_item ? suppoertData2 : ""}
      </section>
    </>
  );
};

export default MainTapContent;
