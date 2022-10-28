import * as React from 'react';
import {BrowserRouter, Routes, Route}from 'react-router-dom';
import Login from '../pages/Auth/Login/Login';
import Register from '../pages/Auth/Signup/Signup';


function PublicRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login/>}/>
                <Route path="signup" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default PublicRoutes;