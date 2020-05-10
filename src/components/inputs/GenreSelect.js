import React from 'react';
import { MenuItem } from '@material-ui/core/';
import Select from './Select';

const GenreSelect = (props) => {

  const getGenres = arr => {
    let genres = []
    arr.forEach(x => {
      x.genre.split(',').forEach(y => {
        if (!genres.includes(y)) {
          genres.push(y)
        }
      })
    })
    return genres.sort();
  }

  return (
    <Select
      value={props.value}
      onChange={props.onChange}
      label="Genre"
      showAllOption
    >
      {getGenres(props.data).map((x, index) => {
        return <MenuItem key={index} value={x}>{x}</MenuItem>
      })}
    </Select>
  );
}


export default GenreSelect;