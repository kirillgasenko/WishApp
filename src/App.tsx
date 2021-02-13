import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar/>
      </div>
    </BrowserRouter>
  );
}

export default App;
