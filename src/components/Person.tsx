import React from 'react';

class Person extends React.Component {
    constructor ( props ) {
        super( props );
        this.state = {
            firstName: "John",
            lastName: "Smith",
            age: 45
        }
    }
    render () {
        return (
            <h2>{this.state.firstName} {this.state.lastName}</h2>
            <p>They are {this.state.age} years old.</p>
        );
    }
}