import React, { Component } from 'react';

class Band extends Component {

  handleDeleteClick = () => this.props.delete(this.props.id)

  render() {
    return(
        <li>{this.props.name}
          <button onClick={this.handleDeleteClick}>delete</button>
        </li>
    );
  }
};

export default Band;
