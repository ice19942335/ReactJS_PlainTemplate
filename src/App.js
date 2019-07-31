import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app/styles/style.css';

import Layout from './app/layouts/Layout.js';
import Main from './app/components/Main.js';
import About from './app/components/About.js';
import Contacts from './app/components/Contacts.js';
import PageNotFound from './app/components/PageNotFound.js';


class App extends React.Component {
    render() {
        return (
        <div>
            <Router history={browserHistory}>
                {/*<IndexRoute path="/"/>*/}
                <Route path="/" component={Layout}>
                    <IndexRoute component={Main} />
                    <Route path="about" component={About}/>
                    <Route path="contacts" component={Contacts}/>
                    <Route path="*" component={PageNotFound}/>
                </Route>
            </Router>
        </div>
        )
    }
}


ReactDom.render(<App/>, document.getElementById('root'));