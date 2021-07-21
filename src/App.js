import "./App.css";
import Intro from "./components/intro";
import React from "react";
import { Route } from "react-router-dom";
import Login_tap from "./components/login_tap";
import Find_id from "./components/find_id";
import Find_pw from "./components/find_pw";
import Join from "./components/join";
import Main_tap from "./components/main_tap";
import TemporaryID from "./components/section_temporary_id";
import TemporaryPW from "./components/section_temporary_pw";
import More from "./components/More";
import News from "./components/News_tap";
import Stage from "./components/Stage";

function App() {
  return (
    <>
      <Route exact path="/" component={Intro} />
      <Route exact path="/login" component={Login_tap} />
      <Route exact path="/find_id" component={Find_id} />
      <Route exact path="/find_id/temporary" component={TemporaryID} />
      <Route exact path="/find_pw" component={Find_pw} />
      <Route exact path="/find_pw/temporary" component={TemporaryPW} />
      <Route exact path="/join" component={Join} />
      <Route exact path="/main_tap" component={Main_tap} />
      <Route exact path="/news" component={News} />
      <Route exact path="/stage" component={Stage} />
      <Route exact path="/more" component={More} />
    </>
  );
}

export default App;
