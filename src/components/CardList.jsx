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
        data.results.map(({ id, name, image, status, species }) => (
          <div key={id} className="card">
            <Link to={`/character/${id}`} className='card-link'>
                <Card name={name} image={image} status={status} species={species} id={id} />
            </Link>
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