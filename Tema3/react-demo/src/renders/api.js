import React, { useState, useEffect } from 'react';
import axios from 'axios';

function API() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data from API:', error);
        setData(null);
      }
    };

    fetchData();
  }, []); // El array vacío asegura que useEffect se ejecute solo una vez al montar el componente.

  return (
    <div id="apiContent">
      {data ? (
        <div>
          <h2>Data from API:</h2>
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default API;
