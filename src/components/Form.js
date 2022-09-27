import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input id="name" name="name" type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            name="description"
            id="description"
            data-testid="description-input"
            cols="30"
            rows="10"
          />
        </label>
        Atributo 1
        <label htmlFor="atr1">
          <input name="atr1" id="atr1" data-testid="attr1-input" type="number" />
        </label>
        Atributo 2
        <label htmlFor="atr2">
          <input name="atr2" id="atr2" data-testid="attr2-input" type="number" />
        </label>
        Atributo 3
        <label htmlFor="atr3">
          <input name="atr3" id="atr3" data-testid="attr3-input" type="number" />
        </label>
        <label htmlFor="image">
          Imagem
          <input id="image" name="image" type="text" data-testid="image-input" />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select id="rarity" name="rarity" data-testid="rare-input">
            <option key="normal">normal</option>
            <option key="rare">raro</option>
            <option key="veryrare">muito raro</option>
          </select>
        </label>
        <label htmlFor="trump">
          Super Trunfo
          <input id="trump" name="trump" type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="button" data-testid="save-button" name="saveButton">Salvar</button>
      </form>
    );
  }
}

export default Form;
