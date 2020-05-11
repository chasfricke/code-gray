import React from 'react'
import styled, { css } from 'styled-components'

const StyledUl = styled.ul`
  margin-top: 36px;
  display: flex;
  flex-direction: row;
`

const PageButton = styled.li`
  margin-left: -1px;
  width: 36px;
  height: 36px;
  border: solid 1px gray;
  list-style: none;
`

const StyledAnchor = styled.a`
display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #484848;
  text-decoration: none;
  ${props => props.addCSS}
`

const selectedCSS = css`
  background-color: gray;
  color: white;
`

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= (Math.ceil(totalPosts / postsPerPage)); i++) {
    pageNumbers.push(i);
  }
  return (
    <StyledUl>
      {pageNumbers.map(number => (
        <PageButton key={number} >
          <StyledAnchor
            onClick={() => paginate(number)}
            href="!#"
            addCSS={number === currentPage && selectedCSS}
          >
            {number}
          </StyledAnchor>
        </PageButton>
      )
      )}
    </StyledUl >
  )
}

export default Pagination;