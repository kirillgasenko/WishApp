import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Dashboard from './Sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Dashboard/>
      </div>
    </BrowserRouter>
  );
}

export default App;
