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
    let dataList = []
    for (let i = 1; i < 20; i++) {
      if (i === 1) {
        getHtml("/startup").then((html) => {
          const $ = cheerio.load(html.data);
          const bodyHead = $("div.post_header")
          bodyHead.each((idx, El) => {
            let periods = $(El).find("span.post_info_date").text().slice(23, -12)
            let num1 = $(El).text().trim().indexOf(periods) + 10
            let num2 = $(El).text().trim().indexOf("Continue Reading")
            let categori = ""
            let categoriStr1 = $(El).text().trim().indexOf("지원")
            let categoriStr2 = $(El).text().trim().indexOf("사업")
            let categoriStr3 = $(El).text().trim().indexOf("투자")
            let categoriStr4 = $(El).text().trim().indexOf("엑싯")
            let categoriStr5 = $(El).text().trim().indexOf("실적")
            let categoriStr6 = $(El).text().trim().indexOf("인터뷰")
            let categoriStr7 = $(El).text().trim().indexOf("스타트업")
            let categoriStr8 = $(El).text().trim().indexOf("질문")

            if (categoriStr1 > -1) {
              categori = "지원사업"
            } else if (categoriStr2 > -1) {
              categori = "지원사업"
            } else if (categoriStr3 > -1) {
              categori = "투자/엑싯"
            } else if (categoriStr4 > -1) {
              categori = "투자/엑싯"
            } else if (categoriStr5 > -1) {
              categori = "실적"
            } else if (categoriStr6 > -1) {
              categori = "인터뷰"
            } else if (categoriStr7 > -1) {
              categori = "스타트업뉴스"
            } else if (categoriStr8 > -1) {
              categori = "인터뷰"
            } else {
              categori = "기타"
            }


            let dataList2 = {
              title: $(El).find("h5").text(),
              period: $(El).find("span.post_info_date").text().slice(23, -12),
              img: $(El).find("div.post_img img").attr("src"),
              content: $(El).text().trim().slice(num1, num2).trim(),
              link: $(El).find(".readmore").attr("href"),
              categori: categori
            }
            dataList.push(dataList2)
          })
        })
      } else {

        getHtml(`/startup/page/${i}`).then((html) => {
          const $ = cheerio.load(html.data);
          const bodyHead = $("div.post_header")
          bodyHead.each((idx, El) => {
            let periods = $(El).find("span.post_info_date").text().slice(23, -12)
            let num1 = $(El).text().trim().indexOf(periods) + 10
            let num2 = $(El).text().trim().indexOf("Continue Reading")
            let categori = ""
            let categoriStr1 = $(El).text().trim().indexOf("지원")
            let categoriStr2 = $(El).text().trim().indexOf("사업")
            let categoriStr3 = $(El).text().trim().indexOf("투자")
            let categoriStr4 = $(El).text().trim().indexOf("엑싯")
            let categoriStr5 = $(El).text().trim().indexOf("실적")
            let categoriStr6 = $(El).text().trim().indexOf("인터뷰")
            let categoriStr7 = $(El).text().trim().indexOf("스타트업")
            let categoriStr8 = $(El).text().trim().indexOf("질문")

            if (categoriStr1 > -1) {
              categori = "지원사업"
            } else if (categoriStr2 > -1) {
              categori = "지원사업"
            } else if (categoriStr3 > -1) {
              categori = "투자/엑싯"
            } else if (categoriStr4 > -1) {
              categori = "투자/엑싯"
            } else if (categoriStr5 > -1) {
              categori = "실적"
            } else if (categoriStr6 > -1) {
              categori = "인터뷰"
            } else if (categoriStr7 > -1) {
              categori = "스타트업뉴스"
            } else if (categoriStr8 > -1) {
              categori = "인터뷰"
            } else {
              categori = "기타"
            }


            let dataList2 = {
              title: $(El).find("h5").text(),
              period: $(El).find("span.post_info_date").text().slice(23, -12),
              img: $(El).find("div.post_img img").attr("src"),
              content: $(El).text().trim().slice(num1, num2).trim(),
              link: $(El).find(".readmore").attr("href"),
              categori: categori
            }
            dataList.push(dataList2)
          })
          this.setState({ data: dataList })
          this.setState({ status: false });
        })

      }
    }
    // const res = await axios.get("/api/news_data");
    // res.data.data.reverse().map((El, index) => {
    //   if (El.reg_date) {
    //     res.data.data[index].reg_date = El.reg_date.slice(0, 10);
    //   }

    //   getHtml(El.link.slice(-16)).then((html) => {
    //     if (html) {
    //       const $ = cheerio.load(html.data);
    //       const $bodyHead = $("div.post_content_wrapper").children(
    //         "div.post_header"
    //       );
    //       const $bodyContent = $("div.post_header.single");
    //       res.data.data[index].content_title = $bodyHead.find("h1").text();
    //       res.data.data[index].content_priod = $bodyHead
    //         .find("span.post_info_date")
    //         .text()
    //         .slice(23, -11);
    //       res.data.data[index].content_img = $bodyContent
    //         .find("p img")
    //         .attr("src");
    //       res.data.data[index].content_sumary = $bodyContent
    //         .find("p")
    //         .text()
    //         .slice(0, 200);
    //       this.setState({ data: res.data.data });
    //       console.log(index, res.data.data.length - 1);
    //       if (index > res.data.data.length - 4) {
    //         this.setState({ status: false });
    //       }
    //     }
    //   });
    // });
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
