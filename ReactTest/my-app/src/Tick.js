import React, { Component } from "react";

export default class Tick extends Component {
  state = {
    tickId: this.props.id,
    count: this.props.initialCountVal,
    onValueChanged: this.props.onValChanged,
    isSelected: this.props.selected,
    numberOfTicks: this.props.numberOfTicks
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState(x => ({ count: x.count + 1 }));
      this.state.onValueChanged(this.state.tickId, this.state.count);
    }, 1000);
  }

  resetTicks(productId) {
    this.setState({ count: this.props.initialCountVal });
  }

  manualIncremenetTicks() {
    this.setState(x => ({ count: x.count + 1 }));
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.resetTicks(this.state.productId);
          }}
        >
          Reset Ticks Id {this.state.tickId}
        </button>
        <button
          onClick={() => {
            this.manualIncremenetTicks();
          }}
        >
          +1
        </button>
        {/* <span> It is {new Date().toLocaleTimeString()}.</span> */}
        <span> Tick Val (from cached local var) : {this.state.count}</span>
        <span> Initial Val (from props) : {this.props.initialCountVal}, </span>
        <span>Number of Ticks : {this.props.numberOfTicks}</span>
      </div>
    );
  }
}
// ReactDOM.render(welcomeElement, document.getElementById("timerDiv"));
