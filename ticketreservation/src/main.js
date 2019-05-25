import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Result from './result';
import Search from './search';
import UserDetails from './userDetails';
import PaymentDetails from './paymentDetails';

const Main = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Search} />
            <Route path='/Result' component={Result} />
            <Route path='/UserDetails' component={UserDetails} />
            <Route path='/PaymentDetails' component={PaymentDetails} />
        </Switch>
    </Router>
)

export default Main;