import React, { Component } from 'react';
import './ModalCardImage.scss';
import PropTypes from 'prop-types';

class ModalCardImage extends Component {
  state = {
    selected: false
  }

  toggleSelect() {
    if (this.state.selected) {
      this.setState({ selected: !this.state.selected });
      this.props.removeCard()
    } else {
      this.setState({ selected: !this.state.selected });
      this.props.setCard()
    }
  }

  render() {
    let { selected } = this.state;
    let cardState = selected ? "highlight" : "default";

    return (
        <div
          className={cardState}
          onClick={this.toggleSelect.bind(this)}>
          <img
            className="my-modal-card"
            data-test="modal-card-image"
            src={`../img/${this.props.src}`}
            alt="card-img"
          />
        </div>
    );
  }
}

ModalCardImage.propTypes = {
  setCard: PropTypes.func,
  src: PropTypes.string
}

export default ModalCardImage
