import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

    const kurssi = 'Half Stack -sovelluskehitys';
    const osat = [
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
    ];

    const Otsikko = (props) => {
        return (
            <h1>{props.course}</h1>
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
            <Otsikko course={kurssi}/>
            <Sisalto courseParts={osat}/>
            <Yhteensa courseParts={osat}/>
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);