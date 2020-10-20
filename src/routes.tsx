import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Inicial from './pages/Inicial';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/inicio" exact component={Inicial}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;