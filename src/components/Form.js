import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            value={ cardName }
            id="name"
            name="cardName"
            type="text"
            data-testid="name-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            value={ cardDescription }
            name="cardDescription"
            id="description"
            data-testid="description-input"
            cols="30"
            rows="10"
            onChange={ onInputChange }
          />
        </label>
        Atributo 1
        <label htmlFor="atr1">
          <input
            value={ cardAttr1 }
            name="cardAttr1"
            id="atr1"
            data-testid="attr1-input"
            type="number"
            onChange={ onInputChange }
          />
        </label>
        Atributo 2
        <label htmlFor="atr2">
          <input
            value={ cardAttr2 }
            name="cardAttr2"
            id="atr2"
            data-testid="attr2-input"
            type="number"
            onChange={ onInputChange }
          />
        </label>
        Atributo 3
        <label htmlFor="atr3">
          <input
            value={ cardAttr3 }
            name="cardAttr3"
            id="atr3"
            data-testid="attr3-input"
            type="number"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            value={ cardImage }
            id="image"
            name="cardImage"
            type="text"
            data-testid="image-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select
            id="rarity"
            name="cardRare"
            data-testid="rare-input"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option key="normal">normal</option>
            <option key="rare">raro</option>
            <option key="veryrare">muito raro</option>
          </select>
        </label>
        <label htmlFor="trump">
          Super Trunfo
          <input
            checked={ cardTrunfo }
            id="trump"
            name="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
            onChange={ onInputChange }
          />
        </label>
        <button
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
          type="button"
          data-testid="save-button"
          name="saveButton"
        >
          Salvar

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  //   hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
