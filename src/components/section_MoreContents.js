import React, { Component } from "react";
import "../scss/more.scss";

class MoreContents extends Component {
  render() {
    return (
      <>
        <section class="more_list">
          <div class="container_box">
            <div class="content" onclick="location.href='./more_notice.html'">
              <span class="title">공지사항</span>
              <i class="fas fa-angle-right"></i>
            </div>
            <div
              class="content"
              onclick="location.href='./more_member_info.html'"
            >
              <span class="title">나의 정보 변경</span>
              <i class="fas fa-angle-right"></i>
            </div>
            <div
              class="content"
              onclick="location.href='./change_pw.html.html'"
            >
              <span class="title">비밀번호 변경</span>
              <i class="fas fa-angle-right"></i>
            </div>
            <div class="content">
              <span class="title" onclick="location.href='./more_Q&A.html'">
                자주 묻는 질문
              </span>
              <i class="fas fa-angle-right"></i>
            </div>
            <div class="content">
              <span class="title" onclick="location.href='./more_sub1.html'">
                이용약관
              </span>
              <i class="fas fa-angle-right"></i>
            </div>
            <div class="content">
              <span class="title" onclick="location.href='./more_sub2.html'">
                개인정보 처리방침
              </span>
              <i class="fas fa-angle-right"></i>
            </div>
            <div class="content" onclick="location.href='./login.html'">
              <span class="title">로그아웃</span>
              <i class="fas fa-angle-right"></i>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MoreContents;
