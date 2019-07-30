import React, { Component } from 'react';
import {
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Modal,
  ModalBody,
  ModalFooter
 } from 'reactstrap';
 import { Card } from '../mapping';
 import CardModalRow from './card-modal-row';

class Villain extends Component {
  state = {
    holdings: ["back1.png", "back1.png"],
    position: "unknown position",
    stack_size: null,
    holdingsIdx: 0,
    modal: false
  }

  toggle(event) {
    let holdingsIdx = event.target.getAttribute('data-card');

    try {
      this.setState({
        modal: !this.state.modal,
        holdingsIdx
      });
    } catch(e) {
      alert("You must pick a card")
    }

  }

  setCard(card) {
    let nextHoldings = [...this.state.holdings];
    nextHoldings[this.state.holdingsIdx] = card

    this.setState({
      holdings: nextHoldings,
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
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
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <h4 className="player-title"> Villains </h4>
        <p className="player-pos"> {this.state.position} </p>
        <img
          data-card="0"
          className="board-card"
          src={`../img/${this.state.holdings[0]}`}
          onClick={this.toggle.bind(this)}
        />
        <img
          data-card="1"
          className="board-card"
          src={`../img/${this.state.holdings[1]}`}
          onClick={this.toggle.bind(this)}
        />
      </div>
    )
  }
}

export default Villain;
