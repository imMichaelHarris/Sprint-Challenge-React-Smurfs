import React, { Component } from 'react';
import {Form, Input, Button, Label } from 'reactstrap';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const {name, age, height} = this.state
    const newSmurf = {
      name: name,
      age: age,
      height: height,
    }
    this.props.addSmurf(newSmurf);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
    this.props.history.push("/")
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <Form onSubmit={this.addSmurf}>
          <Label for="name">Name</Label>
          <Input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            id="name"
          />
          <Label for="age">Age</Label>
          <Input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            id="age"
          />
          <Label for="height">Height</Label>
          <Input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            id="height"
          />
          <Button type="submit">Add to the village</Button>
        </Form>
      </div>
    );
  }
}

export default SmurfForm;
