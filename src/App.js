import React from 'react';
import style from './card.module.css';
import Card from './components/Card';
import Form from './components/Form';
import Instructions from './components/Instructions';
import SavedCard from './components/SavedCard';

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
    cardTrunfo: false,
    savedCards: [],
    isSaveButtonDisabled: true,
    hasTrunfo: false,
  };

  onInputChange = ({ target }) => {
    const { name, value, checked } = target;
    const Value = name === 'cardTrunfo' ? checked : value;
    this.setState({ [name]: Value }, () => this.checkSaveButton());
  };

  resetState = () => {
    const { savedCards } = this.state;
    this.setState(this.initialState, () => {
      this.setState({ savedCards });
    });
  };

  checkTrunfo = () => {
    const { savedCards } = this.state;
    this.setState({ hasTrunfo: false });
    savedCards.forEach((card) => {
      if (card.cardTrunfo === true) {
        this.setState({ hasTrunfo: true });
      }
    });
  };

  onDelete = ({ target }) => {
    const { name } = target;
    let { savedCards } = this.state;
    savedCards = savedCards.filter((card) => card.cardName !== name);
    this.setState({ savedCards }, () => this.checkTrunfo());
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
      isSaveButtonDisabled, hasTrunfo, savedCards } = this.state;

    return (
      <div className={ style.box }>
        <div className={ style.standard }>
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
            createButton={ false }
            onDelete={ this.onDelete }
          />
          <Instructions />
        </div>
        <div className={ style.savedcontainer }>
          {
            savedCards.map((card) => (<SavedCard
              key={ card.cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
              createButton
              onDelete={ this.onDelete }
            />))
          }
        </div>
      </div>
    );
  }
}

export default App;
