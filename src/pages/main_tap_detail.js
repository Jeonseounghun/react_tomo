import React, { Component } from "react";
import axios from "axios";
import "../scss/main.scss";
import Headerdetail from "../components/header_detail";
import DetailContents from "../components/section_maintapDetail";
import Footer from "../components/section_footer";

const tap_title = {
  title: "지원사업 조회",
};

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      footer: "main_tap",
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
        <DetailContents state={this.state.data} />
        <Footer state={this.state.footer} />
      </>
    );
  }
}

export default Detail;
