import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };

        setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            });
        }, 1000)
    }

    render() {
        console.log("Rendering!", this.state.counter);
        return (

            <div>{this.state.counter}</div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
