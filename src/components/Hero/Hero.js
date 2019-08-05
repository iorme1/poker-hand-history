import React, { Component } from 'react';
import {
  Form,
  Input,
  Button,
  Modal,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import { Card } from '../../mapping';
import CardModalRow from '../CardModalRow/CardModalRow';
import './Hero.scss';
import PropTypes from 'prop-types';

class Hero extends Component {
  state = {
    holdings: ["back1.png", "back1.png"],
    position: "?",
    stack_size: 0,
    holdingsIdx: 0,
    modal: false
  }

  toggle(event) {
    let holdingsIdx = event.target.getAttribute('data-card');

    this.setState({
      modal: !this.state.modal,
      holdingsIdx
    });
  }

  togglePlayerDetails() {
    this.setState({
      playerModal: !this.state.playerModal
    })
  }

  setStackSize(event) {
    this.setState({
      stack_size: event.target.value
    })
  }

  setPosition(event) {
    this.setState({
      position: event.target.value
    })
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
          toggle={this.toggle.bind(this)}
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
            <Button color="secondary" onClick={this.toggle.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.playerModal}
          toggle={this.togglePlayerDetails.bind(this)}
          className={this.props.className}
        >
          <ModalBody>
            <Form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-12 text-center">
                  <h4 className="form-label">Stack Size</h4>
                </div>
              </div>
              <Input
                type="number"
                onChange={this.setStackSize.bind(this)}
              />
              <div className="row">
                <div className="col-12 text-center">
                  <h4 className="form-label">Position</h4>
                </div>
              </div>
              <Input
                type="select"
                onChange={this.setPosition.bind(this)}
               >
                 <option value="unknown">unknown</option>
                 <option value="utg">utg</option>
                 <option value="utg1">utg1</option>
                 <option value="utg2">utg2</option>
                 <option value="lojack">lojack</option>
                 <option value="hijack">hijack</option>
                 <option value="cutoff">cutoff</option>
                 <option value="button">button</option>
                 <option value="sb">sb</option>
                 <option value="bb">bb</option>
               </Input>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.togglePlayerDetails.bind(this)}>Save</Button>
          </ModalFooter>
        </Modal>
        <h4 className="player-title"> Hero </h4>
        <p className="player-pos-stack">
          {this.state.position + " / $" + this.state.stack_size}
        </p>
        <img
          data-card="0"
          className="board-card"
          src={`../img/${this.state.holdings[0]}`}
          onClick={this.toggle.bind(this)}
          alt="hero-holdings1"
        />
        <img
          data-card="1"
          className="board-card"
          src={`../img/${this.state.holdings[1]}`}
          onClick={this.toggle.bind(this)}
          alt="hero-holdings2"
        />
        <p
          className="position-stack-edit mb-2"
          onClick={this.togglePlayerDetails.bind(this)}
        >
          pos/$
        </p>
      </div>
    );
  }
}

Hero.propTypes = {
  handLabel: PropTypes.string 
}

export default Hero;
