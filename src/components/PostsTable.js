import React from 'react';
import styled from 'styled-components';
import TableRow from './TableRow.js'

const TH = styled.th`
  text-align: left;
  font-size: 16px;
  font-weight: 300;
  color: rgba(0,0,0,0.77);
  background-color: #dadada;
  padding: 6px;
`

const Table = styled.table`
  margin-top: 8px;
`

const PostsTable = ({ currentPosts }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TH>General Info</TH>
          <TH>Genre</TH>
          <TH>Attire</TH>
        </tr>
      </thead>
      <tbody>
        {currentPosts.map(item => (
          <TableRow item={item} key={item.id} />
        ))}
      </tbody >
    </Table >
  );
}

export default PostsTable;