import React from "react";

import "./App.scss";
import Sidebar from "./modules/Sidebar/Sidebar";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Header } from "./modules/Header/Header";
import { ActivityContainer } from "./modules/ActivityContainer/ActivityContainer";
import { useState } from "react";
import { AuthContainer } from "./modules/LoginPage/AuthContainer";
import Modal from "./modules/_common/Modal";
import { Actions } from "./modules/Actions/Actions";
import { DashBoard } from "./modules/DashBoard/DashBoard";
import { Blog } from "./modules/Blog/Blog";

function App() {
  const [authStatus, setAuthStatus] = useState(true);

  return (
    <div className="App">
      <Router>
        <Sidebar />
        {/* {authStatus &&  <Sidebar />} можно по пробывать так когда будет норм логин работать
        {authStatus &&  <Header />} */}
        <Header />
        <Switch>
          <Route path="/">
            <Sidebar />
            <Header />
            <ActivityContainer />
            <Modal content={<AuthContainer />} toShow={true}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
