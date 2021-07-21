import React, { Component } from "react";
import "../scss/main.scss";

import axios from "axios";
import Header_detail from "./header_detail";
import logo from "../images/logo.svg";
import Footer from "./section_footer";
import NewsContent from "./section_NewsContents";

const tap_title = {
  title: "아이디찾기",
  logo: logo,
};

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      footer: "news",
      headtag: "business",
    };
  }
  componentDidMount() {
    this._getData();
  }

  _getData = async () => {
    const res = await axios.get("/api/news");
    res.data.data.map((El, index) => {
      if (El.reg_date) {
        res.data.data[index].reg_date = El.reg_date.slice(0, 10);
      }
    });
    this.setState({ data: res.data.data });
  };
  render() {
    return (
      <>
        <Header_detail tap_title={tap_title} />
        <NewsContent data={this.state.data} />
        <Footer state={this.state.footer} />
      </>
    );
  }
}

export default News;
