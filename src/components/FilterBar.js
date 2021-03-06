import React, { useState } from 'react'
import styled from 'styled-components'
import GenreSelect from './inputs/GenreSelect'
import StateSelect from './inputs/StateSelect'
import AttireSelect from './inputs/AttireSelect'
import TextField from './inputs/TextField'
import Button from './inputs/Button'
import Paper from '@material-ui/core/Paper';
import ResultsCount from './ResultsCount';

const FilterContainer = styled(Paper)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: #dadada;
    width: 100%;
    max-width: 900px;
    padding: 16px;
    border-radius: 4px;
    margin-top: 100px;
  }
`

const FilterBar = ({ posts, setFilteredPosts, setCurrentPage, setIsLoaded, indexOfFirstPost, indexOfLastPost, total, isLoaded }) => {
  const [stateSelect, setStateSelect] = useState('ALL');
  const [genreSelect, setGenreSelect] = useState('ALL');
  const [attireSelect, setAttireSelect] = useState('ALL');
  const [searchHelperText, setSearchHelperText] = useState('')
  const [search, setSearch] = useState('');

  //Filter Logic
  const filteredSearch = () => {
    setSearchHelperText('')

    const filterByState = () => {
      setIsLoaded(true)
      let result = posts;
      if (stateSelect !== "ALL") {
        result = posts.filter(post => (
          (post.state.toLowerCase().includes(stateSelect.toLowerCase()))
        ))
      }
      if (result.length > 0) {
        filterByGenre(result)
      } else {
        return (setSearchHelperText(`${stateSelect} has no restaurant listings.`), setFilteredPosts([]))
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
        filterByAttire(result)
      } else {
        return (
          setSearchHelperText(`${stateSelect} has no restaurant listings with the genre "${genreSelect}".`)
          , setFilteredPosts([])
        )
      }
    }

    const filterByAttire = (genreData) => {
      let result = genreData;
      if (attireSelect !== "ALL") {
        result = genreData.filter(post => (
          post.attire.toLowerCase().includes(attireSelect.toLowerCase()) && post.attire.length === attireSelect.length
        ))
      }
      if (result.length > 0) {
        filterBySearchBar(result)
      } else {
        return (
          setSearchHelperText('No matching results. Please broaden your search.')
          , setFilteredPosts([])
        )
      }
    }

    const filterBySearchBar = (genreData) => {
      const result = genreData.filter(post => (
        post.name.toLowerCase().includes(search.toLowerCase()) ||
        post.city.toLowerCase().includes(search.toLowerCase()) ||
        post.genre.toLowerCase().includes(search.toLowerCase())
      ))
      if (result.length === 0) {
        return (setSearchHelperText('No matching results. Please broaden your search.'),
          setFilteredPosts([])
        )
      }
      return setFilteredPosts(result)
    }
    setIsLoaded(false)
    setTimeout(filterByState, 400)
    setCurrentPage(1)
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      filteredSearch()
    }
  }
  return (
    <>
      <FilterContainer>
        <TextField
          label="Search"
          onChange={e => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <StateSelect value={stateSelect} onChange={e => setStateSelect(e.target.value)} data={posts} />
        <GenreSelect value={genreSelect} onChange={e => setGenreSelect(e.target.value)} data={posts} />
        <AttireSelect value={attireSelect} onChange={e => setAttireSelect(e.target.value)} data={posts} />
        <Button onClick={() => { filteredSearch() }}>Search</Button>
      </FilterContainer>
      <p>{isLoaded && (searchHelperText ? searchHelperText : <ResultsCount indexOfFirstPost={indexOfFirstPost} indexOfLastPost={indexOfLastPost} total={total} />)}</p>
    </>
  )
}

export default FilterBar;
