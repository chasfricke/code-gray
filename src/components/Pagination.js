import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts }) => {
  const pageNumbers = [];
  for (let i = 1; i <= (Math.ceil(totalPosts / postsPerPage)); i++) {

  }
  return (
    <ul>
      {pageNumbers.map(number => (
        <li key={number}>
          {number}
        </li>
      )
      )}
    </ul>
  )
}
