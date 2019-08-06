import React  from 'react';
import './ModalCardImage.scss';
import PropTypes from 'prop-types';

const ModalCardImage = (props) => {
  return (
      <img
        className="my-modal-card"
        data-test="modal-card-image"
        src={`../img/${props.src}`}
        onClick={props.setCard}
        alt="card-img"
      />
  );
}

ModalCardImage.propTypes = {
  setCard: PropTypes.func,
  src: PropTypes.string
}

export default ModalCardImage
