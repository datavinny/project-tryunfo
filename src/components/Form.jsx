import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3 } = this.props;
    const { cardImage, cardRare, cardTrunfo, hasTrunfo } = this.props;
    const { isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    return (
      <form action="" method="GET">
        <label htmlFor="cardName">
          <input
            type="text"
            data-testid="name-input"
            id="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <textarea
          data-testid="description-input"
          id="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
        />

        <label htmlFor="cardAttr1">
          <input
            type="number"
            min="0"
            max="90"
            data-testid="attr1-input"
            id="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr2">
          <input
            type="number"
            min="0"
            max="90"
            data-testid="attr2-input"
            id="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr3">
          <input
            type="number"
            min="0"
            max="90"
            data-testid="attr3-input"
            id="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardImage">
          <input
            type="text"
            data-testid="image-input"
            id="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardRare">
          <select
            data-testid="rare-input"
            id="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        {hasTrunfo
          ? <p>Você já tem um Super Trunfo em seu baralho</p>
          : (
            <label htmlFor="trunfo">
              <input
                type="checkbox"
                id="cardTrunfo"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>)}

        <button
          type="button"
          id="save"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
