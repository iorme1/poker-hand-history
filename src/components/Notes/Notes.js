import React, { Component } from 'react';
import { Input } from 'reactstrap';
//import Action from '../Action/Action';
import StreetNotes from '../StreetNotes/StreetNotes';
import CommentNotes from  '../CommentNotes/CommentNotes';
import './Notes.scss';

class Notes extends Component {
  state = {
    show_street_notes: false,
    show_actions: false,
    show_comment_notes: false
  }

  filterNotes(event) {
    this.resetNotesDisplay();

    switch(event.target.value) {
      case "street":
        this.setState({ show_street_notes: true })
        break;
      case "actions":
        this.setState({ show_actions: true })
        break;
      case "comment":
        this.setState({ show_comment_notes: true })
        break;
      default:
        break;
    };
  }

  resetNotesDisplay() {
    this.setState({
      show_street_notes: false,
      show_actions: false,
      show_comment_notes: false
    });
  }

  render() {
    return (
      <div>
        <div className="row text-center mt-3">
          <div className="col-12">
            <Input
              className="select-notes-input"
              type="select"
              onChange={this.filterNotes.bind(this)}
            >
              <option value="none">hide notes</option>
              <option value="street">street notes</option>
              <option value="actions">actions</option>
              <option value="comment">comment notes</option>
            </Input>
          </div>
        </div>
        <StreetNotes
          active={this.state.show_street_notes}
        />
        <CommentNotes
          active={this.state.show_comment_notes}
        />
      </div>
    );
  }
}

export default Notes;
