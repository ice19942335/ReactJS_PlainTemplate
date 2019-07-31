import React from 'react';
import {Link} from 'react-router';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <ul>
                            <li>
                                <Link to="/">Main</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contacts">contacts</Link>
                            </li>
                            <li>
                                <Link to="/notExistingPage">Not found</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-8">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}