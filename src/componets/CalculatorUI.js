/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import React from 'react';
import './calculatorUI.css';

class CalculatorUI extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="calculator">
        <div className="calculator-container">
          <div className="result">0</div>
          <div className="calculator-oprtaitions">
            <button type="button" className="bg-gray single-cell ">AC</button>
            <button type="button" className="bg-gray single-cell ">%</button>
            <button type="button" className="bg-gray single-cell ">+/-</button>
            <button type="button" className="bg-orange single-cell">&divide;</button>
            <button type="button" className="bg-gray single-cell">7</button>
            <button type="button" className="bg-gray single-cell ">8</button>
            <button type="button" className="bg-gray single-cell ">9</button>
            <button type="button" className="bg-orange single-cell">&times;</button>
            <button type="button" className="bg-gray single-cell ">4</button>
            <button type="button" className="bg-gray single-cell">5</button>
            <button type="button" className="bg-gray single-cell">6</button>
            <button type="button" className="bg-orange single-cell">-</button>
            <button type="button" className="bg-gray single-cell">1</button>
            <button type="button" className="bg-gray single-cell">2</button>
            <button type="button" className="bg-gray single-cell">3</button>
            <button type="button" className="bg-orange single-cell">+</button>
            <button type="button" className="bg-gray zero single-cell">0</button>
            <button type="button" className="bg-gray single-cell">.</button>
            <button type="button" className="bg-orange single-cell">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorUI;
