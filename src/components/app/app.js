import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.css';
import { HomePage, CartPage } from '../pages';
import ShopHeader from "../shop-header";


const App = () => {
  return (
    <main role="main" className="container" >
      <ShopHeader />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  )
};

export default App;