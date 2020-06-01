import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import DashBoard from './pages/DashBoard';
import Initial from './pages/Initial';
import Register from './pages/Register';
import Group from './pages/Group';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Initial}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Register" component={Register}/>
                <Route path="/dashboard"  component={DashBoard}/>
                <Route path="/group"  component={Group}/>
            </Switch>
        </BrowserRouter>
    );



}