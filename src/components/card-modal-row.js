import React, { Component } from 'react';
import { Card } from '../mapping';

const CardModalRow = (props) => {
  return (
    <div className="col-2">
      <img
        className="my-modal-card"
        src={`../img/${props.src}`}
        onClick={props.setCard}
      />
    </div>
  );
}

export default CardModalRow;
