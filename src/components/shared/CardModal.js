import React, { Component } from 'react';
import { Cards } from '../../mapping';
import CardModalRow from '../CardModalRow/CardModalRow';
import { ModalBody } from 'reactstrap';

const CardModal = (props) => {
  return (
    <ModalBody>
      <div className="row">
        <div className="col-12">
          {Cards.map((card,i) => {
            return (
              <CardModalRow
                src={card}
                setCard={this.setCard.bind(this, card)}
                key={`${card}${i}`}
              />
            )
          })}
        </div>
      </div>
    </ModalBody>
  );
}

export default CardModal;
