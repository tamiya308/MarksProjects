import React, { Component } from "react";
import Dialog from "./Dialog";

export default class ErrorDialog extends Component {
  state = {
    title: this.props.title,
    bodyMessage: this.props.bodyMessage,
  };

  render() {
    return (
      <span>
          <Dialog title = "Welcome" bodyMessage = "Thank you for visiting"/>
      </span>
    );
  }
}