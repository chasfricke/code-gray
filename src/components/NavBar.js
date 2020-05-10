import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <h1>Code Gray</h1>
          <h2>Charter/Spectrum Front-End Code Challenge</h2>
        </Toolbar>
      </AppBar>
    </div >
  )
}

export default NavBar;