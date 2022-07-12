import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "../pages/login/Login"
import PrivateRouter from './PrivateRouter';
import Home from "../pages/home/Home";
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Details from "../pages/details/Detail";
import Error from '../pages/error/Error';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />

                <Route path='/home' element={<PrivateRouter />}>
                    <Route path='/home' element={<Home />} />
                </Route>

                <Route path='/about' element={<PrivateRouter />}>
                    <Route path='/about' element={<About />} />
                </Route>
                <Route path="/details" element={<PrivateRouter />}>
                    <Route path="/details/:label" element={<Details />} />
                </Route>

                <Route path='/contact' element={<PrivateRouter />}>
                    <Route path='/contact' element={<Contact />} />
                </Route>

                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter