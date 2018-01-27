import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>;
const Heading = ({text}) => <h2>{text}</h2>;

const Statistic = ({statisticName, statisticNumber}) => {
    return (
        <div>{statisticName} {statisticNumber}</div>
    )
};

const Statistics = ({good, neutral, bad}) => {

    const average = () => {
        let average = 0;
        if(good !== 0 || bad !== 0) {
            let totalFeedbacks = good + neutral + bad;
            let sum = good - bad;
            average = sum / totalFeedbacks;
        }
        return average.toFixed(1);
    };

    const positivePercent = () => {
        let positivePercent = 0;
        if(good !== 0) {
            let totalFeedbacks = good + neutral + bad;
            positivePercent = good / totalFeedbacks;
        }
        return (positivePercent * 100).toFixed(1) + "%";
    };


    if(good !== 0 || neutral !== 0 || bad !== 0) {
        return (
            <div>
                <Statistic statisticName="Hyvä" statisticNumber={good}/>
                <Statistic statisticName="Neutraali" statisticNumber={neutral}/>
                <Statistic statisticName="Huono" statisticNumber={bad}/>
                <Statistic statisticName="Keskiarvo" statisticNumber={average()}/>
                <Statistic statisticName="Positiivisia" statisticNumber={positivePercent()}/>
            </div>
        )
    }

    return (
        <div>Ei yhtään palautetta annettu</div>
    )
};


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
    }

    addFeedback = (feedback) => {
        return () => {
            this.setState({
                [feedback]: this.state[feedback] + 1
            })
        }
    };

    render() {

        return (
            <div>
                <Heading text="Anna palautetta"/>
                <div>
                    <Button handleClick={this.addFeedback('good')} text="Hyvä"/>
                    <Button handleClick={this.addFeedback('neutral')} text="Neutraali"/>
                    <Button handleClick={this.addFeedback('bad')} text="Huono"/>
                </div>

                <Heading text="Statistiikka"/>
                <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
