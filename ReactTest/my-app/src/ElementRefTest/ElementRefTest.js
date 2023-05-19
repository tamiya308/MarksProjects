import React, { Component } from "react";
import ReactDOM from 'react-dom';

export default class ElementRefTest extends Component {
  constructor(props) {
    super();
    this.state = {
      textInput: "",
    };
    this.updateState = this.updateState.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.addSeperator = this.addSeperator.bind(this);
  }
  updateState(e) {
    this.setState({ textInput: e.target.value });
    // this.state.textInput = e.target.value;
  }
  clearInput() {
    this.setState({ textInput: "" });
    var node = document.getElementById("txtInput");
    ReactDOM.findDOMNode(node).focus();
  }
  addSeperator() {
    this.setState({ textInput: this.state.textInput + "|" });
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  }
  render() {
    return (
      <div>
        <input
          id="txtInput"
          value={this.state.name}
          onChange={this.updateState}
          ref="myInput"
        ></input>
        <button onClick={this.clearInput}>Clear</button>
        <button onClick={this.addSeperator}>Add Seperator</button>
        <br/><br/>
        <h4>{this.state.textInput}</h4>
      </div>
    );
  }
}