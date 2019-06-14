import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "reactstrap";

const Smurf = props => {
  return (
    <Card>
      <div className="Smurf">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
      </div>


        <Link to="/form">Edit</Link>


      <Button close onClick={() => props.deleteSmurf(props.id)} />
    </Card>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
