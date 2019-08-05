import React  from 'react';
import './CardModalRow.scss';

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

export default CardModalRow;
