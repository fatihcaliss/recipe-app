import React from 'react';
import "./home.css";
import {useNavigate } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/details/' + recipe.label, { state: { recipe } })
    }
        return (
            <article>
                <h2>{recipe.label}</h2>
                <div className='image-div'>
                    <img src={recipe.image} alt={recipe.label} />
                </div>
                <button onClick={handleClick}>Details</button>
            </article>
        )
    }

    export default RecipeCard