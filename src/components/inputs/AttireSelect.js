import React from 'react';
import { MenuItem } from '@material-ui/core/';
import Select from './Select';

const AttireSelect = (props) => {

  const getAttire = arr => {
    let attires = []
    arr.forEach(x => {
      if (!attires.includes(x.attire)) {
        attires.push(x.attire)
      }
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
        return <MenuItem key={index} value={x}>{x.charAt(0).toUpperCase() + x.slice(1)}</MenuItem>
      })}
    </Select>
  );
}


export default AttireSelect;