import React, { Component } from "react";
import { Route, Link, NavLink } from "react-router-dom";
import axios from "axios";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      editMode: false,
      smurf: {
        name: "",
        age: "",
        height: ""
      }
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  }
  addSmurf = newSmurf => {
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  };
  handleEditSmurf = smurf => {
    axios
      .put(`http://localhost:5000/friends/${smurf}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  editSmurf = smurf => {
    console.log('app edit')
    this.setState({ ...this.state, smurf: smurf });
  };
  deleteSmurf = smurfId => {
    axios
      .delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavLink exact to="/">
          Enter the Smurf Village
        </NavLink>
        <NavLink to="/form">Add new Smurf</NavLink>
        <Route
          path="/form"
          render={props => (
            <SmurfForm
              {...props}
              addSmurf={this.addSmurf}
              editMode={this.state.editMode}
              handleEditSmurf={this.handleEditSmurf}
            smurf={{...this.state.smurf}}
            />
          )}
        />

        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              editSmurf={this.editSmurf}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
