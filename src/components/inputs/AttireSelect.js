import React from 'react';
import { MenuItem } from '@material-ui/core/';
import Select from './Select';

const AttireSelect = (props) => {

  const capitalize = (currentValue) => {
    return currentValue.charAt(0).toUpperCase() + currentValue.slice(1);
  }

  const getAttire = arr => {
    let attires = []
    arr.forEach(x => {
      if (!attires.includes(capitalize(x.attire))) {
        attires.push(capitalize(x.attire))
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
      {getAttire(props.data).map((y, index) => {
        return <MenuItem key={index} value={y}>{capitalize(y)}</MenuItem>
      })}
    </Select>
  );
}


export default AttireSelect;