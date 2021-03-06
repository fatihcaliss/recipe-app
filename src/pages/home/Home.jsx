import React, { useState,useEffect } from 'react'
import RecipeCard from "./RecipeCard";
import axios from 'axios';
import "./home.css";
const API_ID =process.env.REACT_APP_API_ID;
const API_KEY =process.env.REACT_APP_API_KEY;

const Home = () => {
    const [meal, setMeal] = useState('breakfast');
    const [query, setQuery] = useState('chicken');
    const [recipes, setRecipes] = useState([]);
    const [load, setload] = useState(true);
    const [notFound, setNotFound] = useState(false);
    console.log(API_KEY);
    console.log(API_ID);
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}&mealType=${meal}`

    const handleSubmit = (e) => {
        e.preventDefault();
        setload(true);
        getData();
        setQuery("");
    }

    const getData = async () => {
        try {
            const { data } = await axios.get(url)
            setRecipes(data.hits);
            setload(false);
            data.hits.length === 0 ? setNotFound(true) : setNotFound(false);
        } catch (error) {
            console.log("error");
        }
    }
    useEffect(() => {
        setload(false);
    }, [])

    return (
        <>
            <form className='search' onSubmit={handleSubmit}>
                <input type="text" required placeholder='type for recipe' value={query} id="query" onChange={(e) => setQuery(e.target.value)} />
                <select name="mealtype" id="meal" onChange={(e) => setMeal(e.target.value)}>
                    <option value="breakfast">Breakfast</option>
                    <option value="dinner">Dinner</option>
                    <option value="lunch">Lunch</option>
                    <option value="snack">Snack</option>
                    <option value="teatime">Teatime</option>
                </select>
                <button>Search</button>
            </form>
            <div className='items'>
                {load ? <h1>Loading..</h1> : notFound ? <h1>Recipe Not Found..</h1> :
                recipes.map((item,i) => (<RecipeCard key={i} recipe={item.recipe}/>))}
            </div>
            
        </>
    )
}

export default Home