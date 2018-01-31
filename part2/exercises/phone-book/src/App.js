import React from 'react';
import Persons from './components/Persons'
import Input from './components/Input'
import Notification from './components/Notification'
import personService from './services/persons'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            newName: '',
            newNumber: '',
            filter: '',
            success: null
        }
    }

    componentWillMount() {
        personService
            .getAll()
            .then(persons => {
                this.setState({
                    persons
                });

            });
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

            personService
                .create(newPerson)
                .then(newPerson => {
                    const persons = this.state.persons.concat(newPerson);

                    this.setState({
                        persons,
                        newName: '',
                        newNumber: '',
                        success: `Lisättiin '${newPerson.name}'`
                    });

                    setTimeout(() => {
                        this.setState({success: null})
                    }, 5000);
                });
        }
    };

    handleNameChange = (event) => {
        this.setState({
            newName: event.target.value
        });
    };

    handleFilterChange = (event) => {
        this.setState({
            filter: event.target.value
        });
    };

    handleNumberChange = (event) => {
        this.setState({
            newNumber: event.target.value
        });
    };

    handlePersonsChange = (changedPerson) => {
        this.setState({
            persons: this.state.persons.filter(person => person.id !== changedPerson.id),
            success: `Poistettiin '${changedPerson.name}'`
        });

        setTimeout(() => {
            this.setState({success: null})
        }, 5000);
    };

    render() {

        return (
            <div>
                <h1>Puhelinluettelo</h1>

                <Notification message={this.state.success}/>

                <Persons
                    filter={this.state.filter}
                    handleFilterChange={this.handleFilterChange}
                    persons={this.state.persons}
                    handlePersonsChange={this.handlePersonsChange}
                />

                <h2>Lisää uusi</h2>
                <form onSubmit={this.addNewPerson}>
                    <Input title="Nimi: " value={this.state.newName} onChange={this.handleNameChange}/>
                    <Input title="Numero: " value={this.state.newNumber} onChange={this.handleNumberChange}/>

                    <div>
                        <button type="submit">Lisää</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default App