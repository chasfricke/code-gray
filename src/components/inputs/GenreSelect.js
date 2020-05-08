import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function GenreSelect() {
  return (
    <Select>
      <MenuItem value="Steak">Steak</MenuItem>
      <MenuItem value="Cafe">Cafe</MenuItem>
    </Select>
  )
}