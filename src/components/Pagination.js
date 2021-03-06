import React from 'react'
import styled, { css } from 'styled-components'

const StyledUl = styled.ul`
  margin: 24px 0 24px 0;
  display: flex;
  flex-direction: row;
  padding-inline-start: 0;
`

const PageButton = styled.li`
  margin-left: -1px;
  width: 36px;
  height: 36px;
  border: solid 1px gray;
  border-radius: 4px;
  list-style: none;
  margin: 2px;
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

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, isLoaded }) => {
  const pageNumbers = [];
  for (let i = 1; i <= (Math.ceil(totalPosts / postsPerPage)); i++) {
    pageNumbers.push(i);
  }
  if (!isLoaded) {
    return null
  } else
    return (
      <StyledUl>
        {
          pageNumbers.map(number => (
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
          )
        }
      </StyledUl>
    )
}

export default Pagination;