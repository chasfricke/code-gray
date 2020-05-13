import React, { useState } from 'react'
import styled from 'styled-components';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const TD = styled.td`
  width: auto;
  padding: 16px 24px 16px 6px;
  vertical-align: top;
  max-width: 250px;
  min-width: 150px;
  color: rgba(0,0,0,0.87)
`

const NameText = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin: 0 0 4px 0;
  // font-style: italic;
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

const TR = styled.tr`
  min-height: 150px;
`

const HR = styled.hr`
  border: 0;
  height: 0;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
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

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border: solid 1px #dadada;
  border-radius: 4px;
`

const RightColumn = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
min-height: 110px;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const MoreInfoWrapper = styled.div`
  max-width: 500px;
  padding-left: 4px;
`

const TableRow = ({ item }) => {
  const [toggle, setToggle] = useState(false)

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

  const handleClick = () => {
    return setToggle(!toggle)
  }

  return (
    <>
      <TR key={item.id}>
        <TD>
          <NameText>{item.name}</NameText>
          <IconRow><CallIcon fontSize="small" /><a href="tel:{item.telephone}">{item.telephone}</a></IconRow>
          <IconRow><LocationOnIcon fontSize="small" /><p>{item.address1}<br /> {item.city}, {item.state} {item.zip}</p></IconRow>
        </TD>
        <TD>{getGenreList(item.genre)}</TD>
        <TD>
          <RightColumn>
            {item.attire.charAt(0).toUpperCase() + item.attire.slice(1)}
            <ButtonWrapper>
              <Button onClick={handleClick} role="button">
                {toggle ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </Button>
            </ButtonWrapper>
          </RightColumn>
        </TD>
      </TR>
      {toggle &&
        <tr >
          <td colSpan={3}>
            <MoreInfoWrapper>
              <a href={item.website}>{item.website}</a>
              <p><b>Hours:</b></p>
              <p>{item.hours}</p>
              <p><b>Tags:</b></p>
              <p>{item.tags.replace(/,/g, ", ")}</p>
            </MoreInfoWrapper>
          </td>
        </tr>
      }

      <tr>
        <td colSpan={3}>
          <HR />
        </td>
      </tr>

    </>
  )
}

export default TableRow;
