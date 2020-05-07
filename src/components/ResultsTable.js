import React, { useState, useEffect } from 'react';

function ResultsTable() {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants",
      {
        method: "GET",
        cache: 'no-cache',
        headers: {
          'API_Key': 'q3MNxtfep8Gt',
        },
      })
      .then(res => res.json())
      .then(result => {
        setRestaurants(result)
        setIsLoading(false)
        console.log(result)
      },
        (error) => {
          setIsLoading(true)
          setError(error)
        }
      )
  }, [])

  return (
    <div>
      {/* {!isLoading && restaurants} */}
    </div>
  );
}

export default ResultsTable;