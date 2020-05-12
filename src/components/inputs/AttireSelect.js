import React from 'react';
import { MenuItem } from '@material-ui/core/';
import Select from './Select';

const AttireSelect = (props) => {

  const getAttire = arr => {
    let attires = []
    arr.forEach(x => {
      x.attire.split(',').forEach(y => {
        y = y.charAt(0).toUpperCase() + y.slice(1)
        if (!attires.includes(y)) {
          attires.push(y)
        }
      })
    })
    return attires.sort();
  }

  return (
    <Select
      value={props.value}
      onChange={props.onChange}
      label="Attire"
      showAllOption
    >
      {getAttire(props.data).map((x, index) => {
        return <MenuItem key={index} value={x}>{x}</MenuItem>
      })}
    </Select>
  );
}


export default AttireSelect;