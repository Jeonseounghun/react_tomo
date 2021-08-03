import React, { Component } from "react";
import "../scss/main.scss";

import MoreContents from "../components/section_MoreContents";
import Footer from "../components/section_footer";

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
        <MoreContents state={this.state} />
        <Footer state={this.state.footer} />
      </>
    );
  }
}

export default More;
