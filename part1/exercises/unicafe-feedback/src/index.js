import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>;
const Feedback = ({text, feedbackCount}) => <div>{text} {feedbackCount}</div>;
const Heading = ({text}) => <h2>{text}</h2>;

const Statistic = ({calculateStatistic, statisticName}) => {
    return (
        <div>{statisticName} {calculateStatistic()}</div>
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

    return (
        <div>
            <Statistic calculateStatistic={average} statisticName="Keskiarvo"/>
            <Statistic calculateStatistic={positivePercent} statisticName="Positiivisia"/>
        </div>
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

    addGoodFeedback = () => {
        this.setState({
            good: this.state.good + 1
        })
    };

    addNeutralFeedback = () => {
        this.setState({
            neutral: this.state.neutral + 1
        })
    };

    addBadFeedback = () => {
        this.setState({
            bad: this.state.bad + 1
        })
    };

    render() {

        return (
            <div>
                <Heading text="Anna palautetta"/>
                <div>
                    <Button handleClick={this.addGoodFeedback} text="Hyvä"/>
                    <Button handleClick={this.addNeutralFeedback} text="Neutraali"/>
                    <Button handleClick={this.addBadFeedback} text="Huono"/>
                </div>

                <Heading text="Statistiikka"/>
                <Feedback text="Hyvä" feedbackCount={this.state.good}/>
                <Feedback text="Neutraali" feedbackCount={this.state.neutral}/>
                <Feedback text="Huono" feedbackCount={this.state.bad}/>
                <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
