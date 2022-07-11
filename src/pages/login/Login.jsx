import React from 'react';
import mealsvg from "../../assets/meal.svg";
import "./login.module.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [user, setuser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setuser({
      ...user,
      [e.target.id] : e.target.value
    }
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(user));
    setuser({ username: "", password: "" });
    navigate("/home");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <img src={mealsvg} alt="meal" width={300} />
      </div>
      <section className='inputSection'>
        <label htmlFor="username">Username</label>
        <input type="text" id='username' required placeholder='Enter your username' value={user.username} onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id='password' required placeholder='Enter your password' value={user.password} onChange={handleChange} />
      </section>
      <button>submit</button>
    </form>
  )
}

export default Login