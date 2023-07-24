import React, { Component} from "react"; //, {useContext}
import {  Link } from "react-router-dom";

export default class Account extends Component {
  constructor(props) {
    super(); 
    this.state = {user: this.props.location.state.user};
  }

  // componentDidMount() {}

  render() {
    return (
      <div>
        <h3>User Acount</h3>
        <div>Id: {this.state.user.id} </div>
        <div>Name: {this.state.user.name} </div>
        {/* <div>
          <Link to={{ pathname: "/fruitslist" }}>
            <button type="button" className="btn btn-primary">
              Return
            </button>
          </Link>
        </div> */}
      </div>
    );
  }
}