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

class HandHistory extends Component {
  state = {
    label: "",
    players: null,
    modal: false
  }

  handleChangeLabel(event) {
    this.setState({ label: event.target.value })
  }

  handleChangePlayers(event) {
    this.setState({ players: event.target.value })
  }

  toggle() {
    this.setState({ modal: !this.state.modal })
  }

  render() {
    return (
      <Container>
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalBody>
          <FormGroup>
            <Input
              className="player-count-input"
              placeholder="# of players..."
              type="number"
              name="player-count"
              onChange={this.handleChangePlayers.bind(this)}
            />
          </FormGroup>
        </ModalBody>
      </Modal>
        <Form className="mt-3">
          <FormGroup>
            <Input
              className="hand-label-input"
              placeholder="Hand label..."
              type="text"
              name="hand-label"
              onChange={this.handleChangeLabel.bind(this)}
            />
          </FormGroup>
        </Form>
        <div className="row">
          <div className="col-12 text-center">
            <h5 className="hand-title">"{this.state.label}"</h5>
          </div>
        </div>
      </Container>
    )
  }
}

export default HandHistory;
