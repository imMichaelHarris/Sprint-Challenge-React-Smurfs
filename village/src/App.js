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
      smurfs: []
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
  editSmurf = smurfId => {
    axios.put(`http://localhost:5000/friends/${smurfId}`)
  }
  deleteSmurf = smurf=> {
    axios
      .delete(`http://localhost:3333/smurfs/${smurf.id}`, smurf).then(res => console.log(res))
      .catch(err => console.log(err))
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
          render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />}
        />
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
