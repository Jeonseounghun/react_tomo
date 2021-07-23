import React, { Component } from "react";
import "../scss/main.scss";
import Footer from "../components/section_footer";
import MoreContents from "../components/section_MoreContents";

class More extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      footer: "more",
      morecontent: "more",
    };
  }

  render() {
    return (
      <>
        <MoreContents state={this.state.morecontent} />
        <Footer state={this.state.footer} />
      </>
    );
  }
}

export default More;
