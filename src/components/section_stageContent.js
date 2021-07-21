import React, { Component } from "react";
import "../scss/stage.scss";
import image from "../images/데이터하이브.PNG";

class StageContents extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <section class="banner">
          <div class="title">
            <h1>스테이지에 올린 게시물을 작성해보세요!</h1>
            <h2>설문지 형태로 진행됩니다</h2>
          </div>
          <div class="btn_contain">
            <div class="btn">바로가기</div>
          </div>
        </section>

        <section class="content_container">
          <div class="contents" onclick="location.href='stage_detail.html'">
            <div class="img">
              <img src={image} alt="" />
            </div>
            <div class="content">
              <div class="title">
                AI / 빅데이터 사업을 확장하고 싶으세요? 데이터바우처 사업을
                더그로우즈와 함께!!
              </div>
              <div class="company_name">데이터하이브</div>
              <div class="info_contain">
                <div class="period">2021-07-14</div>
                <div class="view_like">
                  <div class="view">
                    <i class="fas fa-eye"></i>100
                  </div>
                  <div class="like">
                    <i class="far fa-thumbs-up"></i>200
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default StageContents;
