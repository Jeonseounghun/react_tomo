import React from "react";
import "../scss/main.scss";
import "../scss/stage.scss";
import image from "../images/데이터하이브.PNG";

const StageDetailContent = (props) => {
  console.log(props.state);
  const detailContent = props.state.map((El) =>
    `/stage/${El.idx}` === window.location.pathname ? (
      <>
        <section className="company_detail">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-interval="false"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={image} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={image} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={image} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
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
          <div className="stage_content">
            <div className="contents">
              <div className="period">
                {El.udp_date ? El.udp_date : "2020-01-01"}
              </div>
              <div className="title">{El.title}</div>
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
