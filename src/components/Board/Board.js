import React, { Component } from 'react';
import './Board.scss';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import { Cards } from '../../mapping';
import ModalCardImage from '../ModalCardImage/ModalCardImage';

class Board extends Component {
  state = {
    board: Array(5).fill("back1.png"),
    modal: false,
    boardIdx: 0
  }

  toggle(event) {
    let boardIdx = event.target.getAttribute('data-card');

    this.setState({
      modal: !this.state.modal,
      boardIdx
    });
  }

  setCard(card) {
    let nextBoard = [...this.state.board];
    nextBoard[this.state.boardIdx] = card

    this.setState({
      board: nextBoard,
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-12 text-center">
            <h3 className="board-title">Board</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <img
              data-card="0"
              className="flop1 board-card"
              src={`../img/${this.state.board[0]}`}
              onClick={this.toggle.bind(this)}
              alt="flop-card1"
            />
            <img
              data-card="1"
              className="flop2 board-card"
              src={`../img/${this.state.board[1]}`}
              onClick={this.toggle.bind(this)}
              alt="flop-card2"
            />
            <img
              data-card="2"
              className="flop3 board-card"
              src={`../img/${this.state.board[2]}`}
              onClick={this.toggle.bind(this)}
              alt="flop-card3"
            />
            <img
              data-card="3"
              className="turn board-card"
              src={`../img/${this.state.board[3]}`}
              onClick={this.toggle.bind(this)}
              alt="turn-card"
            />
            <img
              data-card="4"
              className="river board-card"
              src={`../img/${this.state.board[4]}`}
              onClick={this.toggle.bind(this)}
              alt="river-card"
            />
          </div>
        </div>

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
     </div>
   );
  }
}

export default Board;
