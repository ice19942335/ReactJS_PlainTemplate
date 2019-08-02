import React, {Component} from 'react';

class User extends Component {
    render() {
        return (
            <div className="card border-secondary mb-3">
                <div className="card-header">
                    {this.props.username}
                </div>
                <div className="card-body text-secondary">
                    <p>{this.props.name}</p>
                    <p>{this.props.email}</p>
                    <p>{this.props.phone}</p>
                    <p>{this.props.website}</p>
                </div>
            </div>
        );
    }
}

export default User;