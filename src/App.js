import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.initialState = { ...this.state };
  }

  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    savedCards: [],
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    hasTrunfo: false,
  };

  onInputChange = ({ target }) => {
    const { name, value, checked } = target;
    const Value = name === 'cardTrunfo' ? checked : value;
    this.setState({ [name]: Value }, () => this.checkSaveButton());
  };

  resetState = () => {
    this.setState(this.initialState);
  };

  checkTrunfo = () => {
    const { savedCards } = this.state;
    savedCards.forEach((card) => {
      if (card.cardTrunfo === true) {
        this.setState({ hasTrunfo: true });
      }
    });
  };

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, savedCards } = this.state;
    const cardToSave = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    savedCards.push(cardToSave);
    this.setState({ savedCards }, () => {
      this.resetState();
      this.checkTrunfo();
    });
  };

  checkSaveButton = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare } = this.state;
    const limit = 90;
    const min = -1;
    const sumLimit = 210;
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    if (cardName && cardDescription && cardImage && cardRare
      && cardAttr1 > min && cardAttr1 <= limit
      && cardAttr2 > min && cardAttr2 <= limit
      && cardAttr3 > min && cardAttr3 <= limit
      && sum <= sumLimit) {
      this.setState({ isSaveButtonDisabled: false });
    } else { this.setState({ isSaveButtonDisabled: true }); }
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, hasTrunfo } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
