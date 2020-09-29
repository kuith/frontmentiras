import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/header/header';
import Intro from './components/intro';
import Jornada from './components/jornadas/jornada';
import NuevaJornada from './components/jornadas/nuevaJornada';
import Investigador from './components/investigadores/investigador';

import './App.css';

const App = () => {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route exact path="/app" component={this} />
          <Route exact path="/jornada/nuevaJornada" component={NuevaJornada} />
          <Route
            path="/jornada/:jornadaId"
            render={({ match }) => <Jornada id={match.params.jornadaId} />}
          />
          <Route
            path="/investigadores/:investigadorId"
            render={({ match }) => (
              <Investigador id={match.params.investigadorId} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
