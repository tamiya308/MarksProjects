import React, { Component } from "react";
import { ThemeContextColor } from "../App";

export class SubHeadder extends Component {
  render() {
    return (
      <span>
        <ThemeContextColor.Consumer>
          {x => {
            return <span> {x}</span>;
          }}
        </ThemeContextColor.Consumer>
      </span>
    );
  }
}
