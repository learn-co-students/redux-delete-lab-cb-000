import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';
import { connect } from 'react-redux'

class BandsContainer extends Component {
  displayBands = () => this.props.bands.map((band) => <Band delete={this.props.deleteBand} key={band.id} band={band}/>)
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.displayBands()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: name => dispatch({ type: "ADD_BAND", name }),
    deleteBand: id => dispatch({type: "DELETE_BAND", id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
