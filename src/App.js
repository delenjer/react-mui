import React from 'react';
import { Routes, Route  } from "react-router-dom";
import './App.scss';

import { Main } from "./components/Main/Main";
import { Details } from './components/Details/Details';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
