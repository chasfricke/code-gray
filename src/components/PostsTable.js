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

const UL = styled.ul`
  list-style: none;
  color: rgba(0,0,0,0.87);
  padding-inline-start: 0;
  margin: -3px 0 0 0;
  li {
    margin: 3px 0;
  }
`

const TD = styled.td`
  width: auto;
  padding: 16px 25px 16px 4px;
  vertical-align: top;
  max-width: 300px;
`

const TH = styled.th`
  text-align: left;
  font-size: 16px;
  font-weight: medium;
  color: white;
  background-color: #dadada;
  padding: 4px;
`

const Container = styled.div`
  margin-top: 24px;
`

const ResultsTable = ({ currentPosts }) => {
  const getGenreList = (genreStr) => {
    const genreArr = genreStr.split(',')
    return (
      <UL>
        {(genreArr.sort()).map(genre => (
          <li key={genre}>{genre}</li>
        ))}
      </UL>
    )
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <TH>General Info</TH>
            <TH>Genre</TH>
            <TH>Attire</TH>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map(item => (
            <tr key={item.id}>
              <TD>
                <NameText>{item.name}</NameText>
                <IconRow><CallIcon fontSize="small" /><a href="tel:{item.telephone}">{item.telephone}</a></IconRow>
                <IconRow><LocationOnIcon fontSize="small" /><p>{item.city}, {item.state}</p></IconRow>
              </TD>
              <TD>{getGenreList(item.genre)}</TD>
              <TD>{item.attire.charAt(0).toUpperCase() + item.attire.slice(1)}</TD>
            </tr>
          ))}
        </tbody >
      </table >
    </Container>
  );
}

export default ResultsTable;