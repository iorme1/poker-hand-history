import React, { Component } from 'react';
import {
  Input,
  Label,
  Form,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Container,
  ButtonGroup
} from 'reactstrap';

class CommentNotes extends Component {
  state = {
    comment_notes: "No comment notes added...",
    modal: false
  }

  setCommentNotes(event) {
    this.setState({ comment_notes: event.target.value })
  }

  toggleNotesModal(event) {
    this.setState({ modal: !this.state.modal })
  }

  render() {
    if (this.props.active) {
      return (
        <Container>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggleNotesModal.bind(this)}
            className={this.props.className}
          >
            <ModalBody>
              <Form onSubmit={(e) => e.preventDefault()}>
                <Label for="preflop">Comment Notes</Label>
                <Input
                  onChange={this.setCommentNotes.bind(this)}
                  type="text"
                  name="comment"
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
                onClick={this.toggleNotesModal.bind(this)}>Edit Notes
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p className="notes">{this.state.comment_notes}</p>
            </div>
          </div>
        </Container>
      );
    }
    return null;
  }
}

export default CommentNotes;
