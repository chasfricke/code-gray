import React from 'react';
import MuiTextField from '@material-ui/core/textField';
import styled from 'styled-components'

const StyledTextField = styled(MuiTextField)`
  .MuiFilledInput-root {
    background-color: white;
  }
`

const TextField = (props) => {
  return (
    <StyledTextField
      label={props.label}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
      variant="filled"
      size='small'
    />
  );
}


export default TextField;