import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from './login';
import General from './General';


import './App.css';

const App = () => {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/general" component={General} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
