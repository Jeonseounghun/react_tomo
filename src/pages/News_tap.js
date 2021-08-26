import React, { Component } from "react";
import "../scss/main.scss";
import axios from "axios";
import logo from "../images/logo.svg";
import Footer from "../components/section_footer";
import NewsContent from "../components/section_NewsContents";
import Headerdetail from "../components/header_detail";
import cheerio from "cheerio";

const getHtml = async (url) => {
  try {
    return await axios.get(url);
  } catch (error) {
    console.error(error);
  }
};
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
      status: true,
    };
  }
  componentDidMount() {
    this._getData();
  }

  _getData = async () => {
    const res = await axios.get("/api/news_data");
    res.data.data.reverse().map((El, index) => {
      if (El.reg_date) {
        res.data.data[index].reg_date = El.reg_date.slice(0, 10);
      }

      getHtml(El.link.slice(-16)).then((html) => {
        if (html) {
          const $ = cheerio.load(html.data);
          const $bodyHead = $("div.post_content_wrapper").children(
            "div.post_header"
          );
          const $bodyContent = $("div.post_header.single");
          res.data.data[index].content_title = $bodyHead.find("h1").text();
          res.data.data[index].content_priod = $bodyHead
            .find("span.post_info_date")
            .text()
            .slice(23, -11);
          res.data.data[index].content_img = $bodyContent
            .find("p img")
            .attr("src");
          res.data.data[index].content_sumary = $bodyContent
            .find("p")
            .text()
            .slice(0, 200);
          this.setState({ data: res.data.data });
          console.log(index, res.data.data.length - 1);
          if (index > res.data.data.length - 4) {
            this.setState({ status: false });
          }
        }
      });
    });
  };

  render() {
    return (
      <>
        <Headerdetail tap_title={tap_title} />
        <NewsContent
          data={this.state.data}
          state={this.state}
          image={this.state.image}
          status={this.state.status}
        />
        <Footer state={this.state.footer} />
      </>
    );
  }
}

export default News;
