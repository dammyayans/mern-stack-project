import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  state = {
    username: "",
    password: "",
    users: [],
  };
  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    // console.log(user);
    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res));
    this.setState({ username: "", password: "" });
  }
  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form className="row" method="POST" onSubmit={(e) => this.onSubmit(e)}>
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="exampleInputName1">Username:</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                name="username"
                aria-describedby="emailHelp"
                onChange={(e) => this.setState({ username: e.target.value })}
                value={this.state.username}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Create User
            </button>
          </div>
          <div className="col-md-3"></div>
        </form>
      </div>
    );
  }
}
