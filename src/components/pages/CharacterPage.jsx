import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';


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

    function returnToHome(){
        navigate('/')
        // navigate(-1)
    }

    return (
        <div>
            <h1>Character Page</h1>
            <p>ID: {id}</p>
            <p>{character.name}</p>
           <img src={character.image} alt={character.name} />

           <button onClick={returnToHome} >Return</button>
        </div>
    );
};
