/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React from 'react';
import style from '../card.module.css';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, createButton, onDelete } = this.props;

    const delButton = (
      <button
        name={ cardName }
        data-testid="delete-button"
        type="button"
        onClick={ onDelete }
        value="Excluir"
      >
        Excluir
      </button>);

    return (
      <div className={ style.cardcontainer }>
        <div className={ style.nft }>
          <div className={ style.main }>
            <img
              className={ style.tokenImage }
              data-testid="image-card"
              src={ cardImage }
              alt=""
            />
            <h2 data-testid="name-card">{cardName}</h2>
            <p className={ style.description } data-testid="description-card">{cardDescription}</p>
            <div className={ style.tokenInfo }>
              {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
              <p className={ style.price } data-testid="attr1-card">{cardAttr1}</p>
              <p className={ style.price } data-testid="attr2-card">{cardAttr2}</p>
              <p className={ style.price } data-testid="attr3-card">{cardAttr3}</p>
              <p className={ style.duration } data-testid="rare-card">{cardRare}</p>
            </div>
            <div />
            {createButton && delButton }
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  createButton: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Card;
