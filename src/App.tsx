import React from 'react';

import './App.scss';
import Sidebar from './modules/Sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './modules/Header/Header';
import { ActivityContainer } from './modules/ActivityContainer/ActivityContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar/>
        <Header/>
        <ActivityContainer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
