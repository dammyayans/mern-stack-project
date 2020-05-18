import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import ExerciseList from "./components/ExerciseList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Route path="/" exact component={ExerciseList} />
          <Route path="/edit:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
        </div>
      </Router>
    </div>
  );
}

export default App;
