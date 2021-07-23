import axios from "axios";
import React, { Component } from "react";
import Headerdetail from "../components/header_detail";
import Footer from "../components/section_footer";
import SearchDetail from "../components/section_searchTap";

class SearchTap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      business: [],
      news: [],
      title: "통합검색",
      footer: "main_tap",
    };
  }
  componentDidMount() {
    this._getData();
    this._getnews();
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
    this.setState({ business: res.data.data });
  };

  _getnews = async () => {
    const res = await axios.get("/api/news_data");
    res.data.data.map((El, index) => {
      if (El.reg_date) {
        res.data.data[index].reg_date = El.reg_date.slice(0, 10);
      }
    });
    this.setState({ news: res.data.data });
  };

  render() {
    return (
      <>
        <Headerdetail tap_title={this.state} />
        <SearchDetail state={this.state} />
        <Footer state={this.state.footer} />
      </>
    );
  }
}

export default SearchTap;
