import React from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({anecdote, votes}) => {
    return (
        <div>
            <div>{anecdote}</div>
            <div>has {votes} votes</div>
        </div>
    )
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
            votes: new Array(props.anecdotes.length).fill(0)
        }
    }

    getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    };

    getNextAnecdote = () => {
        const maxNumber = this.props.anecdotes.length;
        const nextSelected = this.getRandomInt(maxNumber);
        this.setState({
            selected: nextSelected
        })
    };

    getIndexOfMaxVotes = (votes) => {
        const maxValue = Math.max.apply(Math, votes);
        return votes.indexOf(maxValue);
    };

    voteAnecdote = () => {
        const copyOfVotes = [...this.state.votes];
        copyOfVotes[this.state.selected] += 1;
        this.setState({
            votes: copyOfVotes
        })
    };

    render() {
        const indexOfMostVotedAnecdote = this.getIndexOfMaxVotes(this.state.votes);
        return (
            <div>
                <Anecdote anecdote={this.props.anecdotes[this.state.selected]} votes={this.state.votes[this.state.selected]}/>
                <div>
                    <button onClick={this.voteAnecdote}>Vote</button>
                    <button onClick={this.getNextAnecdote}>Next anecdote</button>
                </div>
                
                <h2>Anecdote with most votes:</h2>

                <Anecdote anecdote={this.props.anecdotes[indexOfMostVotedAnecdote]} votes={this.state.votes[indexOfMostVotedAnecdote]}/>
            </div>
        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
);