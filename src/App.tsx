import React from "react";

import "./App.scss";
import Sidebar from "./modules/Sidebar/Sidebar";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./modules/Header/Header";
import { ActivityContainer } from "./modules/ActivityContainer/ActivityContainer";
import { useState } from "react";
import { AuthContainer } from "./modules/LoginPage/AuthContainer";

function App() {
  const [authStatus, setAuthStatus] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return authStatus ? (
                <Redirect to="/home" />
              ) : (
                <Redirect to="/auth" />
              );
            }}
          />
          <Route path="/home">
            <div className="App">
              <Sidebar />
              <Header />
              <ActivityContainer />
            </div>
          </Route>
          <Route path="/auth">
            <AuthContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
