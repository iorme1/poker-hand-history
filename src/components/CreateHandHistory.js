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
    villains: 1,
    modal: false
  }

  setLabel(event) {
    this.setState({ label: event.target.value })
  }

  setVillains(event) {
    this.setState({ villains: parseInt(event.target.value) })
  }

  toggle() {
    this.setState({ modal: !this.state.modal })
  }

  render() {
    let { villains } = this.state;
    let villainPlaceholders = Array(villains).fill("active");

    return (
      <div className="container-fluid">
        <Modal isOpen={this.state.modal} toggle={this.toggle.bind(this)}>
          <ModalBody>
            <Form className="form" onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="col-12">
                  <h4 className="form-label text-center">Hand Label</h4>
                </div>
              </div>
              <Input
                className="hand-label-input"
                placeholder="Hand label..."
                type="text"
                name="hand-label"
                onChange={this.setLabel.bind(this)}
              />
              <h4 className="form-label text-center mt-2">
                # of villains involved
              </h4>
              <Input
                name="villain-count"
                type="select"
                onChange={this.setVillains.bind(this)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </Input>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle.bind(this)}>Save</Button>
          </ModalFooter>
        </Modal>
        <div className="row mt-2">
          <div className="col-12 text-center">
            <p
              onClick={this.toggle.bind(this)}
              className="edit-link"
            >
               Edit Title / Villain Count
            </p>
          </div>
          <div className="col-12 text-center">
            <h5 className="hand-title">
              "{this.state.label}"
            </h5>
          </div>
        </div>

        <div className="row no-gutters">
          <div className="col-3 text-center">
            <Hero
             handLabel={this.state.label}
            />
          </div>
          <div className="col-6">
            <Board
             handLabel={this.state.label}
            />
            <Notes
             handLabel={this.state.label}
            />
          </div>
          <div className="col-3 text-center">
            <h4 className="player-title">
              Villains <span className="villain-count">{villains}</span>
            </h4>
            {villainPlaceholders.map((vil, i) => {
              return (
                <Villain
                  handLabel={this.state.label}
                  key={`villain${i}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CreateHandHistory;
