import React, { Component } from "react";
import { ThemeContextColor, ThemeContextObject } from "../App";
import { headderSubject } from "../Services/CommunicationService";

export default class Headder extends Component {
  constructor() {
    super();
    this.state = {
      index: 1,
      message: "Sending message",
    };
  }

  sendMessage() {
    var index = this.state.index;
    var message = this.state.message + " " + index;
    headderSubject.next({ id: index, message: message });
    this.state.index += 1;
  }

  render() {
    return (
      <span>
        <ThemeContextObject.Consumer>
          {(x) => (
          <ThemeContextColor.Consumer>
            {(y) => (
               <span>Welcome to ReactJS Test with : {y}, [{x.fore}, {x.back}]</span>
            )}
          </ThemeContextColor.Consumer>
          )}
        </ThemeContextObject.Consumer>

        <button onClick={this.sendMessage.bind(this)}>Send Message</button>
      </span>
    );
  }
}
