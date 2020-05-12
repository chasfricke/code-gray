import React from 'react';
import styled from 'styled-components';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';

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
  margin: 0;
  li {
    margin: 3px 0;
  }
`

const StyledTD = styled.td`
  width: 300px;
  padding: 16px 0 16px 0;
  vertical-align: top;
`

const StyledTd = styled.td`
    padding:  18px;
    // background-color: blue;
    min-width: 100px;
    vertical-align: top;
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
            <StyledTd>{getGenreList(item.genre)}</StyledTd>
            <StyledTd>{item.attire.charAt(0).toUpperCase() + item.attire.slice(1)}</StyledTd>
          </tr>
        ))}
      </tbody >
    </table >
  );
}

export default ResultsTable;