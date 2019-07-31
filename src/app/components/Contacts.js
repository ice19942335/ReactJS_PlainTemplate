import React, {Component} from 'react';

class Contacts extends Component {
    render() {
        console.log(this);
        return (
            <div>
                <h1>Contacts</h1>
                <p>Email: mail.gmail.com</p>
                <p>Tel: +44 872946174</p>
                {(this.props.params.number !== undefined) ? <p>Office number: {this.props.params.number}</p> : null}
            </div>
        );
    }
}

export default Contacts;