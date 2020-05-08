import React from 'react';
import PropTypes from 'prop-types';
import { Select, MenuItem } from '@material-ui/core';


export default function GenreSelect() {
  return (
    <Select>
      <MenuItem value="Steak">Steak</MenuItem>
      <MenuItem value="Cafe">Cafe</MenuItem>
    </Select>
  )
}