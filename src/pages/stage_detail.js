import React, { Component } from "react";
import axios from "axios";
import "../scss/main.scss";
import Headerdetail from "../components/header_detail";
import Footer from "../components/section_footer";
import StageDetailContent from "../components/secrion_stageDetail";

const tap_title = {
  title: "상세보기",
};

class StageDetail extends Component {
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
    const res = await axios.get("/api/stage_data");

    res.data.data.map((El, index) => {
      if (El.udp_date) {
        res.data.data[index].udp_date = El.udp_date.slice(0, 10);
      }
      return El;
    });

    this.setState({ data: res.data.data });
  };

  render() {
    return (
      <>
        <Headerdetail tap_title={tap_title} />
        <StageDetailContent state={this.state.data} />
        <Footer state={this.state.footer} />
      </>
    );
  }
}

export default StageDetail;
