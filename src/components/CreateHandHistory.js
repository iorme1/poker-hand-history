import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Modal,
  ModalBody,
  ModalFooter
 } from 'reactstrap';
 import Board from './board';
 import Villain from './Villain';
 import Hero from './Hero';
 import Notes from './Notes';

class CreateHandHistory extends Component {
  state = {
    label: "",
    players: [],
    modal: true
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
      <div className="container-fluid">
        <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)}>
          <ModalBody>
            <Form className="form" onSubmit={(e) => e.preventDefault()}>
              <FormGroup>
                <Label for="villain-count"># Of Villains</Label>
                <Input
                  className="villain-count-input"
                  placeholder="# of villains..."
                  type="number"
                  name="villain-count"
                  onChange={this.handleChangePlayers.bind(this)}
                />
                <Label for="hand-label">Hand Label</Label>
                <Input
                  className="hand-label-input"
                  placeholder="Hand label..."
                  type="text"
                  name="hand-label"
                  onChange={this.handleChangeLabel.bind(this)}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle.bind(this)}>Save</Button>
          </ModalFooter>
        </Modal>
        <div className="row">
          <div className="col-12 text-center">
            <h5 className="hand-title">"{this.state.label}"</h5>
          </div>
        </div>
       <div className="row">
         <div className="col-3 text-center">
           <Hero
            handLabel={this.state.label}
           />
         </div>
         <div className="col-6 text-center">
           <Board
            handLabel={this.state.label}
           />
         </div>
         <div className="col-3 text-center">
           {}
           <Villain
            handLabel={this.state.label}
           />
         </div>
       </div>
       <Notes
        handLabel={this.state.label}
       />
      </div>
    )
  }
}

export default CreateHandHistory;
