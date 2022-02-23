import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form action="" method="GET">
        <label htmlFor="nome">
          <input type="text" data-testid="name-input" id="nome" />
          <textarea data-testid="description-input" />
        </label>
        <label htmlFor="attr1">
          <input type="number" data-testid="attr1-input" id="attr1" />
        </label>
        <label htmlFor="attr2">
          <input type="number" data-testid="attr2-input" id="attr2" />
        </label>
        <label htmlFor="attr3">
          <input type="number" data-testid="attr3-input" id="attr3" />
        </label>
        <img src="" alt="" data-testid="image-input" />
        <label htmlFor="raridade">
          <select name="raridade" id="raridade" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          <input type="checkbox" name="" id="trunfo" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
