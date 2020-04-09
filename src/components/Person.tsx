import React from 'react';

interface IPersonProps {
}

interface IPersonState {
    firstName: string,
    lastName: string,
    age: number
}

export default class Person extends React.Component<IPersonProps, IPersonState> {
    constructor ( props: string | number ) {
        super( props );
        this.state = {
            firstName: "John",
            lastName: "Smith",
            age: 45
        }
    }
    render () {
        return (
            <div>
                <h2>{this.state.firstName} {this.state.lastName}</h2>
                <p>They are {this.state.age} years old.</p>
            </div>
        );
    }
}