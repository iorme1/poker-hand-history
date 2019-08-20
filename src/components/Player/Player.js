import React, { Component } from 'react';
import {
  Form,
  Input,
  Button,
  Modal,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import { Cards, Positions } from '../../mapping';
import ModalCardImage from '../ModalCardImage/ModalCardImage';
import './Player.scss';
import PropTypes from 'prop-types';

class Player extends Component {
  state = {
    holdings: ["back1.png", "back1.png"],
    holdingsIdx: 0,
    position: "?",
    stack_size: 0,
    modal: false,
    playerModal: false,
    player_type: null,
    cardsSelected: 0
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  togglePlayerDetails() {
    this.setState({ playerModal: !this.state.playerModal });
  }

  setStackSize(event) {
    this.setState({ stack_size: event.target.value });
  }

  setPosition(event) {
    let position = event.target.value;
    this.props.addPosition(position, this.state.position);
    this.setState({ position });
  }

  removeCard() {
    let nextHoldings = [...this.state.holdings];
    let nextHoldingsIdx = this.state.holdingsIdx - 1;
    nextHoldings[nextHoldingsIdx] = "back1.png";

    this.setState({
      cardsSelected: this.state.cardsSelected - 1,
      holdingsIdx: nextHoldingsIdx,
      holdings: nextHoldings
    })
  }

  setCard(card) {
    let nextHoldings = [...this.state.holdings];
    let nextCardsSelected = this.state.cardsSelected + 1;
    nextHoldings[this.state.holdingsIdx] = card;

    if (nextCardsSelected === 2) {
      this.setState({
        holdings: nextHoldings,
        modal: !this.state.modal,
        cardsSelected: 0,
        holdingsIdx: 0
      });
    } else {
      this.setState({
        cardsSelected: this.state.cardsSelected + 1,
        holdings: nextHoldings,
        holdingsIdx: this.state.holdingsIdx + 1
      });
    }
  }

  render() {
    let { positionsTaken } = this.props;
    let remainingPositions = Positions.filter(pos => !positionsTaken.has(pos));
    let display = this.props.hideEditing ? "hide" : "mb-2 btn btn-outline-warning";

    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle.bind(this)}
          className={this.props.className}
        >
          <ModalBody>
            <div className="row">
              <div className="col-12">
                {Cards.map((card,i) => {
                  return (
                    <ModalCardImage
                      src={card}
                      setCard={this.setCard.bind(this, card)}
                      removeCard={this.removeCard.bind(this)}
                      key={`${card}${i}`}
                    />
                  )
                })}
              </div>
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
                {remainingPositions.map((pos,i) => {
                  return (
                    <option key={`pos${i}`} value={pos}>{pos}</option>
                  );
                })}
               </Input>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.togglePlayerDetails.bind(this)}>Save</Button>
          </ModalFooter>
        </Modal>
        <p className="player-pos-stack">
          {this.state.position + " / $" + this.state.stack_size}
        </p>
        <div className="holdings-container" onClick={this.toggle.bind(this)}>
          <img
            className="board-card"
            src={`../img/${this.state.holdings[0]}`}
            alt="holding1"
          />
          <img
            className="board-card"
            src={`../img/${this.state.holdings[1]}`}
            alt="holding2"
          />
        </div>
        <button
          className={display}
          onClick={this.togglePlayerDetails.bind(this)}
        >
          pos/$ &#x270E;
        </button>
      </div>
    );
  }
}

Player.propTypes = {
  player_type: PropTypes.string,
  addPosition: PropTypes.func,
  positionTaken: PropTypes.object
}

export default Player;
