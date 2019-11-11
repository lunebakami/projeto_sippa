import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Admin from './pages/Admin';
import CadAluno from './pages/CadAluno';
import CadDisc from './pages/CadDisc';
import MatriculaAluno from './pages/MatriculaAluno';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/home" component={Home}/>
                <Route path="/admin" component={Admin}/>
                <Route path="/new_aluno" component={CadAluno}/>
                <Route path="/new_disc" component={CadDisc}/>
                <Route path="/matricular_aluno" component={MatriculaAluno}/>
            </Switch>
        </BrowserRouter>
    );
}