import React from 'react';
import ReactDom from 'react-dom';

import './app/styles/style.css';

import Component_1 from './app/components/Component';

class App extends React.Component {
    render() {
        return (
        <div>
            <Component_1/>
        </div>
        )
    }
}


ReactDom.render(<App/>, document.getElementById('root'));