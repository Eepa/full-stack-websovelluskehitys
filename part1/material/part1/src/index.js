import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: 0,
            right: 0,
            all: []
        }
    }

    clickLeft = () => {
        this.setState({
            left: this.state.left + 1,
            all: this.state.all.concat('v')
        })
    };

    clickRight = () => {
      this.setState({
          right: this.state.right + 1,
          all: this.state.all.concat('o')
      })
    };

    render() {
        const history = () => {
            if(this.state.all.length === 0) {
                return (
                    <div>
                        <em>You can use the app by pressing the buttons</em>
                    </div>
                )
            }

            return (
                <div>
                    Click history: {this.state.all.join(' ')}
                </div>
            )
        };
        return (
            <div>
                <div>
                    {this.state.left}
                    <button onClick={this.clickLeft}>Left</button>
                    <button onClick={this.clickRight}>Right</button>
                    {this.state.right}
                    <div>{history()}</div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
