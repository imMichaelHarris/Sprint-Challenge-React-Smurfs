import React from 'react';
import {Card, CardTitle} from 'reactstrap';


const Smurf = props => {
  return (
    <Card>
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
</Card>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

