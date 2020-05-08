import React, { useState, useEffect } from 'react';
// import StateSelect from './StateSelect';

function ResultsTable() {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [stateSelect, setStateSelect] = useState('');

  const sortFunction = (arr) => {
    arr.sort((a, b) => {
      if (a.name[0] > b.name[0]) {
        return 1
      } else if (a.name[0] < b.name[0]) {
        return -1
      } else return 0
    })
    return arr
  }

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
        setRestaurants(sortFunction(result))
        setIsLoaded(true)
      },
        (error) => {
          setIsLoaded(false)
          setError(error)
          console.log(error)
        }
      )
  }, [])

  useEffect(() => {
    setFilteredRestaurants(restaurants.filter(restaurant => {
      return (
        //Text Input
        (restaurant.name.toLowerCase().includes(search.toLowerCase()) ||
          restaurant.city.toLowerCase().includes(search.toLowerCase()) ||
          restaurant.genre.toLowerCase().includes(search.toLowerCase())) &&
        //State Select 
        restaurant.state.toLowerCase().includes(stateSelect.toLowerCase()))
    }))
  }, [search, stateSelect, restaurants])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

    return (
      <>
        <input type="text" placeholder="search" onChange={e => setSearch(e.target.value)} />
        <select onChange={e => setStateSelect(e.target.value)}>
          <option value="">SELECT ALL</option>
          <option value="TX">Texas</option>
          <option value="NY">New York</option>
          <option value="FL">Florida</option>
        </select>
        {filteredRestaurants.length > 0 ? (
          <table>
            <tbody>
              {filteredRestaurants.map(item => (
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
        )
          : (
            <>
              <div>No matches found were found.</div>
              <div>Please refine your search.</div>
            </>
          )
        }
      </>
    );
  }
}

export default ResultsTable;