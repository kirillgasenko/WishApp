import React from "react";

import "./App.scss";
import Sidebar from "./modules/Sidebar/Sidebar";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./modules/Header/Header";
import { ActivityContainer } from "./modules/ActivityContainer/ActivityContainer";
import { useState } from "react";
import { AuthContainer } from "./modules/LoginPage/AuthContainer";
import Modal from "./modules/_common/Modal";
import { Actions } from "./modules/Actions/Actions";
import { DashBoard } from "./modules/DashBoard/DashBoard";
import { Blog } from "./modules/Blog/Blog";
import { ModalCreateWish } from "./components/Modal/ModalCreateWish";

function App() {
  const [authStatus, setAuthStatus] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Sidebar />
            <Header />
            <ActivityContainer />
            <Modal content={<AuthContainer />} toShow={false} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
