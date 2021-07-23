import React from "react";
import "../scss/stage.scss";
import image from "../images/데이터하이브.PNG";

const StageContents = (props) => {
  const stageContent = props.state.map((El) => (
    <div
      className="contents"
      onClick={() => {
        window.location.href = `/stage/${El.idx}`;
      }}
    >
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <div className="title">{El.title}</div>
        <div className="company_name">{El.company_name}</div>
        <div className="info_contain">
          <div className="period">
            {El.udp_date ? El.udp_date : "2020-01-01"}
          </div>
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
      </div>
    </div>
  ));

  return (
    <>
      <section className="banner">
        <div className="title">
          <h1>스테이지에 올린 게시물을 작성해보세요!</h1>
          <h2>설문지 형태로 진행됩니다</h2>
        </div>
        <div className="btn_contain">
          <div className="btn">바로가기</div>
        </div>
      </section>

      <section className="content_container">{stageContent}</section>
    </>
  );
};

export default StageContents;
