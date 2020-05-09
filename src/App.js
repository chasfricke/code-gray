import React from 'react';
import { createGlobalStyle } from 'styled-components'
import NavBar from './components/NavBar';
import ResultsTable from './components/ResultsTable'

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

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <ResultsTable />
    </>
  );
}

export default App;
