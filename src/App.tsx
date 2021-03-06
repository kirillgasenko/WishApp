import React from 'react';

import './App.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { ActivityContainer } from './Components/ActivityContainer/ActivityContainer';

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
