import React, { Component } from 'react';
import {
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Button
 } from 'reactstrap';

class HandHistory extends Component {
  state = {
    label: "",
    players: null
  }

  handleChangeLabel(event) {
    this.setState({ label: event.target.value })
  }

  handleChangePlayers(event) {
    this.setState({ players: event.target.value })
  }

  render() {
    return (
      <Container>
        <Form>
          <FormGroup>
            <Label for="hand-label"/>
            <Input
              type="text"
              name="hand-label"
              onChange={this.handleChangeLabel.bind(this)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="player-count"/>
            <Input
              type="number"
              name="player-count"
              onChange={this.handleChangePlayers.bind(this)}
            />
          </FormGroup>
          <Button type="submit">Save</Button>
        </Form>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3>{this.state.label}</h3>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default HandHistory;
