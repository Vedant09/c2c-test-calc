import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <div className="component-display">
        <h1>Vedant's Test</h1>
        <div>{this.props.value}</div>
      </div>
    );
  }
}
