import React, { Component } from "react"
import {WOW} from "wowjs";
class Rnwow extends Component {
  componentDidMount() {
    const wow = new WOW({
        offset: 100,
        mobile: false,
        live: false
    })
    wow.init();
  }
  render() {
    return (
      <React.Fragment>
      </React.Fragment>
    )
  }
}

export default Rnwow;