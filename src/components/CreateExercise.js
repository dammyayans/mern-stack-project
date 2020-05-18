import React, { Component } from "react";
import axios from "axios";

export default class CreateExercise extends Component {
  state = {
    username: "",
    description: "",
    duration: 0,
    date: new Date().toISOString().substring(0, 10),
    users: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        if (res.data.length > 0) {
          this.setState({ users: res.data.map((user) => user.username) });
        }
      })
      .catch((err) => console.log(err));
  }
  onSubmit(e) {
    e.preventDefault();
    const { username, description, duration, date } = this.state;
    const exercise = {
      username,
      description,
      duration,
      date,
    };
    axios
      .post("http://localhost:5000/exercise/add", exercise)
      .then((res) => console.log(res));
    window.location = "/";
  }
  render() {
    return (
      <div>
        <form className="row" onSubmit={(e) => this.onSubmit(e)}>
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h3>Create new Exercise Log</h3>
            <div className="form-group">
              <label>Username: </label>

              <select
                ref="userInput"
                required
                className="form-control"
                value={this.state.username}
                onChange={(e) => this.setState({ username: e.target.value })}
              >
                {this.state.users.map((user) => (
                  <option key={user} value={user}>
                    {user}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Description</label>
              <input
                type="text"
                className="form-control"
                required
                value={this.state.description}
                onChange={(e) => this.setState({ description: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-check-label" htmlFor="exampleCheck1">
                Duration:
              </label>
              <input
                type="text"
                className="form-control"
                value={this.state.duration}
                onChange={(e) => this.setState({ duration: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-check-label" htmlFor="exampleCheck1">
                Date:
              </label>
              <input
                type="date"
                className="form-control"
                value={this.state.date}
                onChange={(e) => this.setState({ date: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <div className="col-md-3"></div>
        </form>
      </div>
    );
  }
}
