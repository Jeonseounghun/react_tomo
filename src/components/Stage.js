import React, { Component, useState } from "react";
import "../scss/main.scss";
import "../scss/stage.scss";
import axios from "axios";
import logo from "../images/logo.svg";
import Footer from "./section_footer";
import Headerdetail from "./header_detail";
import StageContents from "./section_stageContent";

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
    };
  }

  componentDidMount() {
    this._getData();
  }

  _getData = async () => {
    const res = await axios.get("/api/stage");

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
        <StageContents />
        <Footer state={this.state.footer} />
      </>
    );
  }
}

export default Stage;
