import React from 'react';


const Person = ({person}) => {
    return(
        <div>{person.name} {person.number}</div>
    )
};

const Input = ({title, value, onChange}) => {
    return (
        <div>
            {title}
            <input value={value}
                   onChange={onChange}/>
        </div>
    )
};

const Persons = ({filter, handleFilterChange, persons}) => {

    const filterPerson = (person) => {
        const filterValue = filter.toLowerCase();
        const lowerCaseName = person.name.toLowerCase();
        const lowerCaseNumber = person.number.toLowerCase();

        const nameContains = lowerCaseName.indexOf(filterValue) !== -1;
        const numberContains = lowerCaseNumber.indexOf(filterValue) !== -1;
        return nameContains || numberContains;
    };

    const filteredPersons = persons.filter(filterPerson);

    return (
        <div>
            <h2>Numerot</h2>

            <Input title="Rajaa näytettäviä: " value={filter} onChange={handleFilterChange}/>

            {filteredPersons.map(person => <Person key={person.name} person={person} />)}
        </div>
    )
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                { name: 'Arto Hellas', number: '040-123456' },
                { name: 'Martti Tienari', number: '050-369369' },
                { name: 'Arto Järvinen', number: '040-789987' },
                { name: 'Lea Kutvonen', number: '040-258258' }
            ],
            newName: '',
            newNumber: '',
            filter: ''
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

    render() {

        return (
            <div>
                <h1>Puhelinluettelo</h1>

                <Persons filter={this.state.filter} handleFilterChange={this.handleFilterChange} persons={this.state.persons}/>

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