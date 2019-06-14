import React, { Component } from "react";
import { Form, Input, Button, Label, FormGroup, Col } from "reactstrap";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: "",
      editMode: true
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const { name, age, height } = this.state;
    const newSmurf = {
      name: name,
      age: age,
      height: `${height}cm`
    };
    this.props.addSmurf(newSmurf);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
    this.props.history.push("/");
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <Form onSubmit={this.state.editMode ? this.editSmurf : this.addSmurf}>
          <FormGroup row>
            <Label for="name" size="lg">
              Name:
            </Label>
            <Col>
              <Input
                required
                bsSize="lg"
                onChange={this.handleInputChange}
                placeholder="name"
                value={this.state.name}
                name="name"
                id="name"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="age" size="lg">
              Age:
            </Label>
            <Col>
              <Input
                required
                bsSize="lg"
                onChange={this.handleInputChange}
                placeholder="age"
                value={this.state.age}
                name="age"
                id="age"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="height" size="lg">
              Height:
            </Label>
            <Col>
              <Input
                required
                bsSize="lg"
                onChange={this.handleInputChange}
                placeholder="height"
                value={this.state.height}
                name="height"
                id="height"
              />
            </Col>
          </FormGroup>
          <Button type="submit" color="success">
            {this.state.editMode ? "Edit Smurf" : "Add to the village"}
          </Button>
        </Form>
      </div>
    );
  }
}

export default SmurfForm;
