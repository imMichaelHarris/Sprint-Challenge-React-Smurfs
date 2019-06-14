import React from 'react';
import {Card, CardTitle, CardBody} from 'reactstrap';


const Smurf = props => {
  return (
    <Card>
    <CardBody className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </CardBody>
    </Card>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

