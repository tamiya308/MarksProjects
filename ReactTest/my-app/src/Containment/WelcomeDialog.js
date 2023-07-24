import React, { Component } from "react";
import FancyBorder from "./FancyBorder";

export default class WelcomeDialog extends Component {
  render() {
    return (
      <FancyBorder color="orange">
        <span>
          <span>This is the welcome dialog page to demonstrate a child call</span>
        </span>
      </FancyBorder>
    );
  }
}