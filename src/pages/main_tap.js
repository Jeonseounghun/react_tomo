import React, { Component } from "react";
import "../scss/main.scss";

import axios from "axios";
import logo from "../images/logo.svg";
import MainTapContent from "../components/section_main_tap_content";
import Footer from "../components/section_footer";
import Filter from "../components/section_filter";
import Headerdetail from "../components/header_detail";
import cheerio from "cheerio";


const tap_title = {
  title: "아이디찾기",
  logo: logo,
};
const getHtml = async (url) => {
  try {
    return await axios.get(url);
  } catch (error) {
    console.error(error);
  }
};
class Main_tap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      footer: "main_tap",
      headtag: "전체사업",
      image: [],
      item: 20,
      all_tiem: 0,
    };
  }

  componentDidMount() {
    this._getData();
    setTimeout(() => {
      document.querySelector(".contents_list").addEventListener("scroll", () => {
        let scrollX = document.querySelector(".contents_list").scrollHeight
        let scrollY = document.querySelector(".contents_list").scrollTop
        let scrollZ = document.querySelector(".contents_list").clientHeight

        if (scrollX === scrollY + scrollZ) {
          this.setState({ item: this.state.item + 20 })

          this._getData();
        }
      })
    }, 1)

  }
  edit_period = (content) => {
    content = content.replace(/\t/g, '');
    content = content.replace(/\n/g, '');
    content = content.replace(/ /g, "")
    return content
  }
  edit_period2 = (content) => {
    content = content.replace(/\t/g, '');
    content = content.replace(/\n/g, '');
    return content
  }
  _getData = async () => {


    const res = await axios.get("/nael/api/main_tap_data");
    this.setState({ all_item: res.data.data.length })
    res.data.data.reverse().map((El, index) => {
      if (El.start_day) {
        res.data.data[index].start_day = El.start_day.slice(0, 10);
        res.data.data[index].end_day = El.end_day.slice(0, 10);
      }
      if (El.tag) {
        res.data.data[index].tag = El.tag.split(",");
      }
      var today = new Date();
      var dday = new Date(res.data.data[index].end_day);
      var gap = dday.getTime() - today.getTime();
      var result = Math.ceil(gap / (1000 * 60 * 60 * 24));
      El.dday = result;
      return El;
    });

    this.setState({ data: res.data.data.slice(0, this.state.item) });
    // setTimeout(() => {
    //   let datalist = []

    //   getHtml("/see/seea/selectSEEA100.do?menuId=80001001001").then((html) => {
    //     const $ = cheerio.load(html.data);
    //     const body = $(".bbsStyle1").find("tr").find(".txtAgL")
    //     const firstsrc = $(body[0]).find("a").attr("onclick")
    //     const firstNum = firstsrc.slice(32, 37)
    //     let i = 0
    //     let it = setInterval(() => {
    //       if (i++ < 100) {
    //         getHtml(`/see/seea/selectSEEA140Detail.do?pblancId=PBLN_0000000000${firstNum - i}`).then((html2) => {
    //           const $2 = cheerio.load(html2.data)

    //           if ($2.text().indexOf("잘못된") === -1) {

    //             let date = new Date()
    //             let month = date.getMonth() + 1;
    //             let day = date.getDate();
    //             let hour = date.getHours();
    //             let minute = date.getMinutes();
    //             let second = date.getSeconds();

    //             month = month >= 10 ? month : '0' + month;
    //             day = day >= 10 ? day : '0' + day;
    //             hour = hour >= 10 ? hour : '0' + hour;
    //             minute = minute >= 10 ? minute : '0' + minute;
    //             second = second >= 10 ? second : '0' + second;
    //             let real_time = date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;

    //             if (!$2("div.contBox")[0].children[0]) {
    //               console.log("1")
    //             }
    //             const textbox = {
    //               idx: "",
    //               title: $2("a#pNm").text(),
    //               content: this.edit_period2($2("div.contBox")[0].children[0].data),
    //               status: "N",
    //               gubun: "N",
    //               area: "전국",
    //               work: "제한없음",
    //               sup_type: "사업화",
    //               sup_pay: "미정",
    //               sup_condition: "제한없음",
    //               start_day: this.edit_period($2("table.infoTable").find("tbody").find("td")[1].children[0].data.trim()).slice(0, 10),
    //               end_day: this.edit_period($2("table.infoTable").find("tbody").find("td")[1].children[0].data.trim()).slice(-10),
    //               time: ":",
    //               all_day_yn: "N",
    //               homepage: $2("div.contBox").find("a").attr("href"),
    //               recommend: 50,
    //               tag: "미정",
    //               reg_id: "admin",
    //               reg_date: real_time,
    //               udp_date: real_time,
    //               use_yn: "N",
    //               view_cnt: 0,
    //               udp_id: "admin",
    //               att_cnt: "",
    //             };
    //             if ((this.state.data.filter((datalist) => { return datalist.title === textbox.title })).length >= 1 ? false : true) {
    //               datalist.push(textbox)


    //             } else {

    //               i = 100
    //             }
    //           }
    //         })

    //       } else {
    //         this.send_info(datalist)
    //         clearInterval(it)
    //       }
    //     }, 1000);

    //   })

    // }, 1000)

  };
  send_info = (textbox) => {
    console.log(textbox)
    fetch("http://localhost:5000/nael/api/main_tap_data2", {
      method: "post", //통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(textbox),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("전송성공")
      });
  };


  render() {
    return (
      <>
        <Headerdetail tap_title={tap_title} />
        <MainTapContent data={this.state.data} headtag={this.state.headtag} state={this.state} />
        <Filter />
        <Footer state={this.state.footer} />
      </>
    );
  }
}

export default Main_tap;
