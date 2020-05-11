import React from 'react';

const ResultsTable = (props) => {

  const getGenreList = (genreStr) => {
    const genreArr = genreStr.split(',')
    return (
      <ul>
        {(genreArr.sort()).map(genre => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    )
  }

  if (props.searchHelperText) {
    return <p>{props.searchHelperText}</p>
  } else if (props.data.length === 0) {
    return <p>No restaurants {props.state ? `in ${props.state}` : ""} match your search criteria.  Please expand your search and try again.</p>
  } else
    return (
      <>
        <table>
          <tbody>
            {props.data.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.city}, {item.state}</td>
                <td>{item.telephone}</td>
                <td>{getGenreList(item.genre)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
}

export default ResultsTable;