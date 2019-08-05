import React  from 'react';
import './CardModalRow.scss';
import PropTypes from 'prop-types';

const CardModalRow = (props) => {
  return (
    <div className="col-2">
      <img
        className="my-modal-card"
        data-test="modal-card-image"
        src={`../img/${props.src}`}
        onClick={props.setCard}
        alt="card-img"
      />
    </div>
  );
}

CardModalRow.propTypes = {
  setCard: PropTypes.func,
  src: PropTypes.string
}

export default CardModalRow;
