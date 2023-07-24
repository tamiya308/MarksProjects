import React from "react";
import Cat from './Cat';

export default class MouseTrackingTest extends React.Component {
    render() {
      return (
        <div>
            <h1>Move the mouse around!</h1>
            <Cat></Cat>
        </div>
      );
    }
  }