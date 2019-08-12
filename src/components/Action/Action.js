import React, { Component } from 'react';
import './Action.scss';
import { PostflopOrder } from '../../mapping';
import {
  Modal,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  Button,
  ModalHeader,
} from 'reactstrap';

class Action extends Component {
  state = {
    activePlayerIdx: 0,
    action_open: true,
    pot_size: 0,
    modal: false
  }

  setPostflopOrder() {
    let nextPositions = this.state.positions;
    nextPositions.sort((a,b) => PostflopOrder[a] - PostflopOrder[b]);
  }

  toggleActionModal(event) {
    this.setState({ modal: !this.state.modal })
  }

  render() {
    let { positions, active } = this.props;

    if (active) {
      return (
        <div data-test="actions-container">
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggleActionModal.bind(this)}
            className={this.props.className}
          >
            <ModalHeader>Set Actions</ModalHeader>
            <ModalBody>
              <Form onSubmit={(e) => e.preventDefault()}>

                <Label for="">Set Actions</Label>
                <Input
                  type="text"
                  name="comment"
                />
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggleActionModal.bind(this)}>Save</Button>
            </ModalFooter>
          </Modal>
          <div className="row mt-2">
            <div className="col-12 text-center">
              <p
                className="edit-link"
                onClick={this.toggleActionModal.bind(this)}>Edit Actions
              </p>
            </div>
          </div>
          <div className="row text-center mt-3">
            {this.props.positions.map((pos,i) => {
              return (
                <p key={`${pos}_i`} className="position-test">{pos}</p>
              );
            })}
          </div>
      </div>
      );
    } else {
      return null;
    }
  }
}

export default Action;

/*
 street - pos - action => (dropdown showing bet/check/call/raise/fold)

state = {
  last_action:  (bet, call, check, raise)
  pot_size: 0 => this will be recalculated after each action
}

// this will get called if an "amount" input is changed
setPot(amount) {
  this.setState({ pot: this.state.pot + bet}
}
*/
