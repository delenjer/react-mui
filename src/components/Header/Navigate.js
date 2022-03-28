import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigate = () => (
  <nav className="nav">
    <NavLink className="nav__link" to="/">Home</NavLink>
    <NavLink className="nav__link" to="/favorites">Favorites</NavLink>
    <NavLink className="nav__link" to="/contacts">Contacts</NavLink>
  </nav>
);
