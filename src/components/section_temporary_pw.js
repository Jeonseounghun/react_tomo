import React from "react";
import { Link } from "react-router-dom";
import "../scss/main.scss";
import "../scss/section_find_id.scss";

const TemporaryPW = () => {
  return (
    <>
      <section className="temporary__id show">
        <div className="temporary__id">
          <div className="text">
            <span>임시 비밀번호</span>
            <span className="temporary">epgk87528</span>
            <br />
            <span>로그인 후 비밀번호를 변경해 주세요.</span>
          </div>
          <div className="copy">복사하기</div>
          <div className="login__contain">
            <Link to="/login">
              <div className="login">로그인</div>
            </Link>
            <Link to="/login">
              <div className="confirm">확인</div>
            </Link>
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
