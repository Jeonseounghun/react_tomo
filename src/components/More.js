import React, { Component } from "react";
import "../scss/main.scss";
import axios from "axios";
import logo from "../images/logo.svg";
import MainTapContent from "./section_main_tap_content";
import Footer from "./section_footer";
import Filter from "./section_filter";
import Headerdetail from "./header_detail";

const tap_title = {
  title: "아이디찾기",
  logo: logo,
};

class More extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      footer: "more",
      headtag: "business",
    };
  }

  componentDidMount() {
    this._getData();
  }

  _getData = async () => {
    const res = await axios.get("/support");
    this.setState({ data: res.data.data });
  };
  render() {
    return (
      <>
        <Headerdetail tap_title={tap_title} />
        <MainTapContent data={this.state.data} headtag={this.state.headtag} />
        <Filter />
        <Footer state={this.state.footer} />
      </>
    );
  }
}

export default More;
