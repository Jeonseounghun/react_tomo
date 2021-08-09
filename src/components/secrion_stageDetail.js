import React from "react";
import "../scss/main.scss";
import "../scss/stage.scss";
import image from "../images/데이터하이브.PNG";

const StageDetailContent = (props) => {
  const detailContent = props.state.map((El) =>
    `/stage/${El.idx}` === window.location.pathname ? (
      <>
        <section className="company_detail">
          <div className=" slide">
            <img src={image} className="d-block w-100" alt="..." />
          </div>
          <div className="title">
            <span>{El.company_name}</span>
            <div className="view_like">
              <div className="view">
                <i className="fas fa-eye"></i>
                {El.view_cnt}
              </div>
              <div className="like">
                <i className="far fa-thumbs-up"></i>
                {El.view_cnt}
              </div>
            </div>
          </div>
          <div className="company_info">
            <div className="email">
              <span>이메일</span>
              <span>{El.email}</span>
            </div>
            <div className="tele_number">
              <span>전화번호</span>
              <span>데이터베이스 존재 x</span>
            </div>
          </div>
          <div
            className="btn"
            onClick={() => {
              window.location.href = `${El.homepage}`;
            }}
          >
            <span>홈페이지 이동</span>
          </div>
          <div class="stage_content">
            <div class="contents_container">
              <div class="period">
                {El.udp_date ? El.udp_date : "2020-01-01"}
              </div>
              <div class="title">{El.title}</div>
              <div class="contents__content">
                컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.컨텐츠
                영역입니다.컨텐츠 영역입니다.컨텐츠 영역입니다.
              </div>
            </div>
          </div>
        </section>
      </>
    ) : (
      ""
    )
  );
  return <>{detailContent}</>;
};

export default StageDetailContent;
