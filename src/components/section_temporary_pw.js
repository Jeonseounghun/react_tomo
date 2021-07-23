import React from "react";
import "../scss/main.scss";
import "../scss/section_find_id.scss";

const Back_page = () => {
  window.history.back();
};

const LoginPage = () => {
  window.location.href = "/login";
};

const TemporaryPW = () => {
  return (
    <>
      <section class="temporary__id show">
        <div class="temporary__id">
          <div class="text">
            <span>임시 비밀번호</span>
            <span class="temporary">epgk87528</span>
            <br />
            <span>로그인 후 비밀번호를 변경해 주세요.</span>
          </div>
          <div class="copy">복사하기</div>
          <div class="login__contain">
            <div className="login" onClick={LoginPage}>
              로그인
            </div>
            <div className="confirm" onClick={Back_page}>
              확인
            </div>
          </div>
        </div>
      </section>
      <section className="submit">
        <span>확인</span>
      </section>
    </>
  );
};

export default TemporaryPW;
