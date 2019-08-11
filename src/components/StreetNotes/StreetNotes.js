import React, { Component } from 'react';
import {
  Input,
  Label,
  Form,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import './StreetNotes.scss';
import PropTypes from 'prop-types';

class StreetNotes extends Component {
  state = {
    preflop_notes: "no notes added...",
    flop_notes: "no notes added...",
    turn_notes: "no notes added...",
    river_notes: "no notes added...",
    modal: false,
  };

  toggleNotesModal(event) {
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
    if (this.props.active) {
      return (
        <div data-test="street-notes-container">
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggleNotesModal.bind(this)}
            className={this.props.className}
            data-test="edit-notes-modal"
          >
            <ModalBody>
              <Form onSubmit={(e) => e.preventDefault()}>
                <Label for="preflop">Preflop Notes</Label>
                <Input
                  data-test="input-set-pfn"
                  onChange={this.setPreflopNotes.bind(this)}
                  type="text"
                  name="preflop"
                />
                <Label for="preflop">Flop Notes</Label>
                <Input
                  data-test="input-set-fn"
                  onChange={this.setFlopNotes.bind(this)}
                  type="text"
                  name="flop"
                />
                <Label for="turn">Turn Notes</Label>
                <Input
                  data-test="input-set-tn"
                  onChange={this.setTurnNotes.bind(this)}
                  type="text"
                  name="turn"
                />
                <Label for="river">River Notes</Label>
                <Input
                  data-test="input-set-rn"
                  onChange={this.setRiverNotes.bind(this)}
                  type="text"
                  name="river"
                />
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggleNotesModal.bind(this)}>Save</Button>
            </ModalFooter>
          </Modal>
          <div className="row mt-2">
            <div className="col-12 text-center">
              <p
                className="edit-link"
                onClick={this.toggleNotesModal.bind(this)}
                data-test="open-toggle-notes-modal"
              >
                Edit Notes
              </p>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-12">
              <p className="notes-label">Preflop</p>
              <p
                className="notes"
                data-test="pf-notes"
              >
                {this.state.preflop_notes}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="notes-label">Flop</p>
              <p
                className="notes"
                data-test="fl-notes"
              >
                {this.state.flop_notes}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="notes-label">
                Turn
              </p>
              <p
                className="notes"
                data-test="tn-notes"
              >
                {this.state.turn_notes}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="notes-label">River</p>
              <p
                className="notes"
                data-test="rv-notes"
              >
                {this.state.river_notes}
              </p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

StreetNotes.propTypes = {
  active: PropTypes.bool
}

export default StreetNotes;
