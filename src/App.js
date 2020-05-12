import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import Paper from '@material-ui/core/Paper';
import NavBar from './components/NavBar';
import PostsTable from './components/PostsTable'
import GenreSelect from './components/inputs/GenreSelect'
import StateSelect from './components/inputs/StateSelect'
import TextField from './components/inputs/TextField'
import Button from './components/inputs/Button'
import Pagination from './components/Pagination'

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
  justify-content: center;
  padding: 16px;
  background-color: white;
  position: fixed;
  top: 100px;
  width: 100%;
`

const FilterContent = styled(Paper)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: #dadada;
    width: 100%;
    max-width: 800px;
    padding: 16px;
    border-radius: 4px;
  }
`

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [postsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [stateSelect, setStateSelect] = useState('ALL');
  const [genreSelect, setGenreSelect] = useState('ALL');
  const [searchHelperText, setSearchHelperText] = useState('')

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
  }, []);

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
    setSearchHelperText('')

    const filterByState = () => {
      let result = posts;
      if (stateSelect !== "ALL") {
        result = posts.filter(post => (
          (post.state.toLowerCase().includes(stateSelect.toLowerCase()))
        ))
      }
      if (result.length > 0) {
        filterByGenre(result)
      } else {
        return setSearchHelperText(`${stateSelect} has no restaurant listings.`)
      }
    }

    const filterByGenre = (stateData) => {
      let result = stateData;
      if (genreSelect !== "ALL") {
        result = stateData.filter(post => (
          post.genre.toLowerCase().includes(genreSelect.toLowerCase())
        ))
      }
      if (result.length > 0) {
        filterBySearchBar(result)
      } else {
        return setSearchHelperText(`${stateSelect} has no restaurant listings with the genre "${genreSelect}".`)
      }
    }

    const filterBySearchBar = (genreData) => {
      const result = genreData.filter(post => (
        post.name.toLowerCase().includes(search.toLowerCase()) ||
        post.city.toLowerCase().includes(search.toLowerCase()) ||
        post.genre.toLowerCase().includes(search.toLowerCase())
      ))
      if (result.length === 0) {
        return setSearchHelperText(`No restaurant listings ${stateSelect && `in ${stateSelect}`} include "${search}".  Please broaden your search.`)
      }
      return setFilteredPosts(result)
    }
    filterByState()
    setCurrentPage(1)
  }

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Content>
        <FilterContainer>
          <FilterContent>
            <TextField
              label="Search"
              onChange={e => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <GenreSelect value={genreSelect} onChange={e => setGenreSelect(e.target.value)} data={posts} />
            <StateSelect value={stateSelect} onChange={e => setStateSelect(e.target.value)} data={posts} />
            <Button onClick={() => { filteredSearch() }}>Search</Button>
          </FilterContent>
        </FilterContainer>
        {isLoaded ? <PostsTable data={currentPosts} searchHelperText={searchHelperText} /> : <div>Searching for results...</div>}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={filteredPosts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        {error && <div>{error}</div>}
      </Content>
    </>
  );
}

export default App;
