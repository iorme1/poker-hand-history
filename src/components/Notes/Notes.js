import React, { Component } from 'react';
import { Input } from 'reactstrap';
import StreetNotes from '../StreetNotes/StreetNotes';
import CommentNotes from '../CommentNotes/CommentNotes';
import './Notes.scss';

class Notes extends Component {
  state = {
    show_street_notes: true,
    show_comment_notes: false
  }

  filterNotes(event) {
    this.resetNotesDisplay();

    switch(event.target.value) {
      case "street":
        this.setState({ show_street_notes: true })
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
      show_comment_notes: false
    });
  }

  render() {
    let display = this.props.hideEditing ? "hide" : "row text-center mt-3";

    return (
      <div>
        <div className={display}>
          <div className="col-12">
            <Input
              className="select-notes-input"
              type="select"
              onChange={this.filterNotes.bind(this)}
            >
              <option value="street">street notes</option>
              <option value="comment">comment notes</option>
            </Input>
          </div>
        </div>
        <StreetNotes
          active={this.state.show_street_notes}
          hideEditing={this.props.hideEditing}
        />
        <CommentNotes
          active={this.state.show_comment_notes}
          hideEditing={this.props.hideEditing}
        />
      </div>
    );
  }
}

export default Notes;
