import React from 'react';
import styled from 'styled-components';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const StyledTD = styled.td`
  width: 325px;
  padding: 16px 0 16px 0;
`

const NameText = styled.h3`
  font-size: 26px;
  font-weight: bold;
  margin: 0 0 3px 0;
  font-style: italic;
  color: rgba(0,0,0,0.82);
`

const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgba(0,0,0,0.87);
  p, a {
    margin: 5px 0 5px 6px;
  }
`

const StyledUL = styled.ul`
  list-style: none;
  color: rgba(0,0,0,0.87);
  padding-inline-start: 0;
  li {
    margin: 2px 0;
  }
`

const ResultsTable = ({ currentPosts }) => {
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

  return (
    <table>
      <tbody>
        {currentPosts.map(item => (
          <tr key={item.id}>
            <StyledTD>
              <NameText>{item.name}</NameText>
              <IconRow><CallIcon fontSize="small" /><a href="tel:{item.telephone}">{item.telephone}</a></IconRow>
              <IconRow><LocationOnIcon fontSize="small" /><p>{item.city}, {item.state}</p></IconRow>
            </StyledTD>
            <td>{getGenreList(item.genre)}</td>
          </tr>
        ))}
      </tbody >
    </table >
  );
}

export default ResultsTable;