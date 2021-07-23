import React from "react";
import "../scss/main.scss";
import "../scss/section_find_id.scss";

const Back_page = () => {
  window.history.back();
};

const LoginPage = () => {
  window.location.href = "/login";
};

const TemporaryID = () => {
  return (
    <>
      <section className="temporary__id show">
        <div className="temporary__id">
          <div className="text">
            <span>입력하신 정보로 조회된 아이디는</span>
            <br />
            <span className="temporary">sy.woo@datahive.co.kr</span>
            <span>입니다</span>
          </div>
          <div className="copy">복사하기</div>
          <div className="login__contain">
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

export default TemporaryID;
