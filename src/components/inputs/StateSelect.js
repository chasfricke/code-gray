import React, { useState } from 'react';
import { MenuItem } from '@material-ui/core/';
import Select from './Select'
import styled from 'styled-components'

const StyledMenuItem = styled(MenuItem)`
  && {
    color: gray;
  }
`

const StateSelect = (props) => {
  const [listedStates] = useState([])
  const stateAbbreviations = ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'];

  props.data.forEach(post => {
    if (stateAbbreviations.includes(post.state)) {
      if (!listedStates.includes(post.state)) {
        listedStates.push(post.state)
      }
    }
  })

  return (
    <Select
      value={props.value}
      onChange={props.onChange}
      label="State"
      showAllOption
    >
      {stateAbbreviations.map((x, index) => {
        if (listedStates.includes(x)) {
          return <MenuItem key={x} value={x}>{x}</MenuItem>
        } else {
          return <StyledMenuItem key={x} value={x}>{x}</StyledMenuItem>
        }
      })}
    </Select>
  );
}


export default StateSelect;