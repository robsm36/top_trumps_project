/* eslint-disable react/jsx-max-depth */
import PropTypes from 'prop-types';
import React from 'react';
import style from '../form.module.css';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    let Trunfo;

    if (hasTrunfo === true) {
      Trunfo = <p>Você já tem um Super Trunfo em seu baralho</p>;
    } else if (hasTrunfo === false) {
      Trunfo = (
        <label
          htmlFor="trump"
          className={ style.label }
        >
          Super Trunfo
          <input
            checked={ cardTrunfo }
            id="trump"
            name="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
            onChange={ onInputChange }
          />
        </label>);
    }

    return (
      <div className={ style.form }>
        <form className={ style.form }>
          <label
            htmlFor="name"
            className={ style.label }
          >
            Nome
            <input
              className={ style.field }
              value={ cardName }
              id="name"
              name="cardName"
              type="text"
              data-testid="name-input"
              onChange={ onInputChange }
            />
          </label>
          {/* <br /> */}
          <label
            htmlFor="description"
            className={ style.label }
          >
            Descrição
            <br />
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
          {/* <br /> */}
          <label
            htmlFor="image"
            className={ style.label }
          >
            Imagem
            <br />
            <input
              className={ style.field }
              value={ cardImage }
              id="image"
              name="cardImage"
              type="text"
              data-testid="image-input"
              onChange={ onInputChange }
            />
          </label>
          <br />
          <div className={ style.mainbox }>
            <div className={ style.atrbox }>
              <label
                htmlFor="atr1"
                className={ style.label }
              >
                Atr. 1
                <input
                  pattern="[0-9]"
                  min={ 0 }
                  max={ 90 }
                  value={ cardAttr1 }
                  name="cardAttr1"
                  id="atr1"
                  data-testid="attr1-input"
                  type="number"
                  onChange={ onInputChange }
                />
              </label>
              <label
                htmlFor="atr2"
                className={ style.label }
              >
                Atr. 2
                <input
                  min={ 0 }
                  max={ 90 }
                  value={ cardAttr2 }
                  name="cardAttr2"
                  id="atr2"
                  data-testid="attr2-input"
                  type="number"
                  onChange={ onInputChange }
                />
              </label>
              <label
                htmlFor="atr3"
                className={ style.label }
              >
                Atr. 3
                <input
                  min={ 0 }
                  max={ 90 }
                  value={ cardAttr3 }
                  name="cardAttr3"
                  id="atr3"
                  data-testid="attr3-input"
                  type="number"
                  onChange={ onInputChange }
                />
              </label>
            </div>

            <div className={ style.rarebox }>
              <label
                htmlFor="rarity"
                className={ style.label }
              >
                Raridade
                <br />
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
              {Trunfo}
            </div>
          </div>
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
      </div>
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
