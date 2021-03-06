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

    addNewPerson = () => {
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
    };

    updatePerson = () => {

        if(window.confirm(`${this.state.newName} on jo luettelossa, korvataanko vanha numero uudella?`)) {
            const person = this.state.persons.find(person => person.name === this.state.newName);
            const updatedPerson = {...person, number: this.state.newNumber};

            personService
                .update(updatedPerson)
                .then(updatedPerson => {

                    const persons = this.state.persons.filter(person => person.id !== updatedPerson.id);

                    this.setState({
                        persons: persons.concat(updatedPerson),
                        newName: '',
                        newNumber: '',
                        success: `Päivitettiin '${updatedPerson.name}'`
                    });

                    setTimeout(() => {
                        this.setState({success: null})
                    }, 5000);
                })
                .catch(error => {
                    alert("Henkilö, jonka tietoja yritit muuttaa, on jo poistettu");
                    personService
                        .getAll()
                        .then(persons => {
                            this.setState({
                                persons
                            });

                        });
                });
        }

    };

    addPerson = (event) => {
        event.preventDefault();

        const personsContainsPersonWithName = this.state.persons.some(this.nameEquals);

        if(this.state.newName !== '' && this.state.newNumber !== '') {

            if(!personsContainsPersonWithName) {
                this.addNewPerson();
            } else {
                this.updatePerson();
            }

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

                <h2>Lisää uusi / muuta olemassa olevaa numeroa</h2>
                <form onSubmit={this.addPerson}>
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