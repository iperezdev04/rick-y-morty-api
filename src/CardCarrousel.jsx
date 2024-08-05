import React from 'react'

export default function CardCarrousel({ datos:{image,name,species} }) {
    // console.log(data,"k")

    return (
        <>
            <img src={image} alt="" className='card-image' />
            <div className="card-body">
                <h3 className='title' >{name}</h3>
                {/* <span className='status' >{status}</span> */}
                <span className='species' >{species}</span>
            </div >
        </>
    )
}
