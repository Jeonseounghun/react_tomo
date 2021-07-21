import Header_detail from "./header_detail";
import Section_copyright from "./section_copyright";
import Section_login from "./section_login";
const tap_title = {
  title: "로그인",
};

function Login_tap() {
  return (
    <>
      <Header_detail tap_title={tap_title} />
      <Section_login />
      <Section_copyright />
    </>
  );
}

export default Login_tap;
