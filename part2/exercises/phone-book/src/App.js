import React from 'react';


const Person = ({person}) => {
    return(
        <div>{person.name} {person.number}</div>
    )
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                { name: 'Arto Hellas', number: '123-123' }
            ],
            newName: '',
            newNumber: ''
        }
    }

    nameEquals = (person) => {
      return person.name === this.state.newName;
    };

    addNewPerson = (event) => {
        event.preventDefault();

        const personsContainsPersonWithName = this.state.persons.some(this.nameEquals);

        if(this.state.newName !== '' && !personsContainsPersonWithName && this.state.newNumber !== '') {
            const newPerson = {
                name: this.state.newName,
                number: this.state.newNumber
            };
            const persons = this.state.persons.concat(newPerson);

            this.setState({
                persons,
                newName: '',
                newNumber: ''
            })
        }
    };

    handleNameChange = (event) => {
        this.setState({
            newName: event.target.value
        });
    };

    handleNumberChange = (event) => {
        this.setState({
            newNumber: event.target.value
        });
    };

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <form onSubmit={this.addNewPerson}>
                    <div>
                        Nimi:
                        <input value={this.state.newName}
                        onChange={this.handleNameChange}/>
                    </div>
                    <div>
                        Numbero:
                        <input value={this.state.newNumber}
                        onChange={this.handleNumberChange}/>
                    </div>
                    <div>
                        <button type="submit">Lisää</button>
                    </div>
                </form>


                <h2>Numerot</h2>

                {this.state.persons.map(person => <Person key={person.name} person={person} />)}

            </div>
        )
    }
}

export default App