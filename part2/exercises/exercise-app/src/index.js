import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course'

const App = () => {

    const courses = [
        {
            id: 1,
            name: 'Half Stack -sovelluskehitys',
            parts: [
                {
                    id: 1,
                    name: 'Reactin perusteet',
                    tasks: 10,
                },
                {
                    id: 2,
                    name: 'Tiedonvälitys propseilla',
                    tasks: 7
                },
                {
                    id: 3,
                    name: 'Komponenttien tila',
                    tasks: 14
                },
                {
                    id: 4,
                    name: 'Testiosa',
                    tasks: 10
                },
                {
                    id: 5,
                    name: 'Testiosa 2',
                    tasks: 0
                }
            ]
        },
        {
            id: 2,
            name: 'Node.js',
            parts: [
                {
                    id: 4,
                    name: 'Testiosa',
                    tasks: 10
                },
                {
                    id: 5,
                    name: 'Testiosa 2',
                    tasks: 0
                }
            ]
        }
    ];

    return (
        <div>
            {courses.map(course => <Course key={course.id} course={course}/>)}
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);