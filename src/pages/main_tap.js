import React, { Component } from "react";
import "../scss/main.scss";

import axios from "axios";
import logo from "../images/logo.svg";
import MainTapContent from "../components/section_main_tap_content";
import Footer from "../components/section_footer";
import Filter from "../components/section_filter";
import Headerdetail from "../components/header_detail";

const tap_title = {
  title: "아이디찾기",
  logo: logo,
};

class Main_tap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      footer: "main_tap",
      headtag: "맞춤사업",
    };
  }

  componentDidMount() {
    this._getData();
  }

  _getData = async () => {
    const res = await axios.get("/api/main_tap_data");

    res.data.data.map((El, index) => {
      if (El.start_day) {
        res.data.data[index].start_day = El.start_day.slice(0, 10);
        res.data.data[index].end_day = El.end_day.slice(0, 10);
      }
      if (El.tag) {
        res.data.data[index].tag = El.tag.split(",");
      }
    });
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

export default Main_tap;
