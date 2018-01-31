import React from 'react'
import Input from './Input'

const Person = ({person}) => {
    return(
        <div>{person.name} {person.number}</div>
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

export default Persons;