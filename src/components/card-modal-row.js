import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Card } from '../mapping';

class CardModalRow extends Component {
  render() {
    return (
      <div className="col-2">
        <img
          className="my-modal-card"
          src={`../img/${this.props.src}`}
          onClick={this.props.setBoard}
        />
      </div>
    )
  }
}

export default CardModalRow;
