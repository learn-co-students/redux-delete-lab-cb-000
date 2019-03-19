import React, { Component } from 'react';

class Band extends Component {

  handleOnDelete = (e) => {
    this.props.deleteBand(this.props.band.id)
  }

  render() {
    const { name } = this.props.band
    return(
      <React.Fragment>
        <li>{name}</li> <button onClick={this.handleOnDelete}>x</button>
      </React.Fragment>
    );
  }
};

export default Band;
