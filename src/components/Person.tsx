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
                <form onSubmit={}>
                    <h3>Update Person</h3>
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" name="first-name" value={this.state.firstName} />
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" name="last-name" value={this.state.lastName} />
                    <label htmlFor="age">Age:</label>
                    <input type="number" name="age" value={this.state.age} />
                    <input type="submit" value="Apply Changes" />
                </form>
            </div>
        );
    }
}