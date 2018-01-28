import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = ({courseName}) => {
    return (
        <h1>{courseName}</h1>
    )
};

const Osa = ({coursePart}) => {
    return (
        <p>{coursePart.nimi} {coursePart.tehtavia}</p>
    )
};

const Sisalto = ({courseParts}) => {
    return (
        <div>
            {courseParts.map(coursePart => <Osa key={coursePart.id} coursePart={coursePart}/>)}
        </div>
    )
};

const Yhteensa = ({courseParts}) => {

    let taskSum = 0;
    for(let i = 0; i < courseParts.length; i++) {
        taskSum += courseParts[i].tehtavia;
    }

    return (
        <p>yhteensä {taskSum} tehtävää</p>
    )
};

const Kurssi = ({course}) => {
    return (
        <div>
            <Otsikko courseName={course.nimi}/>
            <Sisalto courseParts={course.osat}/>
            <Yhteensa courseParts={course.osat}/>
        </div>
    )
};

const App = () => {

    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                id: 1,
                nimi: 'Reactin perusteet',
                tehtavia: 10,
            },
            {
                id: 2,
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7
            },
            {
                id: 3,
                nimi: 'Komponenttien tila',
                tehtavia: 14
            },
            {
                id: 4,
                nimi: 'Testiosa',
                tehtavia: 10
            },
            {
                id: 5,
                nimi: 'Testiosa 2',
                tehtavia: 0
            }
        ]
    };

    return (
        <Kurssi course={kurssi}/>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);