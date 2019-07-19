import React from 'react';
import { NavLink } from 'react-router-dom';
import { hasLocalVar, clearLocalStorageOf } from '../utilities';

const Navigation = () => {

  const logout = () => {
    clearLocalStorageOf("token");
  }

  return (
    <nav>
      <ul>
        {hasLocalVar("token") ?
          (
            <>
              <li><NavLink to="/home">home</NavLink></li>
              <li><NavLink onClick={logout} to="/">logout</NavLink></li>
            </>
          ) : (
              <li><NavLink to="/">login</NavLink></li>
          )
        }
      </ul>
    </nav>
  )
}

export default Navigation;