import React, { Component } from 'react';
import { Card } from '../mapping';

class CardModalRow extends Component {
  render() {
    return (
      <div className="col-2">
        <img
          className="my-modal-card"
          src={`../img/${this.props.src}`}
          onClick={this.props.setCard}
        />
      </div>
    );
  }
}

export default CardModalRow;
