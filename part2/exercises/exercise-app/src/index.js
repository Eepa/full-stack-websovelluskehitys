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

/*const Yhteensa = (props) => {
    return (
        <p>yhteensä {props.courseParts[0].tehtavia + props.courseParts[1].tehtavia + props.courseParts[2].tehtavia} tehtävää</p>
    )
};*/

const Kurssi = ({course}) => {
    return (
        <div>
            <Otsikko courseName={course.nimi}/>
            <Sisalto courseParts={course.osat}/>
            {/*<Yhteensa courseParts={kurssi.osat}/>*/}
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
                tehtavia: 2
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