import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core/';

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
    <FormControl>
      <InputLabel>Genre</InputLabel>
      <Select
        value={props.value}
        onChange={props.onChange}
      >
        {getGenres(props.data).map((x, index) => {
          return <MenuItem key={index} value={x}>{x}</MenuItem>
        })}
      </Select>
    </FormControl>
  );
}


export default GenreSelect;