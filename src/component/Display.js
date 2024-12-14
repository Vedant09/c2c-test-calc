import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <h1>Vedant's Test</h1>
      <div className="component-display">
        <div>{this.props.value}</div>
      </div>
    );
  }
}
