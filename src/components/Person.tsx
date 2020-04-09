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
    /*
    updatePerson = ( event: any ) => {
        event.preventDefault();

        let firstNameString: string,
            lastNameString: string,
            ageNum: number;

        const firstName: HTMLInputElement | null = document.querySelector( '[name="first-name"]' );
        const lastName: HTMLInputElement | null = document.querySelector( '[name="last-name"]' );
        const age: HTMLInputElement | null = document.querySelector( '[name="age"]' );

        if ( firstName === null )
            firstNameString = '';
        else
            firstNameString = firstName.value;

        if ( lastName === null )
            lastNameString = '';
        else
            lastNameString = lastName.value;

        if ( age === null )
            ageNum = 0;
        else
            ageNum = Number( age.value );

        this.setState( {
            firstName: firstNameString,
            lastName: lastNameString,
            age: ageNum
        } );
    }*/
    updatePersonInfo ( event: any ) {
        return (self: any): void => {
            let updatedFirstName = self.state.firstName;
            let updatedLastName = self.state.lastName;
            let updatedAge = self.state.age;
            if ( event.target.name === 'first-name' ) {
                updatedFirstName = event.target.value;
            } else if ( event.target.name === 'last-name' ) {
                updatedLastName = event.target.value;
            } else if ( event.target.name === 'age' ) {
                updatedAge = Number( event.target.value );
            }
            self.setState( {
                firstName: updatedFirstName,
                lastName: updatedLastName,
                age: updatedAge
            } );
        }
        
    }
    render () {
        return (
            <div>
                <h2>{this.state.firstName} {this.state.lastName}</h2>
                <p>They are {this.state.age} years old.</p>
                <form>{/*onSubmit={this.updatePerson}*/}
                    <h3>Update Person</h3>
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" name="first-name" value={this.state.firstName} onChange={(this.updatePersonInfo)(this)} />
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" name="last-name" value={this.state.lastName} onChange={(this.updatePersonInfo)(this)} />
                    <label htmlFor="age">Age:</label>
                    <input type="number" name="age" value={this.state.age} onChange={(this.updatePersonInfo)(this)} />
                </form>
            </div>
        );
    }
}