import React from 'react';

const Band = props => {
  return(
    <div>
      <li key={props.id}>{props.band.name}</li><button onClick={() => props.delete(props.band.id)}>Remove</button>
    </div>
  )
}

export default Band;
 