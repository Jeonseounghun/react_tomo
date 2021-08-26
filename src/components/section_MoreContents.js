import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../scss/more.scss";
import "../scss/main.scss";
import logo from "../images/logo.svg";
import Headerdetail from "../components/header_detail";

const tap_title = {
  title: "아이디찾기",
  logo: logo,
};
function changeCheck(e) {
  if (e.target.parentElement.classList.contains("active")) {
    e.target.parentElement.classList.remove("active");
  } else {
    e.target.parentElement.classList.add("active");
  }
}
const MoreContents = (props) => {
  const [morecontent, setMoreContent] = useState(props.state);
  const [info, setInfo] = useState(tap_title);
  const [camera, setCamera] = useState("unshow");
  const [withdrawal, setWithdrawal] = useState("unshow");
  const [changepw, setChangePW] = useState("unshow");

  switch (morecontent) {
    case "공지사항":
      return (
        <>
          <Headerdetail setMoreContent={setMoreContent} tap_title={info} />
          <section className="more_list">
            <div className="container_box">
              <div className="content">
                <div className="title">
                  <span className="title">서비스 이용 약관 변경 안내</span>
                  <span className="period">2021.07.05</span>
                </div>
                <i
                  className="fas fa-angle-down"
                  onClick={(e) => {
                    if (
                      e.target.nextElementSibling.classList.contains("active")
                    ) {
                      e.target.classList.remove("fa-angle-up");
                      e.target.classList.add("fa-angle-down");
                      e.target.nextElementSibling.classList.remove("active");
                    } else {
                      e.target.classList.remove("fa-angle-down");
                      e.target.classList.add("fa-angle-up");
                      e.target.nextElementSibling.classList.add("active");
                    }
                  }}
                ></i>
                <div className="content__content">
                  약관이 변경되었습니다약관이 변경되었습니다약관이
                  변경되었습니다약관이 변경되었습니다약관이 변경되었습니다약관이
                  변경되었습니다약관이 변경되었습니다약관이 변경되었습니다약관이
                  변경되었습니다약관이 변경되었습니다약관이 변경되었습니다약관이
                  변경되었습니다약관이 변경되었습니다약관이 변경되었습니다약관이
                  변경되었습니다약관이 변경되었습니다약관이 변경되었습니다약관이
                  변경되었습니다약관이 변경되었습니다약관이 변경되었습니다약관이
                  변경되었습니다약관이 변경되었습니다약관이 변경되었습니다약관이
                  변경되었습니다약관이 변경되었습니다약관이 변경되었습니다약관이
                  변경되었습니다약관이 변경되었습니다약관이 변경되었습니다약관이
                  변경되었습니다
                </div>
              </div>
            </div>
          </section>
        </>
      );
    case "나의 정보 변경":
      return (
        <>
          <Headerdetail setMoreContent={setMoreContent} tap_title={info} />
          <section className="member_info">
            <div
              className="profile_img"
              onClick={() => {
                setCamera("show");
              }}
            >
              <i className="fas fa-user-alt"></i>
              <div className="camera">
                <i className="fas fa-camera"></i>
              </div>
            </div>
            <form action="">
              <div className="join__name">
                <input type="text" placeholder="회사명*" />
              </div>
              <div className="join__name">
                <input type="text" placeholder="이름*" />
              </div>
              <div className="join__class">
                <select>
                  <option value="">직책*</option>
                  <option value="대표">대표</option>
                  <option value="임원">임원</option>
                  <option value="연구소장">연구소장</option>
                  <option value="직원">직원</option>
                  <option value="기타">기타</option>
                </select>
              </div>
              <div>
                <input type="text" placeholder="전화번호" />
              </div>
              <div className="join__class">
                <select>
                  <option value="">사업 지역*</option>
                  <option value="서울">서울</option>
                  <option value="경기">경기</option>
                  <option value="부산">부산</option>
                  <option value="인천">인천</option>
                  <option value="대구">대구</option>
                  <option value="대전">대전</option>
                  <option value="광주">광주</option>
                  <option value="울산">울산</option>
                  <option value="강원">강원</option>
                  <option value="충북">충북</option>
                  <option value="충남">충남</option>
                  <option value="전북">전북</option>
                  <option value="전남">전남</option>
                  <option value="경북">경북</option>
                  <option value="경남">경남</option>
                  <option value="제주">제주</option>
                  <option value="세종">세종</option>
                </select>
              </div>
              <div className="join__class">
                <select>
                  <option value="">관심 지역*</option>
                  <option value="서울">서울</option>
                  <option value="경기">경기</option>
                  <option value="부산">부산</option>
                  <option value="인천">인천</option>
                  <option value="대구">대구</option>
                  <option value="대전">대전</option>
                  <option value="광주">광주</option>
                  <option value="울산">울산</option>
                  <option value="강원">강원</option>
                  <option value="충북">충북</option>
                  <option value="충남">충남</option>
                  <option value="전북">전북</option>
                  <option value="전남">전남</option>
                  <option value="경북">경북</option>
                  <option value="경남">경남</option>
                  <option value="제주">제주</option>
                  <option value="세종">세종</option>
                </select>
              </div>
              <div className="join__class">
                <select>
                  <option value="">주업종*</option>
                  <option value="제조업">제조업</option>
                  <option value="제조업">제조업</option>
                  <option value="농업/어업/광업">농업/어업/광업</option>
                  <option value="건설업">건설업</option>
                  <option value="도소매업">도소매업</option>
                  <option value="ICT">ICT</option>
                  <option value="과학기술서비스업">과학기술서비스업</option>
                  <option value="교육서비스업">교육서비스업</option>
                  <option value="바이오">바이오</option>
                  <option value="콘텐츠">콘텐츠</option>
                  <option value="예술/스포츠">예술/스포츠</option>
                  <option value="기타">기타</option>
                </select>
              </div>
              <div className="join__class">
                <select>
                  <option value="">관심업종1</option>
                  <option value="제조업">제조업</option>
                  <option value="제조업">제조업</option>
                  <option value="농업/어업/광업">농업/어업/광업</option>
                  <option value="건설업">건설업</option>
                  <option value="도소매업">도소매업</option>
                  <option value="ICT">ICT</option>
                  <option value="과학기술서비스업">과학기술서비스업</option>
                  <option value="교육서비스업">교육서비스업</option>
                  <option value="바이오">바이오</option>
                  <option value="콘텐츠">콘텐츠</option>
                  <option value="예술/스포츠">예술/스포츠</option>
                  <option value="기타">기타</option>
                </select>
              </div>
              <div className="join__class">
                <select>
                  <option value="">관심업종2</option>
                  <option value="제조업">제조업</option>
                  <option value="제조업">제조업</option>
                  <option value="농업/어업/광업">농업/어업/광업</option>
                  <option value="건설업">건설업</option>
                  <option value="도소매업">도소매업</option>
                  <option value="ICT">ICT</option>
                  <option value="과학기술서비스업">과학기술서비스업</option>
                  <option value="교육서비스업">교육서비스업</option>
                  <option value="바이오">바이오</option>
                  <option value="콘텐츠">콘텐츠</option>
                  <option value="예술/스포츠">예술/스포츠</option>
                  <option value="기타">기타</option>
                </select>
              </div>
              <div className="chech_box_container">
                <div className="title">관심지원사업 선택 (중복가능)</div>
                <div className="container">
                  <div className="checkbox">
                    <i className="fas fa-check-circle"></i>
                    <span>자금지원</span>
                  </div>
                  <div
                    className="checkbox"
                    onClick={(e) => {
                      changeCheck(e);
                    }}
                  >
                    <i className="fas fa-check-circle"></i>
                    <span>융자/보증</span>
                  </div>
                  <div
                    className="checkbox"
                    onClick={(e) => {
                      changeCheck(e);
                    }}
                  >
                    <i className="fas fa-check-circle"></i>
                    <span>R&D</span>
                  </div>
                  <div
                    className="checkbox"
                    onClick={(e) => {
                      changeCheck(e);
                    }}
                  >
                    <i className="fas fa-check-circle"></i>
                    <span>마케팅</span>
                  </div>
                  <div
                    className="checkbox"
                    onClick={(e) => {
                      changeCheck(e);
                    }}
                  >
                    <i className="fas fa-check-circle"></i>
                    <span>인건비</span>
                  </div>
                  <div
                    className="checkbox"
                    onClick={(e) => {
                      changeCheck(e);
                    }}
                  >
                    <i className="fas fa-check-circle"></i>
                    <span>특허</span>
                  </div>
                  <div
                    className="checkbox"
                    onClick={(e) => {
                      changeCheck(e);
                    }}
                  >
                    <i className="fas fa-check-circle"></i>
                    <span>네트워킹</span>
                  </div>
                  <div
                    className="checkbox"
                    onClick={(e) => {
                      changeCheck(e);
                    }}
                  >
                    <i className="fas fa-check-circle"></i>
                    <span>공간</span>
                  </div>
                  <div
                    className="checkbox"
                    onClick={(e) => {
                      changeCheck(e);
                    }}
                  >
                    <i className="fas fa-check-circle"></i>
                    <span>교육</span>
                  </div>
                  <div
                    className="checkbox"
                    onClick={(e) => {
                      changeCheck(e);
                    }}
                  >
                    <i className="fas fa-check-circle"></i>
                    <span>해외진출</span>
                  </div>
                  <div
                    className="checkbox"
                    onClick={(e) => {
                      changeCheck(e);
                    }}
                  >
                    <i className="fas fa-check-circle"></i>
                    <span>인증</span>
                  </div>
                  <div
                    className="checkbox"
                    onClick={(e) => {
                      changeCheck(e);
                    }}
                  >
                    <i className="fas fa-check-circle"></i>
                    <span>투자/IR</span>
                  </div>
                </div>
              </div>
              <div
                className="Withdrawal"
                onClick={() => {
                  setWithdrawal("show");
                }}
              >
                <span className="Withdrawal">회원탈퇴</span>
              </div>
            </form>
          </section>

          <section
            className={"member_profile " + (camera === "show" ? "show" : "")}
          >
            <div className="member_profile">
              <div className="title">프로필 사진 설정</div>
              <div className="container">
                <span>앨범에서 선택</span>
                <i className="fas fa-images"></i>
              </div>
              <div className="container">
                <span>사진 찍기</span>
                <i className="fas fa-camera"></i>
              </div>
              <div
                className="cancel"
                onClick={() => {
                  setCamera("unshow");
                }}
              >
                취소
              </div>
            </div>
          </section>

          <section
            className={"withdrawal " + (withdrawal === "show" ? "show" : "")}
          >
            <div className="withdrawal">
              <div className="title">
                <span>회원탈퇴 하시겠습니까?</span>
              </div>
              <div>
                회원 탈퇴시 작성된 개인정보는 모두 삭제 처리되며, 작성한
                게시물은 삭제 되지 않습니다.
              </div>
              <div className="login__contain">
                <div
                  className="login"
                  onClick={() => {
                    setWithdrawal("unshow");
                  }}
                >
                  회원탈퇴
                </div>
                <div
                  className="cancel"
                  onClick={() => {
                    setWithdrawal("unshow");
                  }}
                >
                  취소
                </div>
              </div>
            </div>
          </section>
          <section className="confirm end">
            <span>수정완료</span>
          </section>
        </>
      );
    case "비밀번호 변경":
      return (
        <>
          <Headerdetail setMoreContent={setMoreContent} tap_title={info} />
          <section className="login_find">
            <form action="">
              <div className="login__name">
                <input type="text" placeholder="새 비밀번호" />
              </div>
              <div className="login__id">
                <input type="text" placeholder="새 비밀번호 확인" />
              </div>
            </form>
          </section>

          <section
            className={"temporary__id " + (changepw === "show" ? "show" : "")}
          >
            <div className="temporary__id">
              <div className="text">
                <span>비밀번호가 변경되었습니다.</span>
              </div>

              <div className="login__contain">
                <Link to="/login">
                  <div className="login">로그인</div>
                </Link>
                <Link
                  to="/more"
                  onClick={() => {
                    setChangePW("");
                  }}
                >
                  <div className="confirm">확인</div>
                </Link>
              </div>
            </div>
          </section>
          <section
            className="confirm end"
            onClick={() => {
              setChangePW("show");
            }}
          >
            <span>확인</span>
          </section>
        </>
      );
    case "자주 묻는 질문":
      return (
        <>
          <Headerdetail setMoreContent={setMoreContent} tap_title={info} />
          <section className="more_list">
            <div className="container_box">
              <div className="content">
                <div className="title">
                  <span className="title">
                    직책을 바꾸려면 어떻게 해야 하나요?
                  </span>
                </div>
                <i
                  className="fas fa-angle-down"
                  onClick={(e) => {
                    if (
                      e.target.nextElementSibling.classList.contains("active")
                    ) {
                      e.target.classList.remove("fa-angle-up");
                      e.target.classList.add("fa-angle-down");
                      e.target.nextElementSibling.classList.remove("active");
                    } else {
                      e.target.classList.remove("fa-angle-down");
                      e.target.classList.add("fa-angle-up");
                      e.target.nextElementSibling.classList.add("active");
                    }
                  }}
                ></i>
                <div className="content__content">
                  나의 정보 변경으로 가서 이렇게 저렇게 하시면 됩니다
                </div>
              </div>
              <div className="content">
                <div className="title">
                  <span className="title">
                    기업에 대한 정보가 변경되었는데 어떻게 해야 하나요?
                  </span>
                </div>
                <i
                  className="fas fa-angle-down"
                  onClick={(e) => {
                    if (
                      e.target.nextElementSibling.classList.contains("active")
                    ) {
                      e.target.classList.remove("fa-angle-up");
                      e.target.classList.add("fa-angle-down");
                      e.target.nextElementSibling.classList.remove("active");
                    } else {
                      e.target.classList.remove("fa-angle-down");
                      e.target.classList.add("fa-angle-up");
                      e.target.nextElementSibling.classList.add("active");
                    }
                  }}
                ></i>
                <div className="content__content">내용을 추가해보세요</div>
              </div>
            </div>
          </section>
        </>
      );
    case "이용약관":
      return (
        <>
          <Headerdetail setMoreContent={setMoreContent} tap_title={info} />
          <section className="more_contents">
            <h1>제1장 총칙</h1>
            <h2>제1조(목적)</h2>
            <h3>
              가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가거가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가
            </h3>
          </section>
        </>
      );
    case "개인정보 처리방침":
      return (
        <>
          <Headerdetail setMoreContent={setMoreContent} tap_title={info} />
          <section className="more_contents">
            <h1>제1장 총칙</h1>
            <h2>제1조(목적)</h2>
            <h3>
              가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가거가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가가
            </h3>
          </section>
        </>
      );

    default:
      return (
        <>
          <Headerdetail tap_title={info} />
          <section className="more_list">
            <div className="container_box">
              <div
                className="content"
                onClick={() => {
                  setMoreContent("공지사항");
                  setInfo({ title: "공지사항" });
                }}
              >
                <span className="title">공지사항</span>
                <i className="fas fa-angle-right"></i>
              </div>
              <div
                className="content"
                onClick={() => {
                  setMoreContent("나의 정보 변경");
                  setInfo({ title: "나의 정보 변경" });
                }}
              >
                <span className="title">나의 정보 변경</span>
                <i className="fas fa-angle-right"></i>
              </div>
              <div
                className="content"
                onClick={() => {
                  setMoreContent("비밀번호 변경");
                  setInfo({ title: "비밀번호 변경" });
                }}
              >
                <span className="title">비밀번호 변경</span>
                <i className="fas fa-angle-right"></i>
              </div>
              <div
                className="content"
                onClick={() => {
                  setMoreContent("자주 묻는 질문");
                  setInfo({ title: "자주 묻는 질문" });
                }}
              >
                <span className="title">자주 묻는 질문</span>
                <i className="fas fa-angle-right"></i>
              </div>
              <div
                className="content"
                onClick={() => {
                  setMoreContent("이용약관");
                  setInfo({ title: "이용약관" });
                }}
              >
                <span className="title">이용약관</span>
                <i className="fas fa-angle-right"></i>
              </div>
              <div
                className="content"
                onClick={() => {
                  setMoreContent("개인정보 처리방침");
                  setInfo({ title: "개인정보 처리방침" });
                }}
              >
                <span className="title">개인정보 처리방침</span>
                <i className="fas fa-angle-right"></i>
              </div>
              <div
                className="content"
                onClick={() => {
                  window.location.href = "/login";
                }}
              >
                <span className="title">로그아웃</span>
                <i className="fas fa-angle-right"></i>
              </div>
            </div>
          </section>
        </>
      );
  }
};

export default MoreContents;
