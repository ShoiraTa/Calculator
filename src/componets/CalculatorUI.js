/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */

import './calculatorUI.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Header from './Header';

const Calculator = () => {
  const [state, setState] = useState({ total: '0', next: null, operation: null });

  const handleClick = (e) => {
    setState(calculate(state, e.target.innerText));
  };

  return (
    <>
      <Header />

      <div className="calculator">
        <h1>Let&apos;s do some Math</h1>
        <div className="calculator-container">
          <div className="result">
            {state.total}
            {state.operation}
            {state.next}
          </div>
          <div className="calculator-oprtaitions">
            <button type="button" onClick={handleClick} className="bg-gray single-cell ">AC</button>
            <button type="button" onClick={handleClick} className="bg-gray single-cell ">%</button>
            <button type="button" onClick={handleClick} className="bg-gray single-cell ">+/-</button>
            <button type="button" onClick={handleClick} className="bg-orange single-cell">&divide;</button>
            <button type="button" onClick={handleClick} className="bg-gray single-cell">7</button>
            <button type="button" onClick={handleClick} className="bg-gray single-cell ">8</button>
            <button type="button" onClick={handleClick} className="bg-gray single-cell ">9</button>
            <button type="button" onClick={handleClick} className="bg-orange single-cell">x</button>
            <button type="button" onClick={handleClick} className="bg-gray single-cell ">4</button>
            <button type="button" onClick={handleClick} className="bg-gray single-cell">5</button>
            <button type="button" onClick={handleClick} className="bg-gray single-cell">6</button>
            <button type="button" onClick={handleClick} className="bg-orange single-cell">-</button>
            <button type="button" onClick={handleClick} className="bg-gray single-cell">1</button>
            <button type="button" onClick={handleClick} className="bg-gray single-cell">2</button>
            <button type="button" onClick={handleClick} className="bg-gray single-cell">3</button>
            <button type="button" onClick={handleClick} className="bg-orange single-cell">+</button>
            <button type="button" onClick={handleClick} className="bg-gray zero single-cell">0</button>
            <button type="button" onClick={handleClick} className="bg-gray single-cell">.</button>
            <button type="button" onClick={handleClick} className="bg-orange single-cell">=</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
