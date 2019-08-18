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
    boardIdx: 0,
    cardsSelected: 0
  }

  toggle(event) {
    this.setState({ modal: !this.state.modal });
  }

  removeCard() {
    let nextBoard = [...this.state.board];
    let nextBoardIdx = this.state.boardIdx - 1;
    nextBoard[nextBoardIdx] = "back1.png";

    this.setState({
      cardsSelected: this.state.cardsSelected - 1,
      boardIdx: nextBoardIdx,
      board: nextBoard
    });
  }

  setCard(card) {
    let nextBoard = [...this.state.board];
    let nextCardsSelected = this.state.cardsSelected + 1;
    nextBoard[this.state.boardIdx] = card
  
    if (nextCardsSelected === 5) {
      this.setState({
        board: nextBoard,
        modal: !this.state.modal,
        cardsSelected: 0,
        boardIdx: 0
      });
    } else {
      this.setState({
        cardsSelected: this.state.cardsSelected + 1,
        board: nextBoard,
        boardIdx: this.state.boardIdx + 1
      });
    }
  }

  render() {
    return (
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-12 text-center">
            <h3 className="board-title">Board</h3>
          </div>
        </div>
        <div className="row board-container" onClick={this.toggle.bind(this)}>
          <div className="col-12 text-center">
            <img
              className="flop1 board-card"
              src={`../img/${this.state.board[0]}`}
              alt="flop-card1"
            />
            <img
              className="flop2 board-card"
              src={`../img/${this.state.board[1]}`}
              alt="flop-card2"
            />
            <img
              className="flop3 board-card"
              src={`../img/${this.state.board[2]}`}
              alt="flop-card3"
            />
            <img
              className="turn board-card"
              src={`../img/${this.state.board[3]}`}
              alt="turn-card"
            />
            <img
              className="river board-card"
              src={`../img/${this.state.board[4]}`}
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
     </div>
   );
  }
}

export default Board;
