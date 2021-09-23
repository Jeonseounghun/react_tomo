import React, { Component } from "react";
import "../scss/main.scss";
import "../scss/stage.scss";
import axios from "axios";
import logo from "../images/logo.svg";
import Footer from "../components/section_footer";
import Headerdetail from "../components/header_detail";
import StageContents from "../components/section_stageContent";

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
    const res = await axios.get("/nael/api/stage_data");

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
        <StageContents state={this.state.data} />
        <Footer state={this.state.footer} />
      </>
    );
  }
}

export default Stage;
