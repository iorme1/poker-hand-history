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
    preflop_notes: "",
    flop_notes: "",
    turn_notes: "",
    river_notes: "",
    small_blind: 0,
    big_blind: 0,
    straddle: 0,
    flop_pot_size: 0,
    turn_pot_size: 0,
    river_pot_size: 0,
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
      let {
        small_blind, big_blind, straddle,
        flop_pot_size, turn_pot_size, river_pot_size
      } = this.state;

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
                <div className="row mb-2">
                  <div className="col-4">
                    <Label for="sb-input">Small Blind</Label>
                    <Input
                      name="sb-input"
                      type="number"
                      onChange={(e) => this
                        .setState({ small_blind: parseInt(e.target.value) })
                      }
                    />
                  </div>
                  <div className="col-4">
                    <Label for="bb-input">Big Blind</Label>
                    <Input
                      name="bb-input"
                      type="number"
                      onChange={(e) => this
                        .setState({ big_blind: parseInt(e.target.value) })
                      }
                    />
                  </div>
                  <div className="col-4">
                    <Label for="straddle-input">Straddle</Label>
                    <Input
                      name="straddle-input"
                      type="number"
                      onChange={(e) => this
                        .setState({ straddle: parseInt(e.target.value) })
                      }
                      defaultValue={0}
                    />
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-4">
                    <Label for="fl-pot">Flop Pot Size</Label>
                    <Input
                      name="fl-pot"
                      type="number"
                      onChange={(e) => this
                        .setState({ flop_pot_size: parseInt(e.target.value) })
                      }
                    />
                  </div>
                  <div className="col-4">
                    <Label for="tn-pot">Turn Pot Size</Label>
                    <Input
                      name="tn-pot"
                      type="number"
                      onChange={(e) => this
                        .setState({ turn_pot_size: parseInt(e.target.value) })
                      }
                    />
                  </div>
                  <div className="col-4">
                    <Label for="rv-pot">River Pot Size</Label>
                    <Input
                      name="rv-pot"
                      type="number"
                      onChange={(e) => this
                        .setState({ river_pot_size: parseInt(e.target.value) })
                      }
                    />
                  </div>
                </div>
                <Label for="preflop">Preflop Notes</Label>
                <Input
                  data-test="input-set-pfn"
                  onChange={this.setPreflopNotes.bind(this)}
                  type="text"
                  name="preflop"
                  value={this.state.preflop_notes || ""}
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
              <p className="notes-label">
                {"Preflop "}
                <span className="pot-size">
                  (Pot Size: ${small_blind + big_blind + straddle})
                </span>
              </p>
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
              <p className="notes-label">
                {"Flop "}
                <span className="pot-size">
                  (Pot Size: ${flop_pot_size})
                </span>
              </p>
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
                {"Turn "}
                <span className="pot-size">
                  (Pot Size: ${turn_pot_size})
                </span>
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
              <p className="notes-label">
                {"River "}
                <span className="pot-size">
                  (Pot Size: ${river_pot_size})
                </span>
              </p>
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
