import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Admin from './pages/Admin';
import CadAluno from './pages/CadAluno';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/home" component={Home}/>
                <Route path="/admin" component={Admin}/>
                <Route path="/new_aluno" component={CadAluno}/>
            </Switch>
        </BrowserRouter>
    );
}