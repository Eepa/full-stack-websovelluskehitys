import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14
            }
        ]
    };

    const Otsikko = (props) => {
        return (
            <h1>{props.courseName}</h1>
        )
    };

    const Osa = (props) => {
        return (
            <p>{props.coursePart.nimi} {props.coursePart.tehtavia}</p>
        )
    };

    const Sisalto = (props) => {
        return (
            <div>
                <Osa coursePart={props.courseParts[0]} />
                <Osa coursePart={props.courseParts[1]} />
                <Osa coursePart={props.courseParts[2]} />
            </div>
        )
    };

    const Yhteensa = (props) => {
        return (
            <p>yhteensä {props.courseParts[0].tehtavia + props.courseParts[1].tehtavia + props.courseParts[2].tehtavia} tehtävää</p>
        )
    };

    return (
        <div>
            <Otsikko courseName={kurssi.nimi}/>
            <Sisalto courseParts={kurssi.osat}/>
            <Yhteensa courseParts={kurssi.osat}/>
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);