import React, { Component } from 'react';
import Band from './Band';

const Bands = props => {
  const bands = props.bands.map(band => <Band key={band.id} band={band} delete={props.delete} />);
  
  return (
    <ul>
      {bands}
    </ul>
  )
}

export default Bands;