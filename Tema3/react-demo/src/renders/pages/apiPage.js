import React, { useState, useEffect } from 'react';
import ReactStars from "react-rating-stars-component";
import axios from 'axios';
import './apiPage.css';

function APIExtra() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-tenda-7058f-default-rtdb.europe-west1.firebasedatabase.app/products.json');
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
        <div id='productContent'>
          {data.map((objeto, key) => (
            <div className="product" key={key}>
                <div>
                  <img src={objeto.image} className="App-logo" alt="logo" /> 
                </div>
                <div className="caracteristics">
                  <div>
                    <b>Product: </b>{objeto.name}
                  </div>
                  <div>
                  <b>Price: </b>{objeto.price} €
                  </div>
                  <div>
                  <b>Rating</b>{starValor(objeto.stars)}
                  </div>
                </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

function starValor(numStars) {
  numStars = (numStars / 2);

  return (
    <ReactStars
      count={5}
      size={24}
      value={numStars}
      activeColor="#ffd700"
      edit={false} // Desectiva l'opcio d'editar la valoracio
      isHalf={true} // Permet valoracions amb mitja estrella, he activat aquesta opcio perque el raiting va de 0 a 10 i m'ha semblat mes correcte
    />  
  )
}


export default APIExtra;
