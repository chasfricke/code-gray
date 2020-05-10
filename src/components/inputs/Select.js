import React from 'react';
import { MenuItem, FormControl, InputLabel } from '@material-ui/core/';
import MuiSelect from '@material-ui/core/Select';
// import { WithStyles } from '@material-ui/core/styles'

// const StyledSelect = withStyles({
//   root: {
//     minWidth: '180px'
//   }
// })

//ToDo: add PropTypes validation and defaultProps

const Select = (props) => {
  return (
    <FormControl>
      <InputLabel>{props.label}</InputLabel>
      <MuiSelect
        value={props.value}
        onChange={props.onChange}
      >
        {props.showAllOption && <MenuItem value=""><em>ALL</em></MenuItem>}
        {props.children}
      </MuiSelect>

    </FormControl>

  );
}


export default Select;