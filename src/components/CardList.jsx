import React, { useContext } from 'react'
import { ApiContext } from '../hooks/ApiContext'
import Card from './Card'

import { Link } from 'react-router-dom'

function CardList() {
  const { data, isLoading } = useContext(ApiContext);

  return (
    <div className="containerList">
      {isLoading ? (
        <div>Cargando...</div>
      ) : data?.results?.length > 0 ? (
        data.results.map((datos) => (
          <div key={datos.id} className="card">
                <Card datos={datos} />
                
          </div>
  ))
      ) : (
    <h2>No characters found.</h2> // Display a message if no results
  )
}
    </div >
  );
}

export default CardList