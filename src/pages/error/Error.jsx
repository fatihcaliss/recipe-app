import React from 'react';
import { Link } from 'react-router-dom';
import "./error.css";

const Error = () => {
    return (
        <div className='error-page'>
            <h1>SOMETHING WENT WRONG!!</h1>
            <h2>Please check your email adress or internet connection..</h2>
            <Link to="/">
                <button>Back to login page.</button>
            </Link>
        </div>
    )
}

export default Error