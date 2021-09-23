import "./App.css";
import Intro from "./pages/intro";
import React from "react";
import { Route } from "react-router-dom";
import Login_tap from "./pages/login_tap";
import Find_id from "./components/find_id";
import Find_pw from "./components/find_pw";
import Join from "./pages/join";
import Main_tap from "./pages/main_tap";
import TemporaryID from "./components/section_temporary_id";
import TemporaryPW from "./components/section_temporary_pw";
import More from "./pages/More";
import News from "./pages/News_tap";
import Stage from "./pages/Stage";
import Detail from "./pages/main_tap_detail";
import StageDetail from "./pages/stage_detail";
import SearchTap from "./pages/Search";

function App() {
  return (
    <>
      <Route exact path="/nael/" component={Intro} />
      <Route exact path="/nael/login" component={Login_tap} />
      <Route exact path="/nael/find_id" component={Find_id} />
      <Route exact path="/nael/find_id/temporary" component={TemporaryID} />
      <Route exact path="/nael/find_pw" component={Find_pw} />
      <Route exact path="/nael/find_pw/temporary" component={TemporaryPW} />
      <Route exact path="/nael/join" component={Join} />
      <Route exact path="/nael/main_tap" component={Main_tap} />
      <Route exact path="/nael/main_tap/:id" component={Detail} />
      <Route exact path="/nael/news" component={News} />
      <Route exact path="/nael/stage" component={Stage} />
      <Route exact path="/nael/stage/:id" component={StageDetail} />
      <Route exact path="/nael/more" component={More} />
      <Route exact path="/nael/search" component={SearchTap} />
    </>
  );
}

export default App;
