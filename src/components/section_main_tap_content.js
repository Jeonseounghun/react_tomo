import React, { useState } from "react";
import "../scss/main_tap.scss";

const MainTapContent = (props) => {
  const [headtag, setHeadtag] = useState(props.headtag);
  const suppoertDatas = props.data;
  let suppoertData = [];

  switch (headtag) {
    case "전체사업":
      suppoertData = suppoertDatas.map((El) => (
        <div
          className="contents"
          onClick={() => {
            window.location.href = `/main_tap/${El.idx}`;
          }}
        >
          <div className="content">
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
          </div>
          <div className="content__Dday">
            <i className="fa-star far"></i>
            <span>D-8</span>
          </div>
        </div>
      ));
      break;
    case "관심사업":
      suppoertData = suppoertDatas.map((El) =>
        El.sup_type === "사업화" ? (
          <div
            className="contents"
            onClick={() => {
              window.location.href = `/main_tap/${El.idx}`;
            }}
          >
            <div className="content">
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
            </div>
            <div className="content__Dday">
              <i className="fa-star far"></i>
              <span>D-8</span>
            </div>
          </div>
        ) : (
          ""
        )
      );
      break;
    case "추천사업":
      suppoertData = suppoertDatas.map((El) =>
        El.recommend > 50 ? (
          <div
            className="contents"
            onClick={() => {
              window.location.href = `/main_tap/${El.idx}`;
            }}
          >
            <div className="content">
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
            </div>
            <div className="content__Dday">
              <i className="fa-star far"></i>
              <span>D-9</span>
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
          <div
            className="contents"
            onClick={() => {
              window.location.href = `/main_tap/${El.idx}`;
            }}
          >
            <div className="content">
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
            </div>
            <div className="content__Dday">
              <i className="fa-star far"></i>
              <span>D-9</span>
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
      </section>
    </>
  );
};

export default MainTapContent;
