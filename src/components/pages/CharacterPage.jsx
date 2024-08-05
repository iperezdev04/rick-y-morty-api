import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';


import './CharacterCard.css';
import CardList from "../CardList";
import { Carousel } from "primereact/carousel";
import CarrouselTemplate from "../CarrouselTemplate";
// import { responsiveOptions } from "../../responsiveOptions";
// import { CarrouselTemplate } from "../CarrouselTemplate";

export const CharacterPage = () => {

    const { id } = useParams();
    const [character, setCharacter] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCharacter();
    }, [id]);

    const fetchCharacter = () => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setCharacter(data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    // console.log(character.origin.name)

    function returnToHome() {
        navigate('/')
        // navigate(-1)
    }

    return (
        <div>
            <h1>Character Page</h1>

            <div className="card-container">
                <div className="card-character">

                    <img src={character.image} alt={character.name} className="character-image" />

                    <div className="info-character">
                        {/* NOMBRE */}
                        <p> Name: {character.name}</p>

                        {/* ESPECIES */}
                        <p>Specie: {character.species}</p>

                        {/* STATUS */}
                        <p>Status: {character.status}</p>
                        {/*ORIGEN*/}
                        <p>Origin: {character.origin?.name}</p>
                    </div>


                </div>
            </div>

            <h2>More Characters:</h2>

            <CarrouselTemplate/>
            {/* <CardList/> */}

            <button onClick={returnToHome} >Return</button>
        </div>
    );
};
