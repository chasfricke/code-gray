import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
// import StateSelect from './StateSelect';
import GenreSelect from './inputs/GenreSelect';

function ResultsTable() {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [stateSelect, setStateSelect] = useState('');
  const [genreSelect, setGenreSelect] = useState('');

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
        restaurant.state.toLowerCase().includes(stateSelect.toLowerCase()) &&
        //Genre Select
        restaurant.genre.toLowerCase().includes(genreSelect.toLowerCase())
      )
    }))
  }, [search, stateSelect, genreSelect, restaurants])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

    return (
      <>
        <TextField
          label="Search"
          variant="outlined"
          onChange={e => setSearch(e.target.value)}
        />
        <FormControl>
          <InputLabel>Genre</InputLabel>
          <Select
            onChange={e => setGenreSelect(e.target.value)}
          >
            <MenuItem value=""><em>All</em></MenuItem>
            <MenuItem value="Steak">Steak</MenuItem>
            <MenuItem value="Cafe">Cafe</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>State</InputLabel>
          <Select
            onChange={e => setStateSelect(e.target.value)}
          >
            <MenuItem value=""><em>All</em></MenuItem>
            <MenuItem value="TX">Texas</MenuItem>
            <MenuItem value="NY">New York</MenuItem>
            <MenuItem value="FL">Florida</MenuItem>
          </Select>
        </FormControl>
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