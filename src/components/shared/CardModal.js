import React, { Component } from 'react';
import { Card } from '../../mapping';
import CardModalRow from '../CardModalRow/CardModalRow';
import { ModalBody } from 'reactstrap';

const CardModal = (props) => {
  return (
    <ModalBody>
      <div className="row mb-2">
        {Card.paths_1.map((card,i) => {
          return (
            <CardModalRow
              src={card}
              setCard={this.setCard.bind(this, card)}
              key={`${card}${i}`}
            />
          )
        })}
      </div>
      <div className="row mb-2">
        {Card.paths_2.map((card,i) => {
          return (
            <CardModalRow
              src={card}
              setCard={this.setCard.bind(this, card)}
              key={`${card}${i}`}
            />
          )
        })}
      </div>
      <div className="row mb-2">
        {Card.paths_3.map((card,i) => {
          return (
            <CardModalRow
              src={card}
              setCard={this.setCard.bind(this, card)}
              key={`${card}${i}`}
            />
          )
        })}
      </div>
      <div className="row mb-2">
        {Card.paths_4.map((card,i) => {
          return (
            <CardModalRow
              src={card}
              setCard={this.setCard.bind(this, card)}
              key={`${card}${i}`}
            />
          )
        })}
      </div>
      <div className="row mb-2">
        {Card.paths_5.map((card,i) => {
          return (
            <CardModalRow
              src={card}
              setCard={this.setCard.bind(this, card)}
              key={`${card}${i}`}
            />
          )
        })}
      </div>
      <div className="row mb-2">
        {Card.paths_6.map((card,i) => {
          return (
            <CardModalRow
              src={card}
              setCard={this.setCard.bind(this, card)}
              key={`${card}${i}`}
            />
          )
        })}
      </div>
      <div className="row mb-2">
        {Card.paths_7.map((card,i) => {
          return (
            <CardModalRow
              src={card}
              setCard={this.setCard.bind(this, card)}
              key={`${card}${i}`}
            />
          )
        })}
      </div>
      <div className="row mb-2">
        {Card.paths_8.map((card,i) => {
          return (
            <CardModalRow
              src={card}
              setCard={this.setCard.bind(this, card)}
              key={`${card}${i}`}
            />
          )
        })}
      </div>
      <div className="row mb-2">
        {Card.paths_9.map((card,i) => {
          return (
            <CardModalRow
              src={card}
              setCard={this.setCard.bind(this, card)}
              key={`${card}${i}`}
            />
          )
        })}
      </div>
    </ModalBody>
  );
}

export default CardModal;
