import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {



    render() {
        const {name, age} = this.props;
        const bornYear = () => 1900 + new Date().getYear() - age;


        return (
            <div>
                <p>
                    Hello {name}, you are {age} years old <br />
                    So you were propably born {bornYear()}
                </p>
            </div>
        )
    }
}

const Footer = () => {
    return (
        <div>Greeting app created by <a href="https://github.com/mluukkai">mluukkai</a></div>
    )
};

const App = () => {
    const name = 'Pekka';
    const age = 10;
    return (
        <div>
            <h1>Greetings</h1>
            <Hello name="Arto" age={26 + 10}/>
            <Hello name={name} age={age}/>
            <Footer/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));