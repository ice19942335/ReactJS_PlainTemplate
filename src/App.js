import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app/styles/style.css';

import Layout from './app/layouts/Layout.js';
import Main from './app/pages/Main.js';
import PageNotFound from './app/pages/PageNotFound.js';


class App extends React.Component {
    render() {
        return (
        <div>
            <Router history={browserHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={Main} />

                    <Route path="*" component={PageNotFound}/>
                </Route>
            </Router>
        </div>
        )
    }
}


ReactDom.render(<App/>, document.getElementById('root'));