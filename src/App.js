import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import NavBar from './components/NavBar';
import PostsTable from './components/PostsTable'
import Pagination from './components/Pagination'
import FilterBar from './components/FilterBar'

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

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [postsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState([]);


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

        <FilterBar posts={posts} setFilteredPosts={setFilteredPosts} setCurrentPage={setCurrentPage} setIsLoaded={setIsLoaded} />
        {isLoaded ? <PostsTable currentPosts={currentPosts} /> : <div>Searching...</div>}
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
