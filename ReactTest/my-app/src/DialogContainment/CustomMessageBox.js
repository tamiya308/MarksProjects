import React, { Component } from "react";

export default class CustomMessageBox extends Component {
  state = {
    title: this.props.title,
    bodyMessage: this.props.bodyMessage,
  };

  render() {
    return (
      <span>
        <div>
            <b>{this.state.title}</b> - {this.state.bodyMessage}
        </div>
      </span>
    );
  }
}
