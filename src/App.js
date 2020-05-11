import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { TextField, Button } from '@material-ui/core/';
import NavBar from './components/NavBar';
import ResultsTable from './components/ResultsTable'
import GenreSelect from './components/inputs/GenreSelect'
import StateSelect from './components/inputs/StateSelect'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
`

const FilterContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
background: #dadada;
width: 100%;
max-width: 800px;
padding: 16px;
margin: 6px 0 16px 0;
border-radius: 4px;
`

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [stateSelect, setStateSelect] = useState('');
  const [genreSelect, setGenreSelect] = useState('');

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
        setPosts(sortFunction(result))
        setFilteredPosts(result)
        setIsLoaded(true)
      },
        (error) => {
          setIsLoaded(false)
          setError(error)
          console.log(error)
        }
      )
  }, [])

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

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      filteredSearch()
    }
  }

  const filteredSearch = () => {
    setFilteredPosts(posts.filter(post => {
      return (
        //Text Input
        (post.name.toLowerCase().includes(search.toLowerCase()) ||
          post.city.toLowerCase().includes(search.toLowerCase()) ||
          post.genre.toLowerCase().includes(search.toLowerCase())) &&
        //State Select 
        post.state.toLowerCase().includes(stateSelect.toLowerCase()) &&
        //Genre Select
        post.genre.toLowerCase().includes(genreSelect.toLowerCase())
      )
    }))
  }

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Content>
        <FilterContainer>
          <TextField
            label="Search"
            variant="outlined"
            onChange={e => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <GenreSelect value={genreSelect} onChange={e => setGenreSelect(e.target.value)} data={posts} />
          <StateSelect value={stateSelect} onChange={e => setStateSelect(e.target.value)} />
          <Button onClick={() => { filteredSearch() }} variant="contained" size="large">Search</Button>
        </FilterContainer>
        {isLoaded ? <ResultsTable data={filteredPosts} /> : <div>Searching for results...</div>}
        {error && <div>{error}</div>}
      </Content>
    </>
  );
}

export default App;
