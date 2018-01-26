import React from 'react';
import ReactDOM from 'react-dom';

const Display = ({counter}) => <div>{counter}</div>;

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
      {text}
  </button>
);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };
        // this.addOne = this.addOne.bind(this);
        // this.clear = this.clear.bind(this);
    }

    setValue = (newValue) => () => { this.setState({counter: newValue})};


    addOne = () =>  {
        console.log(this);
        this.setState(
            {counter: this.state.counter + 1}
        )
    };

    clear = () => {
        this.setState(
            {counter: 0}
        )
    };

    render() {
        return (
            <div>
                <Display counter={this.state.counter}/>
                <div>

                    <Button
                        handleClick={this.setValue(this.state.counter + 1)}
                        text={"Plus"}
                    />

                    <Button
                        handleClick={this.setValue(this.state.counter - 1)}
                        text={"Minus"}
                    />

                    <Button
                        handleClick={this.setValue(0)}
                        text={"Zero"}
                    />

                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
