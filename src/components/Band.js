import React, { Component } from 'react';

class Band extends Component {

  handleOnDelete = () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <React.Fragment>
        <li key={this.props.id}>{this.props.name}</li> <button onClick={this.handleOnDelete}>x</button>
      </React.Fragment>
    );
  }
};

export default Band;
