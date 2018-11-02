// import React from 'react';
// import Band from './Band'
//
// // import { connect } from 'react-redux'
//
// const Bands = props => {
//   const bands = props.bands.map(band => <Band {...band} key={band.id} deleteBand={props.deleteBand}  />)
//
//     return(
//       <div>
//         {bands}
//       </div>
//     );
//
// };
//
// export default Bands;

import React from 'react';
import Band from './Band'

const Bands = props => {
  if (props.bands) {
    const bands = props.bands.map(band => <Band {...band} deleteBand={props.deleteBand} key={band.id}/>)

    return (
      <div>
        {bands}
      </div>
    );

  } else {
    return <div></div>
  }


};

export default Bands;
