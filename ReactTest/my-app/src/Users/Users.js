import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import Account from "./Account";

export default class Users extends Component {
  constructor() {
    super();

    this.state = {
      users: [
        { id: 0, name: "User A" },
        { id: 1, name: "User B" },
        { id: 2, name: "User C" },
      ],
      selectedUser: null,
    };
  }

  userSelected(e) {
    // this.state.selectedUser = this.state.users[e.target.id];
    var user = this.state.users[e.target.id];
    console.log(user);
    this.setState({
      selectedUser : user
    });

    // this.props.history.push("/users/profile");
  }

  render() {
    return (
      <div>
        <div className="form-check">
          {this.state.users.map((item, index) => (
            <div key={item.id}>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id={item.id}
                onClick={this.userSelected.bind(this)}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                {item.id} {item.name}
              </label>
            </div>
          ))}
        </div>
        <Link to={{ pathname: "/users/profile/", state: { user: null } }}>
          Profile Details
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Link to={"/users/account"}>Account Details</Link>
        <Switch>
          <Route path="/users/profile" exact component={Profile}>
            <Profile user={this.state.selectedUser}></Profile>
          </Route>
          <Route path="/users/account" exact component={Account}>
            <h3>This is the users Account details</h3>
          </Route>
        </Switch>
      </div>
    );
  }
}
