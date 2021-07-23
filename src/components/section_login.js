import React from "react";
import "../scss/main.scss";
import "../scss/section_login.scss";

const to_main_tap = () => {
  window.location.href = "/main_tap";
};

const to_find_id = () => {
  window.location.href = "/find_id";
};

const to_find_pw = () => {
  window.location.href = "/find_pw";
};

const to_join = () => {
  window.location.href = "/join";
};

const SectionLogin = () => {
  return (
    <section className="login">
      <form action="">
        <div className="login__title">
          <span> 가입자 정보를 입력해주세요.</span>
        </div>
        <div className="login__id">
          <input type="text" placeholder="ID(이메일주소)" />
        </div>
        <div className="login__password">
          <input type="text" placeholder="비밀번호" />
        </div>

        <div className="login__start" onClick={to_main_tap}>
          <span>로그인</span>
        </div>
      </form>
      <div className="login__container">
        <div className="find__id" onClick={to_find_id}>
          아이디찾기
        </div>

        <div className="find__password" onClick={to_find_pw}>
          비밀번호찾기
        </div>

        <div className="register" onClick={to_join}>
          회원가입
        </div>
      </div>
    </section>
  );
};

export default SectionLogin;
