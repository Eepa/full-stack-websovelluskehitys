import React from 'react';


const Person = ({person}) => {
    return(
        <div>{person.name}</div>
    )
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                { name: 'Arto Hellas' }
            ],
            newName: ''
        }
    }

    nameEquals = (person) => {
      return person.name === this.state.newName;
    };

    addNewPerson = (event) => {
        event.preventDefault();

        const personsContainsPersonWithName = this.state.persons.some(this.nameEquals);

        if(this.state.newName !== '' && !personsContainsPersonWithName) {
            const newPerson = {
                name: this.state.newName
            };
            const persons = this.state.persons.concat(newPerson);

            this.setState({
                persons,
                newName: ''
            })
        }
    };

    handleNameChange = (event) => {
        this.setState({
            newName: event.target.value
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