import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Quotes from './pages/Quotes';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="Calculator/" element={<Home />} />
      <Route path="Calculator/app" element={<App />} />
      <Route path="Calculator/quotes" element={<Quotes />} />
    </Routes>
  </Router>,
  document.getElementById('root'),
);
