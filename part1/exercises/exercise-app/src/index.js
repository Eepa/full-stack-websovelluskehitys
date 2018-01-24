import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

    const kurssi = 'Half Stack -sovelluskehitys';
    const osa1 = 'Reactin perusteet';
    const tehtavia1 = 10;
    const osa2 = 'Tiedonvälitys propseilla';
    const tehtavia2 = 7;
    const osa3 = 'Komponenttien tila';
    const tehtavia3 = 14;

    const Otsikko = (props) => {
        return (
            <h1>{props.course}</h1>
        )
    };

    const Osa = (props) => {
        return (
            <p>{props.coursePart} {props.exerciseAmount}</p>
        )
    };

    const Sisalto = (props) => {
        return (
            <div>
                <Osa coursePart={props.coursePart1} exerciseAmount={props.exerciseAmount1} />
                <Osa coursePart={props.coursePart2} exerciseAmount={props.exerciseAmount2} />
                <Osa coursePart={props.coursePart3} exerciseAmount={props.exerciseAmount3} />
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
            <Sisalto coursePart1={osa1} exerciseAmount1={tehtavia1} coursePart2={osa2} exerciseAmount2={tehtavia2} coursePart3={osa3} exerciseAmount3={tehtavia3}/>
            <Yhteensa totalExerciseAmount={tehtavia1+tehtavia2+tehtavia3}/>
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);