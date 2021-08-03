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
      image: [],
    };
  }
  componentDidMount() {
    this._getData();
    this._getImage();
  }

  _getData = async () => {
    const res = await axios.get("/api/news_data");
    res.data.data.map((El, index) => {
      if (El.reg_date) {
        res.data.data[index].reg_date = El.reg_date.slice(0, 10);
      }
      return El;
    });
    this.setState({ data: res.data.data });
  };

  _getImage = async () => {
    const res = await axios.get("/api/image");

    res.data.data.map((El, index) => {
      return El;
    });
    this.setState({ image: res.data.data });
  };

  render() {
    return (
      <>
        <Headerdetail tap_title={tap_title} />
        <NewsContent
          data={this.state.data}
          state={this.state}
          image={this.state.image}
        />
        <Footer state={this.state.footer} />
      </>
    );
  }
}

export default News;
