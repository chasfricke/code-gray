import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function ResultsTable() {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://code-challenge.spectrumtoolbox.com/api/restaurants';
    fetch(url,
      {
        method: "GET",
        headers: {
          'Authorization': 'Api-Key q3MNxtfep8Gt',
        },
      })
      .then(res => res.json())
      .then(result => {
        setRestaurants(result)
        setIsLoaded(true)
        console.log(result)
      },
        (error) => {
          setIsLoaded(false)
          setError(error)
          console.log(error)
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <table>
        <tbody>
          {restaurants.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.city}</td>
              <td>{item.state}</td>
              <td>{item.telephone}</td>
              <td>{item.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ResultsTable;