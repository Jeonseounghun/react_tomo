import React, { Component } from "react";
import "../scss/main.scss";
import axios from "axios";
import logo from "../images/logo.svg";
import Footer from "../components/section_footer";
import NewsContent from "../components/section_NewsContents";
import Headerdetail from "../components/header_detail";

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
      headtag: "startnews",
      category: "지원사업",
    };
  }
  componentDidMount() {
    this._getData();
  }

  _getData = async () => {
    const res = await axios.get("/api/news_data");
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
        <Headerdetail tap_title={tap_title} />
        <NewsContent data={this.state.data} state={this.state} />
        <Footer state={this.state.footer} />
      </>
    );
  }
}

export default News;
