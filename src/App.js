import React, { Component , Suspense } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './containers/Users';
//import asyncComponent from './hoc/asyncComponent';

const AsyncPizza = React.lazy( () => import('./containers/Pizza'));

// const AsyncPizza = asyncComponent(() => {
    // return import('./containers/Pizza.js');
// });

class App extends Component {
    render () {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link> |
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path="/" exact component={Users} />
                    <Suspense fallback={<div>Loading...</div>}>
                    <Route path="/pizza" component={AsyncPizza} />
                    </Suspense>
                    
                </div>
            </div>
        );
    }
}