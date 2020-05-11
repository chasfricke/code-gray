import React from 'react';
import { MenuItem, FormControl, InputLabel } from '@material-ui/core/';
import MuiSelect from '@material-ui/core/Select';
import styled from 'styled-components'

const StyledFormControl = styled(FormControl)`
  width: 150px;
`

const Select = (props) => {
  return (
    <StyledFormControl>
      <InputLabel>{props.label}</InputLabel>
      <MuiSelect
        value={props.value}
        onChange={props.onChange}
      >
        {props.showAllOption && <MenuItem value="ALL"><em>ALL</em></MenuItem>}
        {props.children}
      </MuiSelect>

    </StyledFormControl>

  );
}


export default Select;