import { Dashboard } from '@mui/icons-material';
import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';


function PrivateRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="home" element={<Dashboard/>}/>
                    <Route path='subject/:id' element={<Subject/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}