import React, { Component} from "react"; //, {useContext}
import {  Link } from "react-router-dom";

export default class FruitDetail extends Component {
  constructor(props) {
    super(props); 
    this.defaultFruit = { id: -1, name: "<No Fruit>" };

    if (typeof this.props.location.state == "undefined")
      this.state = { fruit: this.defaultFruit };
    else
      this.state = {fruit: this.props.location.state.fruit};
  }

  // componentDidMount() {}

  render() {
    return (
      <div>
        <h3>Fruit Details</h3>
        <div>Id: {this.state.fruit.id} </div>
        <div>Name: {this.state.fruit.name} </div>
        <div>
          <Link to={{ pathname: "/fruitslist" }}>
            <button type="button" className="btn btn-primary">
              Return
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
