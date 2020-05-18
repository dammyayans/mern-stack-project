import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand mr-auto" to="/">
        ExerciseTracker
      </Link>
      <div className=" navbar-link navbar-expand">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Exercises
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/create">
              Create Exercise Log
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/user">
              Create User
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
