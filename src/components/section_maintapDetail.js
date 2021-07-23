import React from "react";
import "../scss/main.scss";
import "../scss/main_tap.scss";

const DetailContents = (props) => {
  console.log(props.state);
  const detailContent = props.state.map((El) =>
    `/main_tap/${El.idx}` === window.location.pathname ? (
      <>
        <section className="detail" key={El.idx}>
          <div className="title">
            <img alt=""/>
            {El.title}
          </div>
          <div className="contents">
            <div className="">
              <span>{El.content}</span>
            </div>
            <div className="">
              <span>지원종류</span>
              <span>{El.sup_type}</span>
            </div>
            <div className="">
              <span>신청기간</span>
              <span>
                {El.start_day} ~ {El.end_day}
              </span>
            </div>
            <div className="">
              <span>지원조건</span>
              <span>{El.sup_condition}</span>
            </div>
            <div className="">
              <span>지원방법</span>
              <span>{El.sup_pay}</span>
            </div>
            <div className="">
              <span>주관처</span>
              <span>중소벤처기업부</span>
            </div>
            <div className="">
              <span>※자세한 사항은 중소벤처기업부 홈페이지 참조</span>
            </div>
            <div
              className="btn"
              onClick={() => {
                window.location.href = `${El.homepage}`;
              }}
            >
              <span>홈페이지 이동</span>
            </div>
          </div>
        </section>
        <section className="Board">
          <div className="title">게시판 제목</div>
          <div className="contents">
            게시판 내용게시판 내용게시판 내용게시판 내용게시판 내용게시판
            내용게시판 내용게시판 내용게시판 내용게시판 내용게시판 내용게시판
            내용게시판 내용게시판 내용게시판 내용게시판 내용게시판 내용게시판
            내용게시판 내용게시판 내용게시판 내용게시판 내용게시판 내용게시판
            내용게시판 내용게시판 내용게시판 내용게시판 내용게시판 내용게시판
            내용게시판 내용게시판 내용게시판 내용게시판 내용게시판 내용게시판
            내용게시판 내용게시판 내용게시판 내용게시판 내용게시판 내용게시판
            내용게시판 내용게시판 내용
          </div>
        </section>
      </>
    ) : (
      ""
    )
  );
  return <>{detailContent}</>;
};

export default DetailContents;
