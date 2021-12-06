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
      <Link className="logo" to="/">Math Magicians</Link>
      <nav>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/app">Calculator</Link>
        <Link className="link" to="/quotes">Quote</Link>
      </nav>
    </header>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<App />} />
      <Route path="/quotes" element={<Quotes />} />
    </Routes>
  </Router>,
  document.getElementById('root'),
);
