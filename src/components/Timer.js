import React from "react";
import {connect} from "react-redux";
import {tick} from "../actions";

class Timer extends React.Component {
  componentDidMount() {
    this.timerId = setInterval(() => this.props.tick(Date.now()), 500);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  render() {
    return null;
  }
}

export default connect(null, {tick})(Timer);
