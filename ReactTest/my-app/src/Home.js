import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="App container-fluid h-100">
        <div className="row justify-content-center h-100">
          <div className="col-4 bg-red">
            <div className="h-100 d-flex flex-column">
              <div className="row justify-content-center bg-purple">
                <div className="text-white">
                  <div className="height:150px">ROW 1 - fixed height</div>
                </div>
              </div>
              <div className="row justify-content-center bg-blue flex-grow-1">
                <div className="text-white">ROW 2 - grow remaining height</div>
              </div>
            </div>
          </div>
          <div className="col-8 bg-gray" />
        </div>
      </div>
    );
  }
}
