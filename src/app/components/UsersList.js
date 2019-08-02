import React, {Component} from 'react';
import User from './User'
import axios from 'axios';

class UsersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    render() {
        if (!this.state.users){
            return null;
        }

        const users = this.state.users.map(user => {
            return <User key={user.id} {...user}/>
        });

        return (
            <div>
                <h1>Users list</h1>
                {users}
            </div>
        );
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/users').then(response => {
           this.setState({users: response.data});
        });
    }
}

export default UsersList;