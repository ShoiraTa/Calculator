import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import './componets/Header.css';

ReactDOM.render(
  <Router>

    <header className="header">
      <Link className="logo" to="/Calculator/">Math Magicians</Link>
      <nav>
        <Link className="link" to="/Calculator/">Home</Link>
        <Link className="link" to="/Calculator/app">Calculator</Link>
        <Link className="link" to="/Calculator/quotes">Quote</Link>
      </nav>
    </header>

    <Routes>
      <Route path="Calculator/" element={<Home />} />
      <Route path="Calculator/app" element={<App />} />
      <Route path="Calculator/quotes" element={<Quotes />} />
    </Routes>
  </Router>,
  document.getElementById('root'),
);
