import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Exercise = (props) => (
  <tr {...props}>
    <th scope="row">{props.i + 1}</th>
    <td>{props.username}</td>
    <td>{props.description}</td>
    <td>{props.duration}</td>
    <td>{props.date.substring(0, 10)}</td>
    <td>
      {
        <span>
          <Link to={"/edit" + props.id}>Edit</Link> |
          <a href="/#" onClick={() => props.delete(props.id)}>
            Delete
          </a>
        </span>
      }
    </td>
  </tr>
);
export default class ExerciseList extends Component {
  state = {
    exercises: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/exercise")
      .then((res) => this.setState({ exercises: res.data }))
      .catch((err) => console.log(err));
  }
  exercisedelete(id) {
    axios
      .delete("http://localhost:5000/exercise/" + id)
      .then((res) =>
        this.setState({
          exercises: this.state.exercises.filter((ex) => ex._id !== id),
        })
      )
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <h3>Exercise List</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Description</th>
              <th scope="col">Duration</th>
              <th scope="col">Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.exercises.map((ex, i) => (
              <Exercise
                key={i}
                username={ex.username}
                duration={ex.duration}
                date={ex.date}
                description={ex.description}
                id={ex._id}
                i={i}
                delete={() => this.exercisedelete(ex._id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
