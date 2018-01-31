import React from 'react'
import Input from './Input'
import personService from '../services/persons'

const Person = ({person, deletePerson}) => {
    return(
        <div>{person.name} {person.number} <button onClick={deletePerson}>Poista</button></div>
    )
};


const Persons = ({filter, handleFilterChange, persons, handlePersonsChange}) => {

    const filterPerson = (person) => {
        const filterValue = filter.toLowerCase();
        const lowerCaseName = person.name.toLowerCase();
        const lowerCaseNumber = person.number.toLowerCase();

        const nameContains = lowerCaseName.indexOf(filterValue) !== -1;
        const numberContains = lowerCaseNumber.indexOf(filterValue) !== -1;
        return nameContains || numberContains;
    };

    const filteredPersons = persons.filter(filterPerson);

    const deletePerson = (person) => {
        return () => {
            if(window.confirm(`Poistetaanko ${person.name}`)) {
                personService
                    .deletePerson(person.id)
                    .then(response => {
                        handlePersonsChange(person.id);
                    });
            }
        }
    };

    return (
        <div>
            <h2>Numerot</h2>

            <Input title="Rajaa näytettäviä: " value={filter} onChange={handleFilterChange}/>

            {filteredPersons.map(person => <Person
                key={person.name}
                person={person}
                deletePerson={deletePerson(person)}
            />)}
        </div>
    )
};

export default Persons;