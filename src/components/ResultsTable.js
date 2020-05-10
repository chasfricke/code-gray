import React from 'react';

const ResultsTable = (props) => {
  return (
    <>
      <table>
        <tbody>
          {props.data.map(item => (
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
    </>
  );
}


export default ResultsTable;