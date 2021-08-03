import React from "react";
import { Link } from "react-router-dom";
import "../scss/main.scss";
import "../scss/section_login.scss";

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
        <Link to="/main_tap">
          <div className="login__start">
            <span>로그인</span>
          </div>
        </Link>
      </form>
      <div className="login__container">
        <Link to="/find_id">
          <div className="find__id">아이디찾기</div>
        </Link>
        <Link to="/find_pw">
          <div className="find__password">비밀번호찾기</div>
        </Link>
        <Link to="/join">
          <div className="register">회원가입</div>
        </Link>
      </div>
    </section>
  );
};

export default SectionLogin;
