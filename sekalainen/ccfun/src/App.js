import React from 'react';
import Persons from './components/Persons'
import Input from './components/Input'
import Notification from './components/Notification'
import personService from './services/persons'
import studentService from './services/students'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            output: '',
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

    getAllStudents = () => {
        console.log("Getting all students");
        studentService
            .getAllStudents()
            .then(students => {
                this.setState({
                    output: JSON.stringify(students)
                });
            });
    };

    changeGetOneId = () => {
        console.log("Change get one id");
    };

    getOneStudent = () => {
        console.log("Getting one student");
    };

    changeAddId = () => {
        console.log("Change add id");
    };

    addStudent = () => {
        console.log("Add student");
    };

    changeRemoveId = () => {
        console.log("Change remove id");
    };

    removeStudent = () => {
        console.log("Remove student");
    };

    changeMarkDoneId = () => {
        console.log("Change mark done id");
    };

    changeMarkDoneName = () => {
        console.log("Change mark done name");
    };

    markTaskDone = () => {
        console.log("Mark task done");
    };

    render() {

        return (
            <div className="content">
                    <section>
                        <input value="Get all students" type="button" name="get-all"
                               id="get-all"
                               onClick={this.getAllStudents}/>
                    </section>

                    <section>
                        <input type="text" name="get-one-id" id="get-one-id"
                               placeholder="ID"
                               onChange={this.changeGetOneId}/>
                        <input value="Get student by ID" type="button" name="get-one-submit"
                               id="get-one-submit"
                               onClick={this.getOneStudent}/>
                    </section>

                    <section>
                        <input type="text" name="add-id" id="add-id"
                               placeholder="ID"
                               onChange={this.changeAddId}/>
                        <input value="Add new student" type="button" name="add-submit"
                               id="add-submit"
                               onClick={this.addStudent}/>
                    </section>

                    <section>
                        <input type="text" name="remove-id" id="remove-id"
                               placeholder="ID"
                               onChange={this.changeRemoveId}/>
                        <input value="Remove student" type="button" name="remove-submit"
                               id="remove-submit"
                               onClick={this.removeStudent}/>
                    </section>

                    <section>
                        <input type="text" name="mark-done-id" id="mark-done-id"
                               placeholder="ID"
                               onChange={this.changeMarkDoneId}/>
                        <input type="text" name="mark-done-name" id="mark-done-name"
                               placeholder="Task"
                               onChange={this.changeMarkDoneName}/>
                        <input value="Mark task done" type="button" name="mark-done-submit"
                               id="mark-done-submit"
                               onClick={this.markTaskDone}/>
                    </section>

                    <section id="output">
                        {this.state.output}
                    </section>

            </div>
        )
    }
}

export default App