import React, { Component } from 'react';

import { Router, Switch, Route } from 'react-router-dom'
import UserComponent from '../components/user/user.container.component'
import EditUserComponent from '../components/user/edit-user/edit-user.comopnent';
import history from './history';

export default class Routes extends Component {
    render(){
        return (
            <Router history={history}> 
                <Switch>
                    <Route path='/' exact component={UserComponent} />
                    <Route path='/user/:id' component={EditUserComponent} />
                </Switch>
            </Router>  
          );
    } 
}
