import React, { Component } from "react";

export default class FancyBorder extends Component {
  state = {
    color: this.props.color,
    children: this.props.children,
  };

  render() {
    return (
      <span style={{color:this.state.color}}>
        <span>{this.state.children}</span>
      </span>
    );
  }
}
