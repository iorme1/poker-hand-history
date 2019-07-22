import React, { Component } from 'react';
import {
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Modal,
  ModalBody
 } from 'reactstrap';
import { Card } from '../mapping';
import CardModalRow from './card-modal-row';

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
    })
  }

  setBoard(card) {
    let nextBoard = [...this.state.board];
    nextBoard[this.state.boardIdx] = card

    this.setState({
      board: nextBoard,
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Container>
        <div className="row">
          <div className="col-12 text-center">
            <h3 className="board-title">Board</h3>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <img
              data-card="0"
              className="flop1 board-card m-3"
              src={`../img/${this.state.board[0]}`}
              onClick={this.toggle.bind(this)}
            />
            <img
              data-card="1"
              className="flop2 board-card m-3"
              src={`../img/${this.state.board[1]}`}
              onClick={this.toggle.bind(this)}
            />
            <img
              data-card="2"
              className="flop3 board-card m-3"
              src={`../img/${this.state.board[2]}`}
              onClick={this.toggle.bind(this)}
            />
            <img
              data-card="3"
              className="turn board-card m-3"
              src={`../img/${this.state.board[3]}`}
              onClick={this.toggle.bind(this)}
            />
            <img
              data-card="4"
              className="river board-card m-3"
              src={`../img/${this.state.board[4]}`}
              onClick={this.toggle.bind(this)}
            />
          </div>
        </div>

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
                    setBoard={this.setBoard.bind(this, card)}
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
                    setBoard={this.setBoard.bind(this, card)}
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
                    setBoard={this.setBoard.bind(this, card)}
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
                    setBoard={this.setBoard.bind(this, card)}
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
                    setBoard={this.setBoard.bind(this, card)}
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
                    setBoard={this.setBoard.bind(this, card)}
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
                    setBoard={this.setBoard.bind(this, card)}
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
                    setBoard={this.setBoard.bind(this, card)}
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
                    setBoard={this.setBoard.bind(this, card)}
                    key={`${card}${i}`}
                  />
                )
              })}
            </div>
          </ModalBody>
        </Modal>

     </Container>
    )
  }
}

export default Board;
