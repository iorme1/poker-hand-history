import React, { Component } from 'react';
import {
  Input,
  Label,
  Form,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Container
} from 'reactstrap';

class Notes extends Component {
  state = {
    preflop_notes: "preflop quick notes...",
    flop_notes: "flop quick notes...",
    turn_notes: "turn quick notes...",
    river_notes: "river quick notes...",
    modal: false
  }


  toggle(event) {
    this.setState({ modal: !this.state.modal })
  }

  setPreflopNotes(event) {
    this.setState({ preflop_notes: event.target.value })
  }

  setFlopNotes(event) {
    this.setState({ flop_notes: event.target.value })
  }

  setTurnNotes(event) {
    this.setState({ turn_notes: event.target.value })
  }

  setRiverNotes(event) {
    this.setState({ river_notes: event.target.value })
  }


  render() {
    return (
      <Container>
        <div className="row mt-2">
          <div className="col-12 text-center">
            <Button
              className="btn btn-success"
              onClick={this.toggle.bind(this)}>Add Quick Notes
            </Button>
          </div>
        </div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle.bind(this)}
            className={this.props.className}
          >
            <ModalBody>
              <Form onSubmit={(e) => e.preventDefault()}>
                <Label for="preflop">Preflop Notes</Label>
                <Input
                  onChange={this.setPreflopNotes.bind(this)}
                  type="text"
                  name="preflop"
                />
                <Label for="preflop">Flop Notes</Label>
                <Input
                  onChange={this.setFlopNotes.bind(this)}
                  type="text"
                  name="flop"
                />
                <Label for="turn">Turn Notes</Label>
                <Input
                  onChange={this.setTurnNotes.bind(this)}
                  type="text"
                  name="turn"
                />
                <Label for="river">River Notes</Label>
                <Input
                  onChange={this.setRiverNotes.bind(this)}
                  type="text"
                  name="river"
                />
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle.bind(this)}>Save</Button>
            </ModalFooter>
          </Modal>
          <div className="row mt-3">
            <div className="col-12 text-center">
              <h5 className="street-notes-label">Preflop Notes:</h5>
              <p className="street-notes">{this.state.preflop_notes}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <h5 className="street-notes-label">Flop Notes:</h5>
              <p className="street-notes">{this.state.flop_notes}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <h5 className="street-notes-label">Turn Notes:</h5>
              <p className="street-notes">{this.state.turn_notes}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <h5 className="street-notes-label">River Notes:</h5>
              <p className="street-notes">{this.state.river_notes}</p>
            </div>
          </div>
      </Container>
    )
  }
}

export default Notes;
