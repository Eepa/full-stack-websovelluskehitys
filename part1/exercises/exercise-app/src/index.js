import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

    const kurssi = 'Half Stack -sovelluskehitys';
    const osa1 = {
        nimi: 'Reactin perusteet',
        tehtavia: 10
    };

    const osa2 = {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
    };
    const osa3 = {
        nimi: 'Komponenttien tila',
        tehtavia: 14
    };

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
                <Osa coursePart={props.coursePart1} />
                <Osa coursePart={props.coursePart2} />
                <Osa coursePart={props.coursePart3} />
            </div>
        )
    };

    const Yhteensa = (props) => {
        return (
            <p>yhteensä {props.totalExerciseAmount} tehtävää</p>
        )
    };

    return (
        <div>
            <Otsikko course={kurssi}/>
            <Sisalto coursePart1={osa1} coursePart2={osa2} coursePart3={osa3}/>
            <Yhteensa totalExerciseAmount={osa1.tehtavia+osa2.tehtavia+osa3.tehtavia}/>
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);