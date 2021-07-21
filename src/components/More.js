import React, { Component } from "react";
import "../scss/main.scss";
import axios from "axios";
import logo from "../images/logo.svg";
import Footer from "./section_footer";
import Headerdetail from "./header_detail";
import MoreContents from "./section_MoreContents";

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
        <MoreContents />
        <Footer state={this.state.footer} />
      </>
    );
  }
}

export default More;
