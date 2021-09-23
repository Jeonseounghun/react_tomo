import React from "react";
import { Link } from "react-router-dom";
import main_logo from "../images/illust-main.png";
import "../scss/main.scss";
import "../scss/section_logo.scss";

const SectionLogo = () => {
  return (
    <section className="logo">
      <div className="logo">
        <img src={main_logo} alt="" />
      </div>
      <h1>내일의 사업에 오신걸 환영합니다!</h1>
      <h2>
        아래에 있는 시작하기 번튼을 눌러서
        <br /> 당신의 사업을 시작해보세요 و٩(ᐛ)و
      </h2>
      <Link to="/nael/login">
        <div className="logo__start">
          <span>시작하기</span>
        </div>
      </Link>
    </section>
  );
};

export default SectionLogo;
