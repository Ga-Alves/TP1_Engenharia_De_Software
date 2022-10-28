import * as React from 'react';
import {BrowserRouter, Routes, Route}from 'react-router-dom';
import List from '../pages/Dashboard/SubjectGrid/SubjectGrid';
import Dashboard from '../pages/Dashboard/Dashboard';
import Subject from '../pages/Subject';
import Evaluate from '../pages/Evaluate';


function PrivateRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/app" element={<Dashboard/>}>
                    <Route path="home" element={<List/>}/>
                    <Route path='subject/:id' element={<Subject/>}/>
                    <Route path='subject/:id/evaluate' element={<Evaluate/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default PrivateRoutes;