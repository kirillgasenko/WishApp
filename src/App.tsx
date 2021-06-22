import React from 'react';

import './App.scss';
import Sidebar from './modules/Sidebar/Sidebar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './modules/Header/Header';
import { ActivityContainer } from './modules/ActivityContainer/ActivityContainer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <div className="App">
            <Sidebar/>
            <Header/>
            <ActivityContainer/>
          </div>
        </Route>
        <Route path="auth">
          
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
