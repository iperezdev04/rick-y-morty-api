import React, { useContext } from 'react'
import { ApiContext } from '../hooks/ApiContext'
import Card from './Card'

function CardList() {
  const { data, isLoading } = useContext(ApiContext);

  return (
    <div className="containerList">
      {isLoading ? (
        <div>Loading...</div>
      ) : data?.results?.length > 0 ? (
        data.results.map(({ id, name, image, status, species }) => (
          <div key={id} className="card">
            <Card name={name} image={image} status={status} species={species} />
          </div>
        ))
      ) : (
        <h2>No characters found.</h2> // Display a message if no results
      )}
    </div>
  );
}

export default CardList