import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/header/header';
import Jornada from './components/jornadas/jornada';
import NuevaJornada from './components/jornadas/nuevaJornada';
import Investigador from './components/investigadores/investigador';

import './App.css';

const General = () => {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Header />
        <Switch>
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
        <Jornada id="5f7e009883c09f46d430843e"/>
      </BrowserRouter>
    </div>
  );
}

export default General;
