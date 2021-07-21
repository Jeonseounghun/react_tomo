import React, { useState } from "react";
import "../scss/main.scss";

import Header_detail from "./header_detail";
import Section_copyright from "./section_copyright";
import "../scss/join.scss";
import join_image from "../images/illust-join.png";

const tap_title = {
  title: "회원가입",
};

const to_main_tap = () => {
  window.location.href = "/main_tap";
};

function changeCheck(e) {
  if (e.target.parentElement.classList.contains("active")) {
    e.target.parentElement.classList.remove("active");
  } else {
    e.target.parentElement.classList.add("active");
  }
}

function infoCheck(e) {
  if (
    e.target.parentElement.parentElement.parentElement.classList.contains(
      "active"
    )
  ) {
    e.target.parentElement.parentElement.parentElement.classList.remove(
      "active"
    );
  } else {
    e.target.parentElement.parentElement.parentElement.classList.add("active");
  }
}

const Join = () => {
  const [joinNum, setJoinNum] = useState(1);
  return (
    <>
      <Header_detail tap_title={tap_title} />
      <section className={"join1 " + (joinNum === 1 ? "active" : "")}>
        <section className="join_logo">
          <div className="join_logo">
            <img src={join_image} alt="" />
          </div>
          <div className="text_container">
            <h1>환영합니다!</h1>
            <h2>'내일의사업'에 관심을 가져주셔서 감사합니다.</h2>
            <h2>내일의사업은 회원님의 비즈니스모델에 최적화된</h2>
            <h2>지원사업을 추천해 드립니다.</h2>
            <h2>회원정보를 입력하는 데 약 1~2분 정도 소요됩니다.</h2>
            <h2>내일의사업 팀은 대한민국 모든 스타트업을 응원합니다!</h2>
          </div>
        </section>

        <section className="condition_container">
          <div className="condition1">
            <div className="scroll__icon">
              <span className="icon">
                <i
                  className="fas fa-chevron-down"
                  onClick={(e) => {
                    infoCheck(e);
                  }}
                ></i>
              </span>
              <span>이용약관</span>
            </div>
            <div className="check__icon">
              동의
              <i
                className="fas fa-check-circle"
                onClick={(e) => {
                  changeCheck(e);
                }}
              ></i>
            </div>
            <span className="content">
              제1조(목적) 이 약관은 (유)내고향시푸드(전자거래 사업자)이 운영하는
              홈페이지(이하 "쇼핑몰"이라 한다)에서 제공하는 인터넷 관련
              서비스(이하 "서비스"라 한다)를 이용함에 있어 (유)내고향시푸드와
              이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다. ※
              「PC통신 등을 이용하는 전자거래에 대해서도 그 성질에 반하지 않는
              한 이 약관을 준용합니다」 제2조(정의) ① "쇼핑몰" 이란 사업자가
              재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터 등
              정보통신설비를 이용하여 재화 또는 용역을 거래할 수 있도록 설정한
              가상의 영업장을 말하며, 아울러 쇼핑몰을 운영하는 사업자의 의미로도
              사용합니다. ② "이용자"란 "쇼핑몰"에 접속하여 이 약관에 따라
              "쇼핑몰"이 제공하는 서비스를 받는 회원 및 비회원을 말합니다. ③
              "회원"이라 함은 "쇼핑몰"에 개인정보를 제공하여 회원등록을 한
              자로서, "쇼핑몰"의 정보를 지속적으로 제공받으며, "쇼핑몰"이
              제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다. ④
              "비회원"이라 함은 회원에 가입하지 않고 "쇼핑몰"이 제공하는
              서비스를 이용하는 자를 말합니다. 제3조 (약관의 명시와 개정) ①
              "쇼핑몰"은 이 약관의 내용과 상호, 영업소 소재지, 대표자의 성명,
              사업자등록번호, 연락처(전화, 팩스, 전자우편 주소 등) 등을 이용자가
              알 수 있도록 사이트의 초기 서비스화면(전면)에 게시합니다. ②
              "쇼핑몰"은 약관의 규제 등에 관한 법률, 전자거래기본법, 전자서명법,
              정보통신망 이용촉진 등에 관한 법률, 방문판매 등에 관한법률,
              소비자보호법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할
              수 있습니다. ③ "쇼핑몰"이 약관을 개정할 경우에는 적용일자 및
              개정사유를 명시하여 현행약관과 함께 홈페이지의 초기화면에 그
              적용일자 7일 이전부터 적용일자 전일까지 공지합니다. ④ "쇼핑몰"이
              약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는
              계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정 전의
              약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가
              개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의
              공지기간 내에 "쇼핑몰"에 송신하여 "쇼핑몰"의 동의를 받은 경우에는
              개정약관 조항이 적용됩니다. ⑤ 이 약관에서 정하지 아니한 사항과 이
              약관의 해석에 관하여는 정부가 제정한 전자거래소비자보호지침 및
              관계법령 또는 상관례에 따릅니다. 제4조(서비스의 제공 및 변경) ①
              "쇼핑몰"은 다음과 같은 업무를 수행합니다. 1. 재화 또는 용역에 대한
              정보 제공 및 구매계약의 체결 2. 구매계약이 체결된 재화 또는 용역의
              배송 3. 기타 "쇼핑몰"이 정하는 업무 ② "쇼핑몰"은 재화의 품절 또는
              기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할
              재화·용역의 내용을 변경할 수 있습니다. 이 경우에는 변경된
              재화·용역의 내용 및 제공일자를 명시하여 현재의 재화·용역의 내용을
              게시한 곳에 그 제공일자 이전 7일부터 공지합니다. ③ "쇼핑몰"이
              제공하기로 이용자와 계약을 체결한 서비스의 내용을 재화의 품절 또는
              기술적 사양의 변경 등의 사유로 변경할 경우에는 "쇼핑몰"은 이로
              인하여 이용자가 입은 손해를 배상합니다. 단, "쇼핑몰"에 고의 또는
              과실이 없는 경우에는 그러하지 아니합니다. 제5조(서비스의 중단) ①
              "쇼핑몰"은 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의
              두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할
              수 있습니다. ② 제1항에 의한 서비스 중단의 경우에는 "쇼핑몰"은
              제8조에 정한 방법으로 이용자에게 통지합니다. ③ "쇼핑몰"은 제1항의
              사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는
              제3자가 입은 손해에 대하여 배상합니다. 단 "쇼핑몰"에 고의 또는
              과실이 없는 경우에는 그러하지 아니합니다. 제6조(회원가입) ①
              이용자는 "쇼핑몰"이 정한 가입 양식에 따라 회원정보를 기입한 후 이
              약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다. ②
              "쇼핑몰"은 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음
              각 호에 해당하지 않는 한 회원으로 등록합니다. 1. 가입신청자가 이
              약관 제7조 제3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우,
              다만 제7조 제3항에 의한 회원자격 상실 후 3년이 경과한 자로서
              "쇼핑몰"의 회원재가입 승낙을 얻은 경우에는 예외로 한다. 2. 등록
              내용에 허위, 기재누락, 오기가 있는 경우 3. 기타 회원으로 등록하는
              것이 "쇼핑몰"의 기술상 현저히 지장이 있다고 판단되는 경우 ③
              회원가입계약의 성립 시기는 "쇼핑몰"의 승낙이 회원에게 도달한
              시점으로 합니다. ④ 회원은 제15조 제1항에 의한 등록사항에 변경이
              있는 경우, 즉시 전자우편 기타 방법으로 "쇼핑몰"에 대하여 그
              변경사항을 알려야 합니다. 제7조(회원 탈퇴 및 자격 상실 등) ①
              회원은 "쇼핑몰"에 언제든지 탈퇴를 요청할 수 있으며 "쇼핑몰"은 즉시
              회원탈퇴를 처리합니다. ② 회원이 다음 각 호의 사유에 해당하는 경우,
              "쇼핑몰"은 회원자격을 제한 및 정지시킬 수 있습니다. 1. 가입 신청
              시에 허위 내용을 등록한 경우 2. "쇼핑몰"을 이용하여 구입한
              재화·용역 등의 대금, 기타 "쇼핑몰" 이용에 관련하여 회원이 부담하는
              채무를 기일에 지급하지 않는 경우 3. 다른 사람의 "쇼핑몰" 이용을
              방해하거나 그 정보를 도용하는 등 전자거래질서를 위협하는 경우 4.
              "쇼핑몰"을 이용하여 법령과 이 약관이 금지하거나 공서양속에 반하는
              행위를 하는 경우 ③ "쇼핑몰"이 회원 자격을 제한·정지 시킨 후,
              동일한 행위가 2회 이상 반복되거나 30일 이내에 그 사유가 시정되지
              아니하는 경우 "쇼핑몰"은 회원자격을 상실시킬 수 있습니다. ④
              "쇼핑몰"이 회원자격을 상실시키는 경우에는 회원등록을 말소합니다.
              이 경우 회원에게 이를 통지하고, 회원등록 말소 전에 소명할 기회를
              부여합니다. 제8조(회원에 대한 통지) ① "쇼핑몰"이 회원에 대한
              통지를 하는 경우, 회원이 "쇼핑몰"에 제출한 전자우편 주소로 할 수
              있습니다. ② "쇼핑몰"은 불특정다수 회원에 대한 통지의 경우
              1주일이상 "쇼핑몰" 게시판에 게시함으로서 개별 통지에 갈음할 수
              있습니다. 제9조(구매신청) "쇼핑몰" 이용자는 "쇼핑몰"상에서 이하의
              방법에 의하여 구매를 신청합니다. 1. 성명, 비밀번호, 전화번호,
              핸드폰번호, 주소, E-MAIL 입력 2. 재화 또는 용역의 선택 3.
              결제방법의 선택 4. 이 약관에 동의한다는 표시(예, 마우스 클릭)
              제10조 (계약의 성립) ① "쇼핑몰"은 제9조와 같은 구매신청에 대하여
              다음 각 호에 해당하지 않는 한 승낙합니다. 1. 신청 내용에 허위,
              기재누락, 오기가 있는 경우 2. 미성년자가 담배, 주류 등
              청소년보호법에서 금지하는 재화 및 용역을 구매하는 경우 3. 기타
              구매신청에 승낙하는 것이 "쇼핑몰" 기술상 현저히 지장이 있다고
              판단하는 경우 ② "쇼핑몰"의 승낙이 제12조 제1항의
              수신확인통지형태로 이용자에게 도달한 시점에 계약이 성립한 것으로
              봅니다. 제11조(지급방법) "쇼핑몰"에서 구매한 재화 또는 용역에 대한
              대금지급방법은 다음 각 호의 하나로 할 수 있습니다. 1. 계좌이체 2.
              신용카드결제 3. 온라인무통장입금 4. 전자화폐에 의한 결제 5. 수령
              시 대금지급 등 제12조(수신확인통지·구매신청 변경 및 취소) ①
              "쇼핑몰"은 이용자의 구매신청이 있는 경우 이용자에게 수신확인통지를
              합니다. ② 수신확인통지를 받은 이용자는 의사표시의 불일치 등이 있는
              경우에는 수신확인통지를 받은 후 즉시 구매신청 변경 및 취소를
              요청할 수 있습니다. ③ "쇼핑몰"은 배송 전 이용자의 구매신청 변경 및
              취소 요청이 있는 때에는 지체 없이 그 요청에 따라 처리합니다.
              제13조(배송) "쇼핑몰"은 이용자가 구매한 재화에 대해 배송수단,
              수단별 배송비용 부담자, 수단별 배송기간 등을 명시합니다. 만약
              "쇼핑몰"의 고의·과실로 약정 배송기간을 초과한 경우에는 그로 인한
              이용자의 손해를 배상합니다. 제14조(환급, 반품 및 교환) ①
              "쇼핑몰"은 이용자가 구매 신청한 재화 또는 용역이 품절 등의 사유로
              재화의 인도 또는 용역의 제공을 할 수 없을 때에는 지체 없이 그
              사유를 이용자에게 통지하고, 사전에 재화 또는 용역의 대금을 받은
              경우에는 대금을 받은 날부터 3일 이내에, 그렇지 않은 경우에는 그
              사유발생일로부터 3일 이내에 계약해제 및 환급절차를 취합니다. ②
              다음 각 호의 경우에는 "쇼핑몰"은 배송된 재화일지라도 재화를 반품
              받은 다음 영업일 이내에 이용자의 요구에 따라 즉시 환급, 반품 및
              교환 조치를 합니다. 다만 그 요구기한은 배송된 날로부터 20일 이내로
              합니다. 1. 배송된 재화가 주문내용과 상이하거나 "쇼핑몰"이 제공한
              정보와 상이할 경우 2. 배송된 재화가 파손, 손상되었거나 오염되었을
              경우 3. 재화가 광고에 표시된 배송기간보다 늦게 배송된 경우 4.
              방문판매 등에 관한 법률 제18조에 의하여 광고에 표시하여야 할
              사항을 표시하지 아니한 상태에서 이용자의 청약이 이루어진 경우
              제15조(개인정보보호) ① "쇼핑몰"은 이용자의 정보 수집시 구매계약
              이행에 필요한 최소한의 정보를 수집합니다. 다음 사항을 필수사항으로
              하며 그 외 사항은 선택사항으로 합니다. 1. 희망ID(회원의 경우) 2.
              비밀번호(회원의 경우) 3. 이름 4. 별명 5. E-MAIL 6. 주소 7.
              전화번호 8. 휴대번호 9. 메일링서비스 10. SMS 수신여부 ② "쇼핑몰"이
              이용자의 개인 식별이 가능한 개인정보를 수집하는 때에는 반드시 당해
              이용자의 동의를 받습니다. ③ 제공된 개인정보는 당해 이용자의 동의
              없이 목적 외의 이용이나 제3자에게 제공할 수 없으며, 이에 대한 모든
              책임은 "쇼핑몰"이 집니다. 다만, 다음의 경우에는 예외로 합니다. 1.
              배송업무상 배송업체에게 배송에 필요한 최소한의 이용자의 정보(성명,
              주소, 전화번호)를 알려주는 경우 2. 통계작성, 학술연구 또는
              시장조사를 위하여 필요한 경우로서 특정 개인을 식별할 수 없는
              형태로 제공하는 경우 ④ "쇼핑몰"이 제2항과 제3항에 의해 이용자의
              동의를 받아야 하는 경우에는 개인정보관리 책임자의 신원(소속, 성명
              및 전화번호 기타 연락처), 정보의 수집목적 및 이용목적, 제3자에
              대한 정보제공 관련사항(제공 받는자, 제공목적 및 제공할 정보의
              내용)등 정보통신망이용촉진 등에 관한 법률 제16조 제3항이 규정한
              사항을 미리 명시하거나 고지해야 하며 이용자는 언제든지 이 동의를
              철회할 수 있습니다. ⑤ 이용자는 언제든지 "쇼핑몰"이 가지고 있는
              자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며
              "쇼핑몰"은 이에 대해 지체 없이 필요한 조치를 취할 의무를 집니다.
              이용자가 오류의 정정을 요구한 경우에는 "쇼핑몰"은 그 오류를 정정할
              때까지 당해 개인정보를 이용하지 않습니다. ⑥ "쇼핑몰"은 개인정보
              보호를 위하여 관리자를 한정하여 그 수를 최소화하며 신용카드,
              은행계좌 등을 포함한 이용자의 개인정보의 분실, 도난, 유출, 변조
              등으로 인한 이용자의 손해에 대하여 모든 책임을 집니다. ⑦ "쇼핑몰"
              또는 그로부터 개인정보를 제공받은 제3자는 개인정보의 수집목적 또는
              제공받은 목적을 달성한 때에는 당해 개인정보를 지체 없이
              파기합니다. 제16조("쇼핑몰"의 의무) ① "쇼핑몰"은 법령과 이 약관이
              금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는
              바에 따라 지속적이고, 안정적으로 재화·용역을 제공하는 데 최선을
              다하여야 합니다. ② "쇼핑몰"은 이용자가 안전하게 인터넷 서비스를
              이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한 보안
              시스템을 갖추어야 합니다. ③ "쇼핑몰"이 상품이나 용역에 대하여
              「표시·광고의 공정화에 관한 법률」 제3조 소정의 부당한
              표시·광고행위를 함으로써 이용자가 손해를 입은 때에는 이를 배상할
              책임을 집니다. ④ "쇼핑몰"은 이용자가 원하지 않는 영리목적의 광고성
              전자우편을 발송하지 않습니다. 제17조( 회원의 ID 및 비밀번호에 대한
              의무) ① 제15조의 경우를 제외한 ID와 비밀번호에 관한 관리책임은
              회원에게 있습니다. ② 회원은 자신의 ID 및 비밀번호를 제3자에게
              이용하게 해서는 안 됩니다. ③ 회원이 자신의 ID 및 비밀번호를
              도난당하거나 제3자가 사용하고 있음을 인지한 경우에는 바로
              "쇼핑몰"에 통보하고 "쇼핑몰"의 안내가 있는 경우에는 그에 따라야
              합니다. 제18조(이용자의 의무) 이용자는 다음 행위를 하여서는 안
              됩니다. 1. 신청 또는 변경 시 허위내용의 등록 2. "쇼핑몰"에 게시된
              정보의 변경 3. "쇼핑몰"이 정한 정보 이외의 정보(컴퓨터 프로그램
              등)의 송신 또는 게시 4. "쇼핑몰" 기타 제3자의 저작권 등
              지적재산권에 대한 침해 5. "쇼핑몰" 기타 제3자의 명예를
              손상시키거나 업무를 방해하는 행위 6. 외설 또는 폭력적인
              메시지·화상·음성 기타 공서양속에 반하는 정보를 홈페이지에 공개
              또는 게시하는 행위 제19조(연결"쇼핑몰"과 피연결"쇼핑몰" 간의 관계)
              ① 상위 "쇼핑몰"과 하위 "쇼핑몰"이 하이퍼링크(예: 하이퍼링크의
              대상에는 문자, 그림 및 동화상 등이 포함됨)방식 등으로 연결된 경우,
              전자를 연결 "쇼핑몰"(웹 사이트)이라고 하고 후자를 피연결
              "쇼핑몰"(웹사이트)이라고 합니다. ② 연결 "쇼핑몰"은 피연결
              "쇼핑몰"이 독자적으로 제공하는 재화·용역에 의하여 이용자와 행하는
              거래에 대해서 보증 책임을 지지 않는다는 뜻을 연결 "쇼핑몰"의
              사이트에서 명시한 경우에는 그 거래에 대한 보증 책임을 지지
              않습니다. 제20조(저작권의 귀속 및 이용제한) ① "쇼핑몰"이 작성한
              저작물에 대한 저작권 기타 지적재산권은 "쇼핑몰"에 귀속합니다. ②
              이용자는 "쇼핑몰"을 이용함으로써 얻은 정보를 "쇼핑몰"의 사전 승낙
              없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로
              이용하거나 제3자에게 이용하게 하여서는 안 됩니다. 제21조(분쟁해결)
              ① "쇼핑몰"은 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그
              피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다. ②
              "쇼핑몰"은 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그
              사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게
              그 사유와 처리일정을 즉시 통보해 드립니다. ③ "쇼핑몰"과 이용자간에
              발생한 분쟁은 전자거래기본법 제28조 및 동 시행령 제15조에 의하여
              설치된 전자거래분쟁조정위원회의 조정에 따를 수 있습니다.
              제22조(재판권 및 준거법) ① "쇼핑몰"과 이용자간에 발생한 전자거래
              분쟁에 관한 소송은 민사소송법상의 관할법원에 제기합니다. ②
              "쇼핑몰"과 이용자간에 제기된 전자거래 소송에는 한국법을
              적용합니다.
            </span>
          </div>

          <div className="condition2">
            <div className="scroll__icon">
              <span>
                <i
                  className="fas fa-chevron-down"
                  onClick={(e) => {
                    infoCheck(e);
                  }}
                ></i>
              </span>
              <span>개인정보처리방침</span>
            </div>
            <div className="check__icon">
              동의
              <i
                className="fas fa-check-circle"
                onClick={(e) => {
                  changeCheck(e);
                }}
              ></i>
            </div>
            <span className="content">
              제1조(개인정보의 처리목적) 국가법령정보센터는 다음의 목적을 위하여
              개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의
              용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보
              보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할
              예정입니다. 국가법령정보센터 관리 처리목적: 국가법령 공동 활용
              운영근거: 법제처직제 시행규칙 ※ 좀더 상세한 법제처의 개인정보파일
              등록사항 공개는 행정안전부 개인정보보호
              포털(http://www.privacy.go.kr/) → 민원마당 → 개인정보열람등 요구 →
              개인정보파일 목록검색 메뉴를 활용해 주시기 바랍니다.
              제2조(개인정보의 처리 및 보유기간) 국가법령정보센터는 법령에 따른
              개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에
              동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
              보유기간: 2년 제3조(개인정보의 제3자 제공) 국가법령정보센터는
              원칙적으로 정보주체의 개인정보를 수집·이용 목적으로 명시한 범위
              내에서 처리하며, 다음의 경우를 제외하고는 정보주체의 사전 동의
              없이는 본래의 목적 범위를 초과하여 처리하거나 제3자에게 제공하지
              않습니다. 정보주체로부터 별도의 동의를 받은 경우 다른 법률에
              특별한 규정이 있는 경우 정보주체 또는 그 법정대리인이 의사표시를
              할 수 없는 상태에 있거나 주소불명 등으로 사전 동의를 받을 수 없는
              경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체, 재산의
              이익을 위하여 필요하다고 인정되는 경우 통계작성 및 학술연구 등의
              목적을 위하여 필요한 경우로서 특정 개인을 알아볼 수 없는 형태로
              개인정보를 제공하는 경우 개인정보를 목적 외의 용도로 이용하거나
              이를 제3자에게 제공하지 아니하면 다른 법률에서 정하는 소관 업무를
              수행할 수 없는 경우로서 보호위원회의 심의ㆍ의결을 거친 경우 조약,
              그 밖의 국제협정의 이행을 위하여 외국정부 또는 국제기구에 제공하기
              위하여 필요한 경우 범죄의 수사와 공소의 제기 및 유지를 위하여
              필요한 경우 법원의 재판업무 수행을 위하여 필요한 경우 형(刑) 및
              감호, 보호처분의 집행을 위하여 필요한 경우 제4조(개인정보처리의
              위탁) 국가법령정보센터는 개인정보의 처리업무를 위탁하는 경우
              다음의 내용이 포함된 문서에 의하여 처리하고 있습니다. 위탁업무
              수행 목적 외 개인정보의 처리 금지에 관한 사항 개인정보의
              관리적·기술적 보호조치에 관한 사항 개인정보의 안전관리에 관한 사항
              위탁업무의 목적 및 범위, 재위탁 제한에 관한 사항, 개인정보 안전성
              확보 조치에 관한 사항, 위탁업무와 관련하여 보유하고 있는
              개인정보의 관리현황점검 등 감독에 관한 사항, 수탁자가 준수하여야
              할 의무를 위반한 경우의 손해배상책임에 관한 사항
              국가법령정보센터는 원활한 업무처리를 위하여 다음과 같이 개인정보
              처리업무를 위탁하고 있습니다. 파일명 - 국가법령정보센터 위탁
              업무의 내용 해당 홈페이지 유지보수 수행 - 응용프로그램 서비스 제공
              - 기술적 보호조치 등 수탁업체명 :(주)비인텍 제5조(정보주체의
              권리·의무 및 행사방법) 정보주체는 국가법령정보센터에 대해 언제든지
              다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
              개인정보 열람 요구 오류 등이 있을 경우 정정 요구 삭제요구 처리정지
              요구 제1항에 따른 권리 행사는 국가법령정보센터에 대해 서면, 전화,
              전자우편, 모사전송(fax) 등을 통하여 하실 수 있으며
              국가법령정보센터는 이에 대해 지체없이 조치하겠습니다. 정보주체가
              개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는
              국가법령정보센터는 정정 또는 삭제를 완료할 때까지 당해 개인정보를
              이용하거나 제공하지 않습니다. 제1항에 따른 권리 행사는 정보주체의
              법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.
              이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을
              제출하셔야 합니다. 정보주체는 개인정보 보호법 등 관계법령을
              위반하여 국가법령정보센터가 처리하고 있는 정보주체 본인이나 타인의
              개인정보 및 사생활을 침해하여서는 아니됩니다. 제6조(처리하는
              개인정보 항목) 국가법령정보센터는 다음의 개인정보 항목을 처리하고
              있습니다. 국가법령정보센터 관리 회사/단체명,
              사용자아이디(이메일주소), 성명, 연락처 서비스 이용과정에서 아래와
              같은 정보들이 자동으로 생성되어 수집 될 수 있습니다. 브라우져
              종류, os, 방문일시, ip주소, 도메인주소, 방문전 웹사이트 주소 등
              제7조(개인정보의 파기) 국가법령정보센터는 개인정보 보유기간의
              경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는
              지체없이 해당 개인정보를 파기합니다. 정보주체로부터 동의받은
              개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고
              다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당
              개인정보(또는 개인정보파일)를 별도의 데이터베이스(db)로 옮기거나
              보관장소를 달리하여 보존합니다. 개인정보 파기의 절차 및 방법은
              다음과 같습니다. 파기절차 국가법령정보센터는 파기하여야 하는
              개인정보(또는 개인정보파일)에 대해 개인정보 파기계획을 수립하여
              파기합니다. 국가법령정보센터는 파기 사유가 발생한 개인정보(또는
              개인정보파일)를 선정하고, 국가법령정보센터는 개인정보 보호책임자의
              승인을 받아 개인정보(또는 개인정보파일)를 파기합니다. 파기방법
              국가법령정보센터는 전자적 파일 형태로 기록․저장된 개인정보는
              기록을 재생할 수 없도록 로우레밸포멧(low level format) 등의 방법을
              이용하여 파기하며, 종이 문서에 기록․저장된 개인정보는 분쇄기로
              분쇄하거나 소각하여 파기합니다. 제8조(개인정보의 안전성 확보조치)
              국가법령정보센터는 개인정보의 안전성 확보를 위해 다음과 같은
              조치를 취하고 있습니다. 개인정보 취급직원의 최소화 및 교육 -
              개인정보를 취급하는 직원은 반드시 필요한 인원에 한하여
              지정·관리하고 있으며 취급직원을 대상으로 안전한 관리를 위한 교육을
              실시하고 있습니다. 개인정보에 대한 접근 제한 - 개인정보를 처리하는
              데이터베이스시스템에 대한 접근권한의 부여·변경·말소를 통하여
              개인정보에 대한 접근통제를 위한 필요한 조치를 하고 있으며
              침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고
              있습니다. 접속기록의 보관 - 개인정보처리시스템에 접속한 기록(웹
              로그, 요약정보 등)을 최소 6개월 이상 보관·관리하고 있습니다.
              개인정보의 암호화 - 개인정보는 암호화 등을 통해 안전하게 저장 및
              관리되고 있습니다. 또한 중요한 데이터는 저장 및 전송 시 암호화하여
              사용하는 등의 별도 보안기능을 사용하고 있습니다. 보안프로그램 설치
              및 주기적 점검·갱신 - 해킹이나 컴퓨터 바이러스 등에 의한 개인정보
              유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적으로
              갱신·점검하고 있습니다. 비인가자에 대한 출입 통제 - 개인정보를
              보관하고 있는 개인정보시스템의 물리적 보관 장소를 별도로 두고 이에
              대해 출입통제 절차를 수립, 운영하고 있습니다.
            </span>
          </div>
        </section>
      </section>

      <section className={"join2 " + (joinNum === 2 ? "active" : "")}>
        <form action="">
          <div className="join__id">
            <div>
              <span>ID (이메일주소)</span>
              <span>*</span>
            </div>
            <div>
              <input type="text" />
              <div className="btn">중복확인</div>
            </div>
            <div className="error">이미 사용중인 이메일 주소입니다.</div>
          </div>
          <div className="join__pw">
            <div>
              <span>PW(영문, 숫자 결합 8자 이상)</span>
              <span>*</span>
            </div>
            <div>
              <input type="password" />

              <i className="eyeicon fas fa-eye-slash"></i>
            </div>
            <div className="error">
              비밀번호는 영문, 숫자 결합 8자 이상입니다.
            </div>
          </div>
          <div className="join__pw2">
            <div>
              <span>PW 확인</span>
              <span>*</span>
            </div>
            <div>
              <input type="password" />
              <i className="eyeicon fas fa-eye-slash"></i>
            </div>
            <div className="error">비밀번호가 일치하지 않습니다.</div>
          </div>
        </form>
      </section>

      <section className={"join3 " + (joinNum === 3 ? "active" : "")}>
        <form action="">
          <div className="join__id">
            <div>
              <span>휴대전화번호를 입력해주세요</span>
            </div>
            <div>
              <input type="text" />
              <div className="btn">인증번호발송</div>
            </div>
          </div>
          <div className="join__id">
            <div>
              <span>인증번호를 입력해주세요</span>
            </div>
            <div>
              <input type="text" />
              <div className="btn">인증번호확인</div>
            </div>
            <div className="error">인증번호가 일치하지 않습니다.</div>
          </div>
        </form>
      </section>

      <section className={"join4 " + (joinNum === 4 ? "active" : "")}>
        <form action="">
          <div className="join__title">
            <span> 가입자 정보를 입력해주세요.</span>
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
          <div className="join__yymmdd">
            <span>생년월일*</span>
          </div>
          <div className="join__content">
            <span>*생년월일은 아이디를 잃어버렸을 경우 사용합니다.</span>
          </div>
        </form>
      </section>

      <section className={"join5 " + (joinNum === 5 ? "active" : "")}>
        <form action="">
          <div className="join__title">
            <span>마지막 단계입니다. 회사 정보를 입력해주세요.</span>
          </div>
          <div className="join__name">
            <input type="text" placeholder="회사명*" />
          </div>
          <div className="join__name">
            <input type="text" placeholder="사업자 등록번호" />
          </div>
          <div className="join__name">
            <input type="text" placeholder="대표자 성명*" />
          </div>
          <div className="join__class">
            <select>
              <option value="">대표자 성별*</option>
              <option value="남자">남자</option>
              <option value="여자">여자</option>
            </select>
          </div>
          <div className="join__yymm">
            <span>대표자 생년월*</span>
            <select name="year">
              <option value="">년도</option>
              <option value="2021">2021년</option>
              <option value="2020">2020년</option>
              <option value="2019">2019년</option>
              <option value="2018">2018년</option>
              <option value="2017">2017년</option>
              <option value="2016">2016년</option>
              <option value="2015">2015년</option>
              <option value="2014">2014년</option>
              <option value="2013">2013년</option>
              <option value="2012">2012년</option>
              <option value="2011">2011년</option>
              <option value="2010">2010년</option>
              <option value="2009">2009년</option>
              <option value="2008">2008년</option>
              <option value="2007">2007년</option>
              <option value="2006">2006년</option>
              <option value="2005">2005년</option>
              <option value="2004">2004년</option>
              <option value="2003">2003년</option>
              <option value="2002">2002년</option>
              <option value="2001">2001년</option>
              <option value="2000">2000년</option>
              <option value="1999">1999년</option>
              <option value="1998">1998년</option>
              <option value="1997">1997년</option>
              <option value="1996">1996년</option>
              <option value="1995">1995년</option>
              <option value="1994">1994년</option>
              <option value="1993">1993년</option>
              <option value="1992">1992년</option>
              <option value="1991">1991년</option>
              <option value="1990">1990년</option>
              <option value="1989">1989년</option>
              <option value="1988">1988년</option>
              <option value="1987">1987년</option>
              <option value="1986">1986년</option>
              <option value="1985">1985년</option>
              <option value="1984">1984년</option>
              <option value="1983">1983년</option>
              <option value="1982">1982년</option>
              <option value="1981">1981년</option>
              <option value="1980" selected>
                1980년
              </option>
              <option value="1979">1979년</option>
              <option value="1978">1978년</option>
              <option value="1977">1977년</option>
              <option value="1976">1976년</option>
              <option value="1975">1975년</option>
              <option value="1974">1974년</option>
              <option value="1973">1973년</option>
              <option value="1972">1972년</option>
              <option value="1971">1971년</option>
              <option value="1970">1970년</option>
              <option value="1969">1969년</option>
              <option value="1968">1968년</option>
              <option value="1967">1967년</option>
              <option value="1966">1966년</option>
              <option value="1965">1965년</option>
              <option value="1964">1964년</option>
              <option value="1963">1963년</option>
              <option value="1962">1962년</option>
              <option value="1961">1961년</option>
              <option value="1960">1960년</option>
              <option value="1959">1959년</option>
              <option value="1958">1958년</option>
              <option value="1957">1957년</option>
              <option value="1956">1956년</option>
              <option value="1955">1955년</option>
              <option value="1954">1954년</option>
              <option value="1953">1953년</option>
              <option value="1952">1952년</option>
              <option value="1951">1951년</option>
              <option value="1950">1950년</option>
              <option value="1949">1949년</option>
              <option value="1948">1948년</option>
              <option value="1947">1947년</option>
              <option value="1946">1946년</option>
              <option value="1945">1945년</option>
              <option value="1944">1944년</option>
              <option value="1943">1943년</option>
              <option value="1942">1942년</option>
              <option value="1941">1941년</option>
              <option value="1940">1940년</option>
              <option value="1939">1939년</option>
              <option value="1938">1938년</option>
              <option value="1937">1937년</option>
              <option value="1936">1936년</option>
              <option value="1935">1935년</option>
              <option value="1934">1934년</option>
              <option value="1933">1933년</option>
              <option value="1932">1932년</option>
              <option value="1931">1931년</option>
              <option value="1930">1930년</option>
              <option value="1929">1929년</option>
              <option value="1928">1928년</option>
              <option value="1927">1927년</option>
              <option value="1926">1926년</option>
              <option value="1925">1925년</option>
              <option value="1924">1924년</option>
              <option value="1923">1923년</option>
              <option value="1922">1922년</option>
            </select>
            <select name="month">
              <option value="">월</option>
              <option value="1" selected>
                1월
              </option>
              <option value="2">2월</option>
              <option value="3">3월</option>
              <option value="4">4월</option>
              <option value="5">5월</option>
              <option value="6">6월</option>
              <option value="7">7월</option>
              <option value="8">8월</option>
              <option value="9">9월</option>
              <option value="10">10월</option>
              <option value="11">11월</option>
              <option value="12">12월</option>
            </select>
          </div>
          <div className="join__class">
            <select>
              <option value="">사업자 형태*</option>
              <option value="법인">법인</option>
              <option value="개인사업자">개인사업자</option>
              <option value="협동조합">협동조합</option>
              <option value="예비창업자">예비창업자</option>
              <option value="기타">기타</option>
            </select>
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
          <div className="join__name">
            <input type="text" placeholder="사업자 등록번호" />
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
          <div className="join__yymm2">
            <span>창립연월*</span>
            <select name="year">
              <option value="">년도</option>
              <option value="2021">2021년</option>
              <option value="2020">2020년</option>
              <option value="2019">2019년</option>
              <option value="2018">2018년</option>
              <option value="2017">2017년</option>
              <option value="2016">2016년</option>
              <option value="2015">2015년</option>
              <option value="2014">2014년</option>
              <option value="2013">2013년</option>
              <option value="2012">2012년</option>
              <option value="2011">2011년</option>
              <option value="2010">2010년</option>
              <option value="2009">2009년</option>
              <option value="2008">2008년</option>
              <option value="2007">2007년</option>
              <option value="2006">2006년</option>
              <option value="2005">2005년</option>
              <option value="2004">2004년</option>
              <option value="2003">2003년</option>
              <option value="2002">2002년</option>
              <option value="2001">2001년</option>
              <option value="2000">2000년</option>
              <option value="1999">1999년</option>
              <option value="1998">1998년</option>
              <option value="1997">1997년</option>
              <option value="1996">1996년</option>
              <option value="1995">1995년</option>
              <option value="1994">1994년</option>
              <option value="1993">1993년</option>
              <option value="1992">1992년</option>
              <option value="1991">1991년</option>
              <option value="1990">1990년</option>
              <option value="1989">1989년</option>
              <option value="1988">1988년</option>
              <option value="1987">1987년</option>
              <option value="1986">1986년</option>
              <option value="1985">1985년</option>
              <option value="1984">1984년</option>
              <option value="1983">1983년</option>
              <option value="1982">1982년</option>
              <option value="1981">1981년</option>
              <option value="1980" selected>
                1980년
              </option>
              <option value="1979">1979년</option>
              <option value="1978">1978년</option>
              <option value="1977">1977년</option>
              <option value="1976">1976년</option>
              <option value="1975">1975년</option>
              <option value="1974">1974년</option>
              <option value="1973">1973년</option>
              <option value="1972">1972년</option>
              <option value="1971">1971년</option>
              <option value="1970">1970년</option>
              <option value="1969">1969년</option>
              <option value="1968">1968년</option>
              <option value="1967">1967년</option>
              <option value="1966">1966년</option>
              <option value="1965">1965년</option>
              <option value="1964">1964년</option>
              <option value="1963">1963년</option>
              <option value="1962">1962년</option>
              <option value="1961">1961년</option>
              <option value="1960">1960년</option>
              <option value="1959">1959년</option>
              <option value="1958">1958년</option>
              <option value="1957">1957년</option>
              <option value="1956">1956년</option>
              <option value="1955">1955년</option>
              <option value="1954">1954년</option>
              <option value="1953">1953년</option>
              <option value="1952">1952년</option>
              <option value="1951">1951년</option>
              <option value="1950">1950년</option>
              <option value="1949">1949년</option>
              <option value="1948">1948년</option>
              <option value="1947">1947년</option>
              <option value="1946">1946년</option>
              <option value="1945">1945년</option>
              <option value="1944">1944년</option>
              <option value="1943">1943년</option>
              <option value="1942">1942년</option>
              <option value="1941">1941년</option>
              <option value="1940">1940년</option>
              <option value="1939">1939년</option>
              <option value="1938">1938년</option>
              <option value="1937">1937년</option>
              <option value="1936">1936년</option>
              <option value="1935">1935년</option>
              <option value="1934">1934년</option>
              <option value="1933">1933년</option>
              <option value="1932">1932년</option>
              <option value="1931">1931년</option>
              <option value="1930">1930년</option>
              <option value="1929">1929년</option>
              <option value="1928">1928년</option>
              <option value="1927">1927년</option>
              <option value="1926">1926년</option>
              <option value="1925">1925년</option>
              <option value="1924">1924년</option>
              <option value="1923">1923년</option>
              <option value="1922">1922년</option>
            </select>
            <select name="month">
              <option value="">월</option>
              <option value="1" selected>
                1월
              </option>
              <option value="2">2월</option>
              <option value="3">3월</option>
              <option value="4">4월</option>
              <option value="5">5월</option>
              <option value="6">6월</option>
              <option value="7">7월</option>
              <option value="8">8월</option>
              <option value="9">9월</option>
              <option value="10">10월</option>
              <option value="11">11월</option>
              <option value="12">12월</option>
            </select>
          </div>
          <div className="chech_box_container">
            <div className="title">관심지원사업 선택 (중복가능)</div>
            <div className="container">
              <div
                className="checkbox"
                onClick={(e) => {
                  changeCheck(e);
                }}
              >
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
        </form>
      </section>
      <section
        className={"submit " + (joinNum === 5 ? "end" : "")}
        onClick={() => {
          if (joinNum >= 1 && joinNum < 5) {
            setJoinNum(joinNum + 1);
          } else {
            to_main_tap();
          }
        }}
      >
        <span>{joinNum === 5 ? "회원가입 완료" : "다음"}</span>
      </section>
      <Section_copyright />
    </>
  );
};

export default Join;
