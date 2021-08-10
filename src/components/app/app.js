import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.css';

import { HomePage, CartPage } from '../pages';
import Header from '../header';

const App = () => {
  return (
    <main role="main" className="container">
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  );
};

export default App;
