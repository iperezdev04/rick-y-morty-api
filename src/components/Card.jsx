import React from 'react'

import './styles/Cards.css'

function Card({ name, image, status,species }) {
    return (
        <>
            <img src={image} alt="" className='card-image' />
            <div className="card-body">
                <h3 className='title' >{name}</h3>
                {/* <span className='status' >{status}</span> */}
                <span className='species' >{species}</span>
            </div>
        </>
    )
}

export default Card