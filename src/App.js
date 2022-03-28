import React from 'react';
import { Routes, Route  } from "react-router-dom";
import './App.scss';

import { Main } from "./components/Main/Main";
import { Details } from './components/Details/Details';
import { Favorites } from './components/Favorites/Favorites';
import { Contacts } from './components/Contacts/Contacts';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
