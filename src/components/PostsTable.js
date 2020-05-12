import React from 'react';
import styled from 'styled-components';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const StyledTD = styled.td`
  width: 275px;
  padding: 16px;
  
`

const Name = styled.h3`
  font-size: 28px;
  font-weight: bold;
  margin: 0;
  font-style: italic;
  color: rgba(0,0,0,0.76);
`

const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgba(0,0,0,0.87);
  p, a {
    margin: 6px 0 6px 6px;
  }
`

const StyledUL = styled.ul`
  list-style: none;
  color: rgba(0,0,0,0.87);
  li {
    margin: 2px 0;
  }
`

const ResultsTable = (props) => {

  const getGenreList = (genreStr) => {
    const genreArr = genreStr.split(',')
    return (
      <StyledUL>
        {(genreArr.sort()).map(genre => (
          <li key={genre}>{genre}</li>
        ))}
      </StyledUL>
    )
  }

  if (props.searchHelperText) {
    return <p>{props.searchHelperText}</p>
  } else
    return (
      <>
        <table>
          <tbody>
            {props.data.map(item => (
              <tr key={item.id}>
                <StyledTD>
                  <Name>{item.name}</Name>
                  <IconRow><CallIcon /><a href="tel:{item.telephone}">{item.telephone}</a></IconRow>
                  <IconRow><LocationOnIcon /><p>{item.city}, {item.state}</p></IconRow>
                </StyledTD>

                <td>{getGenreList(item.genre)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
}

export default ResultsTable;