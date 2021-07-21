import React, { Component, useState } from "react";
import "../scss/main.scss";

import axios from "axios";
import Header_detail from "./header_detail";
import logo from "../images/logo.svg";
import MainTapContent from "./section_main_tap_content";
import Footer from "./section_footer";
import Filter from "./section_filter";

const tap_title = {
  title: "아이디찾기",
  logo: logo,
};

class Stage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      footer: "stage",
      headtag: "business",
    };
  }

  componentDidMount() {
    this._getData();
  }

  _getData = async () => {
    const res = await axios.get("/api");

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
        <Header_detail tap_title={tap_title} />
        <MainTapContent data={this.state.data} headtag={this.state.headtag} />
        <Filter />
        <Footer state={this.state.footer} />
      </>
    );
  }
}

export default Stage;
