/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import React from 'react';
import './calculatorUI.css';
import calculate from '../logic/calculate';

class CalculatorUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((prevState) => calculate(prevState, e.target.innerText));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="calculator-container">
          <div className="result">
            {total}
            {operation}
            {next}
          </div>
          <div className="calculator-oprtaitions">
            <button type="button" onClick={this.handleClick} className="bg-gray single-cell ">AC</button>
            <button type="button" onClick={this.handleClick} className="bg-gray single-cell ">%</button>
            <button type="button" onClick={this.handleClick} className="bg-gray single-cell ">+/-</button>
            <button type="button" onClick={this.handleClick} className="bg-orange single-cell">&divide;</button>
            <button type="button" onClick={this.handleClick} className="bg-gray single-cell">7</button>
            <button type="button" onClick={this.handleClick} className="bg-gray single-cell ">8</button>
            <button type="button" onClick={this.handleClick} className="bg-gray single-cell ">9</button>
            <button type="button" onClick={this.handleClick} className="bg-orange single-cell">x</button>
            <button type="button" onClick={this.handleClick} className="bg-gray single-cell ">4</button>
            <button type="button" onClick={this.handleClick} className="bg-gray single-cell">5</button>
            <button type="button" onClick={this.handleClick} className="bg-gray single-cell">6</button>
            <button type="button" onClick={this.handleClick} className="bg-orange single-cell">-</button>
            <button type="button" onClick={this.handleClick} className="bg-gray single-cell">1</button>
            <button type="button" onClick={this.handleClick} className="bg-gray single-cell">2</button>
            <button type="button" onClick={this.handleClick} className="bg-gray single-cell">3</button>
            <button type="button" onClick={this.handleClick} className="bg-orange single-cell">+</button>
            <button type="button" onClick={this.handleClick} className="bg-gray zero single-cell">0</button>
            <button type="button" onClick={this.handleClick} className="bg-gray single-cell">.</button>
            <button type="button" onClick={this.handleClick} className="bg-orange single-cell">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorUI;
