import React from 'react';
import MuiButton from '@material-ui/core/button';

const Button = (props) => {
  return (
    <MuiButton
      onClick={props.onClick}
      variant="contained"
      color="secondary"
      size="large">
      {props.children}
    </MuiButton>
  );
}


export default Button;