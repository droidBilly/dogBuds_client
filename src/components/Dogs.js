import React, { Component } from 'react';

class Dogs extends Component {

  render() {
    return (
      <div className="Dogs">
        <img src={ this.props.image } alt="dog"/>
        <p>Breed: </p>
      </div>
    )
  }
}
 export default Dogs;
