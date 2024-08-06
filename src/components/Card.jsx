import React from 'react'

import './styles/Cards.css'
import { Link } from 'react-router-dom'

function Card({datos }) {
    // console.log(datos)
    return (
        <>

            <Link to={`/character/${datos.id}`} className='card-link'>
                <img src={datos.image} alt="" className='card-image' />
                <div className="card-body">
                    <h3 className='title' >{datos.name}</h3>
                    <span className='species' >{datos.species}</span>
                </div >
                </Link >

            </>
            )
}

            export default Card