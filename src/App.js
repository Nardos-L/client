
import './App.css';
import { Router, Redirect } from '@reach/router';
import React from 'react';
import Main from './views/Main';
import Detail from './views/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="product" />
        <Detail path="product/:id" />
        <Redirect from="/" to="/product" noThrow="true" />
      </Router>
    </div>
  );
}

export default App;
