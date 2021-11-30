import React from 'react';
import Header from '../componets/Header';
import './Quotes.css';

function Quotes() {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>
          `Pure mathematics is, in its way, the poetry of logical ideas.
          —
          <br />
          <span>Albert Einstein, German theoretical physicist</span>
          `
        </h1>
      </div>

    </div>
  );
}

export default Quotes;
