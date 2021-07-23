import Headerdetail from "../components/header_detail";
import SectionCopyright from "../components/section_copyright";
import SectionLogin from "../components/section_login";
const tap_title = {
  title: "로그인",
};

function Login_tap() {
  return (
    <>
      <Headerdetail tap_title={tap_title} />
      <SectionLogin />
      <SectionCopyright />
    </>
  );
}

export default Login_tap;
